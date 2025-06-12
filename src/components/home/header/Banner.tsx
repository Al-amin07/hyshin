import { playDisplay } from '@/components/fonts'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

import React from 'react'
import { motion } from 'motion/react'

export default function Banner({ img, text }: { img: string | StaticImport, text: string }) {
    return (
        <motion.div initial={{ opacity: 0, y: "-100%" }} animate={{ opacity: 1, y: 1 }} transition={{ duration: 1 }} className="w-full   min-h-screen "

        >
            <Image src={img} alt='vsdv' className='h-full w-full' fill />
            <div className="flex items-center relative z-30 min-h-[450px]  md:min-h-screen justify-between w-full bg-gray-900/30">
                <div data-aos="fade-up-left" data-aos-delay="500" className="container mx-auto px-6  w-full">
                    {/* <h1 className={`${playDisplay.className} text-xl   text-white`}>Exporter & Importer</h1> */}
                    <h1 className={`text-2xl  pt-0 font-semibold mt-10 mb-12 md:text-4xl  text-white max-w-2/3  leading-relaxed  lg:text-6xl ${playDisplay.className}`}>{text}
                    </h1>
                    {/* <button className={`py-2 md:py-3 text-xl font-medium px-6 md:px-8  lg:px-10 bg-red-600 cursor-pointer text-white hover:text-red-600 border border-transparent hover:border-red-600 hover:bg-transparent transition-colors duration-500 ${playDisplay.className}`}>Read More</button> */}

                </div>
            </div>
        </motion.div>
    )
}
