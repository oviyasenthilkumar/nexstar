'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

export default function OurAchievements() {
   const [width, setWidth] = useState(5);

   useEffect(() => {
     const handleResize = () => {
       if (window.innerWidth >= 1024) setWidth(11);
       else if (window.innerWidth >= 768) setWidth(7);
       else setWidth(5);
     };

     handleResize(); // run on mount
     window.addEventListener("resize", handleResize);
     return () => window.removeEventListener("resize", handleResize);
   }, []);

  return (
    <section 
      className="bg-black text-white relative overflow-hidden min-h-screen"
      role="region"
      aria-labelledby="achievements-heading"
      aria-label="NexStar achievements and business transformation results"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/blackbg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
        aria-hidden="true"
      />

              {/* Main Content Container */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="text-center pt-12 sm:pt-16 md:pt-20 px-4">
            <h1
              id="achievements-heading"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl max-w-7xl mx-auto 3xl:text-[clamp(2.25rem,2vw+1.5rem,3rem)] font-semibold mb-4 sm:mb-6 font-serif bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent"
            >
              Our Achievements
            </h1>
            <p
              className="text-sm max-w-prose mx-auto 3xl:text-[clamp(1rem,0.5vw+0.875rem,1.125rem)] text-gray-300 max-w-2xl mx-auto font-normal font-sans"
            >
              We take pride in transforming businesses through impactful
              <br className="hidden sm:block" /> solutions and measurable results.
            </p>
          </div>

          {/* Buttons Section - Moved to top */}
          <div className="absolute top-120 sm:top-40 md:top-140 lg:top-180 2xl:top-180 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row justify-center items-center gap-7 sm:gap-6 md:gap-8 px-4 z-20 w-full max-w-xs sm:max-w-none">
            <a
              href="https://www.linkedin.com/in/miguel-angel-arce-96693954/"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label="Explore insights"
              className="inline-block relative flex items-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 border border-[#B6AFFF] rounded-full bg-transparent hover:bg-white/10 transition duration-150 shadow-[0_0_16px_0_rgba(182,175,255,0.12)] font-sans font-semibold text-[clamp(0.875rem,2vw+0.5rem,1.25rem)] text-white focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-transparent focus:shadow-[0_0_0_0.5px_rgba(182,175,255,0.7),0_0_0_1px_rgba(182,175,255,0.3)] -mt-4"
              style={{ boxShadow: '0 0 16px 0 rgba(182,175,255,0.12), 0 2px 12px 0 rgba(255,255,255,0.08) inset' }}
            >
              Explore Insights - LinkedIn
            </a>
            
            <a
              href="https://nexstar.zohobookings.com/#/4585749000000036002?utm_source=website&utm_medium=embed&utm_campaign=discovery_call"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label="Schedule your consultation to transform your business"
              className="inline-block bg-[#545CF6] hover:bg-[#4F46E5] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-white font-semibold text-[clamp(0.875rem,2vw+0.5rem,1.25rem)] font-sans rounded-full transition duration-200 shadow-lg shadow-[#5B6FFF]/20 hover:shadow-xl hover:shadow-[#5B6FFF]/30 relative hidden md:inline-block focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-transparent focus:shadow-[0_0_0_0.5px_rgba(255,255,255,0.7),0_0_0_1px_rgba(84,92,246,0.3)] -mt-4"
            >
              Book a Discovery Call
              {/* Bright white light effect at bottom edge - intense center, gradient blur to corners */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[377px] h-1.5 sm:h-2 md:h-2.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-100 blur-md shadow-[0_0_12px_rgba(255,255,255,0.8)]" aria-hidden="true"></div>
            </a>
          </div>
        
        {/* Globe and Statistics Section */}
        <div
          className="relative flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/blackbg.webp')",
            backgroundRepeat: "repeat",
            width: "100%",
            backgroundPosition: "center top",
          }}
          aria-hidden="true"
        >
          {/* Central Globe */}
          <div className="relative w-full flex flex-col justify-center items-center mt-[-80px] sm:mt-0">
            <div className="w-64 sm:w-80 md:w-96 lg:w-[700px] 2xl:w-[700px] h-110 sm:h-90 md:h-118 lg:h-[700px] 2xl:h-[700px] rounded-full flex items-center justify-center">
              {" "}
              <Image
                src="/images/globe-removebg-preview.png"
                alt="Globe"
                
                width={500}
                height={500}
                loading="lazy"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 700px"
                className="w-full h-full object-contain opacity-80 slow-anticlockwise"
                style={{ animationDuration: "50s" }}
              />{" "}
            </div>{" "}
            <div className="flex flex-col flex-wrap md:flex-nowrap justify-center gap-4 md:gap-8 lg:gap-12 absolute top-42 md:top-40 lg:top-60 2xl:top-55 left-0 right-0 w-full bg-[url('/images/black-bg.png')] bg-no-repeat bg-cover bg-center md:py-10 lg:py-30 md:pb-[30rem] lg:pb-[43rem]">
              {/* First Row - 3 statistics for mobile, all 3 for larger screens */}
              <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-4 md:gap-8 lg:gap-12 w-full">
                {/* Clients Served */}
                <div className="flex flex-col items-center">
                  <div
                    className="text-transparent bg-clip-text font-sans font-bold text-[clamp(18px,3.5vw,60px)] leading-[100%] tracking-[0%] bg-gradient-to-r from-[#CCC0FC] via-[#5257C6] to-[#8C83F6] whitespace-nowrap"
                  >
                    1,300+
                  </div>
                  <div
                    className="text-white text-center max-w-md mt-2 font-sans font-normal text-[clamp(12px,2.5vw,20px)] leading-[26.53px] tracking-[0%]"
                  >
                    clients served (founders at MDO — Zoho's largest Premium Partner)
                  </div>
                </div>

                {/* Vertical separator */}
                <div
                  className="hidden sm:block w-0.5 top-[-10] bg-gray-300 h-14 md:h-20 lg:h-24 self-center relative z-20"
                  style={{ minWidth: "1px" }}
                  aria-hidden="true"
                ></div>

                {/* Zoho License Sales */}
                <div className="flex flex-col items-center">
                  <div
                    className="text-transparent bg-clip-text font-sans font-bold text-[clamp(18px,3.5vw,60px)] leading-[100%] tracking-[0%] bg-gradient-to-r from-[#CCC0FC] via-[#5257C6] to-[#8C83F6] whitespace-nowrap"
                  >
                    $2,453,795
                  </div>
                  <div
                    className="text-white text-center max-w-md mt-2 font-sans font-normal text-[clamp(12px,2.5vw,20px)] leading-[26.53px] tracking-[0%]"
                  >
                    in Zoho license sales across 27 countries (2024)
                  </div>
                </div>

                {/* Vertical separator */}
                <div
                  className="w-0.5 top-[-10] bg-gray-300 h-1 md:h-20 lg:h-24 self-center relative z-20"
                  style={{ minWidth: "1px" }}
                  aria-hidden="true"
                ></div>

                {/* Top Markets */}
                <div className="flex flex-col items-center">
                  <div
                    className="text-transparent bg-clip-text font-sans font-bold text-[clamp(18px,3.5vw,60px)] leading-[100%] tracking-[0%] bg-gradient-to-r from-[#CCC0FC] via-[#5257C6] to-[#8C83F6] whitespace-nowrap"
                  >
                    Top markets
                  </div>
                  <div
                    className="text-white text-center max-w-md mt-2 font-sans font-normal text-[clamp(12px,2.5vw,20px)] leading-[26.53px] tracking-[0%]"
                  >
                    US, UK, Australia, Canada, South Africa
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Nautilus Method Section */}
        <div className="relative mb-2 md:mb-0 py-0 sm:py-12 md:py-0 pt-30 sm:pt-8 md:pt-0 ">
          <div className="text-center mb-4 sm:mb-12 ">
          <h2
              className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl 3xl:text-[clamp(2.25rem,2vw+1.5rem,3rem)]  font-semibold mb-4 font-serif bg-gradient-to-r from-[#FFFFFF] via-[#9E9FA2] to-[#FFFFFF] bg-clip-text text-transparent"
            >
              The Nautilus Method           </h2>
            <p
              className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl 3xl:text-[clamp(2.25rem,2vw+1.5rem,3rem)]  font-semibold mb-4 font-serif bg-gradient-to-r from-[#FFFFFF] via-[#9E9FA2] to-[#FFFFFF] bg-clip-text text-transparent"
            >
              Incremental sprints. Compounding value.
            </p>
            <div className="px-5 md:px-0 text-center text-gray-400 md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-sans">
              <p className="font-normal text-sm sm:text-base md:text-xl lg:text-xl xl:text-lg 2xl:text-xl 3xl:text-[clamp(1rem,0.5vw+0.875rem,1.125rem)] mb-6">
                 A practical framework to move 
                strategy to operation with low risk and measurable impact.
              </p>

              <ul className="max-w-prose pl-7 text-left list-disc list-inside space-y-4 font-normal text-sm sm:text-base md:text-xl 3xl:text-[clamp(1rem,0.5vw+0.875rem,1.125rem)] font-sans mx-auto mb-[150]">
                <li>
                  <span className="text-[#545CF6]">Diagnose</span> — Align purpose & value prop, map capabilities, set baseline KPIs, 90-day plan.
                </li>
                <li>

                  
                  <span className="text-[#545CF6]">Pilot</span> — Digitize with Zoho, define SOPs, dashboard KPIs; exit only with proven lift.
                </li>
                <li>
                  <span className="text-[#545CF6]">Scale</span> — Roll out across teams; add RPA where it saves time and AI where it lifts KPIs; governance rhythms.
                </li>
                <li>
                  <span className="text-[#545CF6]">Operate</span> — Run by numbers (OKRs/KPIs), quarterly audits, continuous improvement.
                </li>
              </ul>
            </div>
          </div>

          <div className="absolute top-144 sm:top-40 md:top-145 lg:top-115 2xl:top-114 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row justify-center items-center gap-7 sm:gap-6 md:gap-8 px-4 z-20 w-full max-w-xs sm:max-w-none">
            <a
              href="/ebook/book.pdf"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label="Explore insights"
              className=" relative flex items-center gap-2 px-8 sm:px-12 md:px-20 py-3 sm:py-4 md:py-5 border border-[#B6AFFF] rounded-full bg-transparent hover:bg-white/10 transition duration-150 shadow-[0_0_16px_0_rgba(182,175,255,0.12)] font-sans font-semibold text-[clamp(0.875rem,2vw+0.5rem,1.25rem)] text-white focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-transparent focus:shadow-[0_0_0_0.5px_rgba(182,175,255,0.7),0_0_0_1px_rgba(182,175,255,0.3)] -mt-4"
              style={{ boxShadow: '0 0 16px 0 rgba(182,175,255,0.12), 0 2px 12px 0 rgba(255,255,255,0.08) inset' }}
            >
              See the Methods
            </a>
            
            <a
              href="https://nexstar.zohobookings.com/#/4585749000000036002?utm_source=website&utm_medium=embed&utm_campaign=discovery_call"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label="Schedule your consultation to transform your business"
              className=" bg-[#545CF6] hover:bg-[#4F46E5] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-white font-semibold text-sm sm:text-base md:text-xl font-league-spartan rounded-full transition duration-200 shadow-lg shadow-[#5B6FFF]/20 hover:shadow-xl hover:shadow-[#5B6FFF]/30 relative  focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-transparent focus:shadow-[0_0_0_0.5px_rgba(255,255,255,0.7),0_0_0_1px_rgba(84,92,246,0.3)] -mt-4"
            >
              Book a Discovery Call
              {/* Bright white light effect at bottom edge - intense center, gradient blur to corners */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[377px] h-1.5 sm:h-2 md:h-2.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-100 blur-md shadow-[0_0_12px_rgba(255,255,255,0.8)]" aria-hidden="true"></div>
            </a>
          </div>

          {/* Nautilus Shell with Value Points */}
          <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
            {/* Full-width Nautilus Shell Background */}
            <div
              className="absolute inset-0 w-full h-full lg:translate-x- snail-bg-mobile snail-bg-tablet snail-bg-desktop snail-bg-large"
              style={{
                backgroundImage: "url(/snail-img.webp)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              aria-hidden="true"
            />

            {/* Strategic Value - Top Center with Arrow */}
            <div className="absolute px-2 md:px-0 top-22 md:top-20 lg:top-24 2xl:top-25 3xl:top-35 3xl:left-[45%] sm:top-25 left-70 md:left-130 lg:left-170 2xl:left-220 -translate-x-1/2">
              <div className="text-left md:max-w-64 max-w-40 -mr-9 md:mr-0 -ml-15 md:ml-0">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-2xl 2xl:text-2xl font-semibold mb-2 text-white font-serif"
                >
                  Strategic Value
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight font-sans"
                >
                  Innovation and market adaptability, fueled by knowledge
                  management and learning as the cornerstone of progress.
                </p>
              </div>
              {/* Arrow pointing to shell center */}
              <picture>
                <source srcSet="/images/center-arrow.webp" type="image/webp" />
                <Image
                  className="absolute hidden md:block -bottom-25 md:-bottom-40 lg:-bottom-55 left-18 -translate-x-1/2"
                  src="/images/center-arrow.png"
                  alt="Arrow pointing to strategic value center"
                  width={width}
                  height={40}
                  loading="lazy"
                  sizes="(max-width: 1024px) 7px, 11px"
                />
              </picture>
            </div>

            {/* Brand Value - Top Right with Arrow */}
            <div className="absolute px-2 md:px-0 top-65 md:top-55 -right-20  md:-right-25 lg:right-5 2xl:right-110 3xl:right-[32%] -translate-x-1/2">
              <div className="text-left md:max-w-56 max-w-35 md:mr-0 -ml-1 md:ml-0">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-2xl 2xl:text-2xl font-semibold mb-2 text-white font-serif"
                  >
                  Brand Value
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight font-sans"
                >
                  Techniques to build recognition and loyalty, crafting a legacy
                  of trust within the ecosystem.
                </p>
              </div>
              {/* Arrow pointing to shell */}
              <picture>
                <source srcSet="/images/top-right-arrow.webp" type="image/webp" />
                <Image
                  className="absolute top-12 -left-8 md:-left-35 lg:-left-40 lg:top-[80] 2xl:left-[-150] 2xl:top-23 hidden md:block"
                  src="/images/top-right-arrow.png"
                  alt="Arrow pointing to brand value section"
                  width={120}
                  height={40}
                  loading="lazy"
                  sizes="120px"
                />
              </picture>
            </div>

            {/* Social Value - Bottom Right with Arrow */}
            <div className="absolute px-2 md:px-0 bottom-8 sm:bottom-12 md:bottom-48 lg:bottom-55 2xl:bottom-52 -right-14 sm:right-8 md:right-5 lg:right-29 2xl:right-128 3xl:right-[33%]">
              <div className="text-left max-w-56">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-2xl 2xl:text-2xl font-semibold mb-2 text-white font-serif"
                  >
                  Social Value
                </h3>
                <p
                  className="text-xs sm:text-sm text-gray-300 leading-tight font-sans"
                >
                  Impact that uplifts society and the environment, embodying
                  ethical responsibility into every action.
                </p>
              </div>
              {/* Arrow pointing to shell */}
              <picture>
                <source srcSet="/images/bottom-right.webp" type="image/webp" />
                <Image
                  className="absolute top-12 -left-8 md:-left-40 lg:-left-50 hidden md:block"
                  src="/images/bottom-right.png"
                  alt="Arrow pointing to social value section"
                  width={150}
                  height={40}
                  loading="lazy"
                  sizes="150px"
                />
              </picture>
            </div>

            {/* Economic Value - Bottom Left with Arrow */}
            <div className="absolute px-2 md:px-0 bottom-5 sm:bottom-12 md:bottom-35 lg:bottom-45 2xl:bottom-45 3xl:left-[23%] left-2 sm:left-8 md:left-15 lg:left-35 2xl:left-90">
              <div className="text-left md:max-w-56 max-w-40">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-2xl 2xl:text-2xl font-semibold mb-2 text-white font-serif"
                  >
                  Economic Value
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight font-sans"
                >
                  Strategies that generate measurable financial gains,
                  optimizing resources for sustainable prosperity.
                </p>
              </div>
              {/* Arrow pointing to shell */}
              <picture>
                <source srcSet="/images/bottom-left-arrow.webp" type="image/webp" />
                <Image
                  className="absolute top-12 -left-8 md:left-45 lg:left-55 hidden md:block"
                  src="/images/bottom-left-arrow.png"
                  alt="Arrow pointing to economic value section"
                  width={170}
                  height={40}
                  loading="lazy"
                  sizes="170px"
                />
              </picture>
            </div>

            {/* Emotional Value - Left with Arrow */}
            <div className="absolute px-2 md:px-0 top-35 md:top-80 lg:top-80  2xl:top-85 3xl:left-[25%] 3xl:top-90 -translate-y-1/2 left-4 sm:left-8 md:left-14 lg:left-50 2xl:left-100">
              <div className="text-left md:max-w-56 max-w-40">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-2xl 2xl:text-2xl font-semibold mb-2 text-white font-serif"
                  >
                  Emotional Value
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight font-sans"o
                >
                  Memorable experiences that resonate with clients, forging
                  connections beyond transactions.
                </p>
              </div>
              {/* Arrow pointing to shell */}
              <picture>
                <source srcSet="/images/top-left-arrow.webp" type="image/webp" />
                <Image
                  className="absolute top-12  -left-8 md:left-50 lg:left-50 hidden md:block"
                  src="/images/top-left-arrow.png"
                  alt="Arrow pointing to emotional value section"
                  width={150}
                  height={40}
                  loading="lazy"
                  sizes="150px"
                />
              </picture>
            </div>
          </div>
        </div>
        
        {/* Bottom Scrolling Text */}
        <div className="bg-[linear-gradient(90deg,#545CF6_0%,#5257C6_50%,_#545CF6_100%)] py-4 overflow-hidden" aria-hidden="true">
          <div className="flex whitespace-nowrap animate-scroll">
            <span
              className="text-lg sm:text-xl font-semibold px-8 font-serif"
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8 font-serif"
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8 font-serif"
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8 font-serif"
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8 font-serif"
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8 font-serif"
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8 font-serif"
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8 font-serif"
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 50s linear infinite;
        }
      `}</style>
    </section>
  );
}
