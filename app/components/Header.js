
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Handle menu close with animation
  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsAnimating(false);
    }, 300); // Reduced from 350ms to 300ms for faster response
  };

  // Handle navigation link click with immediate close
  const handleNavClick = () => {
    setMenuOpen(false);
    setIsAnimating(false);
  };

  // Open menu
  const handleOpen = () => {
    setMenuOpen(true);
    setIsAnimating(false);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        handleClose();
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Trap focus within menu when open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Focus management
  useEffect(() => {
    if (menuOpen && menuRef.current) {
      const firstFocusableElement = menuRef.current.querySelector('a, button');
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    } else if (!menuOpen && hamburgerRef.current) {
      hamburgerRef.current.focus();
    }
  }, [menuOpen]);

  return (
    <header 
      className="leagueSpartan text-white px-4 sm:px-6 md:px-10 py-2 sm:py-4 fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#191B2B] via-[#23254A] to-[#545CF6]"
      style={{background: 'linear-gradient(90deg, #191B2B 0%, #23254A 60%, #545CF6 100%)', borderBottom: '1px solid rgba(255,255,255,0.18)'}}
      role="banner"
      aria-label="Main navigation header for NexStar Consulting"
    >
      <div className="flex items-center justify-between md:justify-end w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home" aria-label="Go to homepage">
            <picture>
              <source srcSet="/Logo.webp" type="image/webp" />
              <Image
                src="/Logo.png"
                alt="NexStar Consulting Logo - Click to go to homepage"
                width={120}
                height={36}
                priority
                className="h-8 w-auto sm:h-12"
                loading="eager"
                sizes="(max-width: 640px) 96px, 120px"
              />
            </picture>
          </a>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          ref={hamburgerRef}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 "
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={handleOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Nav Links (Desktop) */}
        <nav 
          className="hidden md:flex gap-6 lg:gap-10 items-center flex-1 justify-end text-right mr-6"
          role="navigation"
          aria-label="Main navigation menu"
        >
          <a 
            href="#about" 
            className="text-base text-white font-regular font-sans  transition-colors "
            aria-label="Go to About Us section"
          >
            About Us
          </a>
          <a 
            href="#services" 
            className="text-base text-white font-regular font-sans  transition-colors "
            aria-label="Go to Services section"
          >
            Services
          </a>
          <a 
            href="/ebook/book.pdf" 
            className="text-base text-white font-regular font-sans  transition-colors "
            aria-label="Go to BOSZ methodology section"
          >
            Book
          </a>
          {/* <a 
            href="#services" 
            className="text-base text-white font-regular font-league-spartan  transition-colors "
            aria-label="Go to GoZen platform section"
          >
            GoZen
          </a> */}
          <a 
            href="#blogs" 
            className="text-base text-white font-regular font-sans  transition-colors "
            aria-label="Go to Blogs and insights section"
          >
            Blogs
          </a>
        </nav>

        {/* Contact Button (Desktop) */}
        {/* <a
          href="https://patreon.com/c/MetodoNautilusdelValor_ComunidadNexStar/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-[#545CF6] text-white py-2 px-6 rounded-3xl font-semibold text-xl transition-colors hover:bg-[#4F46E5] focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-transparent focus:shadow-[0_0_0_0.5px_rgba(255,255,255,0.7),0_0_0_1px_rgba(84,92,246,0.3)]"
          aria-label="Join on Patreon - opens in new tab"
          data-loading="lazy"
        >
          Join on Patreon
        </a> */}
        <a
          href="#contact"
          className="hidden md:inline-block relative flex items-center gap-2 px-8 py-2 border border-[#B6AFFF] rounded-full bg-transparent hover:bg-white/10 transition duration-150 shadow-[0_0_16px_0_rgba(182,175,255,0.12)] font-sans font-semibold text-base text-white focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-transparent focus:shadow-[0_0_0_0.5px_rgba(182,175,255,0.7),0_0_0_1px_rgba(182,175,255,0.3)]"
          style={{ boxShadow: '0 0 16px 0 rgba(182,175,255,0.12), 0 2px 12px 0 rgba(255,255,255,0.08) inset' }}
          aria-label="Contact us - opens contact section"
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
            role="button"
            tabIndex={-1}
          />
          {/* Full-width Glassmorphic Sliding Menu with animated gradient overlay, logo top center, big font, no borders, gap before last link */}
          <div 
            id="mobile-menu"
            ref={menuRef}
            className={`fixed inset-0 z-50 flex items-start justify-end ${menuOpen && !isAnimating ? "animate-slideInMobile" : "animate-slideOutMobile"}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="relative w-full max-w-none h-full bg-white/30 backdrop-blur-md shadow-2xl flex flex-col items-center pt-8 pb-6 overflow-hidden font-sans" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)'}}>
              {/* Animated gradient overlay */}
              <div className="pointer-events-none absolute inset-0" style={{zIndex:1}} aria-hidden="true">
                <div className="w-full h-full animate-gradientMove bg-gradient-to-br from-[#e0c3fc]/40 via-[#8ec5fc]/40 to-[#f093fb]/40 opacity-70" />
              </div>
              {/* X Close Icon */}
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center "
                aria-label="Close navigation menu"
                onClick={handleClose}
                tabIndex={0}
              >
                <span className="block w-6 h-0.5 bg-white group-hover:bg-[#5B6FFF] rotate-45 absolute transition-colors"></span>
                <span className="block w-6 h-0.5 bg-white group-hover:bg-[#5B6FFF] -rotate-45 absolute transition-colors"></span>
              </button>
              {/* Logo top center */}
              <div className="w-full flex justify-center z-10 relative mt-2 mb-8">
                <a href="#home" aria-label="Go to homepage">
                  <picture>
                    <source srcSet="/Logo.webp" type="image/webp" />
                    <Image
                      src="/Logo.png"
                      alt="NexStar Consulting Logo - Click to go to homepage"
                      width={120}
                      height={36}
                      priority
                      className="h-10 w-auto"
                      loading="eager"
                      sizes="120px"
                    />
                  </picture>
                </a>
              </div>
              <nav className="flex flex-col gap-2 text-white font-bold text-center z-10 relative w-full px-4" role="navigation" aria-label="Mobile navigation menu">
                <a 
                  href="#about" 
                  className="py-2 text-2xl md:text-3xl transition-all duration-200 hover:text-[#5B6FFF] border-b border-white/10  rounded px-2" 
                  onClick={handleNavClick}
                  aria-label="Go to About Us section"
                >
                  About Us
                </a>
                <a 
                  href="#services" 
                  className="py-2 text-2xl md:text-3xl transition-all duration-200 hover:text-[#5B6FFF] border-b border-white/10 rounded px-2" 
                  onClick={handleNavClick}
                  aria-label="Go to Services section"
                >
                  Services
                </a>
                <a 
                  href="/ebook/book.pdf" 
                  className="py-2 text-2xl md:text-3xl transition-all duration-200 hover:text-[#5B6FFF] border-b border-white/10 rounded px-2" 
                  onClick={handleNavClick}
                  aria-label="Go to BOSZ methodology section"
                >
                  Book
                </a>
                {/* <a 
                  href="#services" 
                  className="py-2 text-2xl md:text-3xl transition-all duration-200 hover:text-[#5B6FFF] border-b border-white/10 rounded px-2" 
                  onClick={handleNavClick}
                  aria-label="Go to Services section"
                >
                  Gozen
                </a> */}
                <a 
                  href="#blogs" 
                  className="py-2 text-2xl md:text-3xl transition-all duration-200 hover:text-[#5B6FFF] mt-0 border-b border-white/10  rounded px-2" 
                  onClick={handleNavClick}
                  aria-label="Go to Blogs and insights section"
                >
                  Blogs
                </a>
                <a
                  href="#contact"
                  className="py-2 text-2xl md:text-3xl mt-4 border-t border-white/30 bg-[#5B6FFF] bg-opacity-90 text-white rounded-3xl px-6 font-bold text-center transition-all duration-200 hover:bg-[#4F46E5] border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                  onClick={handleNavClick}
                  aria-label="Contact us - opens contact section"
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
