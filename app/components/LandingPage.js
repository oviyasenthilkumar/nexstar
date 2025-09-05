"use client";

import Image from "next/image";
import Header from "./Header";

export default function Home() {
  return (
    <main
      className="relative text-white bg-cover bg-center h-[110vh] md:h-[106vh] lg:h-[130vh] xl:h-[155vh] 2xl:h-[145vh]"
      style={{
        backgroundImage: "url('/images/Solution.webp')",
      }}
      role="main"
      aria-label="NexStar landing page - Build a business that runs without you"
    >
      
      {/* Layered Curve Background */}
      <div
  className="relative z-10 w-full min-h-screen bg-no-repeat bg-[length:100%_auto] bg-center custom-curve-bg"
  style={{ backgroundImage: "url('/curve.webp')" }}
  aria-hidden="true"
>


        {/* White Grid Lines - Unchanged */}
        <div
          className="absolute inset-0 z-12 pointer-events-none h-[50vh]  md:h-[62vh]  lg:h-[100vh] xl:h-[90vh] 2xl:h-[90vh] 3xl:h-[95vh]  "
          aria-hidden="true"
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


        {/* Header - Unchanged */}
        <div className="relative z-50 -mt-8 lg:-mt-20">
          <Header />
        </div>

        {/* GRID CONTAINER: This is the main 12-column grid wrapper */}
        <div className="relative z-25 grid grid-cols-12 gap-x-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

          {/* Hero Section: Now occupies the full 12 columns of our grid. */}
          <section
            className="col-span-12 pt-15 sm:pt-6 md:pt-18 lg:pt-30 2xl:pt-28 3xl:pt-60 text-center"
            aria-labelledby="hero-heading"
          >
            {/* We can nest grids for finer control. Here we center the text content. */}
            {/* It spans 10 columns and starts at column 2, leaving 1 empty column on each side. */}
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-10 md:col-start-2">
                <div className="max-w-4xl mx-auto">
                  <p className="text-sm sm:text-xs md:text-sm xl:text-sm 2xl:text-lg mt-15 uppercase tracking-wider font-sans text-white/80 mb-2 sm:mb-3 md:mb-4 3xl:text-[clamp(0.75rem,0.5vw+0.625rem,0.875rem)]">
                    From operator to owner
                  </p>
                  <h1
                    id="hero-heading"
                    className="text-3xl sm:text-5xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight font-serif bg-gradient-to-r from-[#FFFFFF] via-[#9E9FA2] to-[#FFFFFF] bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 text-center 3xl:text-[clamp(3.5rem,4vw+2rem,4.5rem)]"
                  >
                    AI + Zoho systems for predictable growth
                    
                  </h1>
                  <p className="text-[#F0F0F0] font-normal text-sm sm:text-base md:text-xl xl:text-lg 2xl:text-xl font-sans mb-6 sm:mb-8 md:mb-10 mx-auto px-4 3xl:text-[clamp(1rem,0.5vw+0.875rem,1.125rem)]">
                   Implement in 90 days without disrupting your team
                  </p>
                                    <a
                    href="https://nexstar.zohobookings.com/#/4585749000000036002?utm_source=website&utm_medium=embed&utm_campaign=discovery_call"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                    aria-label="Schedule your consultation to transform your business"
                    className=" bg-[#545CF6] hover:bg-[#4F46E5] px-6 sm:px-8 md:px-10 py-4 sm:py-4 md:py-4 text-white font-semibold text-[clamp(0.875rem,2vw+0.5rem,1.25rem)] font-sans rounded-full transition duration-200 shadow-lg shadow-[#5B6FFF]/20 hover:shadow-xl hover:shadow-[#5B6FFF]/30 relative hidden md:inline-block focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-transparent focus:shadow-[0_0_0_0.5px_rgba(255,255,255,0.7),0_0_0_1px_rgba(84,92,246,0.3)] -mt-4"
                  >
                    Book a Discovery Call
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[377px] h-1.5 sm:h-2 md:h-2.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-100 blur-md shadow-[0_0_12px_rgba(255,255,255,0.8)]" aria-hidden="true"></div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Team Image: Also spans the full 12 columns. */}
          <div className="col-span-12 z-20 flex justify-center mt-10 sm:mt-12 md:mt-35 lg:mt-20  2xl:-mt-1 3xl:mt-30 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] -translate-y-8 sm:-translate-y-2 md:translate-y-0 sm:pb-8 md:pb-12 lg:pb-16">

            <picture>
              <source srcSet="/images/groupimage.webp" type="image/webp" />
              <Image
                src="/images/groupimage.png"

                alt="NexStar team members working together on business transformation projects"
                width={1200}
                height={400}
                priority
                className="w-full max-w-[110vw] sm:max-w-[95vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw] 2xl:w-[100vw] object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1024px) 70vw, (max-width: 1280px) 60vw, 50vw"
              />
            </picture>

            {/* Mission Section: Unchanged, as it is absolutely positioned relative to the image. The grid is applied inside it below. */}
            <section
              className="absolute left-1/2 -bottom-37 sm:bottom-8 md:-bottom-44 lg:bottom-6 2xl:-bottom-10 z-30 w-full max-w-[95vw] sm:max-w-5xl lg:max-w-6xl -translate-x-1/2 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center translate-y-12 sm:translate-y-4 md:translate-y-0"
              aria-labelledby="mission-heading"
            >
              <div className="max-w-4xl  mx-auto ">
                <h2
                  id="mission-heading"
                  className="mt-8 sm:mt-12 md:mt-16 mb-4 max-w-3xl md:max-w-2xl lg:max-w-xl mx-auto text-center capitalize bg-gradient-to-r from-[#FFFFFF] via-[#9E9FA2] to-[#FFFFFF] bg-clip-text text-transparent font-semibold font-serif text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl 3xl:text-[clamp(2.25rem,2vw+1.5rem,3rem)]"
                >
                  How we make it real
                </h2>

                <div className="flex flex-col items-center text-center max-w-[95vw] mx-auto">
                  <p className=" max-w-prose font-normal text-white/80 text-[11px] sm:text-sm md:text-xl lg:text-lg 3xl:text-[clamp(1rem,0.5vw+0.875rem,1.125rem)] leading-relaxed font-sans mb-6">
                    Purpose & value aligned → replicable systems → <b>Zoho</b> digitization → <b>RPA</b> automation → <b>AI</b> only where it lifts KPIs—so growth is predictable and governed by data.
                  </p>

                  {/* GRID FOR LIST ITEMS: Replaces flexbox. Each of the 3 items will span 4 columns on desktop (4*3=12) */}
                  <ul className="grid grid-cols-1 max-w-prose md:grid-cols-12 gap-y-4 md:gap-x-6 list-none text-white/80 3xl:text-[clamp(1rem,0.5vw+0.875rem,1.125rem)] text-[11px] sm:text-sm md:text-xl lg:text-lg font-sans">
                    <li className="md:col-span-4"><strong>Predictable growth:</strong> dashboards and KPIs you manage</li>
                    <li className="md:col-span-4"><strong>Replicable operations:</strong> SOPs and playbooks everyone follows</li>
                    <li className="md:col-span-4"><strong>Owner control:</strong> clear rhythms, roles, and accountability</li>
                  </ul>
                </div>

                {/* GRID FOR BUTTONS: Replaces flexbox. Each of the 2 buttons will span 6 columns on medium screens. */}
                <div className="mt-10 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 sm:gap-4 md:gap-6 w-full px-4">
                <a
                  href="/ebook/book.pdf"
                  download
                  className="relative flex items-center gap-4 px-8 sm:px-8 md:px-10 py-2 sm:py-4 md:py-4 border border-[#B6AFFF] rounded-full bg-transparent hover:bg-white/10 transition duration-150 shadow-[0_0_16px_0_rgba(182,175,255,0.12)] font-league-spartan font-semibold text-sm sm:text-base md:text-xl text-white -mt-4"
                  style={{ boxShadow: '0 0 16px 0 rgba(182,175,255,0.12), 0 2px 12px 0 rgba(255,255,255,0.08) inset' }}
                >
                  <span className="absolute -top-2 left-3 bg-[#A71414] font-normal font-sans text-white text-[9px]  px-4 py-0.2 rounded-full shadow-md">
                    Our Playbook: Discover → Implement → Scale
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 28 28"
                    className="w-4 h-4 md:w-6 md:h-6 text-white stroke-white"
                    style={{ minWidth: '1.2em' }}
                    aria-hidden="true"
                  >
                    <path d="M14 4v14m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="5" y="20" width="18" height="2" rx="1" fill="currentColor" opacity=".3"/>
                  </svg>
                  <span className="font-sans font-semibold text-[clamp(0.875rem,2vw+0.5rem,1.25rem)] text-white ml-1 ">
                    Download our eBook
                  </span>
                </a>
                                <a
                  href="https://nexstar.zohobookings.com/#/4585749000000036002?utm_source=website&utm_medium=embed&utm_campaign=discovery_call"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  aria-label="Schedule your consultation to transform your business"
                  className=" bg-[#545CF6] hover:bg-[#4F46E5] px-6 sm:px-8 md:px-10 py-2 sm:py-4 md:py-4 text-white font-semibold text-[clamp(0.875rem,2vw+0.5rem,1.25rem)] font-sans  rounded-full transition duration-200 shadow-lg shadow-[#5B6FFF]/20 hover:shadow-xl hover:shadow-[#5B6FFF]/30 relative focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-transparent focus:shadow-[0_0_0_0.5px_rgba(255,255,255,0.7),0_0_0_1px_rgba(84,92,246,0.3)] -mt-4"
                >
                  Schedule a Discovery Call
                  {/* Bright white light effect at bottom edge - intense center, gradient blur to corners */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[377px] h-1.5 sm:h-2 md:h-2.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-100 blur-md shadow-[0_0_12px_rgba(255,255,255,0.8)]" aria-hidden="true"></div>
                </a>
              </div>
              </div>
            </section>
          </div>

        </div> {/* End of Main Grid Container */}
      </div>
    </main>
  );
}
