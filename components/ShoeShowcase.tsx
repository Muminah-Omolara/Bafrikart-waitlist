"use client";
import React from "react";

const shoes = [
  {
    id: 1,
    img: "/images/shoe1.png",
    className: "w-60 sm:w-72 -rotate-3",
  },
  {
    id: 2,
    img: "/images/shoe2.png",
    className: "w-52 sm:w-56 rotate-2",
  },
  {
    id: 3,
    img: "/images/shoe3.png",
    className: "w-52 sm:w-56 -rotate-2",
  },
  {
    id: 4,
    img: "/images/shoe4.png",
    className: "w-52 sm:w-56 rotate-3",
  },
  {
    id: 5,
    img: "/images/shoe5.png",
    className: "w-52 sm:w-56 -rotate-2",
  },
];

export default function ShoeShowcase() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mt-12 sm:mt-16 flex gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible pb-4 items-center scrollbar-hide touch-auto">
          {shoes.map((shoe) => (
            <div
              key={shoe.id}
              className={`
                relative flex-shrink-0 
                h-64 sm:h-72 
                rounded-2xl overflow-hidden bg-gray-200 
                transform hover:rotate-0 transition-transform duration-300
                ${shoe.className}
              `}
            >
              {/* images wrapper*/}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <img
                  src={shoe.img}
                  alt={`Shoe ${shoe.id}`}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable="false"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
