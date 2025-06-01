import React from 'react'
import img1 from '@/assets/process/1.webp'
import img2 from '@/assets/process/p2.jpeg'
import img3 from '@/assets/process/p3.jpeg'
import img4 from '@/assets/process/p4.jpeg'
import img5 from '@/assets/process/p5.webp'
import Image from 'next/image'
export default function OurProcessPage() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-gray-900 text-center">Our Textile Manufacturing Process</h2>
                <p className="mt-4 text-lg text-gray-600 text-center">
                    Crafting quality textiles through precision, care, and innovation.
                </p>
            </div>


            <div className='space-y-12'>
                <div className=" px-6">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl font-semibold text-gray-800">1. Raw Material Sourcing</h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We begin with selecting the finest natural and synthetic fibers from trusted suppliers. Quality starts with the raw material — ensuring durability, softness, and sustainability from the ground up.
                            </p>
                        </div>
                        <div className="lg:w-1/2" data-aos="zoom-in">
                            <Image src={img1} alt="Raw fibers" className=" shadow-lg" />
                        </div>
                    </div>
                </div>


                <div className=" px-6">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl font-semibold text-gray-800">2. Spinning & Yarn Production</h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Our modern spinning systems transform fibers into yarn with high strength and evenness. We ensure every thread meets exact specifications for seamless downstream processing.
                            </p>
                        </div>
                        <div className="lg:w-1/2" data-aos="zoom-in" data-aos-duration="1200">
                            <Image src={img2} alt="Spinning process" className=" shadow-lg" />
                        </div>
                    </div>
                </div>


                <div className=" px-6">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl font-semibold text-gray-800">3. Fabric Weaving or Knitting</h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Depending on the fabric type, we use high-speed looms for weaving or precision machines for knitting. This stage defines the texture, strength, and breathability of the fabric.
                            </p>
                        </div>
                        <div className="lg:w-1/2" data-aos="zoom-in" data-aos-duration="1200">
                            <Image src={img3} alt="Weaving process" className=" shadow-lg" />
                        </div>
                    </div>
                </div>


                <div className=" px-6">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl font-semibold text-gray-800">4. Dyeing & Finishing</h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Fabrics are dyed in vibrant, lasting colors using eco-friendly methods. Finishing processes like softening, anti-shrink, or water-repellency enhance the usability and feel of the fabric.
                            </p>
                        </div>
                        <div className="lg:w-1/2" data-aos="zoom-in" data-aos-duration="1200">
                            <Image src={img4} alt="Dyeing process" className="shadow-lg" />
                        </div>
                    </div>
                </div>

                <div className=" px-6">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl font-semibold text-gray-800">5. Quality Inspection & Packaging</h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Every roll of fabric is thoroughly inspected for defects and inconsistencies. Once approved, it&apos;s neatly packaged and prepped for delivery to ensure it reaches you in perfect condition.
                            </p>
                        </div>
                        <div className="lg:w-1/2" data-aos="zoom-in" data-aos-duration="1200">

                            <Image src={img5} alt="Dyeing process" className="shadow-lg" />

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
