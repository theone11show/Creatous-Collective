const Home = () => {
  return (
    <div id="Home">
      <Header />

      {/* Add padding-top to push content below fixed header */}
      <div className="pt-[90px]">
        <HeroSection />
        <AboutSection />
        <OurGoals />
        <OurMission />
        <OurVision />

        <div id="our-brands">
          <OurBrands />
        </div>

        <div id="our-services">
          <OurServices />
        </div>

        <Footer />
      </div>
    </div>
  );
};
