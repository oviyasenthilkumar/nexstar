export default function CommunityPatreon() {
    return (
      <section id="community" className="w-full py-10 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center" style={{backgroundImage: "url('/images/blackbg.webp')"}}>
        <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto text-center">
          <h2 className="text-white font-sora text-[28px] sm:text-[32px] md:text-[48px] font-semibold mb-4 w-full leading-[35px] md:leading-[44px] whitespace-normal md:whitespace-nowrap">
            Join the NexStar Community
          </h2>
          <p className="text-lg md:text-2xl px-2 md:px-0 font-league-spartan text-[#6C6C6C] mb-8">
            Templates, prompts, Q&amp;A sessions, and early access to Nautilus Method updates.
          </p>
          <a
            href="https://patreon.com/c/MetodoNautilusdelValor_ComunidadNexStar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#545CF6] hover:bg-[#4F46E5] px-6 sm:px-8 md:px-10 py-2 sm:py-4 md:py-4 text-white font-semibold text-sm sm:text-base md:text-xl font-league-spartan  rounded-full transition duration-200 shadow-lg shadow-[#5B6FFF]/20 hover:shadow-xl hover:shadow-[#5B6FFF]/30 relative hidden md:inline-block focus:outline-none focus:ring-2 focus:ring-[#545CF6] focus:ring-offset-2 focus:ring-offset-white"
            aria-label="Join on Patreon - opens in new tab"
          >
            Join on Patreon &rarr;
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[377px] h-1.5 sm:h-2 md:h-2.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-100 blur-md shadow-[0_0_12px_rgba(255,255,255,0.8)]" aria-hidden="true"></div>
          </a>
        </div>
      </section>
    );
  }
  
