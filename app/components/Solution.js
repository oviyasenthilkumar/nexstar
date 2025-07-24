const Solution = () => {
  return (
    <div 
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/galaxy-bg.jpg')"
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        {/* Subtitle */}
        <p className="text-white/80 text-lg md:text-xl leagueSpartan font-medium mb-8 tracking-widest uppercase">
          WELCOME TO THE ERA OF ECOSYSTEMS
        </p>
        
        {/* Main heading */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl sora font-bold leading-tight mb-12">
          Grow Your Value With<br />
          Conscious Solutions
        </h1>
        
        {/* Description */}
        <p className="text-white/90 text-lg md:text-xl lg:text-2xl leagueSpartan font-normal leading-relaxed max-w-4xl mx-auto">
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