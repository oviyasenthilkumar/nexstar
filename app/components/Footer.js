// import Image from 'next/image';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="bg-slate-900 text-white py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//           {/* Company Info Section */}
//           <div className="lg:col-span-2">
//             <div className="mb-6">
//               <Image
//                 src="/Logo.png"
//                 alt="Nexstar"
//                 width={150}
//                 height={40}
//                 className="mb-4"
//               />
//             </div>
//             <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
//               NexStar Consulting empowers businesses to evolve into high-performing digital ecosystems through AI, SaaS, and Zoho-driven solutions. We specialize in aligning technology with strategy to drive sustainable growth and operational excellence.
//             </p>
//           </div>

//           {/* Solution Section */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Solution</h3>
//             <ul className="space-y-3">
//               <li>
//                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                   BOSZ
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                   GoZen
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                   Services
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Company Section */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Company</h3>
//             <ul className="space-y-3">
//               <li>
//                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Other Links Section */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Other Links</h3>
//             <ul className="space-y-3">
//               <li>
//                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                   Terms and Conditions
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
//                   Blogs
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Contact Info and Social Media */}
//         <div className="mt-12 pt-8 border-t border-gray-700">
//           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
//             {/* Contact Info */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-6 h-6 flex items-center justify-center">
//                   <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-300 text-sm">Email: nexstar@gmail.com</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-6 h-6 flex items-center justify-center">
//                   <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-300 text-sm">Phone: +91 9996543210</span>
//               </div>
//             </div>

//             {/* Social Media Icons */}
//             <div className="flex items-center gap-4">
//               <Link 
//                 href="#" 
//                 className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
//               >
//                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//               </Link>
//               <Link 
//                 href="#" 
//                 className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
//               >
//                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                 </svg>
//               </Link>
//               <Link 
//                 href="#" 
//                 className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors"
//               >
//                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.747.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.766-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012 017.001z"/>
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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
            <p className="text-gray-300 font-league-spartan text-base font-light leading-relaxed max-w-sm">
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