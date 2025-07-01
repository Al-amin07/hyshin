// components/IndustriesWeServe.tsx
export default function IndustriesWeServe() {
    const industries = [
        { name: "Retail Apparel & Fashion Industry", icon: "👗" },
        { name: "Hosiery & Innerwear Manufacturing", icon: "🧦" },
        { name: "Knitwear & Sweater Industry", icon: "🧶" },
        // { name: "Home Textiles & Technical Fabrics", icon: "🛋️" },
        { name: "Global Importers and Sourcing Agencies", icon: "🌍" }


    ];

    return (
        <section className="">
            <div className=" text-center">
                <div className="bg-[#3399CC] py-16 text-center shadow-md">
                    <h2 className="text-5xl font-bold text-white tracking-wide">
                        Markets We Serve
                    </h2>
                </div>

                <div className="py-12 px-5 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {industries.map((industry, i) => (
                        <div
                            key={i}
                            className={`bg-white  p-6 rounded-xl shadow-xl  hover:shadow-2xl cursor-pointer transition-all duration-300 relative `}
                        >
                            <div className="text-6xl mb-6">{industry.icon}</div>
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
