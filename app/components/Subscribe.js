"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Handle subscription logic here
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const [stars, setStars] = useState([]);
  useEffect(() => {
    setStars(
      Array.from({ length: 100 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
      }))
    );
  }, []);

  const [particles, setParticles] = useState([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
      }))
    );
  }, []);

  return (
    <section 
      className="relative overflow-hidden bg-black to-slate-900 py-20"
      role="region"
      aria-labelledby="subscribe-heading"
      aria-label="Subscribe to NexStar newsletter for latest updates and news"
    >
      {/* Starry Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/images/subscribe.webp')] bg-cover bg-center opacity-40"></div>
      </div>

      {/* Left Gradient Overlay */}
      <div className="absolute left-0 top-0 w-[745px] hidden sm:block md:h-[480px] opacity-70" aria-hidden="true">
        <picture>
          <source srcSet="/subs-left-grad.webp" type="image/webp" />
          <Image
            src="/subs-left-grad.svg"
            alt=""
            width={745}
            height={360}
            className="w-full h-full object-cover"
            loading="lazy"
            sizes="(max-width: 640px) 0px, 745px"
          />
        </picture>
      </div>

      {/* Right Gradient Overlay */}
      <div className="absolute right-0 top-0 w-[729px] hidden sm:block md:h-[480px] opacity-70" aria-hidden="true">
        <picture>
          <source srcSet="/subs-right-grad.webp" type="image/webp" />
          <Image
            src="/subs-right-grad.svg"
            alt=""
            width={729}
            height={360}
            className="w-full h-full object-cover"
            loading="lazy"
            sizes="(max-width: 640px) 0px, 729px"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 
          id="subscribe-heading"
          className="font-sora font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[100%] tracking-normal capitalize text-white mb-6"
        >
          Subscribe To Our Newsletter
        </h2>

        <p className="font-league-spartan font-normal text-base sm:text-lg md:text-xl lg:text-[18px] leading-[100%] tracking-normal text-gray-300 mb-12 max-w-2xl mx-auto">
          Stay in the loop and keep up with all our news and updates!
        </p>

        {/* Subscription Form */}
        <form 
          onSubmit={handleSubscribe} 
          className="max-w-2xl mx-auto"
          aria-labelledby="subscribe-heading"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center bg-transparent border border-white/30 rounded-2xl sm:rounded-full p-3 sm:p-2 gap-3 sm:gap-0 transition-all duration-300">
            <div className="w-full sm:flex-1">
              <label htmlFor="email-input" className="sr-only">Email Address</label>
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                required
                aria-required="true"
                aria-describedby="email-help"
                className="w-full px-5 py-3 sm:px-6 sm:py-4 bg-transparent text-white placeholder-white/70 outline-none text-lg sm:text-lg font-league-spartan rounded-xl sm:rounded-full border-none mb-2 sm:mb-0"
              />
              <div id="email-help" className="sr-only">
                Enter your email address to subscribe to our newsletter
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubscribed}
              aria-label={isSubscribed ? "Successfully subscribed" : "Subscribe to newsletter"}
              className="w-full sm:w-auto rounded-xl sm:rounded-full bg-[#545CF6] text-white font-league-spartan font-semibold text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 shadow-[0_0_24px_0_rgba(108,92,231,0.4)] transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-black hover:scale-105 whitespace-nowrap relative overflow-hidden flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {isSubscribed ? "Subscribed!" : "Subscribe"}
              </span>
              {/* Glow effect */}
              <span className="absolute left-1/2 bottom-2 -translate-x-1/2 w-2/3 h-2 bg-white/30 blur-lg opacity-70 pointer-events-none" aria-hidden="true"></span>
            </button>
          </div>
        </form>

        {/* Success Message */}
        {isSubscribed && (
          <div 
            className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300"
            role="alert"
            aria-live="polite"
            aria-label="Subscription successful"
          >
            Thank you for subscribing! You'll receive our latest updates.
          </div>
        )}
      </div>

      {/* Additional decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Floating particles */}
        {particles.map((particle, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left:`${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay:` ${particle.delay}s`,
              animationDuration:` ${particle.duration}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Subscribe;
