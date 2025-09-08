import React from 'react';
import Header from "../components/Header"
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import OurBrands from "../components/OurBrands";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";


const Home = () => {
	return (
		<div>
		<Header/>
		<HeroSection/>
		<AboutSection/>
		<OurBrands/>
		<OurMission/>
		<OurVision/>
		</div>
	)
}


export default Home

