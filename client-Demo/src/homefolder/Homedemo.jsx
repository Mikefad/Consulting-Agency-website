import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import Worksection from "./work";
import Viewsection from "./view";
import Offersection from "./offer";
import Productsection from "./products";

// Assets (go up one level to get to 'src/assets')
import logo from "../assets/Black White Minimalist Simple Monogram Typography Logo (3).png"; // assuming you renamed
import logo2 from "../assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo__2_-removebg-preview.png";
import logo3 from "../assets/Black_White_Minimalist_Simple_Monogram_Typography_Logo__3_-removebg-preview.png";

import CountUp from "react-countup";
import cityvid from "../assets/57860-486852732_small.mp4";

import arrow from "../assets/focus-on-results.png";
import pie from "../assets/pie-chart.png";
import groupsmile from "../assets/istockphoto-2094337698-1024x1024.jpg";



const Homedemopage = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const arrowRefLeft = useRef(null);
    const isInViewArrowLeft = useInView(arrowRefLeft, { once: true });

    const arrowRefRight = useRef(null);
    const isInViewArrowRight = useInView(arrowRefRight, { once: true });


    const textRef = useRef(null);
    const isInView3 = useInView(textRef, { once: true });

    
    const consultingRef = useRef(null);
    const isInView5 = useInView(consultingRef, { once: true });

    const clientRef = useRef(null);
    const isInView6 = useInView(clientRef, { once: true });

    
    const [isLoading, setIsLoading] = useState(true);

    const videoRef = useRef();

    useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);




    

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return(
      isLoading ? (
            
            <section className="bg-black text-white min-h-screen w-full flex flex-col items-center justify-center">
            
            <div className="mb-10">
                <div className="flex text-purple-200 text-3xl lg:text-5xl font-bold cursor-pointer">
                              
                <img
                src={logo3}
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

          
        ) : (
    <>
    <Header/>
    
    {/* Background Video - placed right below header */}
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
    >
      <source src={cityvid} type="video/mp4" />
      
    </video>
      
    {/* Blue overlay with nice transparency */}
    <div className="absolute top-0 left-0 w-full h-screen bg-blue-900/50 -z-10 mix-blend-multiply"></div>
      
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent transform translate-y-40 z-20" />
    <main >
    
    <section id="intro"  className="relative  overflow-hidden pt-7 pb-13 -mt-13 z-20 px-4" >
      
      {/* Hero Content */}
      <div  className="relative flex flex-col-reverse lg:flex-row items-center px-4 pt-24 lg:pt-32 lg:px-36 max-w-7xl mx-auto z-10 gap-12">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-left max-w-2xl">

          <motion.div
           initial={{ opacity: 0, y: -50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.6 }}
           
          > 
          <h1 className="text-purple-50 font-lg text-4xl sm:text-5xl md:text-[40px] leading-tight mb-7">
            Find the right consultant for your project needs.
          </h1>

          <p className="text-purple-50 mb-8 text-lg sm:text-[13px] font-md uppercase tracking-wide">
          Seek Alpha Consulting connects clients with vetted subject matter experts—Advisors—from our global professional network. 
          </p>
          </motion.div>
          
          <motion.div
           initial={{ opacity: 0, x: -60 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.3, duration: 0.6 }}
           
          >
            <div className="flex flex-row gap-4">
            <button className="border border-[#702963] hover:bg-blue-800 text-white font-semibold py-2 px-6 shadow transition-all duration-300">
              For Clients
            </button>
            <button className="border border-[#702963] hover:bg-gray-300 text-gray-200 font-semibold py-2 px-6 shadow transition-all duration-300">
              For Experts
            </button>

            
          </div>

          </motion.div>
          
        </div>
        
        </div>
        


        <div className="flex flex-col md:flex-row gap-6 max-w-[920px] mx-auto mt-10 ">
          
          {/* Left - 2/3 */}
          

          <motion.div
           initial={{ opacity: 0, x: -60 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.3, duration: 0.6 }}
           className="w-full md:w-1/3  bg-[#702963] backdrop-blur-md p-8 rounded-2xl shadow-lg pt-15 "
          >
            <div className="text-[110px] font-bold text-black pb-10">
              <CountUp
                start={0}
                end={250}
                duration={3}
                suffix="+"
                enableScrollSpy
                scrollSpyOnce
              />

              <p className="text-white text-sm mt-2">Satisfied Clients</p>
            </div>


            <h3 className="text-xl font-semibold mb-2">Empowered with tailored solutions</h3>
            <p className="text-gray-700">This area takes two-thirds of the width on larger screens.</p>
            
            
            
          </motion.div>
          

          <motion.div
           initial={{ opacity: 0, y: -50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.6 }}
           className="flex w-full md:w-2/3 bg-[#1f2b38] p-6 rounded-l-4xl shadow-lg pt-40 pb-30"
          >
            {/* Left side */}
            <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
              <img
              src={arrow}
              alt="Top Consultant"
              class="w-[120px] h-[120px]  mb-5 filter invert brightness-0"
              />

              <h3 className="text-xl text-purple-200 font-semibold mb-2">Right Section</h3>
              <p className="text-purple-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur tempora molestias consequuntur, nam voluptate expedita culpa voluptatum provident. Dolores, architecto? Commodi esse quaerat vero eum quasi cum quod possimus.</p>
          
              </div>
              
            </motion.div>
            </AnimatePresence>
            {/* Vertical Divider */}
            <div className="w-px bg-gray-500 mx-4"></div>

            {/* Right side */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            <div className="flex-1 pl-4">
            <img
              src={pie}
              alt="Top Consultant"
              className="w-[90px] h-[90px] mb-4 filter invert brightness-0"
            />


                <h3 className="text-xl text-purple-200 font-semibold mb-2">Right Section</h3>
                <p className="text-purple-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, obcaecati dignissimos possimus architecto doloremque praesentium adipisci laborum labore, quibusdam velit optio est quisquam molestias et. Nam veniam possimus ullam recusandae.</p>
            </div>
            </motion.div>


          </motion.div>
        </div>

      <hr className="mx-auto mt-20 w-1/2 border-black" />



      <div className="flex text-purple-200 text-3xl lg:text-7xl justify-center font-bold cursor-pointer pt-20">
                    
      <img
      src={logo}
      alt="Top Consultant"
      className="w-[250px] h-[250px]   pr-2"
      />

      <div className="flex flex-col  justify-center">
        <h1 className="text-[70px] font-montserrat">SEEK ALPHA</h1>
        <h2 className="text-[60px] font-cormorant">Consulting Agency</h2>
      </div>

      </div>

      

      <div className="flex flex-col sm:flex-row max-w-4xl mx-auto mt-10 gap-6 px-4">
      {/* Image Section */}
      <div className="w-full sm:w-2/3">
        <img
          src={groupsmile}
          alt="Top Consultant"
          className="w-full h-auto max-h-[390px] mb-4 rounded-xl object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full sm:w-1/3">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl text-[#702963] font-bold mb-5 sm:mb-7">Who We Are</h1>
        </motion.div>

        <ul className="list-disc text-sm pl-5 space-y-3">
          <li className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dolorum iste corrupti repellendus hic quam nobis ratione facere ad deleniti accusantium! Nisi voluptatem recusandae sint ratione perspiciatis officiis corporis necessitatibus.
          </li>
          <li className="text-gray-500">
            Earum recusandae dolores enim quaerat iure iusto molestiae quos vitae quo, dolorum iste corrupti repellendus.
          </li>
          <li className="text-black">
            Necessitatibus ab, reiciendis explicabo, doloremque mollitia non deserunt nam.
          </li>
          <li className="text-gray-500">
            Quisquam, dolorum iste corrupti repellendus error?
          </li>
        </ul>
      </div>
    </div>


      
    </section>

    
    
    <Offersection/>
      
    <Productsection/>


    {/* SECTION 1: PRODUCTS */}
  

  <Worksection/>
  
  {/* DIVIDER */}
  <hr className="mx-auto bg-gray-200 mt-16 mb-16 w-1/2" />

  {/* SECTION 3: OUR POINT OF VIEW */}
  <Viewsection/>


    <Footer/>
    </main>
        
    </>)
    );
}
export default Homedemopage