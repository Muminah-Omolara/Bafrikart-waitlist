"use client";
import React, { useState } from "react";

const roles = [
  {
    id: "lover",
    title: "A Shoe lover 😊",
    img: "/images/Ellipse 1.svg",
    description:
      "You appreciate quality footwear, love discovering new styles, and want early access to unique African-made shoes before everyone else.",
  },
  {
    id: "artisan",
    title: "An Artisan",
    img: "/images/Ellipse 2.svg",
    description:
      "You are a highly skilled craftsperson that creates footwear and want a platform to showcase your craft, reach more customers, and sell your work without losing your identity.",
  },
  {
    id: "influencer",
    title: "Fashion influencers",
    img: "/images/Ellipse 3.svg",
    description:
      "You care about style, culture, and storytelling, and you're interested in spotlighting African footwear brands through content and collaborations.",
  },
];

export default function WhoAreYou() {
  const [active, setActive] = useState("lover");

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 text-center mb-12">
          <span className="text-yellow-500">Bafrikart</span> is for you if you
          are...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => {
            const isActive = active === role.id;

            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setActive(role.id)}
                className={[
                  "rounded-3xl p-8 text-left h-auto min-h-[280px]",
                  "transition-shadow cursor-pointer hover:shadow-lg",
                  "focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2",
                  isActive
                    ? "bg-gradient-to-br from-yellow-200 to-yellow-300 shadow-lg"
                    : "bg-gray-100",
                ].join(" ")}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={[
                      "w-14 h-14 rounded-full overflow-hidden flex items-center justify-center shrink-0", // Added shrink-0 for safety
                      isActive ? "bg-white/60" : "bg-white",
                    ].join(" ")}
                  >
                    <img
                      src={role.img}
                      alt=""
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                  </div>

                  <p className="text-gray-900 font-medium text-lg">
                    {role.title}
                  </p>
                </div>

                {/* Description is revealed when the role is active */}
                <div
                  className={[
                    "mt-5 text-lg text-gray-700 leading-relaxed",
                    "transition-all duration-300 ease-in-out", // Smooth transition for height and opacity
                    isActive
                      ? "opacity-100 max-h-[500px]"
                      : "opacity-0 max-h-0 overflow-hidden",
                  ].join(" ")}
                >
                  {role.description}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
