"use client"
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import './header.css'

import {
    Scrollbar,
    Navigation,
    HashNavigation,
    Autoplay,
} from 'swiper/modules';
import img2 from '@/assets/banner/banner5.jpg'
import img1 from '@/assets/banner/b5.jpg'
import img3 from '@/assets/banner/b7.jpeg'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Banner from './Banner';
// import { TbCircleDotted } from "react-icons/tb";
// import { MdArrowRightAlt, MdArrowLeft } from "react-icons/md";


export default function Header() {
    return (
        <div className='md:h-screen relative'>
            <Swiper
                
                speed={1200}

                scrollbar={{
                    el: '.custom-swiper-scrollbar',
                    draggable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                hashNavigation={{ watchState: true }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}

                modules={[Navigation, HashNavigation, Autoplay, Scrollbar]}
                className="mySwiper h-[400px] md:h-screen"
            >

                <SwiperSlide>

                  <Banner img={img1}/>

                </SwiperSlide>
                <SwiperSlide>

                  <Banner img={img2}/>

                </SwiperSlide>
                <SwiperSlide>

                  <Banner img={img3}/>

                </SwiperSlide>
            
            </Swiper>
            <div className="h-16 flex  items-center  rounded-b-2xl  bg-[#3d3d3d] opacity-60 relative">
                {/* Swiper will inject the scrollbar drag element here */}
                <div className="custom-swiper-scrollbar w-[40%] h-1  rounded relative overflow-hidden"></div>
            </div>
            {/* <div className="absolute left-1/2 -translate-x-1/2 -bottom-[52px] z-30 flex items-center  mt-4  gap-3">
                <button className="custom-prev relative cursor-pointer p-2 h-10 w-10 flex items-center justify-center bg-transparent  ">
                    <FaChevronLeft className='' size={18} />
                    <div className='border-4 h-full w-full absolute animate-spin duration-[8000ms] border-dotted hover:border-red-600 rounded-full'>

                    </div>
                 
                </button>
                <button className="custom-next cursor-pointer p-2 h-10 w-10 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black transition-colors duration-300 font-bold shadow-xl">
                    <FaChevronRight size={18} />
                </button>
            </div> */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-[52px] z-30 flex items-center  mt-4  gap-3">
                <button className="custom-prev cursor-pointer p-2 h-10 w-10 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black transition-colors duration-300 font-bold shadow-xl">
                    <FaChevronLeft size={18} />
                </button>
                <button className="custom-next cursor-pointer p-2 h-10 w-10 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black transition-colors duration-300 font-bold shadow-xl">
                    <FaChevronRight size={18} />
                </button>
            </div>




        </div>
    );
}
