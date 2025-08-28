"use client";

export default function HeroSection() {
  return (
    <section className="relative z-[25] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-2 sm:pt-6 md:pt-8 lg:pt-10 text-center">
      <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-wider font-sora text-white/80 mb-2 sm:mb-3 md:mb-4">
        Welcome to the era of ecosystems
      </p>
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight font-league-spartan font-sora text-[#E6E6F6] mb-3 sm:mb-4 md:mb-6">
        Unlock Growth with <br />
        <span className="text-[#E6E6F6]">Digital Ecosystems</span>
      </h1>
      <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl font-sora mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-2">
        NexStar Consulting leverages AI, blockchain, and strategic partnerships
        <br className="hidden md:inline" />
        to streamline operations and boost ROI in a connected world.
      </p>
      <a
        href="#consultation"
        role="button"
        aria-label="Schedule your consultation"
        className="inline-block bg-[#6366F1] hover:bg-[#4F46E5] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-white font-semibold text-sm sm:text-base md:text-lg rounded-full transition duration-200 shadow-lg shadow-[#5B6FFF]/20 hover:shadow-xl hover:shadow-[#5B6FFF]/30 relative"
      >
        Schedule Your Consultation
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-white/30 blur-sm rounded-full"></div>
      </a>
    </section>
  );
}


