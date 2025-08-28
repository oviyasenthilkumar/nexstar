// import Image from 'next/image';

// const TrustedPartners = () => {
//   const partners = [
//     {
//       name: 'GoZen',
//       logo: '/GoZen card.png',
//       alt: 'GoZen'
//     },
//     {
//       name: 'Gamma',
//       logo: '/Gamma card.png',
//       alt: 'Gamma'
//     },
//     {
//       name: 'Tutellus',
//       logo: '/Tutellus Card.png',
//       alt: 'Tutellus'
//     },
//     {
//       name: 'VR Academy',
//       logo: '/VR Academy card.png',
//       alt: 'VR Academy'
//     },
//     {
//       name: 'PartnerStack',
//       logo: '/PartnerStack card.png',
//       alt: 'PartnerStack'
//     }
//   ];

//   return (
//     <div className="pt-16 md:pt-20 lg:pt-28 xl:pt-80 pb-16 lg:pb-20 xl:pb-32 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 md:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-16 md:mb-20">
//           <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 md:mb-8" style={{ fontFamily: 'var(--font-sora)' }}>
//             Trusted Partnerships
//           </h2>
//           <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-league-spartan)' }}>
//             We collaborate with leading platforms and technologies,<br />
//             including Zoho, SAP, Microsoft, and OpenAI, to deliver <br />
//             comprehensive solutions tailored to your business needs.
//           </p>
//         </div>

//         {/* Partners Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
//           {partners.map((partner, index) => (
//             <div
//               key={partner.name}
//               className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[120px] md:min-h-[140px]"
//             >
//               <Image
//                 src={partner.logo}
//                 alt={partner.alt}
//                 width={160}
//                 height={80}
//                 className="object-contain max-w-full h-auto"
//                 priority={index < 3}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrustedPartners;

import Image from 'next/image';

const TrustedPartners = () => {
  const partners = [
    {
      name: 'GoZen',
      logo: '/GoZen card.png',
      alt: 'GoZen'
    },
    {
      name: 'Gamma',
      logo: '/Gamma card.png',
      alt: 'Gamma'
    },
    {
      name: 'Tutellus',
      logo: '/Tutellus Card.png',
      alt: 'Tutellus'
    },
    {
      name: 'VR Academy',
      logo: '/VR Academy card.png',
      alt: 'VR Academy'
    },
    {
      name: 'PartnerStack',
      logo: '/PartnerStack card.png',
      alt: 'PartnerStack'
    }
  ];

    return (
    <div 
      className="pt-16 md:pt-20 lg:pt-28 xl:pt-80 pb-16 lg:pb-20 xl:pb-32 relative"
      style={{
        backgroundImage: "url('/images/blackbg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* White transparent overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          zIndex: 1 
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-10 pt-8 md:pt-12 lg:pt-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-black mb-6 md:mb-8" style={{ fontFamily: 'var(--font-sora)' }}>
            Trusted Partnerships
          </h2>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-center font-normal  pl-4 sm:pl-6 md:pl-30 pr-4 sm:pr-6 md:pr-30" style={{ fontFamily: 'var(--font-league-spartan)', color: '#6C6C6C' }}>
            We collaborate with leading platforms and technologies, including Zoho, SAP, Microsoft, and OpenAI, to deliver comprehensive solutions tailored to your business needs.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className=""
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={210}
                height={80}
                className="object-contain max-w-full h-auto"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;