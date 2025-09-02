"use client";
import React, { useState } from "react";
import Image from "next/image";

const blogs = [
  {
    title: "Agentic CRM — Turning customer signals into actions & results",
    desc: (
      <>
        <p>
          Convert customer signals into automated actions that move KPIs—practical ways to make CRM truly agentic.
        </p>
        <p><span className="font-semibold">Audience:</span> CRO/COO/Head of RevOps.</p>
        <p><span className="font-semibold">Why it helps:</span> Directly aligns with your Zoho + automation promise and “from operator to owner” narrative.</p>
      </>
    ),
    image: "/Trending Blogs/first.png",
    imageWebp: "/Trending Blogs/first.webp",
    link: "https://www.linkedin.com/pulse/agentic-crm-turning-customer-signals-actions-results-arce-vzmbc/?utm_source=site&utm_medium=insights&utm_campaign=home_cards",
    tag: "Industry News",
  },
  {
    title: "Why nearshoring your Zoho stack to Mexico is a strategic play",
    desc: (
      <>
        <p>
          Speed, overlap, and cost control without quality trade-offs—why Mexico is a sweet spot for Zoho delivery.
        </p>
        <p><span className="font-semibold">Audience:</span> CIO/CTO/Operations.</p>
        <p><span className="font-semibold">Why it helps:</span> Differentiates Nexstar on delivery model & geography—a concrete buying reason.</p>
      </>
    ),
    image: "/Trending Blogs/second.png",
    imageWebp: "/Trending Blogs/second.webp",
    link: "https://www.linkedin.com/pulse/why-nearshoring-your-zoho-stack-mexico-strategic-play-arce-df8lc/?utm_source=site&utm_medium=insights&utm_campaign=home_cards",
    tag: "Industry News",
  },
  {
    title: "EU Artificial Intelligence Act: second milestone now in force",
    desc: (
      <>
        <p>
          What the EU AI Act means for your CRM/automation roadmap and how to stay compliant.
        </p>
        <p><span className="font-semibold">Audience:</span> Compliance, Legal, Product owners.</p>
        <p><span className="font-semibold">Why it helps:</span> Positions you as credible on regulation & risk, not just tools.</p>
      </>
    ),
    image: "/Trending Blogs/third.png",
    imageWebp: "/Trending Blogs/third.webp",
    link: "https://www.linkedin.com/pulse/eu-artificial-intelligence-act-second-milestone-now-force-arce-lhhmc/?utm_source=site&utm_medium=insights&utm_campaign=home_cards",
    tag: "Industry News",
  },
  {
    title: "Notion stole my heart, Zoho pays the bills — the ultimate workflow hack",
    desc: (
      <>
        <p>
          Blend Notion’s clarity with Zoho’s execution to ship faster—from idea to process to revenue.
        </p>
        <p><span className="font-semibold">Audience:</span> Founders, PMs, Ops.</p>
        <p><span className="font-semibold">Why it helps:</span> Shows pragmatism: you recommend what works, and Zoho sits at the core of execution.</p>
      </>
    ),
    image: "/Trending Blogs/third.png",
    imageWebp: "/Trending Blogs/third.webp",
    link: "https://www.linkedin.com/pulse/notion-stole-my-heart-zoho-pays-bills-ultimate-hack-move-arce-outqf/?utm_source=site&utm_medium=insights&utm_campaign=home_cards",
    tag: "Industry News",
  },
  {
    title: "Gratitude & vision: selected for E100 Generation 2025",
    desc: (
      <>
        <p>
          External recognition that reflects our execution and customer impact.
        </p>
        <p><span className="font-semibold">Audience:</span> General decision-makers.</p>
        <p><span className="font-semibold">Why it helps:</span> Social proof without hype; signals traction and trust.</p>
      </>
    ),
    image: "/Trending Blogs/first.png",
    imageWebp: "/Trending Blogs/first.webp",
    link: "https://www.linkedin.com/pulse/gratitude-vision-selected-asems-e100-generation-2025-arce-tyhxc/?utm_source=site&utm_medium=insights&utm_campaign=home_cards",
    tag: "Industry News",
  },
];

export default function TrendingBlogs() {
  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section
      className="w-full py-16 bg-gradient-to-b from-white to-[#f6f8ff] flex flex-col items-center"
      role="region"
      aria-labelledby="trending-blogs-heading"
      aria-label="Trending blog posts and industry insights from NexStar"
    >
      <h2
        id="trending-blogs-heading"
        className="text-black font-sora text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-semibold text-center mb-4 w-full sm:w-[372px] mx-auto leading-[35px] md:leading-[44px] whitespace-normal md:whitespace-nowrap"
      >
        Trending Blogs
      </h2>
      <p className="text-center px-8 md:px-0text-sm md:text-xl lg:text-xl xl:text-lg 2xl:text-xl px-2 md:px-0 font-league-spartan text-[#6C6C6C] max-w-xl mb-12">
        Explore our insights into the era of ecosystems. Here, we share ideas
        that challenge assumptions and redefine paradigms:
      </p>

      <div
        className="grid grid-cols-12 gap-4 sm:gap-8 w-full max-w-6xl px-4 sm:px-4"
        role="list"
        aria-label="List of trending blog posts"
      >
        {visibleBlogs.map((blog, idx) => (
          <article
            key={idx}
            className={`bg-white rounded-2xl shadow-md flex flex-col w-full transition hover:shadow-lg  ${
              showAll 
                ? "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4" 
                : "col-span-12 sm:col-span-6 md:col-span-4"
            }`}
            role="listitem"
            aria-labelledby={`blog-title-${idx}`}
          >
            <div className="h-48 w-full relative rounded-t-2xl overflow-hidden">
              <picture>
                <source srcSet={blog.imageWebp} type="image/webp" />
                <Image
                  src={blog.image}
                  alt={`Featured image for blog post: ${blog.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
                  loading={idx === 0 ? "eager" : "lazy"}
                  priority={idx === 0}
                />
              </picture>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3
                id={`blog-title-${idx}`}
                className="text-black font-sora font-semibold text-lg md:text-xl mb-2 leading-snug"
              >
                {blog.title}
              </h3>
              <div className="text-[#5C5E60] font-league-spartan font-normal text- md:text-lg mb-4 flex-1">
                {blog.desc}
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span
                  className="bg-gray-100 text-[#7B808A] text-sm font-league-spartan font-medium px-3 py-1 rounded"
                  aria-label={`Blog category: ${blog.tag}`}
                >
                  {blog.tag}
                </span>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#545CF6] font-semibold text-lg md:text-xl flex items-center gap-1 hover:underline transition "
                  aria-label={`Read full article: ${blog.title}`}
                >
                  Read More
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-1"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-8 bg-[#545CF6] font-semibold text-xl text-white px-10 py-3 rounded-full shadow hover:bg-[#545CF6] transition focus:outline-none "
        aria-label={showAll ? "Show less blog posts" : "View all blog posts and articles"}
      >
        {showAll ? "Show Less" : "View All"}
      </button>
    </section>
  );
}
