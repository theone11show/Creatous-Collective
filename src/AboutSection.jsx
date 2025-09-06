import React from "react";
import aboutImage from "../assets/21.png";

const AboutSection = () => {
  return (
    <section className="bg-[#e6e6e6] flex items-center justify-center min-h-screen px-0">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start md:items-stretch gap-0">

        {/* Left: Text */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-4 md:w-1/2 px-6 md:px-0 py-8">
          <h1 className="font-abril text-[40px] sm:text-[48px] md:text-[55px] text-black mb-4 uppercase">
            About us
          </h1>
          <p className="font-merriweather text-[15px] sm:text-[16px] md:text-[18px] text-black leading-relaxed">
            At Creatous Collective, we believe creativity has the power 
            to transform lives. Our mission is to unite creators from across
            the globe under one platform, bringing hidden talents into the 
            spotlight, turning passions into thriving careers, and shaping a 
            future where creativity is valued as much as traditional
            professions.
          </p>
          <p className="font-merriweather text-[15px] sm:text-[16px] md:text-[18px] text-black leading-relaxed">
            We empower individuals and businesses of all sizes by offering support,
            mentorship, and opportunities that expand horizons. By fostering
            collaboration and knowledge-sharing, we create a global community
            where every artist, musician, and creative professional can flourish.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-end items-end">
          <img
            src={aboutImage}
            alt="Creative Collective illustration"
            className="w-full h-full object-cover md:rounded-none"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
