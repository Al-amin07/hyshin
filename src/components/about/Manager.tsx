import React from 'react'
import img1 from '@/assets/about/ma1.jpg'
import img2 from '@/assets/about/ma2.jpg'
import img3 from '@/assets/about/ma3.jpg'
import Image from 'next/image'
export default function Manager() {
    return (
        <div>
            <div className="bg-[#3399CC] py-16 text-center shadow-md">
                <h2 className="text-3xl font-bold text-white tracking-wide">
                    A Message from Our Managing Director, Sung Wei Lun
                </h2>
            </div>
            <div className='max-w-5xl  mx-auto'>

                <div className='flex items-center mb-12'>
                    <div className='flex-1  relative  left-8 top-5 bg-white shadow-md p-8 shadow-black/60'>
                        <h1 className='text-2xl font-medium mb-5'>Our employees, their families, and our global partners depend on us to weave a brighter future.</h1>

                        <p>Since 2008, Hun Hsin Textile has been a leading nylon yarn exporter, built on trust, innovation, and commitment. From Taiwan to the world, our 400+ employees deliver exceptional Nylon, Recycled, and Feather Yarns. We&apos;re crafting the foundation for global garments, championing sustainability and integrity. Our dedication to our team ensures consistent quality and reliable service. Join us in weaving a vibrant, sustainable textile future..</p>
                    </div>
                    <div className=' flex-1 bg-green-600'>
                        <Image src={img1} alt="manager" className='h-full w-full object-cover' width={500} height={500} />
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className=' flex-1 bg-green-600'>
                        <Image src={img2} alt="manager" className='h-full w-full object-cover' width={500} height={500} />
                    </div>
                    <div className=' flex-1 bg-green-600'>
                        <Image src={img3} alt="manager" className='h-full w-full object-cover' width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    )
}
