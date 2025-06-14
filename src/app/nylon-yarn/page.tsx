// app/nylon-yarn/page.tsx
import Image from "next/image";
import img1 from '@/assets/nylon/1.jpg'
import img2 from '@/assets/nylon/2.jpg'
import { FaArrowRight } from "react-icons/fa";

export default function NylonYarnPage() {
    return (
        <div className="bg-white mt-24 min-h-screen">
            {/* Header Section */}
            <div className="bg-sky-600 py-24 text-white text-center">
                <h1 className="text-4xl font-bold">Nylon Yarn</h1>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
                {/* Left Text Block */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900">Nylon Yarn</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We are one of the leading manufacturer and exporter in Bangladesh for the production of high quality <strong>Nylon Dyed Yarn</strong>. We produce nylon yarn of various denier and filaments. These yarns are processed by our experts according to set industry parameters.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        We invest in the modern technologies and pay attention to every detail to consistent quality of our yarn. Quality is controlled from the start. After complete production, the yarn supplied to our clients is not only excellent but also consistent with even color and even nature, helping them to easily procure orders and achieve remarkable positions in the competitive national/international market.
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex justify-center items-center">
                    <Image
                        src={img1} // update this path
                        alt="Nylon Yarn Factory"
                        width={500}
                        height={400}
                        className="rounded shadow-md"
                    />
                </div>
            </div>

            {/* Product Spec + Yarn Image */}
            <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-10">
                {/* Yarn Image */}
                <div className="flex justify-center items-center">
                    <Image
                        src={img2} // update this path
                        alt="Yarn Rolls"
                        width={300}
                        height={250}
                        className="rounded shadow"
                    />
                </div>

                {/* Product Specification */}
                <div>
                    <h3 className="text-md font-bold mb-4">Product Specification:</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li><FaArrowRight size={22} className="inline-block bg-blue-500 p-1 rounded-full text-white mr-2" /> <strong>Composition:</strong> 100% Nylon</li>
                        <li><FaArrowRight size={22} className="inline-block bg-blue-500 p-1 rounded-full text-white mr-2" /> <strong>Count:</strong> 70D/2 & 100D/2</li>
                        <li><FaArrowRight size={22} className="inline-block bg-blue-500 p-1 rounded-full text-white mr-2" /> <strong>Color:</strong> As per buyer required</li>
                        <li><FaArrowRight size={22} className="inline-block bg-blue-500 p-1 rounded-full text-white mr-2" /> <strong>Certification:</strong> Oeko-Tex Standard 100</li>
                    </ul>
                </div>
            </div>

            {/* Application Paragraph */}
            <div className="max-w-6xl mx-auto px-4 pb-16 text-gray-700 text-sm leading-relaxed">
                <p>
                    Nylon can be used in carpet fiber, clothing, fishing lines, footwear, nylon fiber, pantyhose, wind pants, toothbrush bristles, Velcro, airbag fiber, auto parts intake manifolds, gas (petrol) tanks, slings and rope, used in climbing gear and slacklining, machine parts, such as gears and bearings, parachutes, metalized, nylon balloons, classical and flamenco guitar strings, paintball marker bolts, racquetball, badminton, squash, and tennis racquet strings, Strings for String instruments. Nylon fibers are used in many applications, including fabrics, bridal veils, carpets, musical strings and rope. High tenacity nylon fibers are used for seatbelts, tire cords, ballistic cloth and other uses.
                </p>
            </div>
        </div>
    );
}
