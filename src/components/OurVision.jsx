import React from "react";
import Vision1 from "../assets/1.jpg";
import Vision2 from "../assets/2.jpg";
import Vision3 from "../assets/3.jpg";

const OurVision = () => {
  return (
    <section className="bg-black w-full pb-16">
      {/* Vision Content */}
      <div className="container mx-auto flex justify-end relative h-auto ">
        <div className="bg-gray-200 rounded-2xl p-8 max-w-md md:sm-w-4xl lg:max-w-4xl shadow-lg">
        <h1 className="text-4xl md:text-5xl  uppercase mb-4 text-black font-montserrat text-center">
                  Our Vision
                </h1>
          <p className="text-lg md:text-xl text-black leading-relaxed font-montserrat text-center">
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
