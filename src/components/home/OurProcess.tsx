import Link from "next/link";
import { Button } from "../ui/button";

// components/OurProcess.tsx
export default function OurProcess() {
    const steps = [
        {
            title: "Sourcing",
            desc: "Finest raw materials sourced from certified suppliers.",
        },
        {
            title: "Spinning",
            desc: "Fibers turned into high-quality yarns using advanced techniques.",
        },
        {
            title: "Weaving & Knitting",
            desc: "Precision weaving and knitting to create durable fabrics.",
        },
        {
            title: "Dyeing & Finishing",
            desc: "Vibrant dyeing and finishing for enhanced texture and feel.",
        },
        {
            title: "Quality Control",
            desc: "Strict checks ensure top-tier performance and longevity.",
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
                    Our Manufacturing Process
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    We ensure every step is optimized for quality, sustainability, and customer satisfaction.
                </p>

                <div className="relative flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-4 mb-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center max-w-xs">
                            <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl font-bold shadow-lg">
                                {index + 1}
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-800">{step.title}</h3>
                            <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
                        </div>
                    ))}


                </div>
                <div className="flex items-center justify-center">
                    <Link href="/process" className='' >
                        <Button className='hover:bg-black text-white transition-all duration-300 hover:text-white bg-blue-600 rounded-none cursor-pointer' variant={'outline'}>Learn More</Button>

                    </Link>
                </div>
            </div>
        </section>
    );
}
