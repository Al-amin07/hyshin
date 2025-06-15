import { products } from '@/constant/data';
import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

export default async function ProductDetails({ params }: { params: Promise<{ id: string | number }> }) {
  const id = (await params).id
  console.log({ id })
  const product = products.find(el => el.id === Number(id))
  if (!product) {
    return <div className="text-center mt-20 text-gray-600">Product not found.</div>;
  }

  return (
    <div className="bg-white mt-24 min-h-screen">
      {/* Header Section */}
      <div className="bg-[#172E4D] py-24 text-white text-center">
        <h1 className="text-4xl font-bold mb-3">{product?.title}</h1>
        <p>Premium-Grade Polyamide Yarn Designed for Strength, Stretch & Versatility</p>
        <p></p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        {/* Left Text Block */}
        <div className="">
          <h2 className="text-xl font-semibold text-gray-900">{product?.title}</h2>
          <p className="text-gray-700 mt-5 mb-4 leading-relaxed">
            {product?.desc3}  {product?.desc4}
          </p>

          <ul className="space-y-2 text-gray-700">
            {
              product?.specifications?.map((spec, index) => (
                <li key={index}>
                  <FaArrowRight size={18} className="inline-block bg-[#172E4D] p-1 rounded-full text-white mr-2" />
                  <strong>{spec.name}:</strong> {spec.desc}
                </li>
              ))
            }

          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <Image
            src={product?.image1 as string} // update this path
            alt="Nylon Yarn Factory"
            width={700}
            height={550}
            className="rounded shadow-md"
          />
        </div>
      </div>

      {/* Product Spec + Yarn Image */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-10">
        {/* Yarn Image */}
        <div className="flex justify-center items-center">
          <Image
            src={product?.image2 as string} // update this path
            alt="Yarn Rolls"
            width={900}
            height={700}
            className="rounded shadow"
          />
        </div>

        {/* Product Specification */}
        <div>
          <h3 className="text-md font-bold mb-4">Key Features:</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            {
              product?.keyFeatures?.map((spec, index) => (
                <li key={index}>
                  {/* <FaArrowRight size={22} className="inline-block bg-blue-500 p-1 rounded-full text-white mr-2" /> */}
                  {spec}
                </li>
              ))
            }

          </ul>
          <h3 className="text-md font-bold mt-6 mb-4">Applications:</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            {
              product?.applications?.map((app, index) => (
                <li key={index}>

                  {app}
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      {/* Application Paragraph */}
      <div className="max-w-7xl mx-auto px-4 pb-16 text-gray-700  leading-relaxed">
        <h1 className='font-medium mb-4'>{product?.conc?.title}</h1>
        <p>
          {product?.conc?.desc}
        </p>
      </div>
    </div>
  );
}
