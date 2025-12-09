import React from "react";
import img from "./door1.png";
import img1 from "./door2.jpg"
import img2 from "./door3.png"
import img3 from "./door4.jpg"
import img4 from "./door5.png"
import img5 from "./door6.jpg"
import img6 from "./door7.png"
import img7 from "./door8.jpg"
import img8 from "./door9.png"
import img9 from "./door10.jpg"

const products = [
  { name: "Doors", img: img },
  { name: "Sofa", img1: img1 },
  { name: "Dining Tables", img2: img2 },
  { name: "Tables", img3: img3 },
  { name: "Chairs", img4: img4 },
  { name: "Beds", img5: img5 },
  { name: "Study Tables", img6: img6 },
  { name: "Wardrobes", img7: img7 },
  { name: "Swings", img8: img8 },
  { name: "Home Decor", img9: img9 }
];

const OurProducts = () => {
  return (
    <section className="w-full py-14">

      {/* Title */}
      <h2 className="text-center text-4xl font-bold tracking-wide mb-10 text-yellow-800">
        Our Products
      </h2>

      {/* Product Grid */}
      <div className="
  grid 
  grid-cols-2 
  sm:grid-cols-3 
  md:grid-cols-5 
  gap-y-10 
  gap-x-8 sm:gap-x-12 md:gap-x-44
  px-4 sm:px-6 
  max-w-6xl 
  mx-auto
">
        {products.map((item) => (
          <div key={item.name} className="flex flex-col items-center">

            <div className="
        w-28 h-28 
        sm:w-32 sm:h-32 
        md:w-52 md:h-52 
        rounded-full 
        overflow-hidden 
        shadow-md 
        bg-gray-300
      ">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Label */}
            <p className="mt-3 text-sm font-medium text-gray-700 text-center">
              {item.name}
            </p>

          </div>
        ))}
      </div>



    </section>
  );
};

export default OurProducts;
