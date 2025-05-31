// components/IndustriesWeServe.tsx
export default function IndustriesWeServe() {
    const industries = [
        { name: "Fashion & Apparel", icon: "👗" },
        { name: "Home Textiles", icon: "🛏️" },
        { name: "Medical Textiles", icon: "🏥" },
        { name: "Automotive", icon: "🚗" },
        { name: "Industrial Use", icon: "🏭" },
        { name: "Hospitality", icon: "🏨" },
    ];

    return (
        <section className="">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Industries We Serve
                </h2>
                <p className="text-gray-600 mb-10">
                    Providing premium textiles tailored for every industry.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                    {industries.map((industry, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-xl cursor-pointer transition-all duration-300"
                        >
                            <div className="text-6xl mb-3">{industry.icon}</div>
                            <h3 className="text-md font-semibold text-gray-700">
                                {industry.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
