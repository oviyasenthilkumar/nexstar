


'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

export default function OurAchievements() {
   const [width, setWidth] = useState(5);

   useEffect(() => {
     const handleResize = () => {
       if (window.innerWidth >= 1024) setWidth(11);
       else if (window.innerWidth >= 768) setWidth(7);
       else setWidth(5);
     };

     handleResize(); // run on mount
     window.addEventListener("resize", handleResize);
     return () => window.removeEventListener("resize", handleResize);
   }, []);

  return (
    <section className="bg-black text-white relative overflow-hidden min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(79, 70, 229, 0.3) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 100%)",
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {" "}
        <div className="text-center pt-12 sm:pt-16 md:pt-20 px-4">
          {" "}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mb-4 sm:mb-6"
            style={{ 
              fontFamily: "Sora, sans-serif",
              background: "linear-gradient(90deg, #ffffff 0%, #9E9FA2 50%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            {" "}
            Our Achievements{" "}
          </h1>{" "}
          <p
            className="text-sm sm:text-base md:text-xl lg:text-xl text-gray-300 max-w-2xl mx-auto font-normal"
            style={{ fontFamily: "League Spartan, sans-serif" }}
          >
            {" "}
            We take pride in transforming businesses through impactful{" "}
            <br className="hidden sm:block" /> solutions and measurable results.{" "}
          </p>{" "}
        </div>{" "}
        {/* Globe and Statistics Section */}{" "}
        <div
          className=" relative flex items-center justify-center  "
          style={{
            backgroundImage: "url('/images/blackbg.png')",
            backgroundRepeat: "repeat",
            width: "100%",
            // backgroundSize: "30px 30px", // make stars tiny
            backgroundPosition: "center top",
          }}
        >
          {" "}
          {/* Central Globe */}{" "}
          <div className="relative w-full flex flex-col justify-center items-center">
            {" "}
            <div className="w-64 sm:w-80 md:w-96 lg:w-[700px] 2xl:w-[700px] h-64 sm:h-80 md:h-96 lg:h-[700px] 2xl:h-[700px] rounded-full flex items-center justify-center">
              {" "}
              <Image
                src="/images/globe-removebg-preview.png"
                alt="Globe"
                
                width={500}
                height={500}
                className="w-full h-full object-contain opacity-80 slow-anticlockwise"
                style={{ animationDuration: "50s" }}
              />{" "}
            </div>{" "}
            <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-4 md:gap-8 lg:gap-12 absolute top-30 md:top-40 lg:top-60 2xl:top-55 left-0 right-0 w-full bg-[url('/images/black-bg.png')] bg-no-repeat bg-cover bg-center md:py-10 lg:py-30 md:pb-[30rem] lg:pb-[43rem]">
              {" "}
              <div className="flex flex-col items-center">
                {" "}
                <div
                  className="text-transparent bg-clip-text"
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(32px, 5vw, 60px)",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    background:
                      "linear-gradient(90deg, #CCC0FC 0%, #5257C6 50%, #8C83F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    whiteSpace: "nowrap",
                  }}
                >
                  {" "}
                  1400+{" "}
                </div>{" "}
                <div
                  className="text-white text-center"
                  style={{
                    fontFamily: "League Spartan, sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "26.53px",
                    letterSpacing: "0%",
                  }}
                >
                  {" "}
                  Clients Served{" "}
                </div>{" "}
              </div>{" "}
              {/* Vertical separator */}{" "}
              <div
                className="w-0.5 bg-gray-300 h-16 md:h-20 lg:h-24 self-center relative z-20"
                style={{ minWidth: "1px" }}
              ></div>{" "}
              <div className="flex flex-col items-center">
                {" "}
                <div
                  className="text-transparent bg-clip-text"
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(32px, 5vw, 60px)",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    background:
                      "linear-gradient(90deg, #CCC0FC 0%, #5257C6 50%, #8C83F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    whiteSpace: "nowrap",
                  }}
                >
                  {" "}
                  100M+{" "}
                </div>{" "}
                <div
                  className="text-white text-center"
                  style={{
                    fontFamily: "League Spartan, sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    
                    lineHeight: "26.53px",
                    letterSpacing: "0%",
                  }}
                >
                  {" "}
                  Revenue Generated{" "}
                </div>{" "}
              </div>{" "}
              {/* Vertical separator */}{" "}
              <div
                className="w-0.5 bg-gray-300 h-16 md:h-20 lg:h-24 self-center relative z-20"
                style={{ minWidth: "1px" }}
              ></div>{" "}
              <div className="flex flex-col items-center">
                {" "}
                <div
                  className="text-transparent bg-clip-text"
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(32px, 5vw, 60px)",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    background:
                      "linear-gradient(90deg, #CCC0FC 0%, #5257C6 50%, #8C83F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    whiteSpace: "nowrap",
                  }}
                >
                  {" "}
                  300+{" "}
                </div>{" "}
                <div
                  className="text-white text-center"
                  style={{
                    fontFamily: "League Spartan, sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    
                    lineHeight: "26.53px",
                    letterSpacing: "0%",
                  }}
                >
                  {" "}
                  Projects Completed{" "}
                </div>{" "}
              </div>{" "}
              {/* Vertical separator */}{" "}
              <div
                className="w-0.5 bg-gray-300 h-16 md:h-20 lg:h-24 self-center relative z-20"
                style={{ minWidth: "1px" }}
              ></div>{" "}
              <div className="flex flex-col items-center">
                {" "}
                <div
                  className="text-transparent bg-clip-text"
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(32px, 5vw, 60px)",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    background:
                      "linear-gradient(90deg, #CCC0FC 0%, #5257C6 50%, #8C83F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    whiteSpace: "nowrap",
                  }}
                >
                  {" "}
                  150+{" "}
                </div>{" "}
                <div
                  className="text-white text-center"
                  style={{
                    fontFamily: "League Spartan, sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "26.53px",
                    letterSpacing: "0%",
                  }}
                >
                  {" "}
                  Industry Awards{" "}
                </div>{" "}
              </div>{" "}
              {/* Vertical separator */}{" "}
              <div
                className="w-0.5 bg-gray-300 h-16 md:h-20 lg:h-24 self-center relative z-20"
                style={{ minWidth: "1px" }}
              ></div>{" "}
              <div className="flex flex-col items-center">
                {" "}
                <div
                  className="text-transparent bg-clip-text"
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(32px, 5vw, 60px)",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    background:
                      "linear-gradient(90deg, #CCC0FC 0%, #5257C6 50%, #8C83F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    whiteSpace: "nowrap",
                  }}
                >
                  {" "}
                  200+{" "}
                </div>{" "}
                <div
                  className="text-white text-center"
                  style={{
                    fontFamily: "League Spartan, sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "26.53px",
                    letterSpacing: "0%",
                  }}
                >
                  {" "}
                  Expert Consultants{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        {/* Nautilus Method Section */}
        <div className="relative py-0 sm:py-12 md:py-0 pt-25 sm:pt-8 md:pt-0">
          <div className="text-center mb-4 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-semibold mb-4"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              The Nautilus Method
            </h2>
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-300 mb-6"
              style={{ fontFamily: "League Spartan, sans-serif" }}
            >
              Incremental Growth, Infinite Value
            </p>
            <p
              className="font-normal text-sm sm:text-base md:text-xl text-gray-400 md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "League Spartan, sans-serif" }}
            >
              Inspired by the natural, spiral growth of the nautilus, the
              Nautilus Method fosters small, low-risk, high-reward changes that
              drive continuous evolution for both new and established
              businesses. This iterative cycle of value creation, delivery, and
              capture reflects a purposeful pursuit of flourishing (Aristotle)
              and a harmonious alignment with the ecosystem (Spinoza). Through
              practical application (Bacon) and constant refinement (Popper), it
              transforms businesses into resilient nodes, adapting to a dynamic
              world (Kuhn) while upholding a universal duty to benefit all
              (Kant).
            </p>
          </div>

          {/* Nautilus Shell with Value Points */}
          <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
            {/* Full-width Nautilus Shell Background */}
            <div
              className="absolute inset-0 w-full h-full lg:translate-x-"
              style={{
                backgroundImage: "url(/snail-img.png)",
                backgroundSize: "cover",
                backgroundPosition: "35% center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Strategic Value - Top Center with Arrow */}
            <div className="absolute top-22 md:top-20 lg:top-24 2xl:top-25 sm:top-25 left-70 md:left-130 lg:left-170 2xl:left-220 -translate-x-1/2">
              <div className="text-left md:max-w-64 max-w-44 ">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-2xl font-semibold mb-2 text-white"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Strategic Value
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight"
                  style={{ fontFamily: "League Spartan, sans-serif" }}
                >
                  Innovation and market adaptability, fueled by knowledge
                  management and learning as the cornerstone of progress.
                </p>
              </div>
              {/* Arrow pointing to shell center */}

              <Image
                className="absolute hidden md:block -bottom-25 md:-bottom-40 lg:-bottom-55 left-18 -translate-x-1/2"
                src="/images/center-arrow.png"
                alt="Center Arrow"
                width={width}
                height={40}
              />
            </div>

            {/* Brand Value - Top Right with Arrow */}
            <div className="absolute top-70 md:top-55 -right-20  md:-right-25 lg:right-5 2xl:right-110 -translate-x-1/2">
              <div className="text-left md:max-w-56 max-w-40">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mb-2 text-white"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Brand Value
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight"
                  style={{ fontFamily: "League Spartan, sans-serif" }}
                >
                  Techniques to build recognition and loyalty, crafting a legacy
                  of trust within the ecosystem.
                </p>
              </div>
              {/* Arrow pointing to shell */}

              <Image
                className="absolute top-12 -left-8 md:-left-35 lg:-left-55 lg:top-[65] 2xl:left-[-200] 2xl:top-18 hidden md:block"
                src="/images/top-right-arrow.png"
                alt="top right Arrow"
                width={120}
                height={40}
              />
            </div>

            {/* Social Value - Bottom Right with Arrow */}
            <div className="absolute bottom-8 sm:bottom-12 md:bottom-48 lg:bottom-55 2xl:bottom-52 -right-14 sm:right-8 md:right-5 lg:right-29 2xl:right-128">
              <div className="text-left max-w-56">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 text-white"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Social Value
                </h3>
                <p
                  className="text-xs sm:text-sm text-gray-300 leading-tight"
                  style={{ fontFamily: "League Spartan, sans-serif" }}
                >
                  Impact that uplifts society and the environment, embodying
                  ethical responsibility into every action.
                </p>
              </div>
              {/* Arrow pointing to shell */}
              <Image
                className="absolute top-12 -left-8 md:-left-40 lg:-left-50 hidden md:block"
                src="/images/bottom-right.png"
                alt="bottom right Arrow"
                width={150}
                height={40}
              />
            </div>

            {/* Economic Value - Bottom Left with Arrow */}
            <div className="absolute bottom-5 sm:bottom-12 md:bottom-35 lg:bottom-45 2xl:bottom-45 left-2 sm:left-8 md:left-15 lg:left-35 2xl:left-90">
              <div className="text-left md:max-w-56 max-w-40">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mb-2 text-white"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Economic Value
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-base text-gray-300  leading-tight"
                  style={{ fontFamily: "League Spartan, sans-serif" }}
                >
                  Strategies that generate measurable financial gains,
                  optimizing resources for sustainable prosperity.
                </p>
              </div>
              {/* Arrow pointing to shell */}
              <Image
                className="absolute top-12 -left-8 md:left-45 lg:left-55 hidden md:block"
                src="/images/bottom-left-arrow.png"
                alt="bottom-left-arrow"
                width={170}
                height={40}
              />
            </div>

            {/* Emotional Value - Left with Arrow */}
            <div className="absolute top-35 md:top-80 lg:top-80  2xl:top-85 -translate-y-1/2 left-4 sm:left-8 md:left-14 lg:left-50 2xl:left-100">
              <div className="text-left md:max-w-56 max-w-40">
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mb-2 text-white"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Emotional Value
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight"
                  style={{ fontFamily: "League Spartan, sans-serif" }}
                >
                  Memorable experiences that resonate with clients, forging
                  connections beyond transactions.
                </p>
              </div>
              {/* Arrow pointing to shell */}
              <Image
                className="absolute top-12  -left-8 md:left-50 lg:left-50 hidden md:block"
                src="/images/top-left-arrow.png"
                alt="bottom right Arrow"
                width={150}
                height={40}
              />
            </div>
          </div>
        </div>
        {/* Bottom Scrolling Text */}
        <div className="bg-[linear-gradient(90deg,#545CF6_0%,#5257C6_50%,_#545CF6_100%)] py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-scroll">
            <span
              className="text-lg sm:text-xl font-semibold px-8"
              style={{ fontFamily: "sora, sans-serif" }}
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8"
              style={{ fontFamily: "sora, sans-serif" }}
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8"
              style={{ fontFamily: "sora, sans-serif" }}
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8"
              style={{ fontFamily: "sora, sans-serif" }}
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8"
              style={{ fontFamily: "sora, sans-serif" }}
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8"
              style={{ fontFamily: "sora, sans-serif" }}
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8"
              style={{ fontFamily: "sora, sans-serif" }}
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
            <span
              className="text-lg sm:text-xl font-semibold px-8"
              style={{ fontFamily: "sora, sans-serif" }}
            >
              Innovation, Driving Growth, Earning Trust • Delivering Innovation,
              Driving Growth, Earning Trust •
            </span>
          </div>
        </div>




      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 50s linear infinite;
        }
      `}</style>
    </section>
  );
}
