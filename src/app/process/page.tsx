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
            <div className="max-w-7xl mx-auto px-6 py-28">
                <h2 className="text-4xl font-bold text-gray-700 text-center">Our Textile Manufacturing Process</h2>
                <p className="mt-4 text-lg text-gray-600 text-center">
                    Crafting quality textiles through precision, care, and innovation.
                </p>
            </div>


            <div className='space-y-12'>
                <div className=" px-6">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-semibold text-gray-800">RAW MATERIAL SOURCING – STARTING WITH PURITY & PURPOSE
                            </h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                At Hun Hsin Textile Co., (BD) Ltd., the quality of our nylon yarn begins with selecting the finest raw materials primarily high-purity caprolactam sourced from globally trusted, eco-compliant suppliers. This ensures a clean, consistent base polymer, setting the tone for exceptional yarn strength, softness, and sustainability. Every batch is tested for purity and performance before entering production
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
                            <h3 className="text-2xl font-semibold text-gray-800">POLYMERIZATION & MELT SPINNING – ENGINEERING CONTINUOUS EXCELLENCE
                            </h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Our in-house polymerization process transforms caprolactam into nylon polymer chips under tightly controlled thermal conditions. These chips are then melted and extruded through precision-engineered spinnerets, forming continuous filaments. Using world-class melt spinning technology, we achieve yarns with exact denier control, smooth texture, and superior tensile strength ideal for both fashion and industrial textile applications.
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
                            <h3 className="text-2xl font-semibold text-gray-800">DRAWING & TEXTURIZING – CUSTOMIZING YARN FOR REAL-WORLD DEMANDS
                            </h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                To meet diverse market needs, our yarns undergo advanced drawing and texturizing treatments. This process enhances properties like elasticity, bulk, and softness; perfect for high-performance applications such as sportswear, lingerie, outerwear, or technical textiles. Whether you need air-covered, false-twist textured, or other specialty yarns, we offer flexibility through OEM/ODM customization.
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
                            <h3 className="text-2xl font-semibold text-gray-800">HEAT SETTING & FUNCTIONAL FINISHING – LOCKING IN RELIABILITY
                            </h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Each yarn is heat-set using controlled thermal processes to stabilize its structure and improve handling, shrink resistance, and dye affinity. We also offer functional finishing options; including soft-touch, anti-pilling, moisture management, or anti-static treatments; delivered with precision for client-specific applications. Our eco-friendly processes comply with global textile safety and performance standards.
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
                            <h3 className="text-2xl font-semibold text-gray-800">QUALITY ASSURANCE & PACKAGING – DELIVERING CONFIDENCE IN EVERY CONE
                            </h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Before shipment, every cone of yarn undergoes a comprehensive inspection process. Automated systems and trained quality inspectors evaluate for evenness, strength, twist accuracy, and dyeability. Once approved, yarns are professionally wound, labeled, and packaged to ensure they arrive in pristine condition; ready for seamless use in your production lines, wherever you are in the world
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
