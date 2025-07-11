import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";



import thumbsup from '../assets/thumbs-up.png';
import medal from '../assets/medal.png';
import shuttle from '../assets/shuttle.png';


const Valuesection = () => {

    const valuesRef = useRef(null);
    const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });

    
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
                        ref={valuesRef}
                        variants={fadeIn}
                        initial="hidden"
                        animate={isValuesInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-4xl font-bold text-center text-[#702963] mb-10">Our Approach</h2>
                        <p className="text-lg text-gray-700 text-center">
                        Our services are anchored in deep analysis, strategic clarity, and close collaboration. We align our consulting approach with your vision and execution needs.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div variants={cardVariants} initial="hidden" animate={isValuesInView ? "visible" : "hidden"} custom={0}
                                className="bg-purple-50 p-8 rounded-lg shadow-md border border-gray-200 text-center">
                                <img src={medal} alt="Excellence" className="w-[60px] h-[60px] mx-auto mb-4 filter hue-rotate-[270deg] saturate-[150%]" />
                                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Insight-Driven</h3>
                                <p className="text-gray-600">We combine data, market research, and experience to shape winning strategies.</p>
                            </motion.div>
                            <motion.div variants={cardVariants} initial="hidden" animate={isValuesInView ? "visible" : "hidden"} custom={1}
                                className="bg-purple-50 p-8 rounded-lg shadow-md border border-gray-200 text-center">
                                <img src={thumbsup} alt="Integrity" className="w-[60px] h-[60px] mx-auto mb-4 filter hue-rotate-[270deg] saturate-[150%]" />
                                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Hands-On </h3>
                                <p className="text-gray-600">Our consultants don’t just recommend — they build, guide, and deliver with your team.</p>
                            </motion.div>
                            <motion.div variants={cardVariants} initial="hidden" animate={isValuesInView ? "visible" : "hidden"} custom={2}
                                className="bg-purple-50 p-8 rounded-lg shadow-md border border-gray-200 text-center">
                                <img src={shuttle} alt="Innovation" className="w-[60px] h-[60px] mx-auto mb-4 filter hue-rotate-[270deg] saturate-[150%]" />
                                <h3 className="text-2xl font-semibold mb-3 text-gray-900">ROI-Focused </h3>
                                <p className="text-gray-600">We define success by outcomes that move your business forward.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
)}
export default Valuesection