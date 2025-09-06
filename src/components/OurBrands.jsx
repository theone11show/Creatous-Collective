import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.webp";

const brands = [
  {
    title: "One11Show",
    text1:
      "An artist launchpad dedicated to discovering, mentoring, and launching authentic musical and artistic talent.",
    text2:
      "Powered by The Chordifiers Studio, we unite passionate artists and skilled industry professionals committed to nurturing raw talent with vibrant music battles, live sessions, engaging podcasts, and more.",
  },
  {
    title: "Chordifiers Studio",
    text1:
      "A creative hub for artists and producers to innovate, collaborate, and refine their craft in a professional studio environment.",
    text2: "",
  },
  {
    title: "Yum Yum Studio",
    text1:
      "A vibrant platform offering multimedia experiences, from music production to visual storytelling, designed to inspire creativity and collaboration.",
    text2: "",
  },
  {
    title: "Extra Brand",
    text1: "Some additional brand info can go here.",
    text2: "",
  },
];

const OurBrands = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { offsetTop, offsetHeight } = sectionRef.current;
      const scrollY = window.scrollY + window.innerHeight / 2;

      if (scrollY >= offsetTop && scrollY <= offsetTop + offsetHeight) {
        const relY = scrollY - offsetTop;
        const idx = Math.min(
          brands.length - 1,
          Math.floor((relY / offsetHeight) * brands.length)
        );
        setActiveIndex(idx);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white min-h-screen py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-row items-start gap-12">
        {/* Left: Logo */}
        <div className="md:w-1/5 sticky top-1/4 flex justify-center md:justify-start">
          <img src={logo} alt="Logo" className="w-24 md:w-32" />
        </div>

        {/* Middle: Animated Text */}
        <div className="md:w-3/5 min-h-[400px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-bold uppercase mb-6 text-[2.5rem] md:text-[3.5rem]">
                {brands[activeIndex].title}
              </h1>
              <p className="text-lg md:text-xl mb-4">{brands[activeIndex].text1}</p>
              {brands[activeIndex].text2 && (
                <p className="text-lg md:text-xl">{brands[activeIndex].text2}</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Fixed Lines */}
        <div className="hidden md:flex flex-col space-y-4 sticky top-1/4">
          {brands.map((_, idx) => (
            <motion.div
              key={idx}
              className="w-[4px] rounded cursor-pointer"
              onClick={() => setActiveIndex(idx)}
              animate={{
                backgroundColor: idx === activeIndex ? "#fff" : "#555",
                height: idx === activeIndex ? 80 : 40,
                scale: idx === activeIndex ? 1.3 : 1,
              }}
              transition={{ duration: 0.4 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
