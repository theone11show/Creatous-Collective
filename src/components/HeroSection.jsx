import React from "react";
import logo from "../assets/logo.webp"; // 👈 replace with your logo path

const HeroSection = () => {
  return (
    <section className="bg-black text-white flex items-center justify-center h-screen px-6 md:px-12">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Creative Collective Media Logo"
            className="w-32 sm:w-40 md:w-56 lg:w-72 h-auto mx-auto md:mx-0"
          />
        </div>

        {/* Text + Button */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          {/* Main Heading */}
          <h1
  className="font-glacial leading-tight 
             text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[42px] 
             uppercase text-[#fff5f6]"
>
  Creatous collective
</h1>

          {/* Subtext */}
          <p className="font-glacial text-gray-300 uppercase 
                        text-[13px] sm:text-[14px] md:text-[15px] lg:text-[18px] xl:text-[20px]">
            Fulfilling Unfulfilled Dreams
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
