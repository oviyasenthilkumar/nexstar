import Image from 'next/image';

const Solution = () => {
  return (
    <div 
      className="relative min-h-[79vh] sm:min-h-[75vh] md:min-h-[50vh] lg:min-h-[85vh] xl:min-h-[100vh] 2xl:min-h-[95vh] overflow-hidden flex items-start justify-center bg-cover bg-center bg-no-repeat pt-20 bg-gradient-to-b from-black/40 via-black/20 to-transparent 
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
        {/* <p 
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
        </p> */}
        
        {/* Main heading */}
        <h1 
  className="mb-4 max-w-3xl md:max-w-2xl lg:max-w-xl mx-auto text-center capitalize 
             bg-gradient-to-r from-[#FFFFFF] via-[#9E9FA2] to-[#FFFFFF] bg-clip-text text-transparent
             text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold font-sora"
>
Conscious solutions. Measurable value.
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
         Nautilus Method — <b>Diagnose</b> → <b>Pilot</b> → <b>Scale</b> → <b>Operate</b>. We align purpose, build replicable systems, digitize with <b>Zoho</b>, automate with <b>RPA</b>, and apply <b>AI</b> only where it lifts KPIs—so value grows predictably.
        </p>
      </div>
    </div>
  );
};

export default Solution;