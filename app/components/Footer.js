import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/Logo.png"
                alt="Nexstar"
                width={150}
                height={40}
                className="mb-4"
              />
            </div>
            <p className="text-gray-300 font-league-spartan text-sm md:text-base font-light leading-relaxed max-w-sm">
              NexStar Consulting empowers businesses to evolve into
              high-performing digital ecosystems through AI, SaaS, and
              Zoho-driven solutions. We specialize in aligning technology with
              strategy to drive sustainable growth and operational excellence.
            </p>
          </div>

          {/* Solution Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Solution</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm"
                >
                  BOSZ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm"
                >
                  GoZen
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Links Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Other Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#808080] text-base font-league-spartan font-normal hover:text-white transition-colors text-sm"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info and Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-white font-medium font-urbanist text-lg">
                  Email: nexstar@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-white font-medium font-urbanist text-lg">
                  Phone: +91 9996543210
                </span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-[#545CF6] rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#545CF6] rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#545CF6] rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
