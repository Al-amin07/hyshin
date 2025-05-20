import { threads } from '@/components/home/HotNews'
import Image from 'next/image';
import React from 'react'

export default async function ProductDetails({params}: {params: Promise<{id: string | number}>}) {
    const id = (await params).id
    console.log({id})
    const product = threads.find(el => el.id === Number(id)) 
 if (!product) {
    return <div className="text-center mt-20 text-gray-600">Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mt-20 mx-auto px-4 py-10">
      <div className="relative w-full  mb-6">
        <Image
          src={product.image}
          alt={product.title}
          height={400}
          width={500}
          className=" rounded shadow"
        />
      </div>

      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        Created on {new Date(product.createdDate).toLocaleDateString()}
      </p>
      <p className="text-lg text-gray-700">{product.desc}</p>
    </div>
  );
}
