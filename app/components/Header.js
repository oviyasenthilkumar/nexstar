"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle menu close with animation
  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsAnimating(false);
    }, 350); // match animation duration
  };

  // Open menu
  const handleOpen = () => {
    setMenuOpen(true);
    setIsAnimating(false);
  };

  return (
    <header className="leagueSpartan bg-transparent text-white px-4 sm:px-6 md:px-10 py-2 sm:py-4 relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/Logo.png"
            alt="Nexstar Logo"
            width={120}
            height={36}
            priority
            className="h-8 w-auto sm:h-12"
          />
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none focus:ring-2 focus:ring-[#5B6FFF]"
          aria-label="Toggle menu"
          onClick={handleOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex gap-6 lg:gap-10 items-center">
          <a href="#about" className="text-base text-white font-regular hover:text-[#545CF6] transition-colors">About Us</a>
          <a href="#services" className="text-base text-white font-regular hover:text-[#545CF6] transition-colors">Services</a>
          <a href="#bosz" className="text-base text-white font-regular hover:text-[#545CF6] transition-colors">BOSZ</a>
          <a href="#gozen" className="text-base text-white font-regular hover:text-[#545CF6] transition-colors">GoZen</a>
          <a href="#blogs" className="text-base text-white font-regular hover:text-[#545CF6] transition-colors">Blogs</a>
        </nav>

        {/* Contact Button (Desktop) */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-[#545CF6] text-white py-2 px-6 rounded-3xl font-semibold text-xl ml-4 transition-colors hover:bg-[#4F46E5]"
        >
          Contact Us
        </a>
      </div>

      {/* Mobile Glassmorphic Menu Only (no overlay/blur on homepage) */}
      {(menuOpen || isAnimating) && (
        <>
          {/* Transparent overlay for outside click (no blur, no color) */}
          <div
            className="fixed inset-0 z-40 cursor-pointer"
            onClick={handleClose}
            aria-label="Close menu overlay"
          />
          {/* Full-width Glassmorphic Sliding Menu with animated gradient overlay, logo top center, big font, no borders, gap before last link */}
          <div className={`fixed inset-0 z-50 flex items-start justify-end ${menuOpen && !isAnimating ? "animate-slideInMobile" : "animate-slideOutMobile"}`}>
            <div className="relative w-full max-w-none h-full bg-white/30 backdrop-blur-md shadow-2xl flex flex-col items-center pt-8 pb-6 overflow-hidden font-league-spartan" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)'}}>
              {/* Animated gradient overlay */}
              <div className="pointer-events-none absolute inset-0" style={{zIndex:1}}>
                <div className="w-full h-full animate-gradientMove bg-gradient-to-br from-[#e0c3fc]/40 via-[#8ec5fc]/40 to-[#f093fb]/40 opacity-70" />
              </div>
              {/* X Close Icon */}
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#5B6FFF] group z-10"
                aria-label="Close menu"
                onClick={handleClose}
                tabIndex={0}
              >
                <span className="block w-6 h-0.5 bg-white group-hover:bg-[#5B6FFF] rotate-45 absolute"></span>
                <span className="block w-6 h-0.5 bg-white group-hover:bg-[#5B6FFF] -rotate-45 absolute"></span>
              </button>
              {/* Logo top center */}
              <div className="w-full flex justify-center z-10 relative mt-2 mb-8">
                <Image
                  src="/Logo.png"
                  alt="Nexstar Logo"
                  width={120}
                  height={36}
                  priority
                  className="h-10 w-auto"
                />
              </div>
              <nav className="flex flex-col gap-2 text-white font-bold text-center z-10 relative w-full px-4">
                <a href="#about" className="py-2 text-2xl md:text-3xl transition-all duration-200 hover:text-[#5B6FFF] border-b border-white/10" onClick={handleClose}>About Us</a>
                <a href="#services" className="py-2 text-2xl md:text-3xl transition-all duration-200 hover:text-[#5B6FFF] border-b border-white/10" onClick={handleClose}>Services</a>
                <a href="#bosz" className="py-2 text-2xl md:text-3xl transition-all duration-200 hover:text-[#5B6FFF] border-b border-white/10" onClick={handleClose}>BOSZ</a>
                <a href="#gozen" className="py-2 text-2xl md:text-3xl transition-all duration-200 hover:text-[#5B6FFF] border-b border-white/10" onClick={handleClose}>GoZen</a>
                <a href="#blogs" className="py-2 text-2xl md:text-3xl transition-all duration-200 hover:text-[#5B6FFF] mt-0 border-b border-white/10" onClick={handleClose}>Blogs</a>
                <a
                  href="#contact"
                  className="py-2 text-2xl md:text-3xl mt-4 border-t border-white/30 bg-[#5B6FFF] bg-opacity-90 text-white rounded-3xl px-6 font-bold text-center transition-all duration-200 hover:bg-[#4F46E5] border border-white"
                  onClick={handleClose}
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
          <style jsx global>{`
            @keyframes slideInMobile { from { transform: translateX(100%); } to { transform: translateX(0); } }
            .animate-slideInMobile { animation: slideInMobile 0.35s cubic-bezier(0.4,0,0.2,1); }
            @keyframes slideOutMobile { from { transform: translateX(0); } to { transform: translateX(100%); } }
            .animate-slideOutMobile { animation: slideOutMobile 0.35s cubic-bezier(0.4,0,0.2,1); }
            @keyframes gradientMove {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-gradientMove {
              background-size: 200% 200%;
              animation: gradientMove 6s ease-in-out infinite;
            }
          `}</style>
        </>
      )}
    </header>
  );
}
