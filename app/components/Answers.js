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
      "We help owners move from operator to owner: align strategy and value proposition, design replicable systems, digitize on Zoho, automate with RPA, and apply AI only where it lifts KPIs—so growth is predictable and governed by data.",
    category: ["all", "platform"],
  },
  {
    question: "What is the BOSZ Method?",
    answer:
      "Business Operating System for Zoho—a practical framework with SOPs, dashboards, and governance to run by numbers. Implemented in four steps: Diagnose → Pilot → Scale → Operate.",
    category: ["all", "solutions"],
  },
  {
    question: "Do you offer Zoho implementation and customization?",
    answer:
      "Yes. CRM, Books, Desk, Analytics, and Creator: design, migrations, integrations, automation, training, and ongoing support.",
    category: ["all", "solutions", "integrations"],
  },
  {
    question:
      "Where are you based, and do you serve clients globally?",
    answer:
      "We operate remotely and serve clients across the Americas, Europe, and APAC. English and Spanish.",
    category: ["all", "platform", "solutions"],
  },
  {
    question: "Can I try your services before committing?",
    answer:
      " Yes. Start with a 30-minute Discovery Call and a 10–14 day diagnostic (capability map, baseline KPIs, roadmap). Optional 30–60 day pilot with defined deliverables.",
    category: ["all", "trial"],
  },
  {
    question: "How do your integrations work?",
    answer:
      " Zoho as the backbone; we connect ERP/accounting, support, and marketing via APIs/middleware. We document SOPs, ensure security, and measure impact on KPIs.",
    category: ["all", "trial"],
  },
  {
    question: "Where is NexStar Consulting based, and do you serve clients globally? ",
    answer:
      " We are Dubai-based and serve clients worldwide—remote-first, with on-site support as needed.",
    category: ["all", "solutions"],
  },
  {
    question: "Can I try your services before committing? ",
    answer:
      "  Yes. Start with a 30-minute Discovery Call, followed by a 10–14 day Diagnostic (capability map, baseline KPIs, roadmap). If it's a fit, we run an optional 30–60 day Pilot with fixed scope/price and exit criteria tied to 2–3 KPIs. Guided Zoho demo/sandbox available on request",
    category: ["all", "solutions"],
  },
  {
    question: "Do you offer Zoho implementation and customization? ",
    answer:
      "Yes—end-to-end across CRM, Books, Desk, Analytics, Creator. We design processes, configure/customize, migrate data, integrate third-party apps, automate (workflows/RPA), train users, and provide ongoing support—always tied to measurable KPIs.",
    category: ["all", "integrations"],
  },
  {
    question: "How do your integrations work?",
    answer: [
      "Discover & map: systems, objects/fields, volumes, events, KPIs.",
      "Design: API contracts, auth (OAuth 2.0), latency/throughput, error policy, data model.",
      "Build: APIs/webhooks, Zoho Functions/Deluge, iPaaS (Make/Zapier) or custom middleware; RPA where APIs don't exist.",
      "Migrate & test: cleanse/dedupe, sandbox tests, parallel run, rollback plan.",
      "Secure & govern: least-privilege access, encryption in transit/at rest, audit logs, SOPs/runbooks.",
      "Monitor & support: health dashboards, alerts/retries, SLAs."
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
        <span className="font-urbanist mb-4 rounded-md bg-white/20 px-4 py-1 text-base font-semibold tracking-widest text-white">
          FAQs
        </span>
        <h2
          id="faq-heading"
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
        >
          We've <span className="text-gray-300">All The Answers</span>
        </h2>

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
                font-[League_Spartan]
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
                <span className="text-lg md:text-xl font-league-spartan font-semibold">{faq.question}</span>
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
                  className="px-8 pb-6 text-base md:text-lg text-[#D2CCE8]"
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
