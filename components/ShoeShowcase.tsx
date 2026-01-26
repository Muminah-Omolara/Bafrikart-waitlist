import React from "react";

const ShoeShowcase = () => {
  return (
    <div>
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
  );
};

export default ShoeShowcase;
