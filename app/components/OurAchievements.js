import Image from "next/image";

export default function OurAchievements() {
    return (
        <section className="bg-black text-white py-16 px-4 relative overflow-hidden">
            {/* Globe Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center">
                <Image
                    src="/globe.png"
                    alt="Globe"
                    width={400}
                    height={220}
                    className="opacity-60 select-none pointer-events-none"
                    style={{ marginTop: "-60px" }}
                />
            </div>

            {/* Achievements */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Our <span className="text-gray-300">Achievements</span>
                </h2>
                <p className="text-gray-300 mb-10">
                    We take pride in transforming businesses through impactful solutions and measurable results.
                </p>
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    <div>
                        <div className="text-3xl font-bold text-blue-400">1400+</div>
                        <div className="text-gray-400 text-sm mt-1">Clients Served</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-400">100M+</div>
                        <div className="text-gray-400 text-sm mt-1">Revenue Generated</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-400">300+</div>
                        <div className="text-gray-400 text-sm mt-1">Projects Completed</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-400">150+</div>
                        <div className="text-gray-400 text-sm mt-1">Industry Awards</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-400">200+</div>
                        <div className="text-gray-400 text-sm mt-1">Expert Consultants</div>
                    </div>
                </div>
            </div>

            {/* Nautilus Method */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                    The Nautilus Method
                </h3>
                <div className="text-blue-300 font-semibold mb-4">
                    Incremental Growth, Infinite Value
                </div>
                <p className="text-gray-300 mb-12 max-w-3xl mx-auto text-sm md:text-base">
                    Inspired by the natural, spiral growth of the nautilus, the Nautilus Method fosters small, low-risk, high-reward changes that drive continuous evolution for both new and established businesses. This iterative cycle of value creation, delivery, and capture reflects a purposeful pursuit of flourishing (Aristotle) and a harmonious alignment with the ecosystem (Spinoza). Through practical application (Bacon) and constant refinement (Popper), it transforms businesses into resilient nodes, adapting to a dynamic world (Kuhn) while upholding a universal duty to benefit all (Kant).
                </p>
            </div>

            {/* Nautilus Value Diagram */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
                {/* Value Descriptions */}
                <div className="flex-1 flex flex-col gap-8">
                    <div className="text-left md:text-right">
                        <div className="text-lg font-semibold text-blue-200">Emotional Value</div>
                        <div className="text-gray-400 text-sm">
                            Memorable experiences that resonate with clients, forging connections beyond transactions.
                        </div>
                    </div>
                    <div className="text-left md:text-right">
                        <div className="text-lg font-semibold text-blue-200">Economic Value</div>
                        <div className="text-gray-400 text-sm">
                            Strategies that generate measurable financial gains, optimizing resources for sustainable prosperity.
                        </div>
                    </div>
                </div>

                {/* Nautilus Image */}
                <div className="flex-shrink-0 relative">
                    <Image
                        src="/Snail.png"
                        alt="Nautilus"
                        width={260}
                        height={260}
                        className="drop-shadow-2xl"
                    />
                    {/* Strategic Value */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-center w-48">
                        <div className="text-lg font-semibold text-blue-200">Strategic Value</div>
                        <div className="text-gray-400 text-xs">
                            Innovation and market adaptability, fueled by knowledge management and learning as the cornerstone of progress.
                        </div>
                    </div>
                </div>

                {/* Value Descriptions */}
                <div className="flex-1 flex flex-col gap-8">
                    <div className="text-left">
                        <div className="text-lg font-semibold text-blue-200">Brand Value</div>
                        <div className="text-gray-400 text-sm">
                            Techniques to build recognition and loyalty, crafting a legacy of trust within the ecosystem.
                        </div>
                    </div>
                    <div className="text-left">
                        <div className="text-lg font-semibold text-blue-200">Social Value</div>
                        <div className="text-gray-400 text-sm">
                            Impact that uplifts society and the environment, embedding ethical responsibility into every action.
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Bar */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 opacity-80 flex items-center justify-center z-20">
                <span className="text-white font-semibold text-sm px-2">
                    Delivering Innovation, Driving Growth, Earning Trust
                </span>
            </div>
        </section>
    );
}