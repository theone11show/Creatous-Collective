import React from "react";
import logo from "../assets/Herosectionlogo.png"; 

const HeroSection = () => {
  return (
    <section className="bg-black text-white flex items-center justify-center h-screen px-6 md:px-12">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Creative Collective Media Logo"
            className="w-52 sm:w-72 md:w-96 lg:w-96 h-auto mx-auto md:mx-0"
          />
        </div>

        {/* Text + Button (RIGHT aligned container) */}
        <div className="flex flex-col items-end text-right w-full md:w-1/2 space-y-6">
          
          {/* Group Heading + Subtext with smaller gap */}
          <div className="flex flex-col w-full space-y-2">
            {/* Main Heading */}
            <h1
              className="font-[glacial] leading-tight 
                         text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[42px] whitespace-nowrap 
                         uppercase text-[#fff5f6] self-start"
            >
              Creatous Collective Media
            </h1>

            {/* Subtext */}
            <p
              className="font-[glacial_indiffern] text-[#e6e6e6] uppercase 
                         text-center w-full
                         text-[13px] sm:text-[14px] md:text-[15px] lg:text-[18px] xl:text-[20px]"
            >
              Fulfilling Unfulfilled Dreams
            </p>
          </div>

          {/* Button (left-aligned under heading) */}
          <div className="self-center">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-transform transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

