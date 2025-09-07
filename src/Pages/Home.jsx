import React from 'react';
import Header from "../components/Header"
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import OurBrands from "../components/OurBrands";
import OurMission from "../components/OurMission";

const Home = () => {
	return (
		<div>
		<Header/>
		<HeroSection/>
		<AboutSection/>
		<OurBrands/>
		<OurMission/>
		</div>
	)
}


export default Home
