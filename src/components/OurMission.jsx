import React from "react";
import Mission1 from "../assets/1.jpg";
import Mission2 from "../assets/2.jpg";
import Mission3 from "../assets/3.jpg";
import Background from "../assets/background.webp";

const OurMission = () => {
  return (
    <section className="bg-black w-full pb-16">
      {/* Vision Content */}
      <div className=" mx-auto ">
      <div
    className="
      shadow-lg bg-conver bg-repeat bg-center w-full rounded-xl overflow-hidden
      py-52 px-6   /* increased top/bottom padding for small screens */
      sm:py-24 sm:px-20
      md:py-28 md:px-28
      lg:py-32 lg:px-32
      xl:py-36 xl:px-36
    "
    style={{ backgroundImage: `url(${Background})` }}
  >
    <h1
      className="mb-6 uppercase font-['Abril_Fatface']
       text-[26px] sm:text-[34px] md:text-[50px] lg:text-[56px] xl:text-[64px] leading-tight"
    >
      Our Mission
    </h1>

    <p
      className="font-['MerriWeather']
       text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] 
       leading-relaxed max-w-3xl"
    >
      Our core mission is to remove the word "uncertainty" from every creative career,
      with a particular focus on the fields of Music, Art, and Entertainment. We aim to
      achieve this by actively spreading awareness that successful and fulfilling
      livelihoods are not exclusive to traditional professions like doctors and engineers,
      but can also be robustly built and sustained through careers in the creative fields.
    </p>
  </div>

      </div>

      {/* Three Images Section */}
      <div className="container mx-auto mt-16 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10 lg:gap-14">
          {/* Left Image */}
          <img
            src={Mission1}
            alt="Left"
            className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-cover rounded-xl shadow-lg transform md:rotate-[-8deg]"
          />

          {/* Center Image */}
          <img
            src={Mission2}
            alt="Center"
            className="w-52 sm:w-64 md:w-72 lg:w-80 h-auto object-cover rounded-xl shadow-2xl z-20"
          />

          {/* Right Image */}
          <img
            src={Mission3}
            alt="Right"
            className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-cover rounded-xl shadow-lg transform md:rotate-[8deg]"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
