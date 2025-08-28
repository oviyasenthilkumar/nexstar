"use client";

export default function MissionSection() {
  return (
    <section
      className="
        absolute left-1/2 bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-16 z-[30]
        w-full max-w-[95vw] sm:max-w-5xl lg:max-w-6xl
        -translate-x-1/2
        px-4 sm:px-6 lg:px-8
        flex flex-col items-center justify-center
        text-center
        translate-y-8 sm:translate-y-4 md:translate-y-0
      "
    >
      <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-sora mb-4 sm:mb-6 md:mb-8 max-w-[95vw] sm:max-w-2xl lg:max-w-3xl">
        In a world where interconnectedness redefines success, NexStar Consulting invites you to lead your company's evolution. Inspired by the natural harmony of ecosystems and humanity's continuous progress, we harness artificial intelligence, SaaS, and blockchain to optimize resources and align your business with a collective purpose.
        <br className="hidden sm:inline" />
        Success is not about being the best—it's about being indispensable: a node that strengthens the network with every interaction.
      </p>
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 w-full px-2">
        <a
          href="#ebook"
          className="bg-white/10 border border-white/20 text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition duration-150 hover:scale-105"
        >
          <span className="bg-red-600 text-white text-[10px] sm:text-xs md:text-sm px-2 py-1 rounded-md">The New ONE is Us</span>
          <span>Download our eBook</span>
        </a>
        <a
          href="#presentation"
          className="bg-[#6366F1] hover:bg-[#4F46E5] text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold transition duration-150 hover:scale-105"
        >
          Schedule a Personalized Presentation
        </a>
      </div>
    </section>
  );
}


