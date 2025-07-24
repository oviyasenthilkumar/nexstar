'use client';
import { useState } from 'react';
import Image from 'next/image';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Handle subscription logic here
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      {/* Starry Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/galaxy-bg.jpg')] bg-cover bg-center opacity-40"></div>
        {/* Stars scattered across the background */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Left Gradient Overlay */}
      <div className="absolute left-0 top-0 w-[745px] h-[360px] opacity-70">
        <Image
          src="/subs-left-grad.svg"
          alt=""
          width={745}
          height={360}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Gradient Overlay */}
      <div className="absolute right-0 top-0 w-[729px] h-[360px] opacity-70">
        <Image
          src="/subs-right-grad.svg"
          alt=""
          width={729}
          height={360}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Subscribe To Our Newsletter
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Stay in the loop and keep up with all our news and updates!
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="w-full px-6 py-4 rounded-full bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubscribed}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isSubscribed ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>

        {/* Success Message */}
        {isSubscribed && (
          <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
            Thank you for subscribing! You'll receive our latest updates.
          </div>
        )}
      </div>

      {/* Additional decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Subscribe;