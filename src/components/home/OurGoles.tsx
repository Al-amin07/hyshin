import { FaCheckSquare, FaFlask, FaBoxes, FaThumbsUp, FaClock, FaGem, FaLightbulb } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlineFactory } from 'react-icons/md';

const goals = [
  { icon: <FaFlask />, text: 'Strong R&D' },
  { icon: <BiCodeAlt />, text: 'Reliable After Sales Support' },
  { icon: <FaGem />, text: 'Leading Dyeing Factory' },
  { icon: <MdOutlineFactory />, text: 'Expert Dyeing Technologist' },
  { icon: <FaThumbsUp />, text: 'Huge Raw Stock' },
  { icon: <FaCheckSquare />, text: 'Variety Of Dyeing Methods In One Premise' },
  { icon: <FaBoxes />, text: 'Wide Range Of Yarn' },
  { icon: <FaClock />, text: 'Short Lead Time & Sample Support' },
  { icon: <FaLightbulb />, text: 'Safe Dyes & Chemicals Used' },
];

export default function OurGoals() {

  return (
    <section className="py-16 bg-white text-center">
      <div className='mb-16'>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Our Goals</h2>
        <span className='w-40 h-[3px] bg-blue-600 block mx-auto'></span>
      </div>
      <p className="text-lg italic text-gray-600 mb-10">
        Baly Yarn Dyeing Ltd. positioned itself as a reliable supplier with commitment for quality and service.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto ">
        {goals.map((goal, index) => (
          <div key={index} className="flex items-center space-x-3 text-left text-gray-800">
            <span className="text-red-600 text-2xl">{goal.icon}</span>
            <span className="font-medium text-[17px]">{goal.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
