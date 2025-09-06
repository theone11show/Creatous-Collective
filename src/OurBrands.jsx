import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
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

  // Scroll to brand when line clicked
  const handleLineClick = (index) => {
    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;
    const brandHeight = sectionHeight / brands.length;
    window.scrollTo({
      top: sectionTop + brandHeight * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  // Detect scroll and update activeIndex
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight / 2;

      if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        const relativeY = scrollY - sectionTop;
        const brandHeight = sectionHeight / brands.length;
        const index = Math.min(
          brands.length - 1,
          Math.floor(relativeY / brandHeight)
        );
        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black flex flex-col md:flex-row items-start justify-center min-h-screen px-6 md:px-12 py-16"
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-start gap-8 mx-auto">
        
        {/* Left: Logo & Vertical Lines */}
        <div className="flex flex-col items-center gap-8 md:w-1/4 sticky top-1/4">
          <img
            src={logo}
            alt="Our Brand Logo"
            className="w-24 md:w-32 h-auto mb-4"
          />

          <div className="flex md:flex-col gap-4">
            {brands.map((_, idx) => (
              <motion.div
                key={idx}
                onClick={() => handleLineClick(idx)}
                className="cursor-pointer"
                initial={false}
                animate={{
                  backgroundColor: idx === activeIndex ? "#fff" : "#999",
                  height: idx === activeIndex ? 80 : 40, // Active line taller
                  scale: idx === activeIndex ? 1.2 : 1, // Slight zoom for active
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                  width: "3px",
                  borderRadius: "2px",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: Brand Content */}
        <div className="text-center md:text-left text-white md:w-3/4 space-y-32">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              className="py-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: idx === activeIndex ? 1 : 0.4,
                y: idx === activeIndex ? 0 : 30,
              }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-bold text-[40px] sm:text-[48px] md:text-[55px] uppercase mb-6">
                {brand.title}
              </h1>
              <p className="font-merriweather text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mb-4">
                {brand.text1}
              </p>
              {brand.text2 && (
                <p className="font-merriweather text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                  {brand.text2}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
