
'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AboutUs() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section 
      className="flex flex-col lg:flex-row items-center bg-white font-['League_Spartan']"
      aria-labelledby="about-heading"
      role="region"
      aria-label="About NexStar - 30 years of business transformation"
    >
      {/* Image Container */}
      <div className="relative w-full md:w-[80%] lg:w-[50%] 2xl:w-[41%] overflow-hidden flex-shrink-0 bg-white p-2 lg:p-0">
        <picture>
          <source srcSet="/images/about-image.webp" type="image/webp" />
          <Image
            src="/images/about-image.png"
            alt="Team unity showing interconnected hands working together on business transformation projects"
            width={800}
            height={600}
            className={`w-full object-contain transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => console.log("Image failed to load")}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 45vw"
            priority={false}
          />
        </picture>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-[50%] mx-auto flex flex-col justify-center text-center md:text-left p-10 lg:p-10 2xl:p-2">
        <p className="font-sans font-normal text-xs sm:text-sm lg:text-lg xl:text-sm 3xl:text-[clamp(0.75rem,0.5vw+0.625rem,0.875rem)] tracking-widest uppercase text-black mb-4 lg:mb-6">
          ABOUT US
        </p>

        <h1 
          id="about-heading"
          className="font-serif max-w-prose text-xl sm:text-2xl md:text-4xl xl:text-5xl 3xl:text-[clamp(2.25rem,2vw+1.5rem,3rem)] font-bold mb-4 md:mb-6 leading-tight"
        >
          <span className="text-black">30 Years </span>
          <span className="bg-gradient-to-r from-[#5257C6] to-[#242459] bg-clip-text text-transparent">
            turning businesses
          </span>
          <span className="text-black"> into </span>
          <span className="bg-gradient-to-r from-[#5257C6] to-[#242459] bg-clip-text text-transparent">
            scalable, governable systems
          </span>
        </h1>

        <div className="text-[#6C6C6C] max-w-prose font-sans font-normal text-sm sm:text-sm md:text-base lg:text-xl 3xl:text-[clamp(1rem,0.5vw+0.875rem,1.125rem)] space-y-4">
          <p>
            We partner with owners to exit day-to-day ops. We align purpose and value proposition, design replicable systems, digitize on Zoho, automate with RPA, and apply AI only where it moves KPIs.
            <br />
            <br />
            <strong>Proof:</strong> our founders grew MDO Tecnología into Zoho's largest Premium Partner (1,300+ clients).
          </p>
        </div>
      </div>
    </section>
  );
}
