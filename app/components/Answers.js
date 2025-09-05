
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
      "We help owners transition from operator to owner by aligning strategy, designing scalable systems, digitizing on Zoho, automating with RPA, and applying AI where it improves KPIs—so growth is predictable and data-driven.",
    category: ["all", "platform"],
  },
  {
    question: "What is the BOSZ Method?",
    answer:
      "The Business Operating System for Zoho (BOSZ) is a practical framework with SOPs, dashboards, and governance to run your business by the numbers. It is implemented in four steps: Diagnose → Pilot → Scale → Operate.",
    category: ["all", "solutions"],
  },
  {
    question: "Do you offer Zoho implementation and customization?",
    answer:
      "Yes. We provide end-to-end implementation and customization for Zoho CRM, Books, Desk, Analytics, and Creator—including design, migration, integration, automation, training, and ongoing support.",
    category: ["all", "solutions", "integrations"],
  },
  {
    question:
      "Where are you based, and do you serve clients globally?",
    answer:
      "We are based in Dubai and serve clients worldwide—remote-first, with on-site support as needed. English and Spanish supported.",
    category: ["all", "platform", "solutions"],
  },
  {
    question: "Can I try your services before committing?",
    answer:
      "Yes. Start with a 30-minute Discovery Call and a 10–14 day diagnostic (capability map, baseline KPIs, roadmap). If it's a fit, we offer an optional 30–60 day pilot with defined deliverables.",
    category: ["all", "trial"],
  },
  // Removed duplicate/overlapping integration FAQ
  // Removed duplicate location/global service FAQ
  // Removed duplicate trial FAQ
  // Removed duplicate Zoho implementation FAQ
  {
    question: "How do your integrations work?",
    answer: [
      "We use Zoho as the backbone, connecting ERP/accounting, support, and marketing systems via APIs or middleware.",
      "Our process: Discover & map systems, design API contracts, build integrations (APIs/webhooks, Zoho Functions, iPaaS), migrate & test data, secure & govern access, and monitor with dashboards and alerts."
    ],
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
      className="relative flex w-full flex-col items-center justify-center bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('/images/blackbg.webp')" }}
      role="region"
      aria-labelledby="faq-heading"
      aria-label="Frequently Asked Questions about NexStar Consulting services and solutions"
    >
      {/* Gradient overlay with reduced intensity */}
      <div
        className="absolute top-300 sm:top-[14%] md:top-[50%] 2xl:top-[50%] inset-0 z-0"
        style={{
          backgroundImage: "url('/images/FAQs.webp')",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center py-10">
        <span className="font-serif mb-4 rounded-md bg-white/20 px-4 py-1 text-base font-semibold tracking-widest text-white">
          FAQs
        </span>
        <h1
              id="achievements-heading"
              className="text-2xl text-center max-w-prose sm:text-3xl md:text-5xl lg:text-5xl max-w-7xl mx-auto 3xl:text-[clamp(2.25rem,2vw+1.5rem,3rem)] font-semibold mb-4 sm:mb-6 font-serif bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent "
            >
              How we Work:<br></br> Questions & Answers
            </h1>

        <div 
          className="mb-10 flex flex-wrap justify-center gap-4"
          role="tablist"
          aria-label="Filter FAQ categories"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`
                rounded-full border border-white/30
                px-6 py-2
                text-center
                font-[sans]
                font-normal
                text-[16px] sm:text-[18px]
                leading-[100%]
                tracking-[0%]
                transition
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black
                ${
                  selectedCategory === cat.value
                    ? "bg-white text-black shadow"
                    : "bg-transparent text-white hover:bg-white/10"
                }
              `}
              role="tab"
              aria-selected={selectedCategory === cat.value}
              aria-controls={`faq-content-${cat.value}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div 
          className="flex w-full flex-col px-3 md:px-0 gap-6"
          role="tabpanel"
          id={`faq-content-${selectedCategory}`}
          aria-labelledby={`tab-${selectedCategory}`}
        >
          {filteredFaqs.map((faq, idx) => (
            <article
              key={idx}
              className={`rounded-2xl bg-[#231e35] text-white transition-all duration-300 ${
                openIndex === idx ? "shadow-lg" : ""
              }`}
            >
              <button
                className="flex w-full items-center justify-between px-8 py-6 text-left "
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                aria-label={`${openIndex === idx ? 'Hide' : 'Show'} answer for: ${faq.question}`}
              >
                <span className="text-lg md:text-xl 3xl:text-[clamp(1rem,0.5vw+0.875rem,1.125rem)] font-sans font-semibold">{faq.question}</span>
                <div className="flex-shrink-0">
                  <svg
                    className={`h-8 w-8 transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    role="img"
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
                <div 
                  id={`faq-answer-${idx}`}
                  className="px-8 pb-6 max-w-prose text-base 3xl:text-[clamp(1rem,0.5vw+0.875rem,1.125rem)] font-sans text-[#D2CCE8]"
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                >
                  {Array.isArray(faq.answer) ? (
                    <ul className="space-y-2" role="list">
                      {faq.answer.map((item, itemIdx) => (
                        <li key={itemIdx} role="listitem" className="flex items-start">
                          <span className="text-[#545CF6] mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
