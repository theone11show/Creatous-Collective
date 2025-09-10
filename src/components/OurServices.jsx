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
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(195deg, #e5e5e5, #000)',
      url: 'https://thechordifiers.studio/'
    },
    {
      image: theone11,
      title: 'The One11 Show',
      subtitle: 'Artists Launchpad',
      handle: '@theone11.show',
      borderColor: '#10B981',
      gradient: 'linear-gradient(135deg,#e5e5e5,#000)',
      url: 'https://theone11.show'
    },
    {
      image: YumMum,
      title: "Yum Mum's Bistro",
      subtitle: 'Restaurant',
      handle: "Yum Mum's Bistro",
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(195deg, #f5f5f5, #000)'
    },
    {
      image: Petals,
      title: 'Petals',
      subtitle: 'Flowers',
      handle: '@Petals',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg, #f5f5f5, #000)'
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

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardClick = url => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardMove = e => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
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
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
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
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(c.url)}
            className="group relative flex flex-col justify-between w-[280px] md:w-[300px] h-[420px] rounded-[20px] overflow-hidden border-2 border-transparent cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
            style={{
              '--card-border': c.borderColor || 'transparent',
              background: c.gradient,
              '--spotlight-color': 'rgba(0,0,0,0.4)'
            }}
          >
            {/* Hover Black Gradient */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
              }}
            />
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

        {/* Background effects */}
        <div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            backdropFilter: 'grayscale(0.3) brightness(0.85)',
            WebkitBackdropFilter: 'grayscale(0.3) brightness(0.85)',
            background: 'rgba(0,0,0,0.02)',
          }}
        />
        <div
          ref={fadeRef}
          className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
          style={{
            backdropFilter: 'grayscale(0.3) brightness(0.85)',
            WebkitBackdropFilter: 'grayscale(0.3) brightness(0.85)',
            background: 'rgba(0,0,0,0.02)',
            opacity: 1
          }}
        />
      </div>
    </section>
  );
};

export default OurServices;
