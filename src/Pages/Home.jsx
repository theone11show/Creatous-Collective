import React from 'react'; 
import Header from "../components/Header" 
import HeroSection from "../components/HeroSection"; 
import AboutSection from "../components/AboutSection"; 
import OurBrands from "../components/OurBrands"; 
import OurMission from "../components/OurMission"; 
import OurGoals from "../components/OurGoals";
 import OurVision from "../components/OurVision";
 import OurServices from "../components/OurServices";
 import Footer from "../components/Footer"

const Home = () => {
  return (
    <div id="Home">
     <div><Header/>
     </div>
      
      <HeroSection />
      <AboutSection />
      <OurGoals />
      <OurMission />
      <OurVision />
     <div id="our-brands">
  <OurBrands />
</div>
<div id="our-services">
 <OurServices/>
</div>
      
      <Footer/>
    </div>
  );
};
export default Home;

