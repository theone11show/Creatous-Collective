import React from "react";
import LiquidChrome from "../Animations/OurVisionAnimation";
import TextType from "../Animations/TextAnimation";

const OurGoals = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Liquid Chrome Shader */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <LiquidChrome
          baseColor={[0.0, 0.0, 0.1]}
          speed={0.2}
          amplitude={0.3}
          interactive={true}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-2">
        <h1
          className="font-abril text-[#e6e6e6] mb-4 uppercase text-3xl sm:text-4xl md:text-[55px] mt-16"
        >
          Our Goals
        </h1>

        {/* Typing Effect */}
        <div className="font-merri text-[#e6e6e6] max-w-2xl text-base sm:text-lg md:text-[21px]">
          <TextType
            text={[
              "We are a creative company with an ambitious and inspiring goal: to unite creators globally. Our aim is to illuminate hidden talents and transform passionate yet unfulfilled dreams into thriving full-time careers.We foster a strong sense of fellowship through the sharing of knowledge and experiences."
             
              
            ]}
            typingSpeed={30}      // speed of typing per character
            pauseDuration={1000}  // pause between texts
            showCursor={false}     // show typing cursor
            cursorCharacter="|"   // cursor character
          />
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
