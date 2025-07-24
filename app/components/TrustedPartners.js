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
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-sora)' }}>
            Trusted Partnerships
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-league-spartan)' }}>
            We collaborate with leading platforms and technologies, 
            including Zoho, SAP, Microsoft, and OpenAI, to deliver 
            comprehensive solutions tailored to your business needs.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[120px]"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={160}
                height={80}
                className="object-contain max-w-full h-auto"
                priority={index < 3}
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-league-spartan)' }}>
            Trusted by leading companies worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;