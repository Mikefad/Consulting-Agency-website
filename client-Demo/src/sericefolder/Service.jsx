import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// Adjusted paths based on new folder structure
import Header from "../header";
import Footer from "../footer";
import Leadersection from "./leadership";
import Journeysection from "./journey";
import Differencesection from "./differnce";
import Valuesection from "./values";

import logo from '../assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo-removebg-preview.png';
import logo2 from '../assets/logo_no_text2.png';
import logo3 from '../assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo__4_-removebg-preview.png';
import logo4 from '../assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo__3_-removebg-preview.png';

import contactImage2 from '../assets/samson-ZGjbiukp_-A-unsplash.jpg';
import teamPhoto from '../assets/samson-ZGjbiukp_-A-unsplash.jpg';
import mission from '../assets/david-iskander-GTnFf_44e7o-unsplash.jpg';
import difference from '../assets/nathan-dumlao-VJHb4QPBgV4-unsplash.jpg';

import thumbsup from '../assets/thumbs-up.png';
import medal from '../assets/medal.png';
import shuttle from '../assets/shuttle.png';
import missionVision from '../assets/customer.png';
import individuals from '../assets/campaign-creators-gMsnXqILjp4-unsplash.jpg';
import founder from '../assets/successful-businessman.jpg';
import quality from '../assets/istockphoto-2150522257-1024x1024.jpg';


const AboutUsPage = () => {
    // Refs for new sections
    const missionRef = useRef(null);
    const isMissionInView = useInView(missionRef, { once: true, amount: 0.2 });

    const valuesRef = useRef(null);
    const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });

    const differentiatingRef = useRef(null);
    const isDifferentiatingInView = useInView(differentiatingRef, { once: true, amount: 0.2 });

    const journeyRef = useRef(null);
    const isJourneyInView = useInView(journeyRef, { once: true, amount: 0.2 });

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

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const loadAssets = () =>
        Promise.all([
        new Promise(res => {
            const img = new Image();
            img.src = logo4;
            img.onload = res;
        }),
        new Promise(res => {
            const vid = document.createElement('video');
            vid.src = cityvid;
            vid.onloadeddata = res;
        }),
        ]);

    loadAssets()
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false)); // fallback on failure

    const timeout = setTimeout(() => setIsLoading(false), 6000); // fallback

    return () => clearTimeout(timeout);
    }, []);



    useEffect(() => {
    if (isLoading) {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    } else {
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }

    return () => {
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.body.style.position = '';
        document.body.style.width = '';
    };
    }, [isLoading]);




    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        
        <div >
            {/* Always render both Loader and Content */}
            {isLoading && (
               
                    <div className="fixed inset-0 z-50 bg-black text-white flex items-center justify-center">
                    <section className=" bg-black text-white min-h-screen w-full flex flex-col items-center justify-center">
                    
                    <div className="mb-10">
                        <div className="flex text-purple-200 text-3xl lg:text-5xl font-bold cursor-pointer">
                                      
                        <img
                        src={logo4}
                        alt="Top Consultant"
                        className="w-[150px] h-[150px]   pr-2"
                        />
            
                        <div className="flex flex-col  justify-center">
                          <h1 className="text-[35px] font-montserrat">SEEK ALPHA</h1>
                          <h2 className="text-[28px] font-cormorant">Consulting Agency</h2>
                        </div>
            
                        </div>
                    </div>
                    
                    <div className="mb-10">
                    
                    <div className="loader"></div> 
                    </div>
        
                    
                    
                    </section>
                    </div>
        
                  
            )}

            <div className={`${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
            
            

        <div >
            {isScrolled ? (
            <div className="sticky top-0 z-50 backdrop-blur-md transition-colors duration-300">
                <Header/>
                
            </div>) :( <>
                <div className="sticky top-0 z-50 backdrop-blur-md transition-colors duration-300">
        <header
            className={`absolute top-0 z-50 px-4 lg:px-8 max-w-4xl mx-auto my-5 rounded-full transition-colors duration-300 backdrop-blur-md ${
            isScrolled ? "sticky b-[#702963]/90" : "absolute bg-gray-200/10"}`}
        >
            <div className="flex items-center justify-between max-w-4xl mx-auto px-7 py-[5px]">
            <div className="flex text-black text-3xl lg:text-5xl pr-10 font-bold cursor-pointer">
                <img src={logo2} alt="Top Consultant" className="w-[43px] h-[43px] pr-2" />
                <div className="flex flex-col justify-center">
                <h1 className="text-[17px] font-montserrat">SEEK ALPHA</h1>
                <h2 className="text-[14px] font-cormorant">Consulting Agency</h2>
                </div>
            </div>
            <nav className="hidden md:block">
                <ul className="flex space-x-6">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
                {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
            </div>
        </header>
        {isMobileNavOpen && (
        <div className="lg:hidden fixed top-[84px] left-1/2 -translate-x-1/2 w-[90%] z-40 bg-[#181823]/90 backdrop-blur-md rounded-xl p-4 text-white space-y-4 shadow-xl">
    
            <Link to="/" className="block hover:text-gray-300">Home</Link>
            <Link to="/services" className="block hover:text-gray-300">Services</Link>
            <Link to="/blog" className="block hover:text-gray-300">Blog</Link>
            <Link to="/contact" className="block hover:text-gray-300">Contact</Link>
            
            <button className="w-full bg-white text-black py-2 rounded-full mt-2 hover:bg-gray-200">
            Start Project
            </button>
        </div>
        )}
        </div>
                  </>
            )}

            <section className="relative h-screen flex lg:hidden bg-cover bg-center" style={{ backgroundImage: `url(${contactImage2})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/80 to-purple-00/60" />
            <div className="relative z-10 w-full h-full flex items-center justify-center text-center">
                <div className="max-w-md text-center md:text-left">
                    
                    <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold text-[#702963] mb-4 drop-shadow-md"
                    >
                    Our Services
                    </motion.h1>
                    <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-700"
                    >
                    Discover our mission, vision, and the passionate team behind our commitment to excellence. We strive to provide unparalleled service and innovative solutions for our clients.
                    </motion.p>
                    {/* Add more text content or buttons here */}
                </div>
            </div>
            </section>


            {/* Full-page Hero Section */}
            <div className="relative w-full min-h-screen  hidden lg:flex">
                {/* Background Logo Overlay (if still desired) */}
                <img
                src={logo2}
                alt="Background Logo Overlay"
                className="absolute inset-0 w-full h-full object-contain opacity-5 mix-blend-multiply pointer-events-none z-0 transform -rotate-90"
                />

                {/* Left Section: Text Content */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-purple-50 z-10 relative ">
                {/* <img
                    src={logo3}
                    alt="Background Logo Overlay"
                    className="absolute inset-0 w-[170%] h-[170%] transform -translate-y-35  opacity-10 mix-blend-multiply pointer-events-none z-0"
                /> */}
                <div className="max-w-md text-center md:text-left">
                    <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold text-[#702963] mb-4 drop-shadow-md"
                    >
                    Our Services
                    </motion.h1>
                    <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-700"
                    >
                    Discover our mission, vision, and the passionate team behind our commitment to excellence. We strive to provide unparalleled service and innovative solutions for our clients.
                    </motion.p>
                    {/* Add more text content or buttons here */}
                </div>
                </div>

                {/* Right Section: Image */}
                <div
                className="hidden md:block w-full md:w-1/2 bg-cover bg-center relative z-0"
                style={{ backgroundImage: `url(${teamPhoto})` }}
                >
                {/* Optional: Overlay for the image to make text more readable if you decide to put text here */}
                {/* <div className="absolute inset-0 bg-blue-900/40"></div> */}
                </div>
            </div>

            <main className="py-20 bg-gray-50">
                {/* Our Story & Mission */}
                <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-20">
                    <motion.div
                        ref={missionRef}
                        variants={fadeIn}
                        initial="hidden"
                        animate={isMissionInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-4xl font-bold text-center text-[#702963] mb-10">Our Story & Mission</h2>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    At **ℳdev Consulting**, we believe in the transformative power of expert knowledge. Established with a clear vision to bridge the gap between complex business challenges and specialized, actionable solutions, we have meticulously built a reputation as a leading platform. We connect discerning clients with an unparalleled global network of vetted subject matter experts, enabling them to navigate complex landscapes with clarity and confidence.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Our mission is singularly focused: to empower organizations by providing precise, timely, and actionable insights. We are deeply committed to fostering innovation, accelerating sustainable growth, and ensuring that every one of our clients not only meets but consistently exceeds their strategic objectives. We are your partners in achieving enduring success.
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <img src={mission} alt="Our Mission" className="rounded-xl shadow-lg w-full h-auto object-cover" />
                            </div>
                        </div>
                    </motion.div>
                </section>

                <hr className="mx-auto w-1/2 border-gray-300 my-20" />

                {/* Our Values */}
                <Valuesection/>
                

                <hr className="mx-auto w-1/2 border-gray-300 my-20" />

                {/* What Makes Us Different */}
                <Differencesection/>

                <hr className="mx-auto w-1/2 border-gray-300 my-20" />

                {/* Our Journey / Timeline */}
                <Journeysection/>

                <hr className="mx-auto w-1/2 border-gray-300 my-20" />

                {/* Meet Our Leadership */}
                <Leadersection/>
                
            </main>
            <Footer/>
        </div>
        </div>
        </div>
    
    );
    
};

export default AboutUsPage;