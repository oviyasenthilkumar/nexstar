// import Image from 'next/image';

// const CustomSolutions = () => {
//   return (
//     <div 
//       className="relative overflow-hidden px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 rounded-3xl mx-auto w-[98%] md:w-[95%] lg:w-[90%] xl:w-[85%]"
//       style={{
//         background: 'linear-gradient(66.11deg, #3A379C 4.5%, #626AF8 43.63%, #D5DEF4 91.54%)'
//       }}
//     >
//       {/* Background ellipse */}
//       <div className="absolute right-0 -bottom-15 w-[300px] h-full opacity-70 pointer-events-none">
//         <Image
//           src="/Elipse-custom-solutions.svg"
//           alt="Background ellipse"
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Curved white line guide */}
//       <div className="absolute top-0 -right-[820px] w-[1200px] h-[1200px] pointer-events-none opacity-100">
//         <div 
//           className="w-full h-full border-2 border-white rounded-full"
//           style={{
//             borderRadius: '2640px',
//             borderWidth: '2.19px',
//             transform: 'rotate(90deg)',
//             opacity: 1
//           }}
//         ></div>
//       </div>

//       {/* Technology Logos positioned along the curve */}
//       <div className="absolute right-0 top-0 w-full h-full pointer-events-none z-10">
//         {/* GoZen Logo - Top right position */}
//         <div className="absolute top-20 right-32 bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center shadow-xl">
//           <Image src="/gozen-logo.png" alt="GoZen" width={32} height={32} />
//         </div>
//         {/* Zoho Logo - Middle right position */}
//         <div className="absolute top-1/2 right-20 bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center shadow-xl">
//           <Image src="/zoho-logo.png" alt="Zoho" width={32} height={32} />
//         </div>
//         {/* Zherpa Logo - Bottom right position */}
//         <div className="absolute bottom-20 right-32 bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center shadow-xl">
//           <Image src="/zherpa-logo.png" alt="Zherpa" width={32} height={32} />
//         </div>
//       </div>

//       {/* Main content container */}
//       <div className="relative z-20 max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-3 gap-6 md:gap-10 items-start">
//           {/* Left side - Content */}
//           <div className="text-white lg:col-span-2 -ml-4 lg:-ml-8">
//             {/* Title */}
//             <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-none tracking-normal mb-5 md:mb-7 lg:mb-8" style={{ fontFamily: 'League Spartan' }}>
//               Custom Solutions
//             </h1>

//             {/* Description */}
//             <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-[27px] tracking-normal mb-5 md:mb-7 lg:mb-8" style={{ fontFamily: 'League Spartan' }}>
//               We implement technologies like Zoho (SaaS for entire Business), GoZen (predictive<br/>
//               AI for marketing, sales and customer support), Zherpa ZHT (tokenization), and<br/>
//               Zherpa.ai (digital communities), tailored to your specific needs.
//             </p>

//             {/* Content Blocks */}
//             <div className="bg-[#5446BA]/40 backdrop-blur-md text-white border border-white/20 rounded-2xl px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 mb-5 md:mb-7 lg:mb-8">
//               <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
//                 {/* Goal-based Projects */}
//                 <div>
//                   <h2 className="text-xl md:text-2xl font-medium leading-none tracking-normal uppercase mb-4 md:mb-6 lg:mb-8" style={{ fontFamily: 'League Spartan' }}>
//                     Goal-Based Projects
//                   </h2>
//                   <p className="text-base md:text-xl leading-[17px] tracking-normal" style={{ fontFamily: 'League Spartan' }}>
//                     Strategies with clear objectives—from boosting revenue to enhancing collaboration—with verifiable outcomes.
//                   </p>
//                 </div>

//                 {/* Discovery Call */}
//                 <div>
//                   <h2 className="text-xl md:text-2xl font-medium leading-none tracking-normal uppercase mb-4 md:mb-6 lg:mb-8" style={{ fontFamily: 'League Spartan' }}>
//                     Discovery Call
//                   </h2>
//                   <p className="text-base md:text-xl leading-[17px] tracking-normal" style={{ fontFamily: 'League Spartan' }}>
//                     An initial session for a rational, customized quote.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <button className="bg-white text-black px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform text-lg md:text-xl leading-[20px] tracking-normal text-center" style={{ fontFamily: 'League Spartan' }}>
//               Schedule Your Discovery Call
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomSolutions;


import Image from 'next/image';

const CustomSolutions = () => {
  return (
    <div 
      className="relative overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 rounded-2xl sm:rounded-3xl mx-auto w-[95%] sm:w-[98%] md:w-[95%] lg:w-[90%] xl:w-[85%]"
      style={{
        background: 'linear-gradient(66.11deg, #3A379C 4.5%, #626AF8 43.63%, #D5DEF4 91.54%)'
      }}
    >
      
      <div className="hidden xl:block absolute right-0 -bottom-15 w-[300px] h-full opacity-70 pointer-events-none">
        <Image
          src="/Elipse-custom-solutions.svg"
          alt="Background ellipse"
          fill
          className="object-cover"
        />
      </div>

      {/* Curved white line guide */}
      <div className="hidden xl:block absolute top-0 -right-[820px] w-[1200px] h-[1200px] pointer-events-none opacity-100">
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
      <div className="hidden xl:block absolute right-0 top-0 w-full h-full pointer-events-none z-10">
        {/* GoZen Logo - Top right position */}
        <div className="absolute top-15 right-20 w-40 h-40 flex items-center justify-center">
          <Image src="/images/gozen.png" alt="GoZen" width={110} height={60} className="object-contain" />
        </div>
        {/* Zoho Logo - Middle right position */}
        <div className="absolute top-63 right-59 w-40 h-40 flex items-center justify-center">
          <Image src="/images/zoho.png" alt="Zoho" width={110} height={48} className="object-contain" />
        </div>
        {/* Zherpa Logo - Bottom right position */}
        <div className="absolute bottom-10 right-73 w-40 h-40 flex items-center justify-center">
          <Image src="/images/zherpa.png" alt="Zherpa" width={110} height={48} className="object-contain" />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-20 max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-0">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start">
          {/* Left side - Content */}
          <div className="text-white lg:col-span-2 -ml-2 sm:-ml-4 lg:-ml-8">
            {/* Title */}
            <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-5xl lg:text-5xl leading-tight sm:leading-none tracking-normal mb-4 sm:mb-5 md:mb-7 lg:mb-8" style={{ fontFamily: 'League Spartan' }}>
              Custom Solutions
            </h1>

            {/* Description */}
            <p className="text-[#F0F0F0] font-normal text-base sm:text-lg md:text-2xl lg:text-2xl leading-relaxed sm:leading-[27px] tracking-normal mb-4 sm:mb-5 md:mb-7 lg:mb-8" style={{ fontFamily: 'League Spartan' }}>
              <span className="hidden sm:inline">We implement technologies like Zoho (SaaS for entire Business), GoZen (predictive<br/>
              AI for marketing, sales and customer support), Zherpa ZHT (tokenization), and<br/>
              Zherpa.ai (digital communities), tailored to your specific needs.</span>
              <span className="sm:hidden">We implement technologies like Zoho (SaaS for entire Business), GoZen (predictive AI for marketing, sales and customer support), Zherpa ZHT (tokenization), and Zherpa.ai (digital communities), tailored to your specific needs.</span>
            </p>

            {/* Content Blocks */}
            <div className="bg-[#020103]/[0.27] backdrop-blur-md text-white border border-white/20 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 mb-4 sm:mb-5 md:mb-7 lg:mb-8">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {/* Goal-based Projects */}
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-medium leading-tight sm:leading-none tracking-normal uppercase mb-3 sm:mb-4 md:mb-6 lg:mb-8" style={{ fontFamily: 'League Spartan' }}>
                    Goal-Based Projects
                  </h2>
                  <p className="text-sm sm:text-base md:text-xl leading-loose sm:leading-6 tracking-normal" style={{ fontFamily: 'League Spartan', color: '#EAEAEA' }}>
                    Strategies with clear objectives—from boosting revenue to enhancing collaboration—with verifiable outcomes.
                  </p>
                </div>

                {/* Discovery Call */}
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-medium leading-tight sm:leading-none tracking-normal uppercase mb-3 sm:mb-4 md:mb-6 lg:mb-8" style={{ fontFamily: 'League Spartan' }}>
                    Discovery Call
                  </h2>
                  <p className="text-sm sm:text-base md:text-xl leading-loose font-medium  sm:leading-6 tracking-normal" style={{ fontFamily: 'League Spartan', color: '#EAEAEA' }}>
                    An initial session for a rational, customized quote.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-black px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 rounded-full font-semibold shadow-xl  transition-transform text-base sm:text-lg md:text-xl leading-tight sm:leading-[20px] tracking-normal text-center w-full sm:w-auto" style={{ fontFamily: 'League Spartan' }}>
              Schedule Your Discovery Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSolutions;
