// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// const categories = [
// 	{ label: 'All', value: 'all' },
// 	{ label: 'Platform', value: 'platform' },
// 	{ label: 'Solutions', value: 'solutions' },
// 	{ label: 'Product Trial', value: 'trial' },
// 	{ label: 'Integrations', value: 'integrations' },
// ];

// const faqs = [
// 	{
// 		question: 'What does NexStar Consulting do?',
// 		answer: '',
// 		category: ['all', 'platform'],
// 	},
// 	{
// 		question: 'What is the BOSZ Method?',
// 		answer:
// 			'The BOSZ Method (Business Operating System for Zoho) is our proprietary, patent-pending framework that improves business clarity, reduces waste, and increases ROI from your Zoho and digital infrastructure.',
// 		category: ['all', 'solutions'],
// 	},
// 	{
// 		question: 'Do you offer Zoho implementation and customization?',
// 		answer: 'Yes, we provide end-to-end Zoho implementation, customization, and ongoing support tailored to your business needs.',
// 		category: ['all', 'solutions', 'integrations'],
// 	},
// 	{
// 		question: 'Where is NexStar Consulting based, and do you serve clients globally?',
// 		answer: 'NexStar Consulting is based in the US and serves clients worldwide, offering remote and onsite services as required.',
// 		category: ['all', 'platform', 'solutions'],
// 	},
// 	{
// 		question: 'Can I try your services before committing?',
// 		answer: 'Yes, we offer product trials and demo sessions so you can experience our solutions before making a decision.',
// 		category: ['all', 'trial'],
// 	},
// 	{
// 		question: 'How do your integrations work?',
// 		answer: 'Our integrations are designed to seamlessly connect Zoho with your existing tools, ensuring smooth data flow and process automation.',
// 		category: ['all', 'integrations'],
// 	},
// ];

// export default function Answers() {
// 	const [selectedCategory, setSelectedCategory] = useState('all');
// 	const [openIndex, setOpenIndex] = useState(1); // Open the second FAQ by default

// 	const filteredFaqs =
// 		selectedCategory === 'all'
// 			? faqs
// 			: faqs.filter((faq) => faq.category.includes(selectedCategory));

// 	return (
// 		<section
// 			className="w-full min-h-screen py-20 flex flex-col items-center justify-center relative bg-cover bg-center"
// 			style={{ backgroundImage: "url('/galaxy-bg.jpg')" }}
// 		>
// 			<div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[#1a1a2e]/80 pointer-events-none z-0" />
// 			<div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
// 				<span className="px-4 py-1 rounded-full bg-[#3B4FFF] text-white text-xs font-semibold mb-4 tracking-widest">
// 					FAQs
// 				</span>
// 				<h2 className="text-5xl font-bold text-center mb-4 text-white">
// 					We've{' '}
// 					<span className="text-gray-300">All The Answers</span>
// 				</h2>
// 				<div className="flex flex-wrap gap-4 mb-10 justify-center">
// 					{categories.map((cat) => (
// 						<button
// 							key={cat.value}
// 							onClick={() => setSelectedCategory(cat.value)}
// 							className={`px-8 py-3 rounded-full font-semibold text-lg transition border border-white/30 focus:outline-none ${
// 								selectedCategory === cat.value
// 									? 'bg-white text-black shadow'
// 									: 'bg-transparent text-white hover:bg-white/10'
// 							}`}
// 						>
// 							{cat.label}
// 						</button>
// 					))}
// 				</div>
// 				<div className="flex flex-col gap-6 w-full">
// 					{filteredFaqs.map((faq, idx) => (
// 						<div
// 							key={idx}
// 							className={`rounded-2xl bg-[#231e35] text-white transition-all duration-300 ${
// 								openIndex === idx ? 'shadow-lg' : ''
// 							}`}
// 						>
// 							<button
// 								className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none"
// 								onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
// 								aria-expanded={openIndex === idx}
// 							>
// 								<span className="font-semibold text-xl">
// 									{faq.question}
// 								</span>
// 								<span>
// 									{openIndex === idx ? (
// 										<Image
// 											src="/images/arrow-up-circle.png"
// 											alt="Collapse"
// 											width={32}
// 											height={32}
// 										/>
// 									) : (
// 										<Image
// 											src="/images/arrow-down-circle.png"
// 											alt="Expand"
// 											width={32}
// 											height={32}
// 										/>
// 									)}
// 								</span>
// 							</button>
// 							{openIndex === idx && faq.answer && (
// 								<div className="px-8 pb-6 text-gray-300 text-base">
// 									{faq.answer}
// 								</div>
// 							)}
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }


"use client";

import { useState } from "react";

// --- Constants for categories and FAQ data ---
const categories = [
  { label: "All", value: "all" },
  { label: "Platform", value: "platform" },
  { label: "Solutions", value: "solutions" },
  { label: "Product Trial", value: "trial" },
  { label: "Integrations", value: "integrations" },
];

const faqs = [
  {
    question: "What does NexStar Consulting do?",
    answer:
      "NexStar Consulting specializes in optimizing business operations through comprehensive Zoho solutions, including implementation, customization, and strategic consulting to enhance your digital infrastructure.",
    category: ["all", "platform"],
  },
  {
    question: "What is the BOSZ Method?",
    answer:
      "The BOSZ Method (Business Operating System for Zoho) is our proprietary, patent-pending framework that improves business clarity, reduces waste, and increases ROI from your Zoho and digital infrastructure.",
    category: ["all", "solutions"],
  },
  {
    question: "Do you offer Zoho implementation and customization?",
    answer:
      "Yes, we provide end-to-end Zoho implementation, customization, and ongoing support tailored to your business needs.",
    category: ["all", "solutions", "integrations"],
  },
  {
    question:
      "Where is NexStar Consulting based, and do you serve clients globally?",
    answer:
      "NexStar Consulting is based in the US and serves clients worldwide, offering remote and onsite services as required.",
    category: ["all", "platform", "solutions"],
  },
  {
    question: "Can I try your services before committing?",
    answer:
      "Yes, we offer product trials and demo sessions so you can experience our solutions before making a decision.",
    category: ["all", "trial"],
  },
  {
    question: "How do your integrations work?",
    answer:
      "Our integrations are designed to seamlessly connect Zoho with your existing tools, ensuring smooth data flow and process automation.",
    category: ["all", "integrations"],
  },
];

export default function Answers() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(1);

  const filteredFaqs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category.includes(selectedCategory));

  return (
    <section
      className="relative flex  w-full flex-col items-center justify-center bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('/images/blackbg.png')" }}
    >
      {/* Gradient overlay with reduced intensity */}
      <div
        className="absolute top-100 sm:top-[14%] md:top-[14%] 2xl:top-[14%] inset-0 z-0"
        style={{
          backgroundImage: "url('/images/FAQs.png')",
          //   background:
          //     // The solid white (#FFFFFF) was changed to a transparent white (rgba) to soften the light
          //     "radial-gradient(123.37% 89.73% at 49.72% 18.98%, rgba(35,35,35,0) 28%, #2E3587 69.27%, rgba(255, 255, 255, 0.2) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center py-10">
      <span className="font-urbanist mb-4 rounded-md bg-white/20 px-4 py-1 text-base font-semibold tracking-widest text-white">
          FAQs
        </span>
        <h2
          className="
    mb-4
    text-center
    font-[Sora]
    font-semibold
    text-[28px] sm:text-[36px] md:text-[48px]
    leading-[36px] sm:leading-[48px] md:leading-[60px]
    tracking-[0%]
    text-white
    opacity-100
    w-full sm:w-[90%] md:w-[549px] mx-auto
    whitespace-normal md:whitespace-nowrap
  "
          style={{ height: "60px" }}
        >
          We've <span className="text-gray-300">All The Answers</span>
        </h2>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`
                        rounded-full border border-white/30
                        px-6 py-2
                        text-center
                        font-[League_Spartan]
                        font-normal
                        text-[16px] sm:text-[18px]
                        leading-[100%]
                        tracking-[0%]
                        transition
                        focus:outline-none
                        ${
                          selectedCategory === cat.value
                            ? "bg-white text-black shadow"
                            : "bg-transparent text-white hover:bg-white/10"
                        }
                      `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex w-full flex-col gap-6">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-[#231e35] text-white transition-all duration-300 ${
                openIndex === idx ? "shadow-lg" : ""
              }`}
            >
              <button
                className="flex w-full items-center justify-between px-8 py-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-xl font-league-spartan font-semibold">{faq.question}</span>
                <div className="flex-shrink-0">
                  <svg
                    className={`h-8 w-8 transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === idx && faq.answer && (
                <div className="px-8 pb-6 text-lg text-[#D2CCE8]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}