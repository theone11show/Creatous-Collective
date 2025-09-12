import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Chordifires from "../assets/40.png";
import theone11 from "../assets/37.png";
import YumMum from "../assets/38.png";
import Petals from "../assets/39.png";

const OurServices = ({ items, className = '', radius = 300, damping = 0.45, fadeOut = 0.6, ease = 'power3.out' }) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = [
    {
      image: Chordifires,
      title: 'Chordifires Studio',
      subtitle: 'Music Institute',
      handle: '@thechordifiers',
      borderColor: '#fff',
      gradient: 'linear-gradient(180deg, #000, #000)',
      url: 'https://thechordifiers.studio/'
    },
    {
      image: theone11,
      title: 'The One11 Show',
      subtitle: 'Artists Launchpad',
      handle: '@theone11.show',
      borderColor: '#fff',
      gradient: 'linear-gradient(180deg, #000, #000)',
      url: 'https://theone11.show'
    },
    {
      image: YumMum,
      title: "Yum Mum's Bistro",
      subtitle: 'Restaurant',
      handle: "Yum Mum's Bistro",
      borderColor: '#fff',
      gradient: 'linear-gradient(180deg, #000, #000)'
    },
    {
      image: Petals,
      title: 'Petals',
      subtitle: 'Flowers',
      handle: '@Petals',
      borderColor: '#fff',
      gradient: 'linear-gradient(180deg, #000, #000)'
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const handleCardClick = url => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative w-full bg-black text-white py-16">
      {/* Section Heading */}
      <h2 className="text-center text-3xl md:text-5xl uppercase font-['Abril_Fatface'] mb-10">
        Our Services
      </h2>

      {/* Cards Container */}
      <div
        ref={rootRef}
        className={`relative w-full flex flex-wrap justify-center items-start gap-6 px-4 ${className}`}
        style={{
          '--r': `${radius}px`,
          '--x': '50%',
          '--y': '50%'
        }}
      >
        {data.map((c, i) => (
          <article
            key={i}
            onClick={() => handleCardClick(c.url)}
            className="group relative flex flex-col justify-between w-[280px] md:w-[300px] h-[420px] rounded-[20px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
            style={{
              border: `2px solid ${c.borderColor}`,
              boxShadow: "0 0 20px rgba(255,255,255,0.6)",
              background: c.gradient
            }}
          >
            {/* Image */}
            <div className="relative z-10 flex-1 p-[10px] flex items-center justify-center">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            {/* Footer */}
            <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
              <h3 className="m-0 text-[1.05rem] font-['MerriWeather']">{c.title}</h3>
              {c.handle && (
                <span className="text-[0.95rem] opacity-80 text-right font-['Abril_Fatface']">
                  {c.handle}
                </span>
              )}
              <p className="m-0 text-[0.85rem] opacity-85 font-['MerriWeather']">{c.subtitle}</p>
              {c.location && (
                <span className="text-[0.85rem] opacity-85 text-right">
                  {c.location}
                </span>
              )}
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
