import React from "react";

import { IoPricetagsOutline } from "react-icons/io5";
import { SlDiamond } from "react-icons/sl";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import WhyChooseUs from "./WhyChooseUs";

const advantages = [
  {
    icon: <IoPricetagsOutline />,
    title: "PRICE ADVANTAGE",
    description: "We guarantee we always offer the best price to our clients."
  },
  {
    icon: <SlDiamond />,
    title: "PRODUCT QUALITY",
    description: "We ensure high product quality for every item we deliver."
  },
  {
    icon: <RiBarChartGroupedLine />,
    title: "EFFICIENT PRODUCTION CAPACITY",
    description: "We maintain a high level of production efficiency and reliability."
  },
  {
    icon: <FaTruck />,
    title: "PROMPT DELIVERY",
    description: "We ensure timely and reliable delivery for all our clients."
  }
];

const AdvantagesSection = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-white">
      {advantages.map((item, index) => (
        <div
          key={index}
          className="group relative flex flex-col items-center justify-center bg-white hover:shadow-2xl    transition-all duration-500 overflow-hidden"
        >
          <div className="flex flex-col items-center  border-4 border-dotted border-gray-400/90 rounded-full  justify-center text-center h-64 w-64 relative">
            <div className="text-5xl text-blue-600 mb-4">{item.icon}</div>
            <h3 className=" text-xl leading-relaxed">{item.title}</h3>

            {/* Moving red border */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-red-500 group-hover:animate-borderMove origin-center"></span>
          </div>

          {/* Hovered description box */}
          <div
            className="bg-white  px-4 py-3 mt-12 pt-12 pb-8 border-t-2 border-blue-600 text-gray-700 
                      max-w-full text-center
                      opacity-0 -translate-y-16
                      group-hover:opacity-100 group-hover:translate-y-0 
                      transition-all duration-600 text-xl  ease-in-out"
          >
            {item.description}
            
          </div>
        </div>
      ))}
    </div>
    <WhyChooseUs />
    </div>
  );
};

export default AdvantagesSection;
