import React from 'react';

const WhoAreYouSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 text-center mb-12">
          Who are you?
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Shoe Lover */}
          <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[280px] hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-20 h-20 mb-6 rounded-full bg-white/50 flex items-center justify-center overflow-hidden">
              {/* Placeholder for your image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">
            <img src="/images/Ellipse 1.svg"></img>
              </div>
            </div>
            <p className="text-gray-800 font-medium">
              I am a shoe lover
            </p>
            <div className="mt-2 text-gray-700">😊</div>
          </div>

          {/* Card 2 - Artisan */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[280px] hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-20 h-20 mb-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
              {/* Placeholder for your image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">
                <img src="/images/Ellipse 2.svg"></img>
              </div>
            </div>
            <p className="text-gray-800 font-medium">
              I am an artisan
            </p>
          </div>

          {/* Card 3 - Fashion Influencer */}
          <div className="bg-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[280px] hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-20 h-20 mb-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
              {/* Placeholder for your image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">
                <img src="/images/Ellipse 3.svg"></img>
              </div>
            </div>
            <p className="text-gray-800 font-medium">
              I am a fashion influencer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreYouSection;