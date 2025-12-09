import React from "react";
import {
  Bars3Icon,
  UserIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/outline";
import heroImg from "./hero.jpg";
import OurProducts from "./OurProducts";
import InteriorBanner from "./InteriorBanner";
import DesignDecor from "./DesignDecor";
import NewArrivals from "./NewArrivals";
import Features from "./Features";
import Footer from "./Footer";
import img from './img1.png'
import img1 from './img2.png'
import img2 from './img3.png'
import img3 from './img4.png'



const Home = () => {
  return (
    <div className="w-full">


      <header className="flex items-center justify-between px-6 py-4">


        <div className="flex items-center">
          <Bars3Icon className="h-6 w-6 cursor-pointer" />
        </div>


        <div className="flex-grow flex justify-center">
          <h1 className="text-4xl font-extrabold tracking-wide">TRINITY</h1>
        </div>


        <div className="flex items-center space-x-3 text-sm font-medium">
          <div className="flex items-center space-x-2 cursor-pointer">
            <UserIcon className="h-5 w-5" />
            <span>My Cart</span>
          </div>
          <ShoppingCartIcon className="h-5 w-5 cursor-pointer" />
        </div>
      </header>

      <div className="container mx-auto px-10">
        <div className="border-b my-2 border-gray-300"></div>
      </div>



      <nav className="flex justify-center flex-wrap py-5 text-sm md:text-base font-light">
        <a href="#" className="hover:text-gray-700 px-2 py-1">DOORS</a>
        <a href="#" className="hover:text-gray-700 px-2 py-1">BEDROOM</a>
        <a href="#" className="hover:text-gray-700 px-2 py-1">LIVING</a>
        <a href="#" className="hover:text-gray-700 px-2 py-1">DINING</a>
        <a href="#" className="hover:text-gray-700 px-2 py-1">OFFICE</a>
        <a href="#" className="hover:text-gray-700 px-2 py-1">OUTDOORS</a>
        <a href="#" className="hover:text-gray-700 px-2 py-1">MORE PRODUCTS</a>
      </nav>

      <div
        className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >

        {/* Text Section */}
        <div
          className="
    absolute 
    left-1/2 md:left-0 
    top-1/2 
    -translate-x-1/2 md:translate-x-0 
    -translate-y-1/2 
    bg-[#398C1247] 
    text-white 
    p-5 sm:p-7 md:p-9 
    rounded 
    w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%]
  "
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug md:leading-normal">
            <span className="hidden md:inline">
              Best quality furniture giving you to the best level of comfort
            </span>

            <span className="md:hidden">
              Best quality furniture giving you to <br /> the best level of comfort
            </span>
          </h2>


          <p className="text-xs sm:text-sm leading-relaxed">
            Irferendis repudandae fugiat architecto beatae rederit svitae recusandae  <br />
            debilifacere uiimi placeat maxiemui.
          </p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-600 rounded-full"></div>
        </div>
      </div>




      <section className="w-full py-10">


        <h2 className="text-center text-4xl font-bold tracking-wide mb-10 text-yellow-800">
          Your Home  Our Design
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 sm:px-6">

          {/* Left Tall Image */}
          <img
            src={img}
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded"
            alt="design"
          />

          {/* Middle Two Images → stacked */}
          <div className="col-span-1 md:col-span-2 grid grid-rows-2 gap-4">
            <img
              src={img1}
              className="w-full h-[150px] sm:h-[170px] md:h-[230px] object-cover rounded"
              alt="design"
            />
            <img
              src={img2}
              className="w-full h-[150px] sm:h-[170px] md:h-[230px] object-cover rounded"
              alt="design"
            />
          </div>

          {/* Right Tall Image */}
          <img
            src={img3}
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded"
            alt="design"
          />

        </div>

      </section>
      <OurProducts />
      <InteriorBanner />
      <DesignDecor />
      <NewArrivals />
      <Features />
      <Footer />
    </div>

  );
};

export default Home;
