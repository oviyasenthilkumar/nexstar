'use client';
import { useState } from 'react';
import Image from 'next/image';

const tabs = [
	{ label: 'Request a Demo' },
	{ label: 'Become a Partner' },
	{ label: 'Careers' },
];

const solutions = [
	'Zoho CRM',
	'Zoho Books',
	'Zoho People',
	'Zoho Projects',
	'Zoho Analytics',
	'Other',
];

export default function GetInTouch() {
	const [activeTab, setActiveTab] = useState(0);
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		company: '',
		solution: '',
	});
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<section className="w-full flex flex-col md:flex-row min-h-[600px] bg-[#f6f8ff]">
			<div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
				<Image
					src="/get-in-touch.png"
					alt="Get in touch"
					fill
					className="object-cover object-center rounded-none md:rounded-l-3xl"
					priority
				/>
			</div>
			<div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 bg-[#f6f8ff]">
				<h2 className="text-black text-5xl font-bold mb-8">Get In Touch</h2>
				<div className="flex items-center mb-10 w-full">
					<div className="flex w-full bg-white rounded-full border border-gray-200 overflow-hidden relative">
						{tabs.map((tab, idx) => (
							<button
								key={tab.label}
								onClick={() => setActiveTab(idx)}
								className={`flex-1 py-3 text-lg font-medium transition-colors duration-300 focus:outline-none z-10 ${
									activeTab === idx ? 'text-white' : 'text-black'
								}`}
								style={{
									position: 'relative',
								}}
							>
								{tab.label}
							</button>
						))}
						{/* Animated tab indicator */}
						<span
							className="absolute top-1 left-0 h-[calc(100%-8px)] bg-black rounded-full z-0 transition-all duration-300"
							style={{
								width: '33.3333%',
								transform: `translateX(${activeTab * 100}%)`,
							}}
						/>
					</div>
				</div>
				<form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
					<div>
						<input
							type="text"
							className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 text-lg transition-colors duration-200 ${
								form.firstName ? 'text-black' : 'text-gray-400'
							}`}
							value={form.firstName}
							onChange={(e) => setForm({ ...form, firstName: e.target.value })}
							placeholder="First Name"
						/>
					</div>
					<div>
						<input
							type="text"
							className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 text-lg transition-colors duration-200 ${
								form.lastName ? 'text-black' : 'text-gray-400'
							}`}
							value={form.lastName}
							onChange={(e) => setForm({ ...form, lastName: e.target.value })}
							placeholder="Last Name"
						/>
					</div>
					<div>
						<input
							type="email"
							className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 text-lg transition-colors duration-200 ${
								form.email ? 'text-black' : 'text-gray-400'
							}`}
							value={form.email}
							onChange={(e) => setForm({ ...form, email: e.target.value })}
							placeholder="Email ID"
						/>
					</div>
					<div>
						<div className="flex items-center border-b border-gray-300 focus-within:border-[#3B4FFF]">
							<span className="flex items-center mr-2">
								<span className="text-xl">🇮🇳</span>
								<span className="ml-1 text-gray-500 text-base">+91</span>
								<svg
									className="ml-1 w-4 h-4 text-gray-400"
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
							</span>
							<input
								type="tel"
								className={`flex-1 bg-transparent outline-none py-2 text-lg transition-colors duration-200 ${
									form.phone ? 'text-black' : 'text-gray-400'
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
							className={`w-full bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 text-lg transition-colors duration-200 ${
								form.company ? 'text-black' : 'text-gray-400'
							}`}
							value={form.company}
							onChange={(e) => setForm({ ...form, company: e.target.value })}
							placeholder="Company Name"
						/>
					</div>
					<div className="relative">
						<button
							type="button"
							className={`w-full flex items-center justify-between bg-transparent border-b border-gray-300 focus:border-[#3B4FFF] outline-none py-2 text-lg text-left transition-colors duration-200 ${
								form.solution ? 'text-black' : 'text-gray-400'
							}`}
							onClick={() => setShowDropdown((v) => !v)}
						>
							<span className={form.solution ? 'text-black' : 'text-gray-400'}>
								{form.solution || 'Solution of Interest'}
							</span>
							<svg
								className={`ml-2 w-5 h-5 text-gray-400 transition-transform ${
									showDropdown ? 'rotate-180' : ''
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
							<ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow z-10 mt-1">
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
							className="bg-[#3B4FFF] hover:bg-[#2536c7] text-white font-semibold text-lg px-16 py-3 rounded-full shadow transition w-full md:w-auto"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
