import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      className="relative w-full py-10 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #d2d2d2, #a9a9a9, #a9a9a9)", 
      }}
    >
      <div className="relative mx-auto text-center max-w-6xl">
        {/* Title */}
        <div
          className="mb-4 tracking-wide mt-8 text-[1.5rem] md:text-[28px] sm:text-[18px] font-[Glacial_Indifference]"
        >
          CREATOUS COLLECTIVE
        </div>

        {/* Divider */}
        <div className="w-11/12 md:w-3/4 border-t-2 border-black/70 mx-auto mb-6"></div>

        {/* Contact + Social */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left mb-6">
          {/* Left */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
            <a
              href="mailto:info@theone11.show"
              className="text-black md:text-[20px] sm:text-[16px] font-[Montserrat]"
            >
              @creatouscollective
            </a>
          </div>

          {/* Center - Social Media */}
          <div className="w-full md:w-1/3 flex justify-center space-x-6 text-xl mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300"
            >
              <SlSocialFacebook size={24} />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300"
            >
              <BsTwitterX size={24} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300"
            >
              <SiInstagram size={24} />
            </a>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <a
              href="tel:+917477785294"
              className="text-black md:text-[20px] sm:text-[16px] font-[Montserrat]"
            >
              @creatouscollective
            </a>
          </div>
        </div>

        {/* Policy Links */}
        <div
          className="mt-6 mb-4 flex flex-col md:flex-row justify-center items-center
          space-y-2 md:space-y-0 md:space-x-6 text-black md:text-[18px] sm:text-[14px]"
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] sm:text-xs md:text-sm font-[Montserrat]">
          &copy; 2025 Creatous Collective Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
