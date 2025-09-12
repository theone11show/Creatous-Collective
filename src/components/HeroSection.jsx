import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import OurBrands from "../components/OurBrands";
import OurMission from "../components/OurMission";
import OurGoals from "../components/OurGoals";
import OurVision from "../components/OurVision";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";

// ✅ Import logo from assets
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div id="Home">
      {/* Pass logo to Header if needed */}
      <Header logo={logo} />

      {/* Push content below fixed header */}
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

export default Home;
