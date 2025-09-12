import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Chordifires from "../assets/institute.png";
import Studio from "../assets/studio.png";
import studio from "../assets/studio.png";
import theone11 from "../assets/theone11show.png";
import YumMum from "../assets/yummum.png";
import Petals from "../assets/petals.png";

const OptimizedImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className="w-full h-full object-contain rounded-[10px]"
  />
);

const OurServices = ({ items, className = "", radius = 300 }) => {
  const rootRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const chordifiresURL = "https://thechordifiers.studio/";

  const demo = [
    {
      image: Chordifires,
      title: "Chordifires Studio",
      subtitle: "Music Institute",
      borderColor: "#fff",
      gradient: "linear-gradient(180deg, #000, #000)",
      url: chordifiresURL,
      moveUp: true, // move text up
    },
    {
      image: theone11,
      title: "The One11 Show",
      subtitle: "Artists Launchpad",
      borderColor: "#fff",
      gradient: "linear-gradient(180deg, #000, #000)",
      url: "https://theone11.show",
      moveUp: true, // move text up
    },
    {
      image: YumMum,
      title: "Yum Mum's Bistro",
      subtitle: "Restaurant",
      borderColor: "#fff",
      gradient: "linear-gradient(180deg, #000, #000)",
      url: chordifiresURL, // redirect to Chordifires
    },
    {
      image: Petals,
      title: "Petals",
      subtitle: "Flowers",
      borderColor: "#fff",
      gradient: "linear-gradient(180deg, #000, #000)",
      url: chordifiresURL, // redirect to Chordifires
    },
    {
      image: studio,
      title: "Chorfires Studio",
      subtitle: "Music Academy",
      borderColor: "#fff",
      gradient: "linear-gradient(180deg, #000, #000)",
      url: chordifiresURL, // redirect to Chordifires
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full bg-black text-white py-16">
      {/* Section Heading */}
      <h2 className="text-center text-3xl md:text-5xl uppercase font-['Abril_Fatface'] mb-10">
        Our Services
      </h2>

      <div
        ref={rootRef}
        className={`relative w-full flex flex-col gap-12 px-4 ${className}`}
      >
        {/* First Row (3 Cards) */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {data.slice(0, 3).map((c, i) => (
            <article
              key={i}
              onClick={() => handleCardClick(c.url)}
              className="group relative flex flex-col justify-between 
                         w-[240px] h-[380px] 
                         sm:w-[260px] sm:h-[400px] 
                         md:w-[320px] md:h-[460px] 
                         lg:w-[340px] lg:h-[480px] 
                         rounded-[20px] overflow-hidden cursor-pointer 
                         transition-transform duration-300 hover:scale-[1.05]"
              style={{
                border: `2px solid ${c.borderColor}`,
                boxShadow: "0 0 20px rgba(255,255,255,0.6)",
                background: c.gradient,
              }}
            >
              <div className="relative z-10 flex-1 p-3 flex items-center justify-center bg-black">
                <OptimizedImage src={c.image} alt={c.title} />
              </div>
              <footer
                className={`relative z-10 p-3 text-white font-sans grid grid-cols-1 gap-y-1 ${
                  c.moveUp ? "-mt-3" : ""
                }`}
              >
                <h3 className="m-0 text-[1rem] md:text-[1.1rem] font-['MerriWeather']">
                  {c.title}
                </h3>
                <p className="m-0 text-[0.85rem] opacity-85 font-['MerriWeather']">
                  {c.subtitle}
                </p>
              </footer>
            </article>
          ))}
        </div>

        {/* Second Row (2 Cards, Centered) */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {data.slice(3, 5).map((c, i) => (
            <article
              key={i}
              onClick={() => handleCardClick(c.url)}
              className="group relative flex flex-col justify-between 
                         w-[240px] h-[380px] 
                         sm:w-[260px] sm:h-[400px] 
                         md:w-[320px] md:h-[460px] 
                         lg:w-[340px] lg:h-[480px] 
                         rounded-[20px] overflow-hidden cursor-pointer 
                         transition-transform duration-300 hover:scale-[1.05]"
              style={{
                border: `2px solid ${c.borderColor}`,
                boxShadow: "0 0 20px rgba(255,255,255,0.6)",
                background: c.gradient,
              }}
            >
              <div className="relative z-10 flex-1 p-3 flex items-center justify-center bg-black">
                <OptimizedImage src={c.image} alt={c.title} />
              </div>
              <footer
                className={`relative z-10 p-3 text-white font-sans grid grid-cols-1 gap-y-1 ${
                  c.moveUp ? "-mt-3" : ""
                }`}
              >
                <h3 className="m-0 text-[1rem] md:text-[1.1rem] font-['MerriWeather']">
                  {c.title}
                </h3>
                <p className="m-0 text-[0.85rem] opacity-85 font-['MerriWeather']">
                  {c.subtitle}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
