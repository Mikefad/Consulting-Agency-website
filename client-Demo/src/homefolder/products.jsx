import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import Worksection from "./work";
import Viewsection from "./view";
import Offersection from "./offer";

const Productsection = () => {

    

return(
  <section id="products" className="relative bg-purple-200 py-20 overflow-hidden">

    {/* Background Logo Overlay */}
    
    {/* Section content is placed in a relative container to stack above the logo */}
    <div className="relative z-10">
      <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -mt-12">
        <h2 className="text-4xl font-bold text-center text-[#702963] bg-white w-auto px-6 h-[60px] flex items-center justify-center rounded-lg shadow-md">Products</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-36 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Product 1 */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="text-xl text-[#702963] font-semibold mb-2">Product Title 1</h3>
            <p className="text-gray-700">Brief description about this product and how it provides value.</p>
          </div>
          {/* Product 2 */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="text-xl text-[#702963] font-semibold mb-2">Product Title 2</h3>
            <p className="text-gray-700">Another short description that reflects what this product offers.</p>
          </div>
          {/* Product 3 */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="text-xl text-[#702963] font-semibold mb-2">Product Title 3</h3>
            <p className="text-gray-700">Small blurb explaining the use case or benefit of this product.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)}
export default Productsection