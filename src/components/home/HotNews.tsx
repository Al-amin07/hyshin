import React from 'react'
import img1 from '@/assets/product/p1.webp'
import img2 from '@/assets/product/p2.webp'
import img3 from '@/assets/product/p3.webp'
import ThreadCard, { IThread } from './ThreadCard';

export const threads: IThread[] = [
  {
    id: 1,
    title: "Polyester DTY",
    desc: "Draw Textured Yarn used in weaving and knitting fabrics for garments, home furnishings, and upholstery.",
    image: img1,
    createdDate: "2025-05-10T09:00:00Z"
  },
  {
    id: 2,
    title: "Nylon FDY",
    desc: "Fully Drawn Yarn with high strength and uniformity, suitable for high-performance fabrics.",
    image: img2,
    createdDate: "2025-05-12T14:30:00Z"
  },
  {
    id: 3,
    title: "Viscose Yarn",
    desc: "Soft and breathable yarn used for lightweight fabrics, offering good moisture absorption.",
    image: img3,
    createdDate: "2025-05-13T08:15:00Z"
  },
  {
    id: 4,
    title: "Cotton Yarn",
    desc: "Natural fiber yarn perfect for comfortable, everyday wear and high-quality textiles.",
    image: img1,
    createdDate: "2025-05-14T11:45:00Z"
  },
  {
    id: 5,
    title: "Acrylic Yarn",
    desc: "Synthetic yarn that mimics wool, used in sweaters, blankets, and other warm fabrics.",
    image:img2,
    createdDate: "2025-05-15T17:00:00Z"
  }
];

export default function HotNews() {
  return (
    <div className='px-12'>
        
      
        <div className="flex max-w-xl mb-16">
          <div className="w-6 h-auto bg-blue-600 mr-5"></div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-7">Hot News</h2>
            <p className=" text-base md:text-lg">
              Provide you with the latest enterprise and industry news.

            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-16 '>
        {
            threads.slice(0,3).map((el, index) => <ThreadCard index={index} thread={el} key={el.id}/>)
        }
        </div>
    </div>
  )
}
