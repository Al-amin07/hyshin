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
import img2 from '@/assets/banner/yarn images, for banner (2).jpg'
import img1 from '@/assets/banner/yarn images, for banner (3).jpg'
// import img3 from '@/assets/banner/b7.jpeg'
// import img2 from '@/assets/banner/banner5.jpg'
// import img1 from '@/assets/banner/b5.jpg'
// import img3 from '@/assets/banner/b7.jpeg'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Banner from './Banner';


export default function Header() {
    return (
        <div className='md:h-screen relative'>
            <Swiper

                speed={1200}



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
                className="mySwiper h-[450px] md:h-[calc(100vh-48px)]"
            >

                <SwiperSlide>

                    <Banner text='Weaving World-Class Nylon Yarn, Every Strand.
' img={img1} />

                </SwiperSlide>
                <SwiperSlide>

                    <Banner text='Bangladesh’s #1 Exporter of Premium Nylon Yarn' img={img2} />

                </SwiperSlide>
                {/* <SwiperSlide>

                    <Banner img={img3} />

                </SwiperSlide> */}

            </Swiper>
            <div className="h-12  hidden md:flex  items-center  rounded-b-2xl  bg-[#3d3d3d] opacity-60 relative">
                <div className="custom-swiper-scrollbar w-[40%] h-1  rounded relative overflow-hidden"></div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 md:bottom-1.5 z-30 flex items-center  mt-4  gap-3">
                <button className="custom-prev cursor-pointer p-1.5 h-9 w-9 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black transition-colors duration-300 font-bold shadow-xl">
                    <FaChevronLeft size={18} />
                </button>
                <button className="custom-next cursor-pointer p-1.5 h-9 w-9 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black transition-colors duration-300 font-bold shadow-xl">
                    <FaChevronRight size={18} />
                </button>
            </div>




        </div>
    );
}
