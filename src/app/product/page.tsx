// app/products/page.tsx
import Image from "next/image";
import Link from "next/link";

import bglogo from "@/assets/nylon/33.jpg";
import { products } from "@/constant/data";
// import img3 from '@/assets/nylon/11.webp'

export default function AllProductsPage() {
  return (
    <div className="mt-20">
      {/* Hero Banner */}
      <section className="relative w-full h-[350px] md:h-[400px] bg-white">
        <Image
          src={bglogo}
          alt="Yarn Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-center px-4">
          <h1
            className="text-2xl uppercase font-semibold md:text-3xl  text-white
          
          "
          >
            Nylon Yarn Solutions for Global Knitwear & Sweater Manufacturers
          </h1>
        </div>
      </section>

      <div className="space-y-20  max-w-7xl mx-auto mt-16 px-4">
        {products.map((product, idx) => {
          const isImageRight = idx % 2 === 0;
          return (
            <div
              key={product.id}
              className={`flex group flex-col lg:flex-row ${!isImageRight ? "lg:flex-row-reverse " : ""
                } items-center `}
            >
              {/* Text Block */}
              <div className="md:w-[400px] relative ">
                <div
                  className={`w-full md:w-lg  md:absolute md:top-1/2 md:-translate-y-1/2 bg-[#EB1111] group-hover:bg-[#172E4D] transition-all duration-500   text-white p-4 md:p-8 ${isImageRight ? "md:left-0" : "md:right-0"
                    }  shadow-md`}
                >
                  <h2 className="text-2xl font-semibold mb-3">
                    {product.title}
                  </h2>
                  <p className="mb-4 text-base font-medium leading-relaxed">
                    {product.short}
                  </p>
                  <p className="text-gray-200">{product.desc1}</p>
                  <p className="mt-4 text-gray-200">{product.desc2}</p>
                  <Link href={`/product/${product?.id}`}>
                    <button className="border border-white text-white px-4 py-1.5 text-sm cursor-pointer mt-5 hover:bg-white hover:text-[#8b2c2c] transition">
                      VIEW DETAILED PRODUCTS
                    </button>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={700}
                  height={600}
                  className=" shadow-md object-cover w-full"
                />
              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
}
