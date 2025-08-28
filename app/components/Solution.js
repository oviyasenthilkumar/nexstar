// const Solution = () => {
//   return (
//     <div 
//       className="relative min-h-[100vh] overflow-hidden flex items-start justify-center bg-cover bg-center bg-no-repeat pt-20"
//       style={{
//         backgroundImage: "url('/galaxy-bg.jpg')"
//       }}
//     >
//       {/* Dark overlay for better text readability */}
//       <div className="absolute inset-0 bg-black/20"></div>

//       {/* Main content */}
//       <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
//         {/* Subtitle */}
//         <p 
//           className="text-white/80 mb-4 uppercase text-center"
//           style={{
//             fontFamily: 'League Spartan',
//             fontWeight: 400,
//             fontStyle: 'normal',
//             fontSize: '20px',
//             lineHeight: '28px',
//             letterSpacing: '0%',
//             textTransform: 'uppercase'
//           }}
//         >
//           WELCOME TO THE ERA OF ECOSYSTEMS
//         </p>
        
//         {/* Main heading */}
//         <h1 
//           className="mb-4 text-center capitalize"
//           style={{
//             fontFamily: 'Sora',
//             fontWeight: 600,
//             fontStyle: 'normal',
//             fontSize: '48px',
//             lineHeight: '100%',
//             letterSpacing: '0%',
//             textAlign: 'center',
//             textTransform: 'capitalize',
//             background: 'linear-gradient(95.87deg, #FFFFFF 19.61%, #9E9FA2 61.35%, #FFFFFF 96.8%)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text'
//           }}
//         >
//           Grow Your Value With<br />
//           Conscious Solutions
//         </h1>
        
//         {/* Description */}
//         <p 
//           className="text-white/90 max-w-4xl mx-auto"
//           style={{
//             fontFamily: 'League Spartan',
//             fontWeight: 400,
//             fontStyle: 'normal',
//             fontSize: '16px',
//             lineHeight: '19px',
//             letterSpacing: '0%',
//             textAlign: 'center'
//           }}
//         >
//           At NexStar Consulting, we offer tailored consulting to align your business with the<br />
//           Nautilus Method, a framework that transforms resources into measurable, sustainable<br />
//           value. Our services are empirical tools that reduce risks and maximize opportunities,<br />
//           connecting your company to a broader ecosystem with precision and purpose.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Solution;

import Image from 'next/image';

const Solution = () => {
  return (
    <div 
      className="relative min-h-[75vh] sm:min-h-[75vh] md:min-h-[50vh] lg:min-h-[85vh] xl:min-h-[100vh] 2xl:min-h-[95vh] overflow-hidden flex items-start justify-center bg-cover bg-center bg-no-repeat pt-20 bg-gradient-to-b from-black/40 via-black/20 to-transparent 
      bg-[url('/images/blackbg.png')]"
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Left Ellipse - Adjusted Position */}
      <div className="absolute bottom-100 right-[-230] z-5">
        <Image
          src="/images/leftellipse.png"
          alt="Left Ellipse"
          width={800}
          height={400}
          className="object-contain"
        />
      </div>
      
      {/* Right Ellipse - Adjusted Position */}
      <div className="absolute bottom-100 left-[-250] z-5">
        <Image
          src="/images/rightellipse.png"
          alt="Right Ellipse"
          width={800}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        {/* Subtitle */}
        <p 
          className="text-[#F0F0F0] mb-4 uppercase text-center -mt-18 sm:-mt-8 md:-mt-10 lg:-mt-12 xl:-mt-8 2xl:-mt-4"
          style={{
            fontFamily: 'League Spartan',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '28px',
            letterSpacing: '0%',
            textTransform: 'uppercase'
          }}
        >
          WELCOME TO THE ERA OF ECOSYSTEMS
        </p>
        
        {/* Main heading */}
        <h1 
  className="mb-4 max-w-3xl md:max-w-2xl lg:max-w-xl mx-auto text-center capitalize 
             bg-gradient-to-r from-[#FFFFFF] via-[#9E9FA2] to-[#FFFFFF] bg-clip-text text-transparent
             text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold font-sora"
>
  Grow Your Value With <br />
  Conscious Solutions
</h1>

        
        {/* Description */}
        <p 
          className="text-[#F0F0F0] max-w-3xl md:max-w-2xl lg:max-w-xl mx-auto"
          style={{
            fontFamily: 'League Spartan',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '0%',
            textAlign: 'center'
          }}
        >
          At NexStar Consulting, we offer tailored consulting to align your business with the
          Nautilus Method, a framework that transforms resources into measurable, sustainable
          value. Our services are empirical tools that reduce risks and maximize opportunities,
          connecting your company to a broader ecosystem with precision and purpose.
        </p>
      </div>
    </div>
  );
};

export default Solution;