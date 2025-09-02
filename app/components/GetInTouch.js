
"use client";
import { useState, useEffect, useRef } from "react";
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
    country: "IN", // Default India
  });
  const [submitted, setSubmitted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  // Refs for dropdowns
  const countryDropdownRef = useRef(null);
  const solutionDropdownRef = useRef(null);

  // Countries data
  const countries = countryData.allCountries.map((c) => ({
    code: c.iso2?.toUpperCase() || "",
    name: c.name,
    dialCode: `+${c.dialCode}`,
  }));

  const selectedCountry =
    countries.find((c) => c.code === form.country) || countries[0];
  const flag = emojiFlags.countryCode(selectedCountry.code).emoji;

  // Filter countries based on search
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Phone number formatting function
  const formatPhoneNumber = (value, countryCode) => {
    const phoneFormats = {
      US: (val) => val.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
      IN: (val) => val.replace(/(\d{5})(\d{5})/, '$1 $2'),
      UK: (val) => val.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3'),
      AE: (val) => val.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3'),
      AU: (val) => val.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3'),
      CA: (val) => val.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'),
      DE: (val) => val.replace(/(\d{3})(\d{3})(\d{5})/, '$1 $2 $3'),
      FR: (val) => val.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{1})/, '$1 $2 $3 $4 $5'),
      IT: (val) => val.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3'),
      JP: (val) => val.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      RU: (val) => val.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3'),
      SA: (val) => val.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3'),
      SG: (val) => val.replace(/(\d{4})(\d{4})/, '$1 $2'),
      ZA: (val) => val.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3'),
      MX: (val) => val.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3'),
    };
    
    const formatter = phoneFormats[countryCode];
    return formatter ? formatter(value) : value;
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
      }
      if (solutionDropdownRef.current && !solutionDropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full flex flex-col md:flex-row min-h-[600px] md:min-h-[940px] lg:min-h-[940px] xl:min-h-[800px] 2xl:min-h-[940px] bg-[#f6f8ff]">
      {/* Left Image */}
      <div className="w-full md:w-2/5 lg:w-[45%] h-[400px] md:h-auto relative">
        <Image
          src="/get-in-touch.png"
          alt="Get in touch"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-3/5 lg:w-[55%] flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 bg-[#f6f8ff]">
        <h2 className="font-[Sora] font-semibold text-[40px] md:text-[48px] text-center text-black mb-8">
          Get In Touch
        </h2>

        {/* Success State */}
        {submitted ? (
          <div className="text-center">
            <p className="text-lg font-semibold text-black font-[League_Spartan]">
              Thank you! We'll get back to you within 24 hours.
            </p>
            <a
              href="https://nexstar.zohobookings.com/#/4585749000000036002?utm_source=website&utm_medium=embed&utm_campaign=discovery_call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg mt-6 inline-block bg-[#545CF6] text-white px-8 py-3 rounded-full shadow font-[League_Spartan] transition"
            >
              Book a Discovery Call
            </a>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="mb-10 w-full">
              <div className="relative flex flex-row rounded-full border border-gray-200 bg-white p-1">
                {tabs.map((tab, idx) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 rounded-full py-2.5 px-4 text-center font-[League_Spartan] font-semibold text-base transition-all duration-300 ${
                      activeTab === idx
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
            >
              <input
                type="text"
                placeholder="First Name"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 font-[League_Spartan] text-[18px] placeholder:text-[#808080] ${form.firstName ? 'text-black' : 'text-[#808080]'}`}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 font-[18px] placeholder:text-[#808080] ${form.lastName ? 'text-black' : 'text-[#808080]'}`}
              />
              <input
                type="email"
                placeholder="Email ID"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 font-[18px] placeholder:text-[#808080] ${form.email ? 'text-black' : 'text-[#808080]'}`}
                required
              />
              {/* Phone with Country */}
              <div ref={countryDropdownRef} className="flex items-center border-b border-gray-300 relative">
                <button
                  type="button"
                  className="flex items-center mr-2 px-2 py-1 rounded"
                  onClick={() => setShowCountryDropdown((v) => !v)}
                >
                  <span className="text-xl" style={{ color: '#808080' }}>{flag}</span>
                  <span className="ml-1 text-gray-500 text-base">
                    {selectedCountry.dialCode}
                  </span>
                  <svg
                    className={`ml-1 w-4 h-4 text-gray-400 ${
                      showCountryDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showCountryDropdown && (
                  <div className="absolute left-0 top-10 z-20 bg-white border border-gray-200 rounded-lg shadow w-80">
                    {/* Search Input */}
                    <div className="p-3 border-b border-gray-100">
                      <input
                        type="text"
                        placeholder="Search countries..."
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B4FFF] focus:border-transparent text-sm text-gray-800"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    {/* Countries List */}
                    <ul className="max-h-60 overflow-y-auto">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((c) => (
                          <li
                            key={c.code}
                            className="flex items-center px-4 py-2 hover:bg-[#f6f8ff] cursor-pointer"
                            onClick={() => {
                              setForm({ ...form, country: c.code });
                              setShowCountryDropdown(false);
                              setCountrySearch("");
                            }}
                          >
                            <span className="mr-2">{emojiFlags.countryCode(c.code).emoji}</span>
                            <span className="mr-2 text-gray-500">{c.name}</span>
                            <span className="mr-2 text-gray-500">({c.code})</span>
                            <span className="text-gray-500">{c.dialCode}</span>
                          </li>
                        ))
                      ) : (
                        <li className="px-4 py-2 text-gray-500 text-center">
                          No countries found
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formatPhoneNumber(form.phone, selectedCountry.code)}
                  maxLength={(() => {
                    // Add more countries as needed
                    const countryPhoneLengths = { IN: 10, US: 10, UK: 10, AE: 9, AU: 9, CA: 10, DE: 11, FR: 9, IT: 10, JP: 10, RU: 10, SA: 9, SG: 8, ZA: 9, MX: 10 };
                    return countryPhoneLengths[selectedCountry.code] || 15;
                  })()}
                  pattern={`\\d{${(() => {
                    const countryPhoneLengths = { IN: 10, US: 10, UK: 10, AE: 9, AU: 9, CA: 10, DE: 11, FR: 9, IT: 10, JP: 10, RU: 10, SA: 9, SG: 8, ZA: 9, MX: 10 };
                    return countryPhoneLengths[selectedCountry.code] || 15;
                  })()}}`}
                  onChange={(e) => {
                    // Only allow digits and limit length
                    const countryPhoneLengths = { IN: 10, US: 10, UK: 10, AE: 9, AU: 9, CA: 10, DE: 11, FR: 9, IT: 10, JP: 10, RU: 10, SA: 9, SG: 8, ZA: 9, MX: 10 };
                    const maxLen = countryPhoneLengths[selectedCountry.code] || 15;
                    let val = e.target.value.replace(/[^0-9]/g, "");
                    if (val.length > maxLen) val = val.slice(0, maxLen);
                    setForm({ ...form, phone: val });
                  }}
                  className={`flex-1 bg-transparent outline-none py-2 font-[League_Spartan] text-[18px] placeholder:text-[#808080] ${form.phone ? 'text-black' : 'text-[#808080]'}`}
                />
              </div>

              <input
                type="text"
                placeholder="Company Name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 font-[League_Spartan] text-[18px] placeholder:text-[#808080] ${form.company ? 'text-black' : 'text-[#808080]'}`}
              />

              {/* Dropdown */}
              <div ref={solutionDropdownRef} className="relative">
                <button
                  type="button"
                  className={`w-full flex items-center justify-between bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 font-[League_Spartan] font-normal text-[18px] leading-[27.04px] tracking-[0%] text-left transition-colors duration-200 ${
                    form.solution ? "text-black" : "text-gray-500"
                  }`}
                  onClick={() => setShowDropdown((v) => !v)}
                >
                  <span className={form.solution ? "text-black" : "text-gray-500"}>
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
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showDropdown && (
                  <ul className="absolute left-0 right-0 bg-white border border-gray-200 shadow z-10 mt-1">
                    {solutions.map((sol) => (
                      <li
                        key={sol}
                        className="px-4 py-2 hover:bg-[#f6f8ff] cursor-pointer text-gray-500"
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

              {/* Submit */}
              <div className="md:col-span-2 flex md:justify-start justify-center mt-6">
                <div className="flex flex-col lg:flex-row lg:items-center w-full lg:w-auto gap-2 lg:gap-6">
                  <button
                    type="submit"
                    className="bg-[#545CF6] hover:bg-[#4F46E5] text-white font-semibold text-lg px-16 py-3 rounded-full transition duration-200 shadow-lg shadow-[#5B6FFF]/20 hover:shadow-xl hover:shadow-[#5B6FFF]/30 focus:outline-none focus:ring-2 focus:ring-[#545CF6] focus:ring-offset-2 focus:ring-offset-white w-full lg:w-auto"
                  >
                    Submit
                  </button>
                  {/* Microcopy + Privacy Policy */}
                  <span className="flex flex-row items-center justify-center text-base text-gray-600 font-['League_Spartan'] mt-4 lg:mt-0">
                    Response in &lt;24h ·{' '}
                    <a href="/privacy-policy" className="underline ml-1" style={{ color: '#545CF6' }}>
                      Privacy Policy
                    </a>
                  </span>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
