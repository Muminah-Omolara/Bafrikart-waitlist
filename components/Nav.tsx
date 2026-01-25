import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center w-50 h-12">
            <img src="/images/logo.JPG"></img>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </a>
            <a href="#blogs" className="text-gray-700 hover:text-gray-900 transition-colors">
              Blogs
            </a>
          </div>

          {/* CTA Button */}
          <div>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-medium px-6 py-2.5 rounded-full hover:shadow-lg transition-shadow cursor-pointer">
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;