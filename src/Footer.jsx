import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import footer from "./footer.jpg";

const Footer = () => {
  return (
    <footer
      className="
        w-full text-white py-16 relative
        bg-cover bg-center bg-black/60 bg-blend-overlay
      "
      style={{ backgroundImage: `url(${footer})` }}
    >

      {/* MAIN GRID */}
      <div
        className="
          max-w-6xl mx-auto px-6 
          grid
          grid-cols-2            /* MOBILE → 2 columns */
          sm:grid-cols-2         /* TABLET → 2 columns */
          lg:grid-cols-5         /* DESKTOP → 5 columns */
          gap-10 sm:gap-12
          text-center lg:text-left
        "
      >

        <div>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2 opacity-90">
            <li className="hover:text-gray-300 transition">About</li>
            <li className="hover:text-gray-300 transition">Services</li>
            <li className="hover:text-gray-300 transition">Products</li>
            <li className="hover:text-gray-300 transition">Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 opacity-90">
            <li className="hover:text-gray-300 transition">Interior Design</li>
            <li className="hover:text-gray-300 transition">Decoration</li>
            <li className="hover:text-gray-300 transition">Consultation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Delivery</h3>
          <ul className="space-y-2 opacity-90">
            <li className="hover:text-gray-300 transition">How it Works</li>
            <li className="hover:text-gray-300 transition">Free Delivery</li>
            <li className="hover:text-gray-300 transition">FAQs</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 opacity-90">
            <li className="hover:text-gray-300 transition">Privacy Policy</li>
            <li className="hover:text-gray-300 transition">Terms of Service</li>
            <li className="hover:text-gray-300 transition">Help Center</li>
            <li className="hover:text-gray-300 transition">Support</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <p className="opacity-90">Trignity</p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <p className="text-center mt-12 text-sm opacity-80 px-4">
        © 2023 Trignity. All rights reserved. Design by infosiltechnolabs
      </p>

      {/* SOCIAL ICONS */}
      <div
        className="
          flex space-x-5 text-xl opacity-90 mt-6

          justify-center              /* MOBILE + TABLET CENTER */
          lg:justify-end lg:absolute  /* DESKTOP RIGHT */
          lg:bottom-10 lg:right-16
        "
      >
        <FaFacebookF className="cursor-pointer hover:text-gray-300 transition" />
        <FaInstagram className="cursor-pointer hover:text-gray-300 transition" />
        <FaTwitter className="cursor-pointer hover:text-gray-300 transition" />
        <FaGooglePlusG className="cursor-pointer hover:text-gray-300 transition" />
      </div>
    </footer>
  );
};

export default Footer;
