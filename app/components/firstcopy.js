<div className="relative min-h-screen text-white bg-no-repeat bg-cover" style={{ backgroundImage: "url('/images/Solution.png')" }}>
        {/* Navbar */}
       <Header/> 

        {/* Hero Section */}
        <section className="text-center px-6 mt-16 md:mt-24 max-w-4xl mx-auto">
          <p className="text-sm tracking-wide mb-2">WELCOME TO THE ERA OF ECOSYSTEMS</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Unlock Growth with <br /> 
            <span className="text-white/90">Digital Ecosystems</span>
          </h1>
          <p className="text-white/70 mt-6 text-base md:text-lg">
            NexStar Consulting leverages AI, blockchain, and strategic partnerships <br className="hidden md:block" />
            to streamline operations and boost ROI in a connected world.
          </p>
          <button className="mt-8 bg-[#6366F1] hover:bg-[#4F46E5] text-white px-6 py-3 rounded-full text-sm font-semibold transition duration-200">
            Schedule Your Consultation
          </button>
        </section>

        {/* People + Curve Section */}
        <div className="relative border border-red-500 mt-16 md:mt-24">
          {/* Curve SVG */}
          <img src="/indo.svg" alt="curve" className="absolute bottom-0 left-0 w-full z-0" />

          {/* People */}
          <div className="relative z-10 flex justify-center">
            <img src="/people.png" alt="NexStar Team" className="w-full max-w-5xl px-4 md:px-0" />
          </div>
        </div>
      </div>