import { motion, useInView } from "framer-motion";
import { useRef } from "react";


import founder from '../assets/successful-businessman.jpg';


const Leadersection = () => {

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
  <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <motion.div
            ref={leadershipRef}
            variants={fadeIn}
            initial="hidden"
            animate={isLeadershipInView ? "visible" : "hidden"}
        >
            <h2 className="text-4xl font-bold text-center text-[#702963] mb-10">Meet Our Leadership</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isLeadershipInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="md:w-1/2"
                >
                    <img src={founder} alt="Founder Photo" className="rounded-xl shadow-lg w-full h-auto object-cover" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isLeadershipInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="md:w-1/2"
                >
                    <h3 className="text-3xl font-semibold mb-3 text-[#702963]">Jane Doe, CEO & Founder</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Jane Doe is the visionary behind ℳdev Consulting, an enterprise she meticulously built from the ground up with an unwavering commitment to excellence. With over two decades of invaluable experience in the dynamic field of management consulting, and a profound, nuanced understanding across a multitude of industries, Jane identified a critical need in the market. She founded the company to engineer a more efficient, transparent, and ultimately more effective pathway for businesses of all scales to access highly specialized expertise.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Her distinctive leadership style is characterized by its emphatic client-centricity, a steadfast dedication to unparalleled quality in every deliverable, and a passionate commitment to cultivating a truly collaborative and empowering environment for both clients and consultants. Under her insightful guidance, ℳdev Consulting has successfully navigated and guided countless clients through their most critical strategic initiatives, consistently not just meeting, but profoundly exceeding their expectations, forging pathways to sustainable success.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isLeadershipInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="mt-6 flex flex-wrap gap-4"
                    >
                        <a href="#" className="bg-[#702963] hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 shadow-md">
                            Connect on LinkedIn
                        </a>
                        <a href="#" className="border border-[#702963] hover:bg-blue-100 text-[#702963] font-semibold py-2 px-5 rounded-full transition-all duration-300 shadow-md">
                            Our Team Page
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    </section>
)}
export default Leadersection