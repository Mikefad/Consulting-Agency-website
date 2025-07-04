import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Assets (go up one level to get to 'src/assets')

import logo2 from "../assets/logo_no_text2.png";

import analytic from "../assets/analytic.png";
import rating from "../assets/customer.png";
import shape from "../assets/shape.png";


const Offersection = () => {

    const headRef = useRef(null);
    const isInView4 = useInView(headRef, { once: true });

return(
  <section id="portfolio" className="relative py-24 bg-white overflow-hidden">

      {/* Subtle, Centered Background Logo */}
      <img
        src={logo2} // Your transparent logo
        alt="Background Logo Overlay"
        className="absolute inset-0 w-full h-full object-contain opacity-10 mix-blend-multiply pointer-events-none z-0"
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <motion.div
            ref={headRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl text-[#702963] md:text-5xl font-bold  max-w-4xl mx-auto mb-6">
              Access the best management consultants and digital experts through our platform.
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Seek Alpha Consulting connects clients with vetted subject matter experts—Advisors—from our global professional network. Our clients leverage the insights and perspectives shared by our Advisors.
            </p>
            <hr className="w-16 h-1 bg-[#702963] mx-auto mb-16" />
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: Top Consultants */}
            <div className="bg-purple-50 p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 border border-gray-200/80 transition-all duration-300 ease-in-out group">
              <img
                src={shape}
                alt="Top Consultants Icon"
                className="w-20 h-20 mb-6 filter hue-rotate-[270deg] saturate-[150%]"
              />
              <h3 className="text-2xl font-semibold text-[#702963] mb-4">
                Top Consultants
              </h3>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">&#10003;</span>
                  <span>sint ratione perspiciatis officiis.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">&#10003;</span>
                  <span>Earum recusandae dolores.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">&#10003;</span>
                  <span>Necessitatibus ab, reiciendis explicabo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">&#10003;</span>
                  <span>Quisquam, dolorum iste corrupti.</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Client-focused service */}
            <div className="bg-purple-50 p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 border border-gray-200/80 transition-all duration-300 ease-in-out group">
              <img
                src={analytic}
                alt="Client Focus Icon"
                className="w-20 h-20 mb-6"
              />
              <h3 className="text-2xl font-semibold text-[#702963] mb-4">
                Client-Focused Service
              </h3>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">&#10003;</span>
                  <span>sint ratione perspiciatis officiis.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">&#10003;</span>
                  <span>Earum recusandae dolores.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">&#10003;</span>
                  <span>Necessitatibus ab, reiciendis explicabo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">&#10003;</span>
                  <span>Quisquam, dolorum iste corrupti.</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Quality Assurance */}
            <div className="bg-purple-50 p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 border border-gray-200/80 transition-all duration-300 ease-in-out group">
              <img
                src={rating}
                alt="Quality Assurance Icon"
                className="w-20 h-20 mb-6"
              />
              <h3 className="text-2xl font-semibold text-[#702963] mb-4">
                Quality Assurance
              </h3>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">&#10003;</span>
                  <span>sint ratione perspiciatis officiis.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">&#10003;</span>
                  <span>Earum recusandae dolores.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">&#10003;</span>
                  <span>Necessitatibus ab, reiciendis explicabo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">&#10003;</span>
                  <span>Quisquam, dolorum iste corrupti.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    </section>
)}
export default Offersection