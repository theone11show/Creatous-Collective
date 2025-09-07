import React from 'react';
import { motion } from 'framer-motion';
import Mission1 from "../assets/1.jpg"
import Mission2 from "../assets/2.jpg"
import Mission3 from "../assets/3.jpg"

const OurMission = () => {
    return (
        <section className="bg-black text-white py-16 px-6 md:px-12 flex flex-col  relative">
            {/* Our Mission Content Container */}
            <motion.div
                className="bg-[#e6e6e6] rounded-r-xl shadow-lg py-8 md:py-12 pr-8 md:pr-12 text-left border-t border-b border-r border-gray-700 max-w-4xl z-10 w-full md:w-1/2"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 text-black font-montserrat">
                    Our Mission
                </h2>
                <p className="text-lg md:text-xl text-black leading-relaxed font-montserrat">
                    Our core mission is to remove the word "uncertainty" from every creative career, with a particular focus on the fields of Music, Art, and Entertainment. We aim to achieve this by actively spreading awareness that successful and fulfilling livelihoods are not exclusive to traditional professions like doctors and engineers, but can also be robustly built and sustained through careers in the creative fields.
                </p>
            </motion.div>
            
            {/* Image Cluster */}
            <div className="relative mt-16 md:mt-0 md:ml-auto w-full md:w-1/2 flex flex-col items-end">
                <div className="relative w-full h-auto" style={{ paddingTop: '56.25%' }}> {/* Maintain aspect ratio for container */}
                    <motion.img
                        src={Mission1}
                        alt="Recording Studio Session"
                        className="absolute w-64 h-auto rounded-lg shadow-lg rotate-0 object-cover z-20 top-0 right-1/2 translate-x-1/2"
                        whileHover={{ scale: 1.1, zIndex: 30 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.img
                        src={Mission2}
                        alt="Musicians collaborating"
                        className="absolute w-64 h-auto rounded-lg shadow-lg -rotate-12 object-cover z-10 top-32 left-0"
                        whileHover={{ scale: 1.1, rotate: -15, zIndex: 30 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.img
                        src={Mission3}
                        alt="Live art performance"
                        className="absolute w-64 h-auto rounded-lg shadow-lg rotate-12 object-cover z-10 top-32 right-0"
                        whileHover={{ scale: 1.1, rotate: 15, zIndex: 30 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>
        </section>
    );
};
 
export default OurMission;
