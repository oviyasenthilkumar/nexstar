import Image from "next/image";
import Header from "./components/Header";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  weight: "400",
});


export default function HomePage() {
  return (
    <div className="min-h-screen text-white font-[var(--font-geist-sans,_sans-serif)] relative overflow-x-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/galaxy-bg.jpg)' }}>
      <Header />

      {/* SVG Gradient Background */}
      <div className="absolute top-0 left-0 w-full z-10">
        <img src="/indo.svg" alt="gradient background" className="w-full h-auto block" />
      </div>

      {/* Hero Section */}
      <section className="relative z-20 flex flex-col items-center justify-center min-h-[480px] pt-20">
        <div className="text-center mt-12">
          <div className="tracking-widest text-base text-white mb-2">
            WELCOME TO THE ERA OF ECOSYSTEMS
          </div>
          <h1 className="text-[3.5rem] font-bold text-[#E6E6F6] m-0 leading-tight">
            Unlock Growth with<br />Digital Ecosystems
          </h1>
          <p className="text-white text-lg my-6 max-w-[700px] mx-auto">
            NexStar Consulting leverages AI, blockchain, and strategic partnerships to streamline operations and boost ROI in a connected world.
          </p>
          <a href="#consultation" className="bg-[#5B6FFF] text-white py-4 px-10 rounded-full font-semibold text-xl no-underline shadow-lg shadow-[#5B6FFF]/20">
            Schedule Your Consultation
          </a>
        </div>
      </section>

      {/* People Image Section */}
      <section className="relative z-20 -mt-20 flex flex-col items-center">
        <div className="w-[480px] h-[180px] overflow-hidden rounded-3xl mb-8 shadow-2xl flex items-end justify-center">
          <Image src="/people.png" alt="Thumbs up" width={480} height={180} className="w-full h-full object-cover" priority />
        </div>
        <p className="text-white text-base max-w-[800px] text-center mb-8">
          In a world where interconnectedness redefines success, NexStar Consulting invites you to lead your company’s evolution. Inspired by the natural harmony of ecosystems and humanity’s continuous progress, we harness artificial intelligence, SaaS, and blockchain to optimize resources and align your business with a collective purpose. Success is not about being the best—it’s about being indispensable, a node that strengthens the network with every interaction.
        </p>
        <div className="flex gap-6 justify-center">
          <a href="#ebook" className="flex items-center bg-[#232323] text-white py-3 px-7 rounded-2xl font-medium text-base no-underline shadow-md">
            <span className="bg-[#E74C3C] text-white rounded px-2 py-0.5 text-xs mr-2">The Same ONE in US</span>
            Download our eBook
          </a>
          <a href="#presentation" className="bg-[#5B6FFF] text-white py-3 px-8 rounded-2xl font-semibold text-base no-underline">
            Schedule a Personalized Presentation
          </a>
        </div>
      </section>
    </div>
  );
}