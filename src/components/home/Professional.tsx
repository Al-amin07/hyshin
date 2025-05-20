'use client'
import Image from 'next/image';
import img from '@/assets/about/l1.jpg'

export default function ProfessionalSection() {
    const lists = [
        { text: 'Capacity', number: 5000},
        { text: 'New products per month', number: 1000},
        { text: 'Annual number of export containers', number: 300000},
    ]
  return (
    <section className="w-full relative bg-white py-10">
      <div className="container relative mx-auto flex flex-col lg:flex-row  gap-10 px-4">
        {/* Left image */}
        <div data-aos="fade-right"  className="lg:w-1/2 w-full">
          <Image
            src={img}
            alt="Company Building"
            width={500}
            height={400}
            className="rounded mt-16 shadow-md object-cover w-full max-h-[550px]"
          />
        </div>

        {/* Right content */}
        <div data-aos="fade-left" className="lg:w-1/2 w-full">
          <h2 className="text-3xl lg:text-6xl leading-normal font-bold mb-4">
            Professional yarn manufacturer
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Hengke Textile Technology Co., Ltd. is a China Polyester yarn and ACY yarn Factory,
            Nylon yarn Manufacturers. We are headquartered in Zhejiang, the company was founded
            by the enterprising Mr. Wang, the main goal is to become a major brand in the field
            of indelination and export. Focus on project commitment, speed of work, and quality
            practices.
          </p>

      <div className='flex justify-between items-center'>
            {/* Read More Button */}
          <button className="border-2 border-black px-7 text-xl py-3.5  font-medium hover:bg-black hover:text-white transition">
            Read More
          </button>

          {/* About Us Label */}
          <div className='flex items-end gap-2'>
            <div className="mt-10 text-right">
            <p className="text-5xl font-bold text-blue-600 relative inline-block">
              About
              <span className="block text-black mt-1">Us</span>
              {/* <span className="absolute -left-2 top-2 w-1 h-6 bg-red-600"></span> */}
            </p>
          </div>
          <p className='h-20 w-5 bg-blue-600'></p>
          </div>
      </div>
        </div >
      </div>

      {/* Stats Bar */}
      <div className="mt-10 absolute right-0 -bottom-10 z-10  max-w-6xl bg-gray-600/90 text-white ">
        <div className="flex flex-col  md:flex-row justify-between text-center">
            {
                lists.map(el => <div key={el.number} className="flex-1 py-12 px-8 border-r border-r-gray-500/60 flex gap-8 items-center justify-between mb-4 md:mb-0">
            <p className="text-gray-200 text-lg">{el.text}</p>
            <p className="font-bold text-4xl">{el.number}</p>
          </div>)
            }
          
    
        </div>
      </div>
    </section>
  );
}
