'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function AboutUs() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <Head>
        <title>About Us</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=League+Spartan:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="flex flex-col lg:flex-row items-center bg-white  font-['League_Spartan']">
        {/* Image Container */}
        <div className="relative w-full md:w-[80%] lg:w-[45%] 2xl:w-[35%]  overflow-hidden flex-shrink-0 bg-white p-2 lg:p-0 ">
          <img
            src="/images/about-image.png"
            alt="Team unity showing interconnected hands"
            className={`w-full  object-contain transition-opacity duration-500 `}
            // onLoad={() => setImageLoaded(true)}
            onError={() => console.log("Image failed to load")}
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-[50%]  mx-auto flex flex-col justify-center  text-center md:text-left p-10 lg:p-10 2xl:p-2 ">
        <p className="font-league-spartan font-normal text-xs sm:text-sm lg:text-lg xl:text-xl tracking-widest uppercase text-black mb-4 lg:mb-6">
          ABOUT US
        </p>


          <h1 className="font-['Sora',sans-serif] text-xl sm:text-2xl md:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-black">30 Years </span>
            <span className="bg-gradient-to-r from-[#5257C6] to-[#242459] bg-clip-text text-transparent">
              Forging Value
            </span>
            <span className="text-black"> in an </span>
            <span className="bg-gradient-to-r from-[#5257C6] to-[#242459] bg-clip-text text-transparent">
              Interconnected World
            </span>
          </h1>

          <div className="text-[#6C6C6C] font-normal text-xs sm:text-sm md:text-base lg:text-xl lg:max-w-2xl space-y-4">
            <p>
              With three decades as an entrepreneur, I've walked a path of trial
              and learning. Over 10 failures are not defeats but refuted
              hypotheses that have shaped NexStar Consulting. From MDO
              Tecnología, where we grew into Zoho's largest Premium Partner
              serving over 1,300 clients, to Zherpa, a rising venture, we've
              distilled lessons for this era of ecosystems. We are human, open,
              and honest: value emerges from facing mistakes with humility and
              turning them into progress.
            </p>

            <p>
              Our mission is to guide established companies toward a conscious
              digital model, where the universal duty to benefit all—clients,
              employees, society—meets the practical utility of technology. At
              NexStar, we don't just consult; we live what we preach, acting as
              a node that brings rational clarity and collective harmony to the
              business ecosystem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
