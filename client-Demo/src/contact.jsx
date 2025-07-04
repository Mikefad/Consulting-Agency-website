import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "./header";
import Footer from "./footer";
import contactImage from './assets/istockphoto-2094337698-1024x1024.jpg';
import contactImage2 from './assets/business-team-watching-discussing-project-presentation.jpg';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo2 from './assets/logo_no_text2.png';
import logo4 from './assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo__3_-removebg-preview.png';


const ContactPage = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true });

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

      {/* Hero */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${contactImage2})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/80 to-purple-00/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-[#702963] text-5xl font-extrabold drop-shadow-xl">Let’s Talk</h1>
        </div>
      </section>

      {/* Contact Section */}
      <main className="bg-[#f5f8ff] py-24">
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Form */}
          <div className="bg-white shadow-xl p-10 rounded-3xl border border-gray-200">
            <h2 className="text-3xl font-semibold text-[#702963] mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-600 mb-1 capitalize">{field}</label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder={`Your ${field}`}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Write your message here..."
                />
              </div>
              <button type="submit" className="w-full bg-[#702963] text-white py-3 rounded-xl font-medium hover:scale-[1.02] transition-transform duration-200 shadow-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="text-gray-800 space-y-8">
            <div className="bg-purple-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Our Office</h3>
              <p>123 Consultant Ave<br />Suite 400<br />City, State, ZIP</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p>Email: info@mdevconsulting.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Mon–Fri, 9am–5pm</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.292945892556!2d144.9631!3d-37.8162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0ee1c17b%3A0x6d3d9d3d3d3d3d3d!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1678912345678!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer/>
    </div>
    </div>
  );
};

export default ContactPage;
