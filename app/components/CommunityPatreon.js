export default function CommunityPatreon() {
    return (
      <section id="community" className="w-full py-10 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center" style={{backgroundImage: "url('/images/blackbg.webp')"}}>
        <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto text-center">
          <h1
              id="achievements-heading"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl max-w-7xl mx-auto 3xl:text-[clamp(2.25rem,2vw+1.5rem,3rem)] font-semibold mb-4 sm:mb-6 font-serif bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent"
            >
              Join the NexStar Community 
            </h1>
          <p className="text-sm md:text-xl lg:text-xl xl:text-lg 2xl:text-xl  3xl:text-[clamp(1rem,0.5vw+0.875rem,1.125rem)] px-2 md:px-0 font-sans text-gray-400 mb-8">
            Templates, prompts, Q&amp;A sessions, and early access to Nautilus Method updates.
          </p>
          <a
            href="https://patreon.com/c/MetodoNautilusdelValor_ComunidadNexStar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#545CF6] hover:bg-[#4F46E5] px-6 sm:px-8 md:px-10 py-2 sm:py-4 md:py-4 text-white font-semibold text-[clamp(0.875rem,2vw+0.5rem,1.25rem)] font-sans  rounded-full transition duration-200 shadow-lg shadow-[#5B6FFF]/20 hover:shadow-xl hover:shadow-[#5B6FFF]/30 relative hidden md:inline-block focus:outline-none focus:ring-2 focus:ring-[#545CF6] focus:ring-offset-2 focus:ring-offset-white"
            aria-label="Join on Patreon - opens in new tab"
          >
            Join on Patreon &rarr;
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[377px] h-1.5 sm:h-2 md:h-2.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-100 blur-md shadow-[0_0_12px_rgba(255,255,255,0.8)]" aria-hidden="true"></div>
          </a>
        </div>
      </section>
    );
  }
  
