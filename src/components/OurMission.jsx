import React from 'react';
import Mission1 from "../assets/1.jpg"
import Mission2 from "../assets/2.jpg"
import Mission3 from "../assets/3.jpg"

const OurMission = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-start justify-center relative overflow-hidden">
      {/* Text Box */}
      <div
        className="rounded-r-[50px] p-8 md:p-12 w-full sm:w-11/12 md:w-3/4 lg:w-3/4 xl:w-2/3 text-left z-10 mt-24"
        style={{
          background: "linear-gradient(to bottom, #d2d2d2, #a9a9a9, #a9a9a9)",
        }}
      >
        <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-['Abril_Fatface'] tracking-tight mb-4 text-black uppercase">
          Our Mission
        </h2>

        <p className="text-sm md:text-lg lg:text-xl leading-relaxed text-black font-['MerriWeather']">
          Our core mission is to remove the word "uncertainty" from every creative career, with a
          particular focus on the fields of Music, Art, and Entertainment. We aim to achieve this by
          actively spreading awareness that successful and fulfilling livelihoods are not exclusive
          to traditional professions like doctors and engineers, but can also be robustly built and
          sustained through careers in the creative fields.
        </p>
      </div>

      {/* Overlapping Images aligned right */}
      <div className="relative w-full flex justify-end mt-12 pr-6">
        <div className="relative w-[320px] sm:w-[360px] md:w-[400px] lg:w-[460px] xl:w-[520px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px]">
          {/* Mission 1 - Center (front) */}
          <img
            src={Mission1}
            alt="Creative Field 1"
            className="w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-60 lg:h-40 xl:w-64 xl:h-44 object-cover rounded-lg shadow-lg relative left-20 z-20"
          />
          {/* Mission 2 - Right overlap */}
          <img
            src={Mission2}
            alt="Creative Field 2"
            className="w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-60 lg:h-40 xl:w-64 xl:h-44 object-cover rounded-lg shadow-lg absolute top-0 right-[-5px] transform rotate-3 z-10"
          />
          {/* Mission 3 - Left overlap */}
          <img
            src={Mission3}
            alt="Creative Field 3"
            className="w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-36 lg:w-60 lg:h-40 xl:w-64 xl:h-44 object-cover rounded-lg shadow-lg absolute top-0 left-[-40px] transform -rotate-3 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
