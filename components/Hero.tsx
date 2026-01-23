import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Text */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            African Shoes. One Marketplace. Coming Soon.
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-8">
            We're building the home of African footwear. Join early and be part of the launch.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-medium px-8 py-3 rounded-full hover:shadow-lg transition-shadow">
            Join the waitlist
          </button>
        </div>

        {/* Image Row */}
        <div className="mt-12 sm:mt-16 flex gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible pb-4 items-center">
          
          <div className="relative flex-shrink-0 w-60 sm:w-72 h-64 sm:h-72 rounded-2xl overflow-hidden bg-gray-200 transform -rotate-3 hover:rotate-0 transition-transform">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <img
                src="/images/Rectangle 8.svg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex-shrink-0 w-52 sm:w-56 h-64 sm:h-72 rounded-2xl overflow-hidden bg-gray-200 transform rotate-2 hover:rotate-0 transition-transform">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <img
                src="/images/Rectangle 7.svg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex-shrink-0 w-52 sm:w-56 h-64 sm:h-72 rounded-2xl overflow-hidden bg-gray-200 transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <img
                src="/images/Rectangle 4.svg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex-shrink-0 w-52 sm:w-56 h-64 sm:h-72 rounded-2xl overflow-hidden bg-gray-200 transform rotate-3 hover:rotate-0 transition-transform">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <img
                src="/images/Rectangle 5.svg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex-shrink-0 w-52 sm:w-56 h-64 sm:h-72 rounded-2xl overflow-hidden bg-gray-200 transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <img
                src="/images/Rectangle 6.svg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
