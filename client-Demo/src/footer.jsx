import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Say hello</h3>
          <p className="text-gray-400">HELLO@DEVLP.ME</p>
          <p className="text-gray-400">MAHBUBUL@ME.COM</p>
          <p className="text-gray-400 mt-4">Call</p>
          <p className="text-gray-400">+784549 4881 00</p>
          <p className="text-gray-400">+8845 0100 211</p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-4 md:gap-x-24 md:gap-y-0 text-left md:text-right">
          <div>
            <h4 className="text-lg font-semibold mb-2">Menu</h4>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">HOME</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">ABOUT</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">PORTFOLIO</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">BLOG</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Social</h4>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">TWITTER</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">INSTAGRAM</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FACEBOOK</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">BEHANCE</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">DRIBBBLE</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-8">
        <p>&copy; DEVLP.ME 2022</p>
        <p className="mt-2">
          <a href="#" className="hover:text-white mr-4">PRIVACY</a>
          <a href="#" className="hover:text-white">TERMS</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;