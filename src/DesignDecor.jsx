import React from "react";
import img from "./deccor.jpg";

const DesignDecor = () => {
  return (
    <div className="w-full flex justify-center py-10 sm:py-14 md:py-20 bg-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center px-5 sm:px-8 md:px-10">

        {/* IMAGE + GREEN BACKGROUND FIXED */}
        <div className="relative flex justify-center md:justify-start w-full">

          {/* PERFECT GREEN BOX */}
          <div
            className="
              absolute
              bg-[#95bb7c]
              rounded-md

              /* SAME SHAPE ACROSS ALL SCREENS */
              w-[78%] h-[78%]

              /* PERFECT OVERLAP POSITION */
              -bottom-6 -left-6

              sm:-bottom-7 sm:-left-7

              md:w-[80%] md:h-[80%]
              md:-bottom-8 md:-left-8

              lg:w-[75%] lg:h-[75%]
              lg:-bottom-10 lg:-left-10
            "
          ></div>

          {/* IMAGE */}
          <img
            src={img}
            alt="Design"
            className="
              relative z-10
              w-[85%] sm:w-[70%] md:w-full
              max-w-sm md:max-w-full
              h-auto object-cover
              shadow-xl rounded-md
            "
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="text-center md:text-left px-2 sm:px-0">
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-bold text-[#7a5800]
              leading-snug sm:leading-tight
              mb-4
            "
          >
            Best Design and <br /> Decorations
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            Sed luctus orci sit amet tempor luctus. Nullam non felis massa.
            Phasellus vitae fringilla sapien, quis dictum mi.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Duis fermentum faucibus est, sed vehicula velit sodales vitae.
            Mauris mollis lobortis turpis eget.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DesignDecor;
