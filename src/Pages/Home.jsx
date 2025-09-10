import React from 'react';
import Header from "../components/Header"
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import OurBrands from "../components/OurBrands";
import OurMission from "../components/OurMission";
import OurGoals from "../components/OurGoals";
import OurVision from "../components/OurVision"
const Home = () => {
	return (
		<div className="overflow-x-hidden">
		<Header/>
		<HeroSection/>
		<AboutSection/>
		<OurGoals/>
		<OurMission/>
		<OurVision/>
		<OurBrands/>
		
		</div>
	)
}

export default Home


