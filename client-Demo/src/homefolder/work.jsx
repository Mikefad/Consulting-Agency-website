import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";

import logo3 from "../assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo__4_-removebg-preview.png";


import thumbsup from "../assets/thumbs-up.png";
import medal from "../assets/medal.png";
import shuttle from "../assets/shuttle.png";
import success from "../assets/success.png";
import businessman from "../assets/successful-businessman.jpg";



const Worksection = () => {

    

return(
  <section id="how-it-works" className="relative py-16 bg-purple-50 overflow-hidden">

    {/* Background Logo Overlay */}
    <img
      src={logo3}
      alt="Background Logo Overlay"
      className="absolute inset-0 w-[60%] h-[60%] object-contain opacity-20 mix-blend-multiply pointer-events-none z-0 transform translate-x-160 -translate-y-30"
    />
    
    {/* Section content is placed in a relative container to stack above the logo */}
    <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[#702963] text-5xl font-bold mb-4">How it works?</h1>
          <h2 className="text-lg text-gray-700 text-center mb-3">We find the perfect consultant for you in four simple steps. No joke.</h2>
          <hr className="w-14 h-1 bg-[#702963] mx-auto mb-10" />
        </div>
      </div>

      <div className="container mx-auto text-black p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Text Columns take 2/3 of the space on large screens */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <img src={thumbsup} alt="Requirements Icon" className="w-[60px] h-[60px] mb-2" />
              <h2 className="text-2xl text-[#702963] font-bold mb-2">Tell us your requirements</h2>
              <p className="text-gray-600">After you confidentially submit your brief, we’ll have a member of our team talk to you to confirm your project needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <img src={shuttle} alt="Start Work Icon" className="w-[60px] h-[60px] mb-2" />
              <h2 className="text-2xl text-[#702963] font-bold mb-2">Start your work</h2>
              <p className="text-gray-600">We handpick the best available candidates for your needs from our pool of pre-vetted consultants. The final choice is all yours.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <img src={medal} alt="Choose Favorite Icon" className="w-[60px] h-[60px] mb-2" />
              <h2 className="text-2xl text-[#702963] font-bold mb-2">Choose your favorite</h2>
              <p className="text-gray-600">We handpick the best available candidates for your needs from our pool of prevetted consultants. The final choice is all yours.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <img src={success} alt="Taste Success Icon" className="w-[60px] h-[60px] mb-2" />
              <h2 className="text-2xl text-[#702963] font-bold mb-2">Taste the success</h2>
              <p className="text-gray-600">From onboarding to delivery, we’re here every step of the way to guarantee quality and accountability.</p>
            </div>
          </div>
          {/* Image takes 1/3 of the space on large screens */}
          <div className="flex justify-center items-center">
            <img src={businessman} alt="Consultant" className="w-full max-w-sm h-auto object-cover rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
)}
export default Worksection