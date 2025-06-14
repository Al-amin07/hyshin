// app/products/page.tsx
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import img1 from '@/assets/nylon/one.webp'
import img2 from '@/assets/nylon/two.webp'
import img3 from '@/assets/nylon/33.jpg'
import img4 from '@/assets/nylon/11.webp'
type Product = {
  id: number;
  title: string;
  short: string;
  desc1: string;
  desc2: string;

  image: string | StaticImageData;
  link: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "100% Nylon Yarn",
    short: 'Virgin Strength. Sweater-Ready Softness.',
    desc1: '100% Nylon Yarn is the foundation of premium sweater knitting. Crafted from virgin nylon, it provides a soft hand feel, reliable elasticity, and strong color absorption making it ideal for solid-colored, textured, or blended sweaters.',
    desc2: "Known for its high durability and abrasion resistance, this yarn ensures long-lasting wear and perfect form retention. Whether for fine gauge or chunky knits, it's trusted by global sweater brands seeking consistency, comfort, and scalable supply.",
    image: img1,
    link: "/nylon-yarn",
  },
  {
    id: 2,
    title: "Recycled Nylon Yarn",
    short: 'Circular Innovation for Sweater Fashion.',
    desc1: 'Recycled Nylon Yarn is designed for sweater manufacturers who want to embrace sustainability without sacrificing quality. Produced from regenerated materials such as post-industrial waste and recovered fishing nets, this yarn combines environmental responsibility with sweater-friendly performance.',
    desc2: "Engineered for softness, warmth, and stretch, it blends seamlessly into modern knitwear from cozy pullovers to fashion-forward layering pieces. Ideal for brands aiming to align with circular fashion trends, our recycled nylon delivers style, comfort, and a cleaner footprint.",
    image: img2,
    link: "/nylon-yarn",
  },
  {
    id: 3,
    title: "China Feather Yarn",
    short: 'Plush Texture. Perfect for Statement Sweaters.',
    desc1: 'China Feather Yarn brings volume and tactile richness to fashion sweaters and winter collections. Crafted with synthetic blends and engineered to mimic feather softness, it delivers both structure and softness in each loop.',
    desc2: "Ideal for cardigans, oversized knits, trims, and cozy layering pieces, this specialty yarn turns everyday sweaters into standout garments. Easy to knit, dye, and style; Feather Yarn by Hun Hsin is where comfort meets runway-ready texture. ",
    image: img3,
    link: "/nylon-yarn",
  },

];

export default function AllProductsPage() {
  return (
    <div className="mt-20">
      {/* Hero Banner */}
      <section className="relative w-full h-[350px] md:h-[400px] bg-white">
        <Image
          src={img4}
          alt="Yarn Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        <div className="absolute inset-0 bg-black/5 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl font-semibold md:text-3xl  text-red-600">
            Nylon Yarn Solutions for Global Knitwear & Sweater Manufacturers
          </h1>
          <p className="text-sm mt-4 text-white font-semibold">
            Home <span className="mx-1">/</span> Products
          </p>
        </div>
      </section>

      <div className="space-y-20 max-w-7xl mx-auto mt-16 px-4">
        {products.map((product, idx) => {
          const isImageRight = idx % 2 === 0;
          return (
            <div
              key={product.id}
              className={`flex group flex-col md:flex-row ${!isImageRight ? "md:flex-row-reverse " : ""
                } items-center `}
            >
              {/* Text Block */}
              <div className="w-[400px]   relative">
                <div className={`w-lg  md:absolute top-1/2 -translate-y-1/2 bg-[#EB1111] group-hover:bg-black/95 transition-all duration-500   text-white p-8 ${isImageRight ? "md:left-0" : "md:right-0"} rounded shadow-md`}>
                  <h2 className="text-2xl font-semibold mb-3">{product.title}</h2>
                  <p className="mb-4 text-base font-medium leading-relaxed">{product.short}</p>
                  <p className="text-gray-200">{product.desc1}</p>
                  <p className="mt-4 text-gray-200">{product.desc2}</p>
                  <Link href={product.link}>
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

      <div className="py-20" />
    </div>
  );
}
