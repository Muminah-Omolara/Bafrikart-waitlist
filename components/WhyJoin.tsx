import React from 'react';

const WhyJoinSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Why Join */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-12">
              Why Join?
            </h2>

            {/* Benefits List */}
            <div className="space-y-8">
              {/* Direct Purchase */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Direct Purchase
                  </h3>
                  <p className="text-gray-600">
                    Buy directly from local African shoemakers
                  </p>
                </div>
              </div>

              {/* Discover Quality */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Discover Quality near You
                  </h3>
                  <p className="text-gray-600">
                    Discover quality bespoke African footwear near you
                  </p>
                </div>
              </div>

              {/* Secure Shoe Wallet */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Secure Shoe Wallet
                  </h3>
                  <p className="text-gray-600">
                    Secure escrow-backed payment
                  </p>
                </div>
              </div>

              {/* Support Craftmanship */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Support Craftmanship
                  </h3>
                  <p className="text-gray-600">
                    Support African craftmanship
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gray-200 rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Join for Early Access
            </h3>

            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullname" className="block text-gray-800 font-medium mb-2">
                  Full name<span className="text-red-500">*</span>
                  <span className="text-gray-500 text-sm font-normal"> (Required)</span>
                </label>
                <input
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
                  type="text"
                  id="usertype"
                  placeholder="User type*"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-semibold px-8 py-3.5 rounded-full hover:shadow-lg transition-shadow mt-8"
              >
                Get Early Access at Launch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;