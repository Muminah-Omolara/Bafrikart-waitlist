"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  {
    id: "lover",
    title: "A Shoe Lover 😊",
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
    title: "A Fashion Influencer",
    img: "/images/Ellipse 3.svg",
    description:
      "You care about style, culture, and storytelling, and you're interested in spotlighting African footwear brands through content and collaborations.",
  },
];

export default function WhoAreYou() {
  const [flippedId, setFlippedId] = useState(null);
  const [canHover, setCanHover] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    //enable hover on mouse/trackpad devices
    const mqHoverFine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const mqCoarse = window.matchMedia("(pointer: coarse)");

    const update = () => setCanHover(mqHoverFine.matches && !mqCoarse.matches);

    update();
    mqHoverFine.addEventListener?.("change", update);
    mqCoarse.addEventListener?.("change", update);

    const handlePointer = (e: any) => {
      if (e.pointerType === "touch") setIsTouch(true);
      if (e.pointerType === "mouse" || e.pointerType === "pen")
        setIsTouch(false);
    };
    window.addEventListener("pointerdown", handlePointer, { passive: true });

    return () => {
      mqHoverFine.removeEventListener?.("change", update);
      mqCoarse.removeEventListener?.("change", update);
      window.removeEventListener("pointerdown", handlePointer);
    };
  }, []);

  const handleCardClick = (id: any) => {
    //Tap/click flips only on non-hover devices (mobile/tablet)
    if (!canHover || isTouch) {
      setFlippedId((prev: any) => (prev === id ? null : id));
    }
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 text-center mb-12">
          <span className="text-yellow-500">Bafrikart</span> is for you if you
          are…
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => {
            const isFlipped = flippedId === role.id;
            const allowHover = canHover && !isTouch;

            return (
              <motion.div
                key={role.id}
                className="relative h-[320px] touch-manipulation cursor-pointer"
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                // onTap reliable on touch + mouse, guarded by canHover
                onTap={() => handleCardClick(role.id)}
                //hover flips only on devices that support hover
                whileHover={allowHover ? { rotateY: 180 } : undefined}
                //state controls flip
                animate={
                  !allowHover ? { rotateY: isFlipped ? 180 : 0 } : undefined
                }
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 rounded-3xl p-8 bg-gray-100 flex flex-col justify-center shadow-sm border border-gray-200"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-white overflow-hidden shrink-0 border border-gray-100">
                      <img
                        src={role.img}
                        alt={role.title}
                        className="w-full h-full object-cover pointer-events-none select-none"
                        draggable="false"
                      />
                    </div>
                    <p className="text-lg font-medium text-gray-900">
                      {role.title}
                    </p>
                  </div>

                  <p className="text-sm text-gray-500 font-medium">
                    {canHover ? "Learn more ↻" : "Tap to learn more"}
                  </p>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 rounded-3xl p-8 bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center shadow-lg"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-gray-900 font-medium text-base leading-relaxed text-center">
                    {role.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
