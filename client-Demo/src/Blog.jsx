import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "./header";
import Footer from "./footer";
import logo from './assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo-removebg-preview.png';
import logo2 from './assets/logo_no_text2.png';
import logo4 from './assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo__3_-removebg-preview.png';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Assuming these paths are correct and images are suitable
import strategyConsulting from './assets/patrick-tomasso-fMntI8HAAB8-unsplash.jpg';
import digitalTransformation from './assets/ux-indonesia-2NDWFiD0UMM-unsplash.jpg';
import marketResearch from './assets/arlington-research-Kz8nHVg_tGI-unsplash.jpg';
import operationsExcellence from './assets/acrelia-gcXbTYQcJIs-unsplash.jpg';
import financialAdvisory from './assets/campaign-creators-gMsnXqILjp4-unsplash.jpg';
import talentManagement from './assets/successful-businessman.jpg';


import teamPhoto from './assets/top-view-people-working-with-laptops.jpg';

const ServicesPage = () => {
    // Refs for each major section to trigger animations
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });

    const solutionsRef = useRef(null);
    const isSolutionsInView = useInView(solutionsRef, { once: true, amount: 0.2 });

    const howWeDeliverRef = useRef(null);
    const isHowWeDeliverInView = useInView(howWeDeliverRef, { once: true, amount: 0.2 });

    const whyChooseUsRef = useRef(null);
    const isWhyChooseUsInView = useInView(whyChooseUsRef, { once: true, amount: 0.2 });


    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
  let resolved = false;

  const waitForImages = () => {
    const images = Array.from(document.images); // all <img> in DOM

    return Promise.all(
      images.map(img => {
        if (img.complete && img.naturalHeight !== 0) return Promise.resolve();
        return new Promise((res, rej) => {
          img.onload = res;
          img.onerror = rej;
        });
      })
    );
  };

  const waitForVideos = () => {
    const videos = Array.from(document.querySelectorAll("video")); // all <video> in DOM

    return Promise.all(
      videos.map(video => {
        if (video.readyState >= 3) return Promise.resolve();
        return new Promise((res, rej) => {
          const onReady = () => {
            video.removeEventListener("loadeddata", onReady);
            video.removeEventListener("error", rej);
            res();
          };
          video.addEventListener("loadeddata", onReady);
          video.addEventListener("error", rej);
        });
      })
    );
  };

  const timeout = setTimeout(() => {
    if (!resolved) setIsLoading(false);
  }, 8000); // optional fallback

  Promise.all([waitForImages(), waitForVideos()])
    .then(() => {
      resolved = true;
      clearTimeout(timeout);
      setIsLoading(false);
    })
    .catch(() => {
      resolved = true;
      clearTimeout(timeout);
      setIsLoading(false); // even on error, allow fallback
    });

  return () => clearTimeout(timeout);
}, []);




    // Animation variants for consistency and reusability
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

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
        {/* Header */}
        {isScrolled ? (
            <div className="sticky top-0 z-50 backdrop-blur-md transition-colors duration-300">
                <Header/>
                
            </div>) :( <>
                <div className="sticky top-0 z-50 backdrop-blur-md transition-colors duration-300">
        <header
            className={`absolute top-0 z-50 px-4 lg:px-8 max-w-4xl mx-auto my-5 rounded-full transition-colors duration-300 backdrop-blur-md ${
            isScrolled ? "sticky b-[#702963]/90" : "absolute bg-gray-200/10"}`}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto px-7 py-[5px]">
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

        {/* Hero / About Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-purple-50 px-6 pt-28 overflow-hidden">
            <img
            src={logo2}
            alt="Background logo"
            className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none -z-10"
            />
            <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto gap-10">
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-[#702963]">Blog</h1>
                <p className="text-gray-700 text-lg">
                Discover our mission, vision, and the passionate team behind our commitment to excellence.
                </p>
                <button className="bg-[#702963] text-white px-6 py-2 rounded-xl hover:bg-blue-800 transition">Learn More</button>
            </div>
            <div
                className="w-full md:w-1/2 h-[400px] bg-cover bg-center rounded-xl shadow-md"
                style={{ backgroundImage: `url(${teamPhoto})` }}
            />
            </div>
        </section>

        {/* Solutions Section */}
        <main className="py-20 bg-gray-50">
            <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-20">

            <motion.div
                ref={solutionsRef}
                variants={fadeIn}
                initial="hidden"
                animate={isSolutionsInView ? "visible" : "hidden"}
            >
                <h2 className="text-4xl font-bold text-center text-[#702963] mb-10">
                Solutions Tailored for Your Success
                </h2>
                <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
                At <strong>ℳdev Consulting</strong>, we offer a comprehensive suite of consulting services...
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    <img
                    src={logo2} // Your transparent logo
                    alt="Background Logo Overlay"
                    className="absolute  w-[130%] h-[130%] object-contain opacity-10 mix-blend-multiply pointer-events-none z-0"
                    />

                {[strategyConsulting, digitalTransformation, operationsExcellence, financialAdvisory, talentManagement, marketResearch].map((img, i) => (
                    <motion.div
                    key={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isSolutionsInView ? "visible" : "hidden"}
                    custom={i}
                    className="relative z-10 bg-purple-50 p-8 rounded-lg shadow-md border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300"
                    >
                    <img src={img} alt="Service" className="w-full h-48 object-cover rounded-md mb-6" />
                    <h3 className="text-2xl font-semibold mb-3 text-[#702963]">Service Title {i + 1}</h3>
                    <p className="text-gray-600">Service description goes here for offering {i + 1}.</p>
                    </motion.div>
                ))}
                </div>
            </motion.div>
            </section>

            {/* Blog Section */}
            <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-20">
            <h2 className="text-4xl font-bold text-center text-[#702963] mb-10">Latest Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[1, 2, 3].map((i) => (
                <div key={i} className="bg-purple-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6">
                    <img src={teamPhoto} alt={`Blog ${i}`} className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-semibold text-[#702963] mb-2">Blog Title {i}</h3>
                    <p className="text-gray-600 mb-4">Brief description of blog post {i}. Learn about strategies and trends in consulting.</p>
                    <a href="#" className="text-blue-600 hover:underline">Read more →</a>
                </div>
                ))}
            </div>
            </section>
            
        </main>
        <Footer/>
        </div>
        </div>
    );
};

export default ServicesPage;