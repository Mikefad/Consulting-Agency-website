import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import Worksection from "./work";


import plant from "../assets/3679565.jpg";
import tech from "../assets/istockphoto-157290117-1024x1024.jpg";
import mining from "../assets/view-heavy-machinery-used-construction-industry.jpg";


const Viewsection = () => {

    

return(
  <section id="insights">
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-[#702963] text-5xl text-center font-bold mb-16">Our Point Of View</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-purple-50 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <img src={plant} alt="ESG for Mining Industry" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl text-[#702963] font-semibold mb-2">ESG Goals for Mining Industry</h3>
            <p className="text-gray-600">ESG stands for Environmental, Social, and Governance, and it has become an essential framework for evaluating...</p>
          </div>
        </div>
        <div className="bg-purple-50 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <img src={mining} alt="Trends in Mining" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl text-[#702963] font-semibold mb-2">Trends that will affect future of Mining</h3>
            <p className="text-gray-600">Overall, the mining industry is undergoing significant changes as companies adapt to new technologies...</p>
          </div>
        </div>
        <div className="bg-purple-50 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <img src={tech} alt="Technology in Mining" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl text-[#702963] font-semibold mb-2">Technology Disrupting the Mining Industry</h3>
            <p className="text-gray-600">Technology has played a crucial role in the mining industry for many years, helping to improve efficiency...</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)}
export default Viewsection