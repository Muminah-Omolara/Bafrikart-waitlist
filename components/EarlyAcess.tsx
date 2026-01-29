import React from "react";

const EarlyAccessBenefitsSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 text-center mb-12">
          Early Access Benefits
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Benefit 1 - Priority Access */}
          <div
            className="
            bg-gradient-to-br from-yellow-100 to-yellow-200 
            rounded-3xl p-8 flex flex-col items-center text-center min-h-[260px] cursor-pointer
            transform transition-all duration-300 
            hover:-translate-y-2 hover:shadow-xl 
            hover:from-yellow-200 hover:to-yellow-300
          "
          >
            <div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center mb-6 shadow-sm">
              <svg
                className="w-8 h-8 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-gray-900 font-semibold text-lg">
              Priority access at launch
            </h3>
          </div>

          {/* Benefit 2 - Early Vendor Onboarding */}
          <div
            className="
            bg-gradient-to-br from-yellow-100 to-yellow-200 
            rounded-3xl p-8 flex flex-col items-center text-center min-h-[260px] cursor-pointer
            transform transition-all duration-300 
            hover:-translate-y-2 hover:shadow-xl 
            hover:from-yellow-200 hover:to-yellow-300
          "
          >
            <div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center mb-6 shadow-sm">
              <svg
                className="w-8 h-8 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-gray-900 font-semibold text-lg">
              Early vendor onboarding
            </h3>
          </div>

          {/* Benefit 3 - Feature Feedback Access */}
          <div
            className="
            bg-gradient-to-br from-yellow-100 to-yellow-200 
            rounded-3xl p-8 flex flex-col items-center text-center min-h-[260px] cursor-pointer
            transform transition-all duration-300 
            hover:-translate-y-2 hover:shadow-xl 
            hover:from-yellow-200 hover:to-yellow-300
          "
          >
            <div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center mb-6 shadow-sm">
              <svg
                className="w-8 h-8 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-gray-900 font-semibold text-lg">
              Feature feedback access
            </h3>
          </div>

          {/* Benefit 4 - Exclusive Updates */}
          <div
            className="
            bg-gradient-to-br from-yellow-100 to-yellow-200 
            rounded-3xl p-8 flex flex-col items-center text-center min-h-[260px] cursor-pointer
            transform transition-all duration-300 
            hover:-translate-y-2 hover:shadow-xl 
            hover:from-yellow-200 hover:to-yellow-300
          "
          >
            <div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center mb-6 shadow-sm">
              <svg
                className="w-8 h-8 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h3 className="text-gray-900 font-semibold text-lg">
              Exclusive updates
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessBenefitsSection;
