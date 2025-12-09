import React from "react";
import img from "./door1.png";
import img1 from "./door2.jpg"
import img2 from "./door3.png"
import img3 from "./door4.jpg"


const products = [
  { name: "Doors", img: img },
  { name: "Sofa", img: img },
  { name: "Dining Tables", img: img },
  { name: "Tables", img: img },
  { name: "Chairs", img: img },
  { name: "Beds", img: img },
  { name: "Study Tables", img: img },
  { name: "Wardrobes", img: img },
  { name: "Swings", img: img },
  { name: "Home Decor", img: img }
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
