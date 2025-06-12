import React from 'react'
import img from '@/assets/process/nl.jpeg'
import Image from 'next/image'
export default function CTASection() {
    return (
        <section className="relative  text-white py-24 px-6 overflow-hidden">
            <Image src={img} alt="Hero Image" className="absolute top-0 left-0 w-full h-full object-fill" />
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                    Ready to Bring Your Vision to Life?
                </h2>
                <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto">
                    Whether you need premium fabrics, custom production, or design collaboration — we’re here to help turn your textile ideas into reality.
                </p>
                <div className="mt-10 flex justify-center flex-wrap gap-4">
                    <a href="/contact" className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow">
                        Get in Touch
                    </a>
                    <a href="/products" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition">
                        Browse Products
                    </a>
                </div>
            </div>
            <div className='absolute bg-black/10 inset-0'>

            </div>
        </section>


    )
}


