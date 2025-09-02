import Image from 'next/image';

const TrustedPartners = () => {
  const partners = [
    {
      name: 'GoZen',
      logo: '/GoZen card.png',
      logoWebp: '/GoZen card.webp',
      alt: 'GoZen - AI-powered marketing and sales automation platform'
    },
    {
      name: 'Gamma',
      logo: '/Gamma card.png',
      logoWebp: '/Gamma card.webp',
      alt: 'Gamma - AI-powered presentation and document creation platform'
    },
    {
      name: 'Tutellus',
      logo: '/Tutellus Card.png',
      logoWebp: '/Tutellus Card.webp',
      alt: 'Tutellus - Educational technology and learning platform'
    },
    {
      name: 'VR Academy',
      logo: '/VR Academy card.png',
      logoWebp: '/VR Academy card.webp',
      alt: 'VR Academy - Virtual reality training and educational platform'
    },
    {
      name: 'PartnerStack',
      logo: '/PartnerStack card.png',
      logoWebp: '/PartnerStack card.webp',
      alt: 'PartnerStack - Partnership management and referral platform'
    }
  ];

  return (
    <section 
      className="pt-16 md:pt-20 lg:pt-28 xl:pt-80 pb-16 lg:pb-20 xl:pb-32 relative"
      style={{
        backgroundImage: "url('/images/blackbg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      role="region"
      aria-labelledby="trusted-partners-heading"
      aria-label="NexStar trusted partnerships and technology collaborations"
    >
      {/* White transparent overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          zIndex: 1 
        }}
        aria-hidden="true"
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-10 pt-8 md:pt-12 lg:pt-16">
          <h2 
            id="trusted-partners-heading"
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-black mb-6 md:mb-8 font-sora"
          >
            Trusted Partnerships
          </h2>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-center font-normal pl-4 sm:pl-6 md:pl-30 pr-4 sm:pr-6 md:pr-30 font-league-spartan text-[#6C6C6C]">
            We collaborate with leading platforms and technologies, including Zoho, SAP, Microsoft, and OpenAI, to deliver comprehensive solutions tailored to your business needs.
          </p>
        </div>

        {/* Partners Grid */}
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10"
          role="list"
          aria-label="Trusted technology partners and platforms"
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
              role="listitem"
            >
              <picture>
                <source srcSet={partner.logoWebp} type="image/webp" />
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={210}
                  height={80}
                  className="object-contain max-w-full h-auto transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#626AF8] focus:ring-offset-2 focus:ring-offset-white rounded-lg"
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 150px, (max-width: 1024px) 180px, 210px"
                  priority={index < 3}
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;