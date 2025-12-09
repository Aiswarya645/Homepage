import React from 'react'
import img from "./arr1.png";
import img1 from "./arr2.png"
import img2 from "./arr3.png"
import img3 from "./arr4.png";
import img4 from "./arr5.jpg";
import img5 from "./arr6.jpg"


const NewArrivals = () => {

  const images = [img, img1, img2, img3, img4, img5];

  return (
    <div className="w-full bg-white py-12 flex flex-col items-center">

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#8a5a00] mb-10">
        New Arrivals
      </h1>

      {/* Responsive Grid */}
      <div className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-8 
        w-full 
        max-w-7xl 
        px-6
      ">

        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            className="w-full h-52 object-cover shadow-md"
            alt="arrival"
          />
        ))}

      </div>
    </div>
  )
}

export default NewArrivals
