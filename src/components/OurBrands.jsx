import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Chordifires from "../assets/institute.png";
import One11 from "../assets/theone11show.png";
import YumMum from "../assets/yummum.png";
import Petals from "../assets/petals.png";

const brands = [
  {
    title: "The Chordifiers",
    imageUrl: Chordifires,
    text1: `At The Chordifiers Studio, we provide a nurturing space for aspiring musicians, sound engineers, and digital creators.
    Our environment is designed to spark imagination, support creative growth, and foster collaboration.`,
    text2: `Whether you're a beginner exploring your passion or a professional refining your craft, our studio is your launchpad into the world of modern music production.`,
  },
  {
    title: "The One11 Show",
    imageUrl: One11,
    text1: `The One11 Show is an artist’s launchpad dedicated to discovering, mentoring, and launching authentic musical and artistic talent.
    Powered by The Chordifiers Studio, we unite passionate artists and skilled industry professionals committed to nurturing raw talent.`,
    text2: `Through vibrant music battles, live sessions, and engaging podcasts, we provide artists with the structure, mentorship, and opportunities they need to shine.
    We celebrate and uplift the vibrant creative community around the world.`,
  },
  {
    title: "Yum Mum’s Bistro",
    imageUrl: YumMum,
    text1: `Yum-Mum’s Bistro, nestled in Shaktigarh road no 8, PWD More, Siligun, West Bengal, is a French-inspired café designed as a haven for artists and dreamers.
    With its cozy ambience, soulful music, and delightful flavors, it offers the perfect blend of food, art, and culture.`,
    text2: `A place where friends gather, artists connect, and lovers create memories, Yum-Mum’s Bistro is more than just a café — it’s an experience that warms the heart and inspires the soul.`,
  },
  {
    title: "Petals",
    imageUrl: Petals,
    text1: `Petals is more than just a flower delivery brand — it’s a messenger of love and emotions.
    With beautifully curated bouquets and thoughtful gifts, Petals ensures every delivery carries a personal touch straight to your doorstep.`,
    text2: `Whether it’s to celebrate, surprise, or simply express your feelings, we make every moment bloom with meaning.
    With free delivery and a seamless gifting experience, Petals is here to bring joy, love, and heartfelt emotions right to you.`,
  },
];

const OurBrands = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [introOpacity, setIntroOpacity] = useState(1);
  const introRef = useRef(null);
  const mainSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const mainSection = mainSectionRef.current;
      const introSection = introRef.current;
      if (!mainSection || !introSection) return;

      // Scroll logic for the intro section fade out
      const introRect = introSection.getBoundingClientRect();
      const newOpacity = Math.max(0, 1 + (introRect.top / (window.innerHeight * 0.5)));
      setIntroOpacity(newOpacity);

      // Scroll logic for the main sticky section
      const mainRect = mainSection.getBoundingClientRect();
      const mainScrollableHeight = mainSection.scrollHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -mainRect.top / mainScrollableHeight));
      
      let newIndex = Math.floor(progress * brands.length);
      newIndex = Math.min(newIndex, brands.length - 1);
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white relative">
      {/* Intro section that fades out smoothly */}
      <motion.div
        ref={introRef}
        className="min-h-[70vh] py-16 px-6 md:px-12 flex flex-col items-center justify-start text-center"
        style={{ opacity: introOpacity }}
      >
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">Our Brands</h2>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 px-4 leading-relaxed">
          With a commitment to becoming the world’s #1 creative company, we bring together talent from diverse niches and provide a 360° professional ecosystem—from learning and mentoring to collaboration and growth.
        </p>
      </motion.div>

      {/* Main sticky section for brand content */}
      <section
        ref={mainSectionRef}
        className="bg-black text-white px-6 md:px-12"
        style={{ height: `${brands.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 w-full">
            {/* Main content area */}
            <div className="md:w-3/4 flex flex-col md:flex-row items-center justify-center gap-8 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row items-center gap-8 w-full"
                >
                  <div className="md:w-1/2 flex-shrink-0">
                    <img
                      src={brands[activeIndex].imageUrl}
                      alt={brands[activeIndex].title}
                      className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="font-bold uppercase mb-4 text-[2rem] sm:text-[2.5rem] md:text-[3rem]">
                      {brands[activeIndex].title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-3 leading-relaxed">
                      {brands[activeIndex].text1}
                    </p>
                    {brands[activeIndex].text2 && (
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                        {brands[activeIndex].text2}
                      </p>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Right: Equal height lines (desktop only) */}
            <div className="hidden md:flex flex-col items-center justify-center gap-8 md:w-1/4">
              {brands.map((_, idx) => (
                <motion.div
                  key={idx}
                  className="w-[6px] h-32 rounded cursor-pointer"
                  onClick={() => setActiveIndex(idx)}
                  animate={{
                    backgroundColor: idx === activeIndex ? "#fff" : "#555",
                    scale: idx === activeIndex ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
              ))}
            </div>

            {/* Mobile: Lines on top */}
            <div className="flex md:hidden justify-center mt-8 space-x-4 w-full">
              {brands.map((_, idx) => (
                <motion.div
                  key={idx}
                  className="h-[4px] w-6 rounded cursor-pointer"
                  onClick={() => setActiveIndex(idx)}
                  animate={{
                    backgroundColor: idx === activeIndex ? "#fff" : "#555",
                    width: idx === activeIndex ? 40 : 24,
                    scale: idx === activeIndex ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBrands;