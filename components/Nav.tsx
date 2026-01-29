"use client";
import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri"; // Import Close Icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // close mobile menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/*  Logo */}
          <div className="flex items-center w-36 h-6 z-50 relative">
            <a href="/">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="object-contain cursor-pointer"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
            <a
              href="#blogs"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Blogs
            </a>
          </div>

          {/* 3. Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="#waitlist"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-medium px-6 py-2.5 rounded-full hover:shadow-lg transition-shadow cursor-pointer"
            >
              Join the waitlist
            </a>
          </div>

          {/* 4. Mobile Hamburger Button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none p-2"
            >
              {isOpen ? <RiCloseFill size={28} /> : <RiMenu3Fill size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-white shadow-xl flex flex-col items-center pt-24 pb-10 space-y-6 animate-in slide-in-from-top-5 duration-200">
          {/* Mobile Links */}
          <a
            onClick={handleLinkClick}
            href="#home"
            className="text-xl text-gray-800 font-medium hover:text-yellow-600"
          >
            Home
          </a>
          <a
            onClick={handleLinkClick}
            href="#about"
            className="text-xl text-gray-800 font-medium hover:text-yellow-600"
          >
            About
          </a>
          <a
            onClick={handleLinkClick}
            href="#contact"
            className="text-xl text-gray-800 font-medium hover:text-yellow-600"
          >
            Contact
          </a>
          <a
            onClick={handleLinkClick}
            href="#blogs"
            className="text-xl text-gray-800 font-medium hover:text-yellow-600"
          >
            Blogs
          </a>

          {/* Mobile CTA Button */}
          <a
            href="#waitlist"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-semibold px-8 py-3 rounded-full shadow-md"
          >
            Join the waitlist
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
