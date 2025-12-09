import React from "react";
import section from "./section.jpg";

const Features = () => {
  return (
    <div className="w-full bg-white py-16">
      {/* Title */}
      <h1 className="text-5xl font-bold text-[#8A5A00] text-center mb-20">
        Features
      </h1>

      {/* Main Section */}
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-5xl font-bold text-[#8A5A00] leading-tight mb-6">
            Perfect Finish, Best <br /> Materials
          </h2>

          {/* dashed blue underline block */}
          <div className="inline-block pb-2 mb-4">
            <p className="text-black text-[15px] leading-relaxed max-w-md">
              Sed luctus orci sit amet tempor luctus. Nullam non felis massa.
              Phasellus vitae fringilla sapien, quis dictum mi. Quisque
              consectetur egestas.
            </p>
          </div>

          <p className="text-black text-[15px] leading-relaxed max-w-md">
            Duis fermentum faucibus est, sed vehicula velit sodales vitae.
            Mauris mollis lobortis turpis eget.
          </p>
        </div>

        {/* RIGHT IMAGE + GREEN SHAPE */}
        <div className="relative w-full flex justify-center lg:justify-end">

          {/* GREEN BLOCK (TOP-RIGHT NOW) */}
          <div
            className="
      absolute
      bg-[#95bb7c]

      /* SIZE SAME ACROSS DEVICES */
      w-[90%] h-[78%]

      /* POSITION — TOP RIGHT */
      -top-6 -right-6

      sm:-top-7 sm:-right-7

      md:w-[70%] md:h-[90%]
      md:-top-8 md:right-[80px]

      lg:w-[90%] lg:h-[90%]
      lg:-top-10 lg:-right-10

      z-0
    "
          />

          {/* IMAGE */}
          <img
            src={section}
            alt="features"
            className="
      relative z-10 
      w-full max-w-[620px] 
      h-auto object-cover 
      shadow-lg
    "
          />
        </div>

      </div>
    </div>
  );
};

export default Features;
