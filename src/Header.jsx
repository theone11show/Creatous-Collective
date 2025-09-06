import React, { useState } from "react";
import logo from "../assets/Headerlogo.png"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#e6e6e6] w-full py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6">
        
        {/* Left: Logo + Text */}
        <div className="flex items-center gap-2 md:gap-3">
          <img src={logo} alt="Creatous Collective Logo" className="w-10 h-auto md:w-12" />
          <span className="font-glacial uppercase text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
            Creatous Collective
          </span>
        </div>

        {/* Right: Navigation + Toggle */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="font-glacial text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] uppercase hover:text-gray-700">
              Home
            </a>
            <a href="#" className="font-glacial text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] uppercase hover:text-gray-700">
              Our Brands
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block w-5 h-[2px] bg-black mb-1 transition-transform ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}></span>
            <span className={`block w-5 h-[2px] bg-black mb-1 transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block w-5 h-[2px] bg-black transition-transform ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#e6e6e6] w-full px-4 flex flex-col items-start gap-2 py-2">
          <a href="#" className="font-glacial uppercase text-[16px] hover:text-gray-700">Home</a>
          <a href="#" className="font-glacial uppercase text-[16px] hover:text-gray-700">Our Brands</a>
        </div>
      )}
    </header>
  );
};

export default Header;
