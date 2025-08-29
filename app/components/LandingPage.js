"use client";

import Image from "next/image";
import Header from "./Header";

export default function Home() {
  return (
    <div
      className="relative text-white bg-cover bg-center h-[110vh] md:h-[106vh] lg:h-[130vh] xl:h-[150vh] 2xl:h-[140vh]"
      style={{ backgroundImage: "url('/images/Solution.png')" }}
    >
      {/* Layered Curve Background */}
      <div
        className="relative z-10 w-full min-h-screen bg-no-repeat bg-contain custom-curve-bg"
        style={{ backgroundImage: "url('/curve.svg')" }}
      >
        {/* White Grid Lines - Only for top 70% and bigger */}
        <div
          className="absolute inset-0 z-12 pointer-events-none"
          style={{ height: "70%" }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>

        {/* Play Button Image - Above curve SVG */}
        <div className="relative z-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/play-button.png"
            alt="v"
            width={80}
            height={80}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          />
        </div>

        {/* Gradient Ellipse behind logo - top left */}
        {/* <div className="fixed top-0 left-0 z-0 pointer-events-none">
          <div 
            className="absolute w-[200px] h-[800px] -top-[400px] -left-[216.18px] -rotate-[70deg] bg-gradient-radial from-[#655BC7] via-[#655BC7]/60 to-transparent opacity-70 blur-2xl"
            style={{ backdropFilter: 'blur(188px)' }}
          ></div>
        </div> */}

        {/* Header - Removed top gap */}
        <div className="relative z-50 -mt-8 lg:-mt-20">
          <Header />
        </div>

        {/* Hero Section */}
        <section className="relative z-25 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-2 sm:pt-6 md:pt-8 lg:pt-10 text-center">
          <p className="text-sm sm:text-xs md:text-xl uppercase tracking-wider font-league-spartan text-white/80 mb-2 sm:mb-3 md:mb-4">
            Welcome to the era of ecosystems
          </p>
          <h1 
              className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-bold leading-tight font-sora 
                        bg-gradient-to-r from-[#FFFFFF] via-[#9E9FA2] to-[#FFFFFF] bg-clip-text text-transparent
                        mb-3 sm:mb-4 md:mb-6 text-center"
            >
              Unlock Growth with <br />
              <span className="bg-gradient-to-r from-[#FFFFFF] via-[#9E9FA2] to-[#FFFFFF] bg-clip-text text-transparent">
                Digital Ecosystems
              </span>
            </h1>

          <p className="text-[#F0F0F0] font-normal text-sm sm:text-base md:text-2xl lg:text-2xl font-league-spartan mb-6 sm:mb-8 md:mb-10  mx-auto px-2">
            NexStar Consulting leverages AI, blockchain, and strategic
            partnerships
            <br className="hidden md:inline" />
            to streamline operations and boost ROI in a connected world.
          </p>
          <a
            href="#consultation"
            role="button"
            aria-label="Schedule your consultation"
            className="inline-block bg-[#545CF6] hover:bg-[#4F46E5] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-white font-semibold text-sm sm:text-base md:text-xl font-league-spartan rounded-full transition duration-200 shadow-lg shadow-[#5B6FFF]/20 hover:shadow-xl hover:shadow-[#5B6FFF]/30 relative"
          >
            Schedule Your Consultation
            {/* Bright white light effect at bottom edge - intense center, gradient blur to corners */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[377px] h-1.5 sm:h-2 md:h-2.5 bg-gradient-to-r from-transparent via-white  to-transparent opacity-100 blur-md shadow-[0_0_12px_rgba(255,255,255,0.8)]"></div>
          </a>
        </section>

        {/* Team Image - Made Responsive */}
        <div className="relative z-20 flex justify-center mt-2 sm:mt-12 md:mt-0 lg:-mt-15 2xl:mt-0 px-4 sm:px-6 lg:px-8 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] -translate-y-8 sm:-translate-y-2 md:translate-y-0 sm:pb-8 md:pb-12 lg:pb-16">
          <Image
            src="/images/groupimage.png"
            alt="NexStar Team"
            width={1200}
            height={400}
            priority
            className="w-full max-w-[110vw] sm:max-w-[95vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw] object-contain"
          />
          {/* Mission Section Overlapping Bottom 50% */}
          <section
            className="
              absolute left-1/2 -bottom-30 sm:bottom-8 md:-bottom-14 lg:-bottom-11 z-30
              w-full max-w-[95vw] sm:max-w-5xl lg:max-w-6xl
              -translate-x-1/2
              px-4 sm:px-6 lg:px-8
              flex flex-col items-center justify-center
              text-center
              translate-y-12 sm:translate-y-4 md:translate-y-0
            "
          >
            <p className="font-normal text-white/80 text-[11px] sm:text-sm md:text-xl lg:text-lg leading-relaxed font-league-spartan mb-4 sm:mb-6 md:mb-8 max-w-[95vw] ">
              In a world where interconnectedness redefines success, NexStar
              Consulting invites you to lead your company's evolution. Inspired
              by the natural harmony of ecosystems and humanity's continuous
              progress, we harness artificial intelligence, SaaS, and blockchain
              to optimize resources and align your business with a collective
              purpose.
          
              Success is not about being the best—it's about being
              indispensable: a node that strengthens the network with every
              interaction.
            </p>
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 w-full px-2">
              <a
                href="#ebook"
                className="relative bg-white/10 border border-white/20 text-white text-xs sm:text-sm md:text-base px-8 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition duration-150 hover:scale-105"
              >
                <span className="absolute -top-[32%] left-3 bg-[#A71414] font-normal font-league-spartan text-white text-[10px] sm:text-xs md:text-xs px-2 py-1 rounded-full">
                  The New ONE is Us
                </span>
                <span className="font-urbanist font-semibold text-[10px] sm:text-xs md:text-xl">
                  Download our eBook
                </span>

              </a>
              <a
                href="#presentation"
                className="bg-[#545CF6] hover:bg-[#4F46E5] text-white text-xs sm:text-sm md:text-xl font-league-spartan px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold transition duration-150 hover:scale-105"
              >
                Schedule a Personalized Presentation
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
