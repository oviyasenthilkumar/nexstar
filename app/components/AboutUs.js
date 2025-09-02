// 'use client'
// import { useState } from 'react';
// import Image from 'next/image';

// export default function AboutUs() {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <section 
//       className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 items-center bg-[#F5F8FF] font-['League_Spartan']"
//       aria-labelledby="about-heading"
//       role="region"
//       aria-label="About NexStar - 30 years of business transformation"
//     >
//       {/* Image Container: Spans 5 of 12 columns on large screens */}
//       <div className="lg:col-span-5 relative w-full overflow-hidden flex-shrink-0 bg-white p-2 lg:p-0">
//         <picture>
//           <source srcSet="/images/about-image.webp" type="image/webp" />
//           <Image
//             src="/images/about-image.png"
//             alt="Team unity showing interconnected hands working together on business transformation projects"
//             width={800}
//             height={600}
//             className={`w-full object-contain transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
//             onLoad={() => setImageLoaded(true)}
//             onError={() => console.log("Image failed to load")}
//             loading="lazy"
//             sizes="(max-width: 1024px) 100vw, 41.6vw" // Adjusted sizes for a 5/12 column span
//             priority={false}
//           />
//         </picture>
//       </div>

//       {/* Text Content: Spans 7 of 12 columns on large screens */}
//       <div className="lg:col-span-7 flex flex-col justify-center text-center md:text-left p-10 lg:p-10 2xl:p-2">
//         {/* Eyebrow: small caps/overline (≈12–14px) */}
//         <p className="font-league-spartan font-normal text-xs sm:text-sm tracking-widest uppercase text-black mb-4 lg:mb-6">
//           ABOUT US
//         </p>

//         {/* H1: 40–56px desktop (max 2 lines), 28–32px mobile */}
//         <h1 
//           id="about-heading"
//           className="font-['Sora',sans-serif] text-xl sm:text-2xl md:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight"
//         >
//           <span className="text-black">30 Years </span>
//           <span className="bg-gradient-to-r from-[#5257C6] to-[#242459] bg-clip-text text-transparent">
//             turning businesses
//           </span>
//           <span className="text-black"> into </span>
//           <span className="bg-gradient-to-r from-[#5257C6] to-[#242459] bg-clip-text text-transparent">
//             scalable, governable systems
//           </span>
//         </h1>

//         {/* Body: 16–18px, 1.6–1.7 line-height */}
//         <div className="text-[#6C6C6C] font-normal text-base sm:text-lg leading-[1.6] sm:leading-[1.7] md:leading-[1.7] 2xl:leading-[1.7] lg:max-w-2xl space-y-4">
//           <p>
//             We partner with owners to exit day-to-day ops. We align purpose and value proposition, design replicable systems, digitize on Zoho, automate with RPA, and apply AI only where it moves KPIs.
//             <br />
//             <br />
//             <strong>Proof:</strong> Our founders grew MDO Tecnología into Zoho's largest Premium Partner (1,300+ clients).
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

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
        <p className="font-league-spartan font-normal text-xs sm:text-sm lg:text-lg xl:text-sm tracking-widest uppercase text-black mb-4 lg:mb-6">
          ABOUT US
        </p>

        <h1 
          id="about-heading"
          className="font-['Sora',sans-serif] text-xl sm:text-2xl md:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight"
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

        <div className="text-[#6C6C6C] font-normal text-sm sm:text-sm md:text-base lg:text-xl lg:max-w-lg space-y-4">
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
