"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";

const steps = [
  "Join the waitlist",
  "Get early access at launch",
  "Discover shoes / set up your seller's profile",
  "Buy, sell, and share shoe stories",
];

const HowItWorksSection = () => {
  const leftCol: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const list: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 text-center mb-12">
          How Bafrikart Works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column*/}
          <div className="pt-18">
            <motion.div
              variants={leftCol}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div
                variants={list}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="space-y-5"
              >
                {steps.map((text, idx) => (
                  <motion.div
                    key={idx}
                    variants={item}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 font-semibold">
                      {idx + 1}
                    </div>
                    <p className="text-gray-900 text-xl md:text-2xl font-semibold leading-snug">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column*/}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-200 via-blue-200 to-purple-300 rounded-[3rem] p-8 overflow-hidden">
              <div className="relative aspect-[4/3] bg-white/20 rounded-2xl flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <img src="/images/image 8.svg" alt="" />
                </div>
              </div>

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
