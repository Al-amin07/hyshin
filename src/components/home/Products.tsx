"use client";
import React from "react";
import img1 from "@/assets/product/p1.jpeg";
import img2 from "@/assets/product/p2.jpeg";
import img3 from "@/assets/product/p3.jpeg";
import img4 from "@/assets/product/p2.jpeg";
// import img1 from '../../assets/cap/c1.jpg'
// import img2 from '../../assets/cap/c2.avif'
// import img3 from '../../assets/cap/c3.avif'
// import img4 from '../../assets/cap/c4.avif'

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Classic Snapback",
    image: img1,
    description: "Timeless style, perfect fit.",
  },
  {
    id: 2,
    name: "Streetwear Cap",
    image: img2,
    description: "Bold, urban design.",
  },
  {
    id: 3,
    name: "Bucket Hat",
    image: img3,
    description: "Casual and trendy.",
  },
  {
    id: 4,
    name: "Vintage Trucker",
    image: img4,
    description: "Retro vibes with modern comfort.",
  },
  {
    id: 5,
    name: "Sporty Cap",
    image: img1,
    description: "Built for performance.",
  },
  {
    id: 6,
    name: "Minimalist Beanie",
    image: img2,
    description: "Warmth meets simplicity.",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, HashNavigation, Autoplay } from "swiper/modules";

// import Link from 'next/link'
import { MdArrowRightAlt } from "react-icons/md";
// import { FaChevronRight } from "react-icons/fa6";

export default function ProductSection() {
  return (
    <section className="">
      <div className=" min-h-[500px] relative mx-auto ">
        <div
          className="flex items-start 
                "
        >
          {/* Vertical Text on the Left */}
          <div className="hidden  min-h-full lg:flex flex-col gap-5 min-w-[400px] justify-center items-center">
            <div className="flex gap-1">
              <h2
                className={`text-5xl  rotate-180 font-bold text-black/80  `}
                style={{
                  writingMode: "vertical-lr",
                  transform: "rotate(180deg)",
                }}
              >
                Product Category
              </h2>
              <span
                style={{
                  writingMode: "vertical-lr",
                  transform: "rotate(180deg) ",
                }}
                className="-rotate-180 h-28 w-5 bg-[#172E4D]"
              ></span>
            </div>
            {/* <div className='max-w-[300px]  space-x-3 mx-auto'>
                            <Link className='hover:underline text-lg hover:text-blue-600'  href={`/product`}>
                        All
                            </Link> 
                            {
                            products.map(el => <Link key={el.id} className='hover:underline text-lg hover:text-blue-600' href={`/product/${el.id}`}>
                            {el.name}
                            </Link>)
                            }
                        </div> */}
          </div>

          {/* Swiper Carousel */}
          <div className="flex-1  relative">
            <Swiper
              speed={1000}
              slidesPerView={2}
              spaceBetween={30}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              hashNavigation={{ watchState: true }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                "@1.25": {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
              }}
              modules={[Navigation, HashNavigation, Autoplay]}
              className="mySwiper max-w-[350px] sm:max-w-[450px] md:max-w-2/3 lg:max-w-4xl min-h-[500px]"
            >
              {products.map((el, index) => (
                <SwiperSlide key={index}>
                  <div className="select-none group hover:scale-110 relative min-h-[500px]   cursor-pointer  transition-all duration-500 overflow-hidden">
                    <Image
                      src={el.image}
                      alt={el.name}
                      height={500}
                      width={500}
                      className="min-h-[400px] max-h-[500px] w-full object-cover"
                    />
                    <div className=" group-hover:-translate-y-24 transition-transform duration-500 text-white w-full absolute z-10 left-1/2 -translate-x-1/2  bottom-0">
                      <h3 className="text-2xl mb-4 text-center whitespace-nowrap font-semibold ">
                        {el?.name}
                      </h3>
                      <button
                        className=" mx-auto cursor-pointer p-2 border border-white   rounded-full opacity-0 group-hover:opacity-100
                                         flex items-center justify-center bg-transparent text-white transition-all duration-300 font-bold shadow-xl"
                      >
                        <MdArrowRightAlt size={26} />
                      </button>
                    </div>
                    <div className="absolute group-hover:opacity-0 transition-all duration-500 opacity-100 bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-red-600 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            {/* <div className="absolute lg:-top-16  lg:mt-0 z-10 lg:-right-6 right-1/2 -translate-x-1/2 flex gap-3">
                            <button className="custom-prev cursor-pointer p-2 h-10 w-10 flex items-center justify-center bg-white rounded-full border border-black/45 hover:text-white hover:bg-black transition-colors duration-300 font-bold shadow-xl">
                                <FaChevronLeft size={18} />
                            </button>
                            <button className="custom-next cursor-pointer p-2 h-10 w-10 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black transition-colors border border-black/45 duration-300 font-bold shadow-xl">
                                <FaChevronRight size={18} />
                            </button>
                        </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
