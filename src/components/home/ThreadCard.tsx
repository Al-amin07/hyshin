
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
export interface IThread{
    id: string | number; 
    title: string;
    desc: string;
    image: string | StaticImport
    createdDate: string
}
import { MdArrowRightAlt } from "react-icons/md";

export default function ThreadCard({thread, index}: {thread: IThread, index: number}) {
  return (
    <Link  data-aos="fade-up"
    // data-aos-delay='1000' 
    data-aos-delay={index * 0.3} 
     data-aos-anchor-placement="top-bottom"  href={`/product/${thread.id}`} className='bg-[#ececec] group cursor-pointer '>
        <div className='flex justify-end border-2 max-h-[300px]'>
            <Image src={thread?.image} width={400} height={400} className='group-hover:scale-110  transition-all duration-1000 ' alt={thread.title}/>
        </div>
        <div className=' px-7 pb-7'>
            <p>{thread?.createdDate}</p>
            <h1 className='text-3xl hover:text-blue-600 transition-colors duration-500 font-semibold my-6'>{thread?.title}</h1>
            <h1 className='hover:text-blue-600 text-gray-700 transition-colors duration-500'>{thread?.desc}</h1>
            <div className='mt-4 flex justify-between items-center'>
                <button className=' text-red-600 text-lg cursor-pointer'>Read More</button>
                    <button className='p-1 border border-red-600 text-red-600 cursor-pointer rounded-full'><MdArrowRightAlt size={26} /></button>
            </div>
        </div>
    </Link>
  )
}
