"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Typewriter text
  const text = "Coming Soon...";

  // Animation settings for the letters
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-white pt-24 lg:pt-24 md:pt-20 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tight leading-tight"
      >
        African Shoes. One Marketplace.
      </motion.h1>

      {/*Typewriter Text*/}
      <motion.h2
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-6xl font-serif font-bold text-yellow-500 mt-4 min-h[60px]"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
        {/* Cursor Effect */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="inline-block w-1 h-10 md:h-14 bg-yellow-500 ml-1 align-middle"
        />
      </motion.h2>

      {/* paragraph text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-gray-900 mt-4 max-w-2xl font-semi-bold leading-relaxed"
      >
        We're building the home of African footwear.{" "}
        <br className="hidden md:block" />
        Join early and be part of the launch.
      </motion.p>

      {/* cta button  */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="mt-10"
      >
        <a
          href="#waitlist"
          className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 font-medium px-6 py-2.5 rounded-full hover:shadow-lg transition-shadow cursor-pointer"
        >
          Join the waitlist
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
