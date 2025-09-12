import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="relative w-full min-h-[500px] py-16 px-6  overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #d2d2d2, #a9a9a9, #a9a9a9)", // Based on the uploaded image
      }}
    >
      <div className="relative mx-auto text-center ">
        {/* Title */}
        <div
          className=" mb-6 tracking-wide mt-[60px] md:mt-[80px] text-[2rem] md:text-[30px] sm:text-[18px] font-[Glacial_Indifference]"
         
        >
          CREATOUS COLLECTIVE
        </div>

        {/* Divider */}
        <div className="w-11/12 md:w-3/4 border-t-2 border-black/70 mx-auto mb-8"></div>

        {/* Contact + Social */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          {/* Left */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
            <a
              href="mailto:info@theone11.show"
              className="text-black md:text-[22px] sm:text-[18px] font-[`Montserrat`]"
              
            >
              @creatouscollective
            </a>
          </div>

          {/* Center - Social Media */}
          <div className="w-full md:w-1/3 flex justify-center space-x-8 text-2xl mb-6 md:mb-0">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300"
            >
              <FaFacebookF size={28} />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300"
            >
              <FaXTwitter size={28} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300"
            >
              <FaInstagram size={28} />
            </a>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
  <a
    href="tel:+917477785294"
    className="text-black md:text-[22px] sm:text-[18px] font-[`Montserrat`]"
   
  >
    @creatouscollective
  </a>
</div>
</div>

        {/* Policy Links */}
        <div
  className="mt-12 mb-4 flex flex-col md:flex-row justify-center items-center
  space-y-2 md:space-y-0 md:space-x-8 mt-[60px] md:mt-[80px] text-black md:text-[22px] sm:text-[18px]"
  style={{
    fontFamily: "Montserrat, sans-serif",
  }}
>
  <a href="#">
    Privacy Policy
  </a>
  <a href="#">
    Terms of Service
  </a>
</div>

        {/* Copyright */}
        <p
          className="text-[12px] sm:text-xs md:text-sm  font-[Montserrat]"
          
        >
          &copy; 2025 Creatous Collective Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};


export default Footer;




