"use client";
import React, {useState} from 'react'
import { joinWaitlist } from "@/lib/api";

const WaitlistForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

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

      setMessage("✅ You've joined the waitlist!");
      e.currentTarget.reset();
    } catch (err) {
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div>{/* Right Column - Form */}
        <div className="bg-gray-200 rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Join for Early Access
            </h3>

         <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label htmlFor="fullname" className="block text-gray-800 font-medium mb-2">
                  Full name<span className="text-red-500">*</span>
                  <span className="text-gray-500 text-sm font-normal"> (Required)</span>
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
                <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                  Email address<span className="text-red-500">*</span>
                  <span className="text-gray-500 text-sm font-normal"> (Required)</span>
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
                <label htmlFor="location" className="block text-gray-800 font-medium mb-2">
                  Location<span className="text-red-500">*</span>
                  <span className="text-gray-500 text-sm font-normal"> (Required)</span>
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

              {/* User Type */}
              <div>
                <label htmlFor="usertype" className="block text-gray-800 font-medium mb-2">
                  User type<span className="text-red-500">*</span>
                  <span className="text-gray-500 text-sm font-normal"> (Required)</span>
                </label>
                <input
                name="userType"
                  type="text"
                  id="userType"
                  placeholder="User type*"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>

              {/* Message */}
          {message && (
            <p className="text-sm font-medium text-gray-800">{message}</p>
          )}


              {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-semibold px-8 py-3.5 rounded-full hover:shadow-lg transition-shadow mt-8 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Get Early Access at Launch"}
          </button>
            </form>
          </div>
          </div>
  )
}

export default WaitlistForm






