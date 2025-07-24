'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = [
	{ label: 'All', value: 'all' },
	{ label: 'Platform', value: 'platform' },
	{ label: 'Solutions', value: 'solutions' },
	{ label: 'Product Trial', value: 'trial' },
	{ label: 'Integrations', value: 'integrations' },
];

const faqs = [
	{
		question: 'What does NexStar Consulting do?',
		answer: '',
		category: ['all', 'platform'],
	},
	{
		question: 'What is the BOSZ Method?',
		answer:
			'The BOSZ Method (Business Operating System for Zoho) is our proprietary, patent-pending framework that improves business clarity, reduces waste, and increases ROI from your Zoho and digital infrastructure.',
		category: ['all', 'solutions'],
	},
	{
		question: 'Do you offer Zoho implementation and customization?',
		answer: 'Yes, we provide end-to-end Zoho implementation, customization, and ongoing support tailored to your business needs.',
		category: ['all', 'solutions', 'integrations'],
	},
	{
		question: 'Where is NexStar Consulting based, and do you serve clients globally?',
		answer: 'NexStar Consulting is based in the US and serves clients worldwide, offering remote and onsite services as required.',
		category: ['all', 'platform', 'solutions'],
	},
	{
		question: 'Can I try your services before committing?',
		answer: 'Yes, we offer product trials and demo sessions so you can experience our solutions before making a decision.',
		category: ['all', 'trial'],
	},
	{
		question: 'How do your integrations work?',
		answer: 'Our integrations are designed to seamlessly connect Zoho with your existing tools, ensuring smooth data flow and process automation.',
		category: ['all', 'integrations'],
	},
];

export default function Answers() {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [openIndex, setOpenIndex] = useState(1); // Open the second FAQ by default

	const filteredFaqs =
		selectedCategory === 'all'
			? faqs
			: faqs.filter((faq) => faq.category.includes(selectedCategory));

	return (
		<section
			className="w-full min-h-screen py-20 flex flex-col items-center justify-center relative bg-cover bg-center"
			style={{ backgroundImage: "url('/galaxy-bg.jpg')" }}
		>
			<div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[#1a1a2e]/80 pointer-events-none z-0" />
			<div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
				<span className="px-4 py-1 rounded-full bg-[#3B4FFF] text-white text-xs font-semibold mb-4 tracking-widest">
					FAQs
				</span>
				<h2 className="text-5xl font-bold text-center mb-4 text-white">
					We've{' '}
					<span className="text-gray-300">All The Answers</span>
				</h2>
				<div className="flex flex-wrap gap-4 mb-10 justify-center">
					{categories.map((cat) => (
						<button
							key={cat.value}
							onClick={() => setSelectedCategory(cat.value)}
							className={`px-8 py-3 rounded-full font-semibold text-lg transition border border-white/30 focus:outline-none ${
								selectedCategory === cat.value
									? 'bg-white text-black shadow'
									: 'bg-transparent text-white hover:bg-white/10'
							}`}
						>
							{cat.label}
						</button>
					))}
				</div>
				<div className="flex flex-col gap-6 w-full">
					{filteredFaqs.map((faq, idx) => (
						<div
							key={idx}
							className={`rounded-2xl bg-[#231e35] text-white transition-all duration-300 ${
								openIndex === idx ? 'shadow-lg' : ''
							}`}
						>
							<button
								className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none"
								onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
								aria-expanded={openIndex === idx}
							>
								<span className="font-semibold text-xl">
									{faq.question}
								</span>
								<span>
									{openIndex === idx ? (
										<Image
											src="/images/arrow-up-circle.png"
											alt="Collapse"
											width={32}
											height={32}
										/>
									) : (
										<Image
											src="/images/arrow-down-circle.png"
											alt="Expand"
											width={32}
											height={32}
										/>
									)}
								</span>
							</button>
							{openIndex === idx && faq.answer && (
								<div className="px-8 pb-6 text-gray-300 text-base">
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
