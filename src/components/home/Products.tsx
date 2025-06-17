"use client";
import React from "react";


import Image from "next/image";



import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, HashNavigation, Autoplay } from "swiper/modules";

// import Link from 'next/link'
import { MdArrowRightAlt } from "react-icons/md";
import { products } from "@/constant/data";
import Link from "next/link";
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
              className="mySwiper  max-w-[400px] sm:max-w-[450px] md:max-w-2/3 lg:max-w-4xl min-h-[500px]"
            >
              {products.map((el, index) => (
                <SwiperSlide key={index}>
                  <div className="select-none  group hover:scale-110 relative min-h-[500px]   cursor-pointer  transition-all duration-500 overflow-hidden">
                    <Image
                      src={el.image}
                      alt={el.title}
                      height={500}
                      width={500}
                      className="min-h-[500px] max-h-[600px] w-full object-cover"
                    />
                    <div className=" group-hover:-translate-y-16 transition-transform duration-500 text-white w-full absolute z-10 left-1/2 -translate-x-1/2  bottom-0">
                      <h3 className="text-2xl mb-4 text-center whitespace-nowrap font-semibold ">
                        {el?.title}
                      </h3>
                      <div className="flex justify-center">
                        <Link
                          href={`/product/${el.id}`}
                          className=" mx-auto cursor-pointer p-2 border border-white hover:bg-white/30   rounded-full opacity-0 group-hover:opacity-100
                                         flex items-center justify-center bg-transparent text-white transition-all duration-300 font-bold shadow-xl"
                        >
                          <MdArrowRightAlt size={26} />
                        </Link>
                      </div>
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
