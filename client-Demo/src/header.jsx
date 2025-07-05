import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from './assets/logo_no_text2.png';
import logo2 from './assets/cropped_logo_2.png';



const Header = () => {
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
    <>
    
    <header className={`sticky top-0 z-50 px-4 lg:px-8 max-w-4xl mx-auto my-5 rounded-full transition-colors duration-300 backdrop-blur-md ${ 
        isScrolled ? "bg-[#1f2b38]/90" : "bg-gray-200/10"}`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto px-7 py-[5px]">
            {/* Logo */}
            <div className="flex text-[#e3edff] text-3xl lg:text-5xl font-bold cursor-pointer">
              
            <img
            src={logo}
            alt="Top Consultant"
            class="w-[43px] h-[43px]  filter invert brightness-0 pr-2"
            />

            <div className="flex flex-col  justify-center">
              <h1 className="text-[17px] font-montserrat">SEEK ALPHA</h1>
              <h2 className="text-[14px] font-cormorant">Consulting Agency</h2>
            </div>

            </div>

            <nav className="hidden md:block">
          <ul className="flex space-x-6 text-[#e3edff]">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
            <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            
          </ul>
        </nav>

        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="md:hidden p-2 rounded-full text-[#e3edff] hover:bg-gray-700 transition-colors"
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


      </>
  );
};

export default Header;
