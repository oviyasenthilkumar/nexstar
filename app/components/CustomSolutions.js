
import Image from 'next/image';

const CustomSolutions = () => {
  return (
    <section 
      className="relative overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 rounded-2xl sm:rounded-3xl mx-auto w-[95%] sm:w-[98%] md:w-[95%] lg:w-[90%] xl:w-[85%] 3xl:w-[65%]"
      style={{
        background: 'linear-gradient(66.11deg, #3A379C 4.5%, #626AF8 43.63%, #D5DEF4 91.54%)'
      }}
      role="region"
      aria-labelledby="custom-solutions-heading"
      aria-label="NexStar custom solutions - Solutions that ship outcomes"
    >
      
      {/* Background ellipse with WebP optimization */}
      <div className="hidden xl:block absolute right-0 -bottom-15 w-[300px] h-full opacity-70 pointer-events-none">
        <picture>
          <source srcSet="/Elipse-custom-solutions.webp" type="image/webp" />
          <Image
            src="/Elipse-custom-solutions.svg"
            alt="Decorative background ellipse element enhancing the visual design"
            fill
            className="object-cover"
            loading="lazy"
            sizes="300px"
          />
        </picture>
      </div>

      {/* Curved white line guide */}
      <div className="hidden xl:block absolute top-0 -right-[820px] w-[1200px] h-[1200px] pointer-events-none opacity-100" aria-hidden="true">
        <div 
          className="w-full h-full border-2 border-white rounded-full"
          style={{
            borderRadius: '2640px',
            borderWidth: '2.19px',
            transform: 'rotate(90deg)',
            opacity: 1
          }}
        ></div>
      </div>

      {/* Technology Logos positioned along the curve */}
      <div className="hidden xl:block absolute right-0 top-0 w-full h-full pointer-events-none z-10" aria-hidden="true">
        {/* GoZen Logo - Top right position */}
        <div className="absolute top-15 right-20 w-40 h-40 flex items-center justify-center">
          <picture>
            <source srcSet="/images/gozen.webp" type="image/webp" />
            <Image 
              src="/images/gozen.png" 
              alt="GoZen - AI-powered marketing and sales automation platform" 
              width={110} 
              height={60} 
              className="object-contain" 
              loading="lazy"
              sizes="110px"
            />
          </picture>
        </div>
        {/* Zoho Logo - Middle right position */}
        <div className="absolute top-58 right-58 w-40 h-40 flex items-center justify-center">
          <picture>
            <source srcSet="/images/zoho.webp" type="image/webp" />
            <Image 
              src="/images/zoho.png" 
              alt="Zoho - Comprehensive business software suite for CRM, accounting, and operations" 
              width={110} 
              height={48} 
              className="object-contain" 
              loading="lazy"
              sizes="110px"
            />
          </picture>
        </div>
        {/* Zherpa Logo - Bottom right position */}
        <div className="absolute bottom-3 right-73 w-40 h-40 flex items-center justify-center">
          <picture>
            <source srcSet="/images/zherpa.webp" type="image/webp" />
            <Image 
              src="/images/zherpa.png" 
              alt="Zherpa - Digital tokenization and AI-powered community platform" 
              width={110} 
              height={48} 
              className="object-contain" 
              loading="lazy"
              sizes="110px"
            />
          </picture>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-20 max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-0">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start">
          {/* Left side - Content */}
          <div className="text-white lg:col-span-2 -ml-2 sm:-ml-4 lg:-ml-8">
            {/* Main Title */}
            
            
            {/* Subtitle */}
            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-5xl lg:text-5xl 3xl:text-[clamp(2.25rem,2vw+1.5rem,3rem)] leading-tight sm:leading-none tracking-normal mb-4 sm:mb-5 md:mb-7 lg:mb-8 font-sans">
              Services and Solutions
            </h2>

            {/* Description */}
            <p className="text-[#F0F0F0] max-w-prose font-normal text-base sm:text-lg md:text-2xl lg:text-2xl  3xl:text-[clamp(1rem,0.5vw+0.875rem,1.125rem)] leading-relaxed sm:leading-[27px] tracking-normal mb-4 sm:mb-5 md:mb-7 lg:mb-8 font-sans">
              <span className="hidden sm:inline">CRM Automation . AI Assistants . Analytics & Dashboards . Integrations</span>
              {/* <span className="sm:hidden">We implement technologies like Zoho (SaaS for entire Business), GoZen (predictive AI for marketing, sales and customer support), Zherpa ZHT (tokenization), and Zherpa.ai (digital communities), tailored to your specific needs.</span> */}
            </p>

            {/* Content Blocks */}
            <div className="bg-[#020103]/[0.27] backdrop-blur-md text-white border border-white/20 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 mb-4 sm:mb-5 md:mb-7 lg:mb-8">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {/* Goal-based Projects */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium leading-tight sm:leading-none tracking-normal uppercase mb-3 sm:mb-4 md:mb-6 lg:mb-8 font-sans">
                    Goal-Based Projects
                  </h3>
                  <p className="max-w-prose text-sm sm:text-base md:text-xl  3xl:text-[clamp(1rem,0.5vw+0.875rem,1.125rem)] leading-loose sm:leading-6 tracking-normal font-sans text-[#EAEAEA]">
                    Clear objectives (grow pipeline, cut CAC, improve NPS), a 90-day plan, weekly sprints, and a KPI dashboard with exit criteria (e.g., +20% MQL, –15% cost-to-serve).
                  </p>
                </div>

                {/* Discovery Call */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium leading-tight sm:leading-none tracking-normal uppercase mb-3 sm:mb-4 md:mb-6 lg:mb-8 font-sans">
                    Discovery Call
                  </h3>
                  <p className="text-sm  max-w-prose sm:text-base md:text-xl 3xl:text-[clamp(1rem,0.5vw+0.875rem,1.125rem)] leading-loose font-medium sm:leading-6 tracking-normal font-sans text-[#EAEAEA]">
                    30-minute session to get a capability map, quick wins, scope, timeline, and a rational quote.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Navigation Link */}
            <a
              href="https://nexstar.zohobookings.com/#/4585749000000036002?utm_source=website&utm_medium=embed&utm_campaign=discovery_call"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label="Schedule your consultation to transform your business"
              className="relative  bg-white text-black px-4 sm:px-6 md:px-8 lg:px-10  py-2 sm:py-3 md:py-4 lg:py-4 rounded-full font-semibold font-sans shadow-xl transition-transform text-[clamp(0.875rem,2vw+0.5rem,1.25rem)] leading-tight sm:leading-[20px] tracking-normal text-center w-full sm:w-auto font-league-spartan hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#626AF8]"
            >
              Book a Discovery Call
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[377px] h-1.5 sm:h-2 md:h-2.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-100 blur-md shadow-[0_0_12px_rgba(255,255,255,0.8)]" aria-hidden="true"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
