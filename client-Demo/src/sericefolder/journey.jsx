import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


import logo from '../assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo-removebg-preview.png';
import logo2 from '../assets/logo_no_text2.png';


const Journeysection = () => {

    const journeyRef = useRef(null);
    const isJourneyInView = useInView(journeyRef, { once: true, amount: 0.2 });


    // Animation variants for consistent styling
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

return(
  <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-20">
        <motion.div
            ref={journeyRef}
            variants={fadeIn}
            initial="hidden"
            animate={isJourneyInView ? "visible" : "hidden"}
        >
            <h2 className="text-4xl font-bold text-center text-[#702963] mb-12">Our Journey: Milestones of Growth</h2>
            <div className="relative border-l-4 border-[#702963] pl-8 md:pl-16 py-6">
                {/* Timeline Item 1 */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isJourneyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-8 flex items-center w-full relative z-10"
                >
                    <div className="absolute w-6 h-6 bg-[#702963] rounded-full -left-3 border-4 border-white"></div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full ml-auto md:ml-0 md:w-3/4">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">2010: Founding & Initial Vision</h3>
                        <p className="text-gray-700">ℳdev Consulting was founded by Jane Doe with the aim of revolutionizing how businesses access high-level expertise.</p>
                    </div>
                </motion.div>

                {/* Timeline Item 2 */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isJourneyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-8 flex items-center w-full relative z-10"
                >
                    <div className="absolute w-6 h-6 bg-[#702963] rounded-full -left-3 border-4 border-white"></div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full ml-auto md:ml-0 md:w-3/4">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">2015: Expanding Global Network</h3>
                        <p className="text-gray-700">Significant growth in our consultant network, reaching over 500 vetted experts across diverse industries and continents.</p>
                    </div>
                </motion.div>
                
                <img
                src={logo2}
                alt="Background Logo Overlay"
                className="absolute inset-0 w-full h-full object-contain opacity-10 mix-blend-multiply pointer-events-none z-0 overflow-hidden"
                />


                {/* Timeline Item 3 */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isJourneyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-8 flex items-center w-full relative z-10"
                >
                    <div className="absolute w-6 h-6 bg-[#702963] rounded-full -left-3 border-4 border-white"></div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full ml-auto md:ml-0 md:w-3/4">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">2020: Launch of Digital Solutions Platform</h3>
                        <p className="text-gray-700">Introduced our proprietary digital platform to streamline client-consultant matching and project management.</p>
                    </div>
                </motion.div>

                {/* Timeline Item 4 */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isJourneyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mb-8 flex items-center w-full relative z-10"
                >
                    <div className="absolute w-6 h-6 bg-[#702963] rounded-full -left-3 border-4 border-white"></div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full ml-auto md:ml-0 md:w-3/4">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Present: Leading the Consulting Frontier</h3>
                        <p className="text-gray-700">Continuously innovating and expanding our service offerings to remain at the forefront of consulting, adapting to future market needs.</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
)}
export default Journeysection