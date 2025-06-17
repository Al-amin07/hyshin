import {
  FaCheckSquare,
  FaFlask,
  FaBoxes,
  FaThumbsUp,
  FaClock,
  FaGem,
  FaLightbulb,
} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineFactory } from "react-icons/md";

const goals = [
  { icon: <FaFlask />, text: "Strong R&D" },
  { icon: <BiCodeAlt />, text: "Reliable After Sales Support" },
  { icon: <FaGem />, text: "Leading Dyeing Factory" },
  { icon: <MdOutlineFactory />, text: "Expert Dyeing Technologist" },
  { icon: <FaThumbsUp />, text: "Huge Raw Stock" },
  { icon: <FaCheckSquare />, text: "Variety Of Dyeing Methods In One Premise" },
  { icon: <FaBoxes />, text: "Wide Range Of Yarn" },
  { icon: <FaClock />, text: "Short Lead Time & Sample Support" },
  { icon: <FaLightbulb />, text: "Safe Dyes & Chemicals Used" },
];

export default function OurGoals() {
  return (
    <section className=" max-w-6xl mx-auto px-5 md:px-0  bg-white ">
      <div className="mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Goals
        </h2>
      </div>
      <p className="text-lg font-medium  text-gray-600 mb-12">
        Hun Hsin Textile Co., (BD) Ltd. stands as a trusted nylon yarn supplier,
        committed to quality, customization, and global service excellence.{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 text-left text-gray-800"
          >
            <span className="text-[#172E4D] text-2xl">{goal.icon}</span>
            <span className="font-medium text-[17px]">{goal.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
