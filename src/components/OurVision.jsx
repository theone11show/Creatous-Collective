import React from 'react';
import Vision1 from "../assets/1.jpg";
import Vision2 from "../assets/2.jpg";
import Vision3 from "../assets/3.jpg";

const OurVision = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-end justify-center relative overflow-hidden">
      

      {/* Text Box */}
      <div
        className="rounded-l-[50px] p-8 md:p-12 w-full md:w-3/4 lg:w-2/3 text-right z-10 mt-8"
        style={{
          background: "linear-gradient(to bottom, #d2d2d2, #a9a9a9, #a9a9a9)",
        }}
      >
        <h2 className="text-[48px] md:text-[56px] lg:text-[64px] font-['Abril_Fatface'] tracking-tight mb-4 text-black uppercase">
          OUR Vision
        </h2>

        <p className="text-sm md:text-[18px] lg:text-[24px] leading-relaxed text-black font-['MerriWeather']">
          Our vision is to establish Creatous Collective as the world’s leading creative company,
          uniting diverse talents under one inclusive platform. We aspire to create a 360°
          professional ecosystem that nurtures creativity through learning, mentoring, and
          collaboration. By empowering individuals and creative businesses alike, we aim to
          transform passion into lasting success.
        </p>
      </div>
      {/* Overlapping Images aligned left */}
      <div className="relative w-full flex justify-start mt-12 pl-6">
        <div className="relative w-[320px] sm:w-[360px] md:w-[400px] lg:w-[460px] xl:w-[520px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px]">
          {/* Vision 1 - Center (front) */}
          <img
            src={Vision1}
            alt="Creative Field 1"
            className="w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-60 lg:h-40 xl:w-64 xl:h-44 object-cover rounded-lg shadow-lg relative z-20 left-20"
          />
          {/* Vision 2 - Left overlap */}
          <img
            src={Vision2}
            alt="Creative Field 2"
            className="w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-60 lg:h-40 xl:w-64 xl:h-44 object-cover rounded-lg shadow-lg absolute top-0 left-[-40px] transform -rotate-3 z-10"
          />
          {/* Vision 3 - Right overlap */}
          <img
            src={Vision3}
            alt="Creative Field 3"
            className="w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-60 lg:h-40 xl:w-64 xl:h-44 object-cover rounded-lg shadow-lg absolute top-0 right-[-40px] transform rotate-3 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
