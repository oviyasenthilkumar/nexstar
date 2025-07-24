import Image from 'next/image';

const CustomSolutions = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#6C5CE7] via-[#7B6EC7] to-[#A29BFE] overflow-hidden flex items-center justify-center px-6 py-16">
      {/* Background ellipse */}
      <div className="absolute right-0 top-0 w-[50%] h-full opacity-70 pointer-events-none">
        <Image
          src="/Elipse-custom-solutions.svg"
          alt="Background ellipse"
          fill
          className="object-cover"
        />
      </div>

      {/* Logos on the right connected via line */}
      <div className="absolute right-12 top-24 space-y-16 hidden lg:flex flex-col items-center z-10">
        {/* GoZen Logo */}
        <div className="bg-white rounded-full p-3 w-20 h-20 flex items-center justify-center shadow-xl">
          <Image src="/gozen-logo.png" alt="GoZen" width={40} height={40} />
        </div>
        {/* Zoho Logo */}
        <div className="bg-white rounded-full p-3 w-20 h-20 flex items-center justify-center shadow-xl">
          <Image src="/zoho-logo.png" alt="Zoho" width={40} height={40} />
        </div>
        {/* Zherpa Logo */}
        <div className="bg-white rounded-full p-3 w-20 h-20 flex items-center justify-center shadow-xl">
          <Image src="/zherpa-logo.png" alt="Zherpa" width={40} height={40} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 text-white max-w-4xl text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom Solutions</h1>

        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-12 max-w-2xl">
          We implement technologies like Zoho (SaaS for entire Business), GoZen (predictive AI for marketing, sales and customer support), Zherpa ZHT (tokenization), and Zherpa.ai (digital communities), tailored to your specific needs.
        </p>

        {/* Card Row */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          {/* Goal-based Projects */}
          <div className="bg-[#5446BA]/30 backdrop-blur-md text-white border border-white/30 rounded-2xl px-6 py-6 w-full">
            <h2 className="font-semibold text-lg mb-2 tracking-wide">GOAL-BASED PROJECTS</h2>
            <p className="text-white/90 text-sm">
              Strategies with clear objectives—from boosting revenue to enhancing collaboration—with verifiable outcomes.
            </p>
          </div>

          {/* Discovery Call */}
          <div className="bg-[#5446BA]/30 backdrop-blur-md text-white border border-white/30 rounded-2xl px-6 py-6 w-full">
            <h2 className="font-semibold text-lg mb-2 tracking-wide">DISCOVERY CALL</h2>
            <p className="text-white/90 text-sm">
              An initial session for a rational, customized quote.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-white text-[#6C5CE7] px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform">
          Schedule Your Discovery Call
        </button>
      </div>
    </div>
  );
};

export default CustomSolutions;
