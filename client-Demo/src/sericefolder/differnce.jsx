import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import quality from '../assets/nathan-dumlao-VJHb4QPBgV4-unsplash.jpg';
import logo from '../assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo__4_-removebg-preview.png';


const Differencesection = () => {

    const differentiatingRef = useRef(null);
    const isDifferentiatingInView = useInView(differentiatingRef, { once: true, amount: 0.2 });


    const leadershipRef = useRef(null);
    const isLeadershipInView = useInView(leadershipRef, { once: true, amount: 0.2 });

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
                        ref={differentiatingRef}
                        variants={fadeIn}
                        initial="hidden"
                        animate={isDifferentiatingInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-4xl font-bold text-center text-[#702963] mb-10">What Makes Us Different</h2>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2 order-2 md:order-1">
                                <ul className="list-disc text-[18px] pl-6 space-y-4">
                                    <motion.li variants={listItemVariants} initial="hidden" animate={isDifferentiatingInView ? "visible" : "hidden"} custom={0} className="text-gray-700">
                                        <strong className="text-gray-900">Global Network, Local Expertise:</strong> Our extensive network spans the globe, ensuring you have access to diverse perspectives and specialized knowledge, no matter your industry or location.
                                    </motion.li>
                                    <motion.li variants={listItemVariants} initial="hidden" animate={isDifferentiatingInView ? "visible" : "hidden"} custom={1} className="text-gray-700">
                                        <strong className="text-gray-900">Rigorous Vetting Process:</strong> Every consultant on our platform undergoes a meticulous vetting process, guaranteeing not just expertise, but also a proven track record of successful engagements.
                                    </motion.li>

                                    <img
                                    src={logo} // Your transparent logo
                                    alt="Background Logo Overlay"
                                    className="absolute  w-full h-full object-contain opacity-10 mix-blend-multiply pointer-events-none z-10 transform -translate-x-120 -translate-y-170"
                                    />

                                    <motion.li variants={listItemVariants} initial="hidden" animate={isDifferentiatingInView ? "visible" : "hidden"} custom={2} className="text-gray-700">
                                        <strong className="text-gray-900">Client-Centric Matching:</strong> We go beyond keywords. Our dedicated team personally understands your project nuances to provide a truly tailored match, ensuring alignment in skills, culture, and goals.
                                    </motion.li>
                                    <motion.li variants={listItemVariants} initial="hidden" animate={isDifferentiatingInView ? "visible" : "hidden"} custom={3} className="text-gray-700">
                                        <strong className="text-gray-900">Seamless Collaboration Tools:</strong> We provide intuitive platforms and support to facilitate smooth communication, project management, and knowledge transfer between clients and consultants.
                                    </motion.li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 order-1 md:order-2">
                                <img src={quality} alt="What Makes Us Different" className="rounded-xl shadow-lg w-full h-auto object-cover" />
                            </div>
                        </div>
                    </motion.div>

                    

                </section>

)}
export default Differencesection