import React from 'react'
import img from '@/assets/about/ab-01.jpg'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
export default function AboutSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2" data-aos="fade-right">
                    <Image src={img} alt="Our Factory" className=" shadow-lg min-h-[450px]" />
                </div>
                <div className="md:w-1/2" data-aos="fade-left">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
                    <p className="text-gray-600 leading-relaxed mb-5">
                        With decades of experience, Hun Hsin Textile is a leading supplier and exporter of high-quality nylon yarn. We pride ourselves on reliability, innovation, and excellent customer service in the Retail Apparel and Fashion industry.
                    </p>
                    <Link href="/about" className='' >
                        <Button className='hover:bg-black hover:text-white transition-all duration-300 rounded-none cursor-pointer' variant={'outline'}>Learn More</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
