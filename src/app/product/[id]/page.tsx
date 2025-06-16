import { products } from "@/constant/data";
import Image from "next/image";
import React from "react";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const id = (await params).id;
  console.log({ id });
  const product = products.find((el) => el.id === Number(id));
  if (!product) {
    return (
      <div className="text-center mt-20 text-gray-600">Product not found.</div>
    );
  }

  return (
    <div className="bg-white mt-20 min-h-screen">
      {/* Header Section */}
      <div className="bg-[#172E4D] py-24 text-white text-center">
        <h1 className="text-4xl font-bold mb-3">{product?.title}</h1>
        <p>
          {product?.short2}
        </p>
        <p></p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        {/* Left Text Block */}
        <div className="">
          <p className="text-gray-700 mt-5 mb-4 leading-relaxed">
            {product?.desc3}
          </p>
          <h1 className="text-lg font-medium mt-4 mb-2">
            Product Specifications{" "}
          </h1>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            {product?.specifications?.map((spec, index) => (
              <li key={index}>
                {spec.name}:{spec.desc}
              </li>
            ))}
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
      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-between items-center gap-10">
        {/* Yarn Image */}
        <div className="flex flex-1 justify-center items-center">
          <Image
            src={product?.image2 as string} // update this path
            alt="Yarn Rolls"
            width={900}
            height={700}
            className="rounded shadow"
          />
        </div>

        {/* Product Specification */}
        <div className="flex-1">
          <p>{product?.conc?.desc}</p>
          <h3 className="text-md font-bold my-4">Key Features:</h3>
          <ul className="space-y-2 list-disc list-inside  text-gray-700">
            {product?.keyFeatures?.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          {/* <h3 className="text-md font-bold mt-6 mb-4">Applications:</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            {product?.applications?.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul> */}
        </div>
      </div>

      {/* Application Paragraph */}
      <div className="max-w-7xl mx-auto px-4 pb-16 text-gray-700  leading-relaxed">
        <h3 className="text-md font-bold mt-6 mb-4">Applications:</h3>
        <ul className="space-y-2 list-disc list-inside text-gray-700">
          {product?.applications?.map((app, index) => (
            <li key={index}>{app}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
