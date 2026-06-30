import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-[#A3B3A7] py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-[#233528] pb-10">
        
        {/* Left Section - Brand Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            <span className="text-xl">🪴</span>
            <span>PlantVision.</span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm text-[#7D8F82]">
            Plants help reduce stress and increase productivity, our plants are crafted to elevate and vibrant your living environments.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-medium text-base">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#trendy-plants" className="hover:text-white transition-colors">Trendy plants</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          </ul>
        </div>

        {/* Right Section - Newsletter Subscription */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-medium text-base">For Every Updates</h3>
          <div className="flex w-full max-w-md border-b border-[#344D3B] pb-2 items-center justify-between">
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              className="bg-transparent text-sm text-white placeholder-[#526657] focus:outline-none w-full pr-4"
            />
            <button className="bg-white text-[#121E15] text-xs font-semibold px-4 py-2 rounded-sm hover:bg-[#DCE6DF] transition-colors shrink-0">
              SUBSCRIBE
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section - Copyright & Legals */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-[#526657] gap-4">
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-[#A3B3A7] transition-colors">FB</a>
          <a href="#terms" className="hover:text-[#A3B3A7] transition-colors">TW</a>
          <a href="#cookies" className="hover:text-[#A3B3A7] transition-colors">LI</a>
        </div>
        <p>© PlantVision 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
