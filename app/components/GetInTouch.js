// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';

// const tabs = [
// 	{ label: 'Request a Demo' },
// 	{ label: 'Become a Partner' },
// 	{ label: 'Careers' },
// ];

// const solutions = [
// 	'Zoho CRM',
// 	'Zoho Books',
// 	'Zoho People',
// 	'Zoho Projects',
// 	'Zoho Analytics',
// 	'Other',
// ];

// export default function GetInTouch() {
// 	const [activeTab, setActiveTab] = useState(0);
// 	const [form, setForm] = useState({
// 		firstName: '',
// 		lastName: '',
// 		email: '',
// 		phone: '',
// 		company: '',
// 		solution: '',
// 	});
// 	const [showDropdown, setShowDropdown] = useState(false);

// 	return (
// 		<section className="w-full flex flex-col md:flex-row min-h-[600px] bg-[#f6f8ff]">
// 			<div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
// 				<Image
// 					src="/get-in-touch.png"
// 					alt="Get in touch"
// 					fill
// 					className="object-cover object-center rounded-none md:rounded-l-3xl"
// 					priority
// 				/>
// 			</div>
// 			<div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 bg-[#f6f8ff]">
// 				<h2 className="text-black text-5xl font-bold mb-8">Get In Touch</h2>
// 				<div className="flex items-center mb-10 w-full">
// 					<div className="flex w-full bg-white rounded-full border border-gray-200 overflow-hidden relative">
// 						{tabs.map((tab, idx) => (
// 							<button
// 								key={tab.label}
// 								onClick={() => setActiveTab(idx)}
// 								className={`flex-1 py-3 text-lg font-medium transition-colors duration-300 focus:outline-none z-10 ${
// 									activeTab === idx ? 'text-white' : 'text-black'
// 								}`}
// 								style={{
// 									position: 'relative',
// 								}}
// 							>
// 								{tab.label}
// 							</button>
// 						))}
// 						{/* Animated tab indicator */}
// 						<span
// 							className="absolute top-1 left-0 h-[calc(100%-8px)] bg-black rounded-full z-0 transition-all duration-300"
// 							style={{
// 								width: '33.3333%',
// 								transform: `translateX(${activeTab * 100}%)`,
// 							}}
// 						/>
// 					</div>
// 				</div>
// 				<form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
// 					<div>
// 						<input
// 							type="text"
// 							className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 text-lg transition-colors duration-200 ${
// 								form.firstName ? 'text-black' : 'text-gray-400'
// 							}`}
// 							value={form.firstName}
// 							onChange={(e) => setForm({ ...form, firstName: e.target.value })}
// 							placeholder="First Name"
// 						/>
// 					</div>
// 					<div>
// 						<input
// 							type="text"
// 							className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 text-lg transition-colors duration-200 ${
// 								form.lastName ? 'text-black' : 'text-gray-400'
// 							}`}
// 							value={form.lastName}
// 							onChange={(e) => setForm({ ...form, lastName: e.target.value })}
// 							placeholder="Last Name"
// 						/>
// 					</div>
// 					<div>
// 						<input
// 							type="email"
// 							className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 text-lg transition-colors duration-200 ${
// 								form.email ? 'text-black' : 'text-gray-400'
// 							}`}
// 							value={form.email}
// 							onChange={(e) => setForm({ ...form, email: e.target.value })}
// 							placeholder="Email ID"
// 						/>
// 					</div>
// 					<div>
// 						<div className="flex items-center border-b border-gray-300 focus-within:border-[#3B4FFF]">
// 							<span className="flex items-center mr-2">
// 								<span className="text-xl">🇮🇳</span>
// 								<span className="ml-1 text-gray-500 text-base">+91</span>
// 								<svg
// 									className="ml-1 w-4 h-4 text-gray-400"
// 									fill="none"
// 									stroke="currentColor"
// 									strokeWidth="2"
// 									viewBox="0 0 24 24"
// 								>
// 									<path
// 										strokeLinecap="round"
// 										strokeLinejoin="round"
// 										d="M19 9l-7 7-7-7"
// 									/>
// 								</svg>
// 							</span>
// 							<input
// 								type="tel"
// 								className={`flex-1 bg-transparent outline-none py-2 text-lg transition-colors duration-200 ${
// 									form.phone ? 'text-black' : 'text-gray-400'
// 								}`}
// 								value={form.phone}
// 								onChange={(e) => setForm({ ...form, phone: e.target.value })}
// 								placeholder="Phone Number"
// 							/>
// 						</div>
// 					</div>
// 					<div>
// 						<input
// 							type="text"
// 							className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 text-lg transition-colors duration-200 ${
// 								form.company ? 'text-black' : 'text-gray-400'
// 							}`}
// 							value={form.company}
// 							onChange={(e) => setForm({ ...form, company: e.target.value })}
// 							placeholder="Company Name"
// 						/>
// 					</div>
// 					<div className="relative">
// 						<button
// 							type="button"
// 							className={`w-full flex items-center justify-between bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 text-lg text-left transition-colors duration-200 ${
// 								form.solution ? 'text-black' : 'text-gray-400'
// 							}`}
// 							onClick={() => setShowDropdown((v) => !v)}
// 						>
// 							<span className={form.solution ? 'text-black' : 'text-gray-400'}>
// 								{form.solution || 'Solution of Interest'}
// 							</span>
// 							<svg
// 								className={`ml-2 w-5 h-5 text-gray-400 transition-transform ${
// 									showDropdown ? 'rotate-180' : ''
// 								}`}
// 								fill="none"
// 								stroke="currentColor"
// 								strokeWidth="2"
// 								viewBox="0 0 24 24"
// 							>
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									d="M19 9l-7 7-7-7"
// 								/>
// 							</svg>
// 						</button>
// 						{showDropdown && (
// 							<ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow z-10 mt-1">
// 								{solutions.map((sol) => (
// 									<li
// 										key={sol}
// 										className="px-4 py-2 hover:bg-[#f6f8ff] cursor-pointer text-black"
// 										onClick={() => {
// 											setForm({ ...form, solution: sol });
// 											setShowDropdown(false);
// 										}}
// 									>
// 										{sol}
// 									</li>
// 								))}
// 							</ul>
// 						)}
// 					</div>
// 					{/* Submit button aligned left on desktop, full width on mobile */}
// 					<div className="md:col-span-2 flex md:justify-start justify-center mt-6">
// 						<button
// 							type="submit"
// 							className="bg-[#3B4FFF] hover:bg-[#2536c7] text-white font-semibold text-lg px-16 py-3 rounded-full shadow transition w-full md:w-auto"
// 						>
// 							Submit
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</section>
// 	);
// }


"use client";
import { useState } from "react";
import Image from "next/image";
import countryData from "country-telephone-data";
import emojiFlags from "emoji-flags";

const tabs = [
  { label: "Request a Demo" },
  { label: "Become a Partner" },
  { label: "Careers" },
];

const solutions = [
  "Zoho CRM",
  "Zoho Books",
  "Zoho People",
  "Zoho Projects",
  "Zoho Analytics",
  "Other",
];

export default function GetInTouch() {
  const [activeTab, setActiveTab] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    solution: "",
    country: "IN", // Default to India
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const countries = countryData.allCountries.map((c) => ({
    code: c.iso2?.toUpperCase() || "",
    name: c.name,
    dialCode: `+${c.dialCode}`,
  }));

  const selectedCountry =
    countries.find((c) => c.code === form.country) || countries[0];
  const flag = emojiFlags.countryCode(selectedCountry.code).emoji; // 🇮🇳

  return (
    <section className="w-full flex flex-col md:flex-row min-h-[600px] md:min-h-[900px] bg-[#f6f8ff]">
      <div className="w-full md:w-2/5 lg:w-[45%] h-[400px] md:h-auto relative">
        <Image
          src="/get-in-touch.png"
          alt="Get in touch"
          fill
          className="object-cover object-center rounded-none"
          priority
        />
      </div>
      <div className="w-full md:w-3/5 lg:w-[55%] flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 bg-[#f6f8ff]">
        <h2 className="font-[Sora] font-semibold text-[48px] leading-[100%] tracking-[0%] text-center capitalize text-black mb-8">
          Get In Touch
        </h2>
        {/* <div className="mb-10 w-full">
          
          <div className="relative flex flex-col sm:flex-row rounded-xl sm:rounded-full border border-gray-200 bg-white p-1">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={`
						
						relative z-10 w-full sm:flex-1 rounded-lg sm:rounded-full py-2.5 px-4
						text-center font-['League_Spartan'] font-semibold 
						text-sm sm:text-base md:text-lg
						transition-all duration-300
						focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
						
						
						${
              activeTab === idx
                ? "bg-gray-100 sm:bg-transparent text-black sm:text-white" // Active state
                : "text-gray-600 hover:bg-gray-100 sm:hover:bg-transparent" // Inactive state
            }
						`}
              >
                {tab.label}
              </button>
            ))}

           
            <span
              className="absolute top-1 left-1 z-0 hidden h-[calc(100%-8px)] rounded-full bg-black transition-transform duration-300 ease-in-out sm:block"
              style={{
                width: `calc(100% / ${tabs.length})`,
                transform: `translateX(${activeTab * 100}%)`,
              }}
            />
          </div>
        </div> */}
        <div className="mb-10 w-full">
          {/* Tabs container */}
          <div className="relative flex flex-row rounded-full border border-gray-200 bg-white p-1">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={`
          relative z-10 flex-1 rounded-full py-2.5 px-4
          text-center font-['League_Spartan'] font-semibold 
          text-sm sm:text-base md:text-lg
          transition-all duration-300
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
          ${
            activeTab === idx
              ? "bg-gray-100 text-black"
              : "text-gray-600 hover:bg-gray-100"
          }
        `}
              >
                {tab.label}
              </button>
            ))}

            {/* Animated tab indicator (works on all screens now) */}
            <span
              className="absolute top-1 left-1 z-0 h-[calc(100%-8px)] rounded-full bg-black transition-transform duration-300 ease-in-out"
              style={{
                width: `calc(100% / ${tabs.length})`,
                transform: `translateX(${activeTab * 100}%)`,
              }}
            />
          </div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <input
              type="text"
              className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 font-[League_Spartan] font-normal text-[18px] leading-[27.04px] tracking-[0%] transition-colors duration-200 ${
                form.firstName ? "text-black" : "text-[#808080]"
              }`}
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              type="text"
              className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 font-[League_Spartan] font-normal text-[18px] leading-[27.04px] tracking-[0%] transition-colors duration-200 ${
                form.lastName ? "text-black" : "text-[#808080]"
              }`}
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="email"
              className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 font-[League_Spartan] font-normal text-[18px] leading-[27.04px] tracking-[0%] transition-colors duration-200 ${
                form.email ? "text-black" : "text-[#808080]"
              }`}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email ID"
            />
          </div>
          <div>
            <div className="flex items-center border-b border-gray-300 focus-within:border-[#3B4FFF] relative">
              <button
                type="button"
                className="flex items-center mr-2 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setShowCountryDropdown((v) => !v)}
                tabIndex={0}
              >
                <span className="text-xl">{flag}</span>
                <span className="ml-1 text-gray-500 text-base">
                  {selectedCountry.dialCode}
                </span>
                <svg
                  className={`ml-1 w-4 h-4 text-gray-400 transition-transform ${
                    showCountryDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {showCountryDropdown && (
                <ul className="absolute left-0 top-10 z-20 bg-white border border-gray-200 rounded-lg shadow max-h-60 overflow-y-auto w-56">
                  {countries.map((country) => (
                    <li
                      key={country.code}
                      className="flex items-center px-4 py-2 hover:bg-[#f6f8ff] cursor-pointer"
                      onClick={() => {
                        setForm({ ...form, country: country.code });
                        setShowCountryDropdown(false);
                      }}
                    >
                      <span className="mr-2 text-xl">{country.flag}</span>
                      <span className="mr-2">{country.name}</span>
                      <span className="text-gray-500">{country.dialCode}</span>
                    </li>
                  ))}
                </ul>
              )}
              <input
                type="tel"
                className={`flex-1 bg-transparent outline-none py-2 font-[League_Spartan] font-normal text-[18px] leading-[27.04px] tracking-[0%] transition-colors duration-200 ${
                  form.phone ? "text-black" : "text-[#808080]"
                }`}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 font-[League_Spartan] font-normal text-[18px] leading-[27.04px] tracking-[0%] transition-colors duration-200 ${
                form.company ? "text-black" : "text-[#808080]"
              }`}
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Company Name"
            />
          </div>
          <div className="relative">
            <button
              type="button"
              className={`w-full flex items-center justify-between bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 font-[League_Spartan] font-normal text-[18px] leading-[27.04px] tracking-[0%] text-left transition-colors duration-200 ${
                form.solution ? "text-black" : "text-gray-700"
              }`}
              onClick={() => setShowDropdown((v) => !v)}
            >
              <span className={form.solution ? "text-black" : "text-[#808080]"}>
                {form.solution || "Solution of Interest"}
              </span>
              <svg
                className={`ml-2 w-5 h-5 text-gray-400 transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {showDropdown && (
              <ul className="absolute left-0 right-0 bg-white border border-gray-200  shadow z-10 mt-1">
                {solutions.map((sol) => (
                  <li
                    key={sol}
                    className="px-4 py-2 hover:bg-[#f6f8ff] cursor-pointer text-black"
                    onClick={() => {
                      setForm({ ...form, solution: sol });
                      setShowDropdown(false);
                    }}
                  >
                    {sol}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Submit button aligned left on desktop, full width on mobile */}
          <div className="md:col-span-2 flex md:justify-start justify-center mt-6">
            <button
              type="submit"
              className="bg-[#3B4FFF] hover:bg-[#2536c7]text-xl font-league-spartan text-white font-semibold text-lg px-16 py-3 rounded-full shadow transition w-full md:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
