"use client";
import React, { useState, useEffect } from "react";
import { joinWaitlist } from "@/lib/api";
import Confetti from "react-confetti";

const WaitlistForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<
    "error" | "warning" | "success"
  >("error");
  const [isSuccess, setIsSuccess] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const payload = {
        fullName: formData.get("fullName") as string,
        email: formData.get("email") as string,
        location: formData.get("location") as string,
        userType: formData.get("userType") as string,
      };

      await joinWaitlist(payload);

      // if successful, trigger confetti and hide form
      setIsSuccess(true);
    } catch (err: any) {
      console.error("Signup Error:", err);

      // email already exists
      if (err.response && err.response.status === 409) {
        setMessageType("warning");
        setMessage("⚠️ This user already exists.");
      }
      // OTHER ERROR(S)
      else {
        setMessageType("error");
        setMessage("❌ Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  // successful sign up(confetti)
  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 lg:p-12 text-center shadow-xl border border-yellow-100 relative overflow-hidden">
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={600}
        />

        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 bg-yellow-100 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-5xl">🚀</span>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          You're on the list!
        </h3>

        <p className="text-gray-600 text-lg mb-8">
          Thanks for joining Bafrikart. We've sent a special welcome email to
          your inbox.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="text-yellow-600 font-semibold hover:text-yellow-700 underline"
        >
          Back to home
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        className="bg-gray-200 rounded-3xl p-8 lg:p-10 transition-all"
        id="waitlist"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Join for Early Access
        </h3>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullname"
              className="block text-gray-800 font-medium mb-2"
            >
              Full name<span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              type="text"
              id="fullname"
              placeholder="Full name*"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-medium mb-2"
            >
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Email address*"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-gray-800 font-medium mb-2"
            >
              Location<span className="text-red-500">*</span>
            </label>
            <input
              name="location"
              type="text"
              id="location"
              placeholder="Location*"
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* User Type Dropdown */}
          <div>
            <label
              htmlFor="userType"
              className="block text-gray-800 font-medium mb-2"
            >
              User type<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="userType"
                id="userType"
                required
                defaultValue=""
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 appearance-none text-gray-700 cursor-pointer"
              >
                <option value="" disabled>
                  Who are you?
                </option>
                <option value="shoe_lover">Shoe Lover</option>
                <option value="fashion_influencer">Fashion Influencer</option>
                <option value="artisan">Artisan</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dynamic Message Box */}
          {message && (
            <div
              className={`px-4 py-3 rounded-lg text-sm border ${
                messageType === "warning"
                  ? "bg-yellow-50 border-yellow-200 text-yellow-700"
                  : "bg-red-50 border-red-200 text-red-600"
              }`}
            >
              {message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-semibold px-8 py-3.5 rounded-full hover:shadow-lg transition-shadow mt-8 disabled:opacity-60 transform hover:-translate-y-0.5"
          >
            {loading ? "Processing..." : "Get Early Access at Launch"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WaitlistForm;
