import React from "react";
import Vision1 from "../assets/1.jpg";
import Vision2 from "../assets/2.jpg";
import Vision3 from "../assets/3.jpg";
import Background from "../assets/background.webp"

const OurVision = () => {
  return (
    <section className="bg-black w-full ">
      {/* Vision Content */}
      <div className="container mx-auto flex justify-end relative h-auto ">
        <div
  className="
    shadow-lg 
    bg-cover bg-center 
    w-full
    px-14 py-52        /* mobile (sm) */
    md:px-[100px] md:pt-[60px] md:pb-[100px]  /* medium screens */
    lg:px-[150px] lg:pt-[80px] lg:pb-[120px]                 /* large screens */
    xl:px-[200px] xl:pt-[100px] xl:pb-[140px]                /* extra large */
  "
  style={{ backgroundImage: `url(${Background})` }}
>
  <h1 className="mb-4 uppercase font-['Abril_Fatface'] 
       text-[28px] sm:text-[34px] md:text-[56px] lg:text-[60px] xl:text-[64px] text-end">
    Our Vision
  </h1>

  <p className="mb-4 font-['MerriWeather'] 
       text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] pr-6 md:pr-20">
    Our vision is to establish Creatous Collective as the world’s leading creative company, uniting diverse talents under one inclusive platform. We aspire to create a 360° professional ecosystem that nurtures creativity through learning, mentoring, and collaboration. By empowering individuals and creative businesses alike, we aim to transform passion into lasting success.
  </p>
</div>
      </div>

      {/* Three Images Section */}
      <div className="container mx-auto flex justify-start relative h-72">
        {/* Left Image */}
        <img
          src={Vision1}
          alt="Left"
          className="w-64 h-auto object-cover rounded-xl shadow-lg transform rotate-[-10deg] relative left-[-40px] top-8 z-10"
        />

        {/* Center Image */}
        <img
          src={Vision2}
          alt="Center"
          className="w-72 h-auto object-cover rounded-xl shadow-2xl absolute left-1/6 -translate-x-1/2 top-20 z-20"
        />

        {/* Right Image */}
        <img
          src={Vision3}
          alt="Right"
          className="w-64 h-auto object-cover rounded-xl shadow-lg transform rotate-[10deg] relative right-[-40px] top-8 z-10"
        />
      </div>
    </section>
  );
};

export default OurVision;
