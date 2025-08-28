<div className="relative min-h-screen text-white bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/Solution.png')" }}>
  {/* Navbar */}
  <Header/>

  {/* Hero Section */}
  <section className="text-center px-4 sm:px-6 mt-12 sm:mt-16 md:mt-24 max-w-full sm:max-w-2xl md:max-w-4xl mx-auto">
    <p className="text-xs sm:text-sm tracking-wide font-League Spartan mb-2">WELCOME TO THE ERA OF ECOSYSTEMS</p>
    <h1 className="text-2xl sm:text-4xl md:text-6xl font-Sora leading-tight">
      Unlock Growth with <br />
      <span className="text-white/90">Digital Ecosystems</span>
    </h1>
    <p className="text-white/70 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg">
      NexStar Consulting leverages AI, blockchain, and strategic partnerships <br className="hidden md:block" />
      to streamline operations and boost ROI in a connected world.
    </p>
    <button className="mt-6 sm:mt-8 bg-[#6366F1] hover:bg-[#4F46E5] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition duration-200">
      Schedule Your Consultation
    </button>
  </section>

  {/* People + Curve Section */}
  <div className="relative mt-12 sm:mt-16 md:mt-24 flex flex-col items-center">
    {/* Curve SVG */}
    <img src="/indo.svg" alt="curve" className="absolute bottom-0 left-0 w-full z-0 pointer-events-none select-none" style={{maxHeight:'80px'}} />

    {/* People */}
    <div className="relative z-10 flex justify-center w-full">
      <img src="/people.png" alt="NexStar Team" className="w-full max-w-xs sm:max-w-2xl md:max-w-5xl px-2 sm:px-4 md:px-0 object-contain" />
    </div>
  </div>
</div>