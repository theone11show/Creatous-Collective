import React from 'react';
import AboutImg from "../assets/21.png"; // Replace with your image

const AboutSection = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pl-6  lg:px-20"
      style={{
        background: "linear-gradient(to bottom, #d2d2d2, #a9a9a9, #a9a9a9)",
      }}
    >
      {/* Text Content */}
      <div className="max-w-3xl z-10">
        <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-['Abril_Fatface'] text-black mb-6 uppercase">
          About Us
        </h2>

        <p className="text-sm md:text-lg lg:text-xl text-black font-['MerriWeather'] leading-relaxed mb-4">
          At Creatous Collective, we believe creativity has the power to transform lives. Our mission
          is to unite creators from across the globe under one platform, bringing hidden talents into
          the spotlight, turning passions into thriving careers, and shaping a future where creativity
          is valued as much as traditional professions.
        </p>

        <p className="text-sm md:text-lg lg:text-xl text-black font-['MerriWeather'] leading-relaxed">
          We empower individuals and businesses of all sizes by offering support, mentorship, and
          opportunities that expand horizons. By fostering collaboration and knowledge-sharing, we
          create a global community where every artist, musician, and creative professional can flourish.
        </p>
      </div>

      {/* Image positioned at bottom-right */}
      <div className="absolute bottom-0 right-0">
        <img
          src={AboutImg}
          alt="About Us"
          className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default AboutSection;
