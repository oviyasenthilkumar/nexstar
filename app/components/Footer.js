import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer 
      className="bg-slate-900 text-white py-16"
      role="contentinfo"
      aria-label="NexStar Consulting footer with company information, services, and contact details"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <picture>
                <source srcSecct="/Logo.webp" type="image/webp" />
                <Image
                  src="/Logo.png"
                  alt="NexStar Consulting Logo - Click to go to homepage"
                  width={150}
                  height={40}
                  className="mb-4"
                  loading="lazy"
                  sizes="150px"
                />
              </picture>
            </div>
            <p className="text-gray-300 font-league-spartan text-sm md:text-base font-light leading-relaxed max-w-sm">
              From operator to owner. We build replicable systems, digitize on Zoho, automate with RPA, and apply AI only where it lifts KPIs—so growth is predictable and governed by data.
              Dubai-based, serving clients worldwide.
            </p>
          </div>

          {/* Solution Section */}
          <nav aria-labelledby="solutions-heading">
            <h3 id="solutions-heading" className="text-white text-lg font-semibold mb-4">Solution</h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                  aria-label="Learn more about ZOHO Implementation services"
                >
                  ZOHO Implementation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                  aria-label="Learn more about RPA Implementation services"
                >
                  RPA Implementation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                  aria-label="Learn more about Applied AI services"
                >
                  Applied AI
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                  aria-label="Learn more about GoZen platform"
                >
                  GoZen
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company Section */}
          <nav aria-labelledby="company-heading">
            <h3 id="company-heading" className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                  aria-label="Go to homepage"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                  aria-label="Learn more about NexStar Consulting"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                  aria-label="Contact NexStar Consulting"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources Section */}
          <nav aria-labelledby="resources-heading">
            <h3 id="resources-heading" className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                  aria-label="Learn about BOSZ methodology"
                >
                  BOSZ
                </Link>
              </li>
              <li>
                <Link
                  href="/ebook/book.pdf"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                  aria-label="Access our knowledge base and books"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.patreon.com/MetodoNautilusdelValor_ComunidadNexStar?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                  aria-label="Join our community"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#blogs"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                  aria-label="Read our latest blog posts"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal Section */}
          <nav aria-labelledby="legal-heading">
            <h3 id="legal-heading" className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                  aria-label="Read our privacy policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm "
                  aria-label="Read our terms and conditions"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact Info and Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                  <svg
                    className="w-5 h-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    role="img"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-white font-medium font-urbanist text-lg">
                  Email: <a href="mailto:contact@nexstarconsulting.com" className="hover:text-[#545CF6] transition-colors ">contact@nexstarconsulting.com</a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center" aria-hidden="true">
                  <svg
                    className="w-5 h-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    role="img"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-white font-medium font-urbanist text-lg">
                  Phone: <a href="tel: +52 33 23228272" className="hover:text-[#545CF6] transition-colors "> +52 33 23228272</a>
                </span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/miguel-angel-arce-96693954/"
                className="w-10 h-10 bg-[#545CF6] rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Follow us on LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="img"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href=" https://x.com/MiguelAngelArce "
                className="w-10 h-10 bg-[#545CF6] rounded-full flex items-center justify-center  transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Follow us on Twitter/X"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="img"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#545CF6] rounded-full flex items-center justify-center  transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Subscribe to our YouTube channel"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="img"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright and Company Information */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="text-center space-y-3">
            <p className="text-gray-300 text-sm font-league-spartan">
              © 2025 NexStar Consulting DMCC. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs font-league-spartan leading-relaxed max-w-4xl mx-auto">
              NEXSTAR CONSULTING DMCC · Trade License No. DMCC-953429 · Legal status: Free Zone Company (DMCC) · Registration No. DMCC200756.
            </p>
            <p className="text-gray-400 text-xs font-league-spartan leading-relaxed max-w-4xl mx-auto">
              Unit 3O-01-5668, Jewellery & Gemplex 3, Plot DMCC-PH2-J&GPlexS, Jewellery & Gemplex, Dubai, United Arab Emirates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
