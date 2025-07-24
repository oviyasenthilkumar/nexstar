import Image from "next/image";
import Header from "./Header";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/Solution.png')" }}>
      {/* Curve Background with Hero Section and Content */}
      <div className="relative w-full h-full md:min-h-screen bg-no-repeat bg-top bg-contain bg-[url('/curve.svg')]">
        {/* Hero Section */}
        <Header/>
        <section className="text-center px-6 pt-20 md:pt-32 max-w-5xl mx-auto z-20 relative">
          <p className="text-sm uppercase tracking-widest mb-2 font-sora">Welcome to the era of ecosystems</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 font-league-spartan text-[#E6E6F6]">
            Unlock Growth with <br />
            <span className="text-[#E6E6F6]">Digital Ecosystems</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 font-sora">
            NexStar Consulting leverages AI, blockchain, and strategic partnerships<br className="hidden md:block" />
            to streamline operations and boost ROI in a connected world.
          </p>
          <a href="#consultation" className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-200 inline-block shadow-lg shadow-[#5B6FFF]/20">
            Schedule Your Consultation
          </a>
        </section>

        {/* People image */}
        <div className="relative z-10 flex justify-center w-full mt-16 md:mt-4">
          <Image src="/images/groupimage.png" alt="NexStar Team" width={800} height={300} className="w-full max-w-7xl px-4 object-contain" priority />
        </div>
      </div>

      {/* Description and CTA buttons */}
      <section className="relative z-20 text-center max-w-4xl mx-auto px-6 pt-8 pb-20">
        <p className="text-sm text-white/80 leading-relaxed font-sora">
          In a world where interconnectedness redefines success, NexStar Consulting invites you to lead your company’s evolution. Inspired by the natural harmony of ecosystems and humanity’s continuous progress, we harness artificial intelligence, SaaS, and blockchain to optimize resources and align your business with a collective purpose. Success is not about being the best—it’s about being indispensable, a node that strengthens the network with every interaction.
        </p>
        {/* Buttons */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          <a href="#ebook" className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-white/20 transition">
            <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-md">The New ONE is Us</span>
            <span>Download our eBook</span>
          </a>
          <a href="#presentation" className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-6 py-3 rounded-full text-sm font-semibold transition duration-200">
            Schedule a Personalized Presentation
          </a>
        </div>
      </section>
    </div>
  );
}
