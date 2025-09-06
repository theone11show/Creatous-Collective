import React from 'react';
import Header from "../components/Header"
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import OurBrands from "../components/OurBrands";

const Home = () => {
	return (
		<div>
		<Header/>
		<HeroSection/>
		<AboutSection/>
		<OurBrands/>
		</div>
	)
}

export default Home