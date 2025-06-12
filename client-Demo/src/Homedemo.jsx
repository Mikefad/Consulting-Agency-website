import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import cityvid from './assets/21985-323496013_small.mp4';
import plant from './assets/3679565.jpg';
import individuals from './assets/campaign-creators-gMsnXqILjp4-unsplash.jpg';
import consulting from './assets/istockphoto-2167817669-1024x1024.jpg';
import quality from './assets/istockphoto-2150522257-1024x1024.jpg';
import thumbsup from './assets/thumbs-up.png';
import medal from './assets/medal.png';
import shuttle from './assets/shuttle.png';
import success from './assets/success.png';
import businessman from './assets/successful-businessman.jpg';
import tech from './assets/istockphoto-157290117-1024x1024.jpg';
import mining from './assets/view-heavy-machinery-used-construction-industry.jpg';



const Homedemopage = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
    <>

    <header className={`sticky top-0 z-50 px-4 lg:px-8 shadow-md shadow-gray-700 transition-colors duration-300 ${isScrolled ? "bg-[#181823]" : "bg-transparent"}`}>
    <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-blue-500 text-3xl lg:text-5xl font-bold cursor-pointer">
        ℳdev
        </div>

        {/* Navigation */}
        <nav>
        <ul className="flex items-center space-x-5 lg:space-x-8 text-sm lg:text-lg font-medium">
            <li className="hover:text-[#f8f8f8] text-[#f8f8f8] transition cursor-pointer">About</li>
            <li className="hover:text-gray-400 text-[#f8f8f8] border border-indigo-700 py-2 px-4 rounded-full transition cursor-pointer">service</li>
            <li className="hover:text-gray-400 text-[#f8f8f8] transition cursor-pointer">Contact</li>
        </ul>
        </nav>
    </div>
    </header>

    {/* Background Video - placed right below header */}
    <video
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
    >
    <source src={cityvid} type="video/mp4" />
    </video>

    <main>
    <section id="intro" className="relative overflow-hidden pt-20">
      {/* Hero Content */}
      <div className="relative flex flex-col lg:flex-row items-start lg:items-center px-4 pt-24 lg:pt-36 lg:pl-36 max-w-7xl mx-auto text-left text-black z-10 gap-8">
        
        {/* Text Block */}
        <div className="flex-1">
          <h1 className="text-gray-200 mb-2 text-base sm:text-lg lg:text-xl font-semibold">
            Building the future of the web, one pixel at a time.
          </h1>
          <p className="text-blue-500 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            Find the right consultant for your project needs.
          </p>
        </div>

        {/* Button Block */}
        <div className="flex flex-col items-start lg:mt-[150px]">
          <div className="flex flex-row gap-4 m-4">
            <button className="bg-blue-700 hover:bg-blue-800 h-[50px] w-full sm:w-[145px] text-white font-semibold py-2 px-3 sm:px-6 shadow-md transition-all duration-300">
              For Clients
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 h-[50px] w-full sm:w-[145px] text-gray-900 font-semibold py-2 px-3 text-nowrap sm:px-6 shadow-md transition-all duration-300">
              For Experts
            </button>
          </div>
        </div>
      </div>

      <hr className="mx-auto mt-20 w-1/2 border-black" />
    </section>




    <section id="portfolio" className="py-18 bg-gray-50">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-blue-500 max-w-4xl mx-auto text-center text-4xl font-bold mb-4">
            Access the best management consultants and digital experts through our platform
          </h1>

          <h2 className="text-lg text-gray-700 text-center mb-10">
          Seek Alpha Consulting connects clients with vetted subject matter experts—Advisors—from our global professional network. Our clients leverage the insights and perspectives shared by our Advisors to stay informed and make better business decisions.
          </h2>
          <hr className="w-14 h-[2px] bg-black mx-auto mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/** Card Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <h3 className="text-xl text-blue-800 font-semibold mb-2 text-center">Top Consultants</h3>
              <ul className="text-gray-700">
              <li className="flex justify-center">
                <img
                  src={individuals}
                  alt="Top Consultant"
                  className="w-[400px] h-[250px] p-4"
                />
              </li>

                <li className="text-[18px] text-left p-2">
                  We handpick the best candidates for your needs from our pool of pre-vetted experts.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <h3 className="text-xl text-blue-800 font-semibold mb-2 text-center">Client-focused service</h3>
              <ul className="text-gray-700">
              <li className="flex justify-center">
                <img
                  src={consulting}
                  alt="Top Consultant"
                  className="w-[400px] h-[250px] p-4"
                />
              </li>

                <li className="text-[18px] text-left p-2">
                Fast, simple, personal assistance throughout your project, with full commitment to your goals
                </li>
              </ul>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <h3 className="text-xl text-blue-800 font-semibold mb-2 text-center">Quality Assurance</h3>
              <ul className="text-gray-700">
              <li className="flex justify-center">
                <img
                  src={quality}
                  alt="Top Consultant"
                  className="w-[400px] h-[250px] p-4"
                />
              </li>

                <li className="text-[18px] text-left p-2">
                360° quality management from onboarding to project implementation and beyond
                </li>
              </ul>
            </motion.div>
            {/* Repeat similar blocks for other cards */}
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
            <h1 class="text-blue-500 text-5xl text-center font-bold mb-4">How it works?</h1>
           

            <h2 class="text-lg text-gray-700 text-center mb-3">We find the perfect consultant for you in four simple steps. No joke.</h2>
            <hr class="w-14 h-[2px] bg-black mx-auto mb-10"/>

            

            </div>
        </div>


    
        
        <div class="w-full  text-black p-6 ">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* <!-- Text Columns --> */}
            <div class="space-y-6 pt-6">
            <div class="mb-4 bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <img
                src={thumbsup}
                alt="Top Consultant"
                class="w-[60px] h-[60px]  mb-2"
                />

                <h2 class="text-2xl font-bold mb-2">Tell us your requirements</h2>
                <p class="text-gray-600">
                After you confidentially submit your initial brief we’ll have a member of our team talk to you to confirm your project needs
                </p>
            </div>
            <div class="mb-4 bg-white p-6 rounded-lg shadow-md border border-gray-100">

                <img
                src={shuttle}
                alt="Top Consultant"
                class="w-[60px] h-[60px] mb-2"
                />

                <h2 class="text-2xl font-bold mb-2">Start your work</h2>
                <p class="text-gray-600">
                We handpick the best available candidates for your needs from our pool of pre-vetted consultants. The final choice is all yours.
                </p>
            </div>
            </div>

            <div class="space-y-6 -mt-4">
            <div class="mb-4 bg-white p-6 rounded-lg shadow-md border border-gray-100">

                <img
                src={medal}
                alt="Top Consultant"
                class="w-[60px] h-[60px] mb-2"
                />

                <h2 class="text-2xl font-bold mb-2">Choose your favorite</h2>
                <p class="text-gray-600">
                We handpick the best available candidates for your needs from our pool of prevetted consultants. The final choice is all yours
                </p>
            </div>
            <div class="mb-4 bg-white p-6 rounded-lg shadow-md border border-gray-100">

                <img
                src={success}
                alt="Top Consultant"
                class="w-[60px] h-[60px] mb-2"
                />

                <h2 class="text-2xl font-bold mb-2">Taste the success</h2>
                <p class="text-gray-600">
                From onboarding to delivery, we’re here every step of the way to guarantee quality and accountability.
                </p>
            </div>
            </div>

            {/* <!-- Image beside the text grid --> */}
            <div class="flex justify-center items-center">
            <img
                src={businessman}
                alt="Top Consultant"
                class="w-[400px] h-[400px] object-cover rounded-md"
            />
            </div>
        </div>
        </div>



        

    </section>
    <hr class="mx-auto bg-black lg:mt-[100px] mt-[70px] mb-[70px] w-1/2"></hr>


    <div class="max-w-7xl mx-auto p-6">
    
    <h1 class="text-blue-500 text-6xl text-center font-bold mb-15"> Our Point Of View </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* <!-- Card 1 --> */}
        <div class="bg-white rounded-2xl shadow-md overflow-hidden">
        <img src={plant} alt="Image 1" class="w-full h-56 object-cover"/>
        <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">ESG Goals for Mining Industry</h3>
            <p class="text-gray-600">ESG stands for Environmental, Social, and Governance, and it has become an essential framework for evaluating the sustainability and...</p>
        </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div class="bg-white rounded-2xl shadow-md overflow-hidden">
        <img src={mining} alt="Image 2" class="w-full h-56 object-cover"/>
        <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Trends that will affect future of Mining</h3>
            <p class="text-gray-600">Overall, the mining industry is undergoing significant changes as companies adapt to new technologies, changing market conditions, and...</p>
        </div>
        </div>

        {/* <!-- Card 3 --> */}
        <div class="bg-white rounded-2xl shadow-md overflow-hidden">
        <img src={tech} alt="Image 3" class="w-full h-56 object-cover"/>
        <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Technology Disrupting the Mining Industry</h3>
            <p class="text-gray-600">Technology has played a crucial role in the mining industry for many years, helping to improve efficiency, safety, and profitability....</p>
        </div>
        </div>

    </div>
    </div>



    </main>
        
    </>
    );
}
export default Homedemopage