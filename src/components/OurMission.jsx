import React from "react";
import Mission1 from "../assets/1.jpg";
import Mission2 from "../assets/2.jpg";
import Mission3 from "../assets/3.jpg";
import Background from "../assets/background.webp"

const OurMission = () => {
  return (
    <section className="bg-black w-full pb-16">
      {/* Vision Content */}
      <div className="container mx-auto flex justify-start relative h-auto pt-20 ">
      <div
  className="
    shadow-lg bg-cover bg-center w-full
    px-14 py-52
    md:px-[100px] md:pt-[60px] md:pb-[100px]
    lg:px-[150px] lg:pt-[80px] lg:pb-[120px]
    xl:px-[200px] xl:pt-[100px] xl:pb-[140px]
  "
  style={{ backgroundImage: `url(${Background})` }}
>
  <h1 className="mb-4 uppercase font-['Abril_Fatface'] 
       text-[28px] sm:text-[34px] md:text-[56px] lg:text-[60px] xl:text-[64px] text-left">
    Our Mission
  </h1>

  <p className="mb-4 font-['MerriWeather'] 
       text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] pr-6 md:pr-20">
    Our core mission is to remove the word "uncertainty" from every creative career,
    with a particular focus on the fields of Music, Art, and Entertainment. We aim to
    achieve this by actively spreading awareness that successful and fulfilling
    livelihoods are not exclusive to traditional professions like doctors and engineers,
    but can also be robustly built and sustained through careers in the creative fields.
  </p>
</div>

      </div>

      {/* Three Images Section */}
      <div className="container mx-auto flex justify-end relative h-72 pt-20">
        {/* Left Image */}
        <img
          src={Mission1}
          alt="Left"
          className="w-64 h-auto object-cover rounded-xl shadow-lg transform rotate-[-10deg] relative left-[-40px] top-8 z-10"
        />

        {/* Center Image */}
        <img
          src={Mission2}
          alt="Center"
          className="w-72 h-auto object-cover rounded-xl shadow-2xl absolute sm:ml-52 -translate-x-1/2 top-32 z-20"
        />

        {/* Right Image */}
        <img
          src={Mission3}
          alt="Right"
          className="w-64 h-auto object-cover rounded-xl shadow-lg transform rotate-[10deg] relative  top-8 z-10"
        />
      </div>
    </section>
  );
};

export default OurMission;
