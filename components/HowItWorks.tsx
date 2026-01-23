import React from 'react';

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 text-center mb-12">
          How BuyAfrika Works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Steps List */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-gray-900 font-medium">•</span>
              <p className="text-gray-800 text-lg">Join the waitlist</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-gray-900 font-medium">•</span>
              <p className="text-gray-800 text-lg">Get early access at launch</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-gray-900 font-medium">•</span>
              <p className="text-gray-800 text-lg">Discover shoes/set up your shoes</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-gray-900 font-medium">•</span>
              <p className="text-gray-800 text-lg">Buy, sell and share shoe stories</p>
            </div>
          </div>

          {/* Right Column - Image with CTA */}
          <div className="relative">
            {/* Image Container with rounded background */}
            <div className="relative bg-gradient-to-br from-purple-200 via-blue-200 to-purple-300 rounded-[3rem] p-8 overflow-hidden">
              {/* Placeholder for shoe image */}
              <div className="relative aspect-[4/3] bg-white/20 rounded-2xl flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <img src="/images/image 8.svg"></img>
                  
                </div>
              </div>

              {/* CTA Button positioned at bottom */}
              <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-semibold px-8 py-3.5 rounded-full hover:shadow-lg transition-shadow">
                  Join the waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;