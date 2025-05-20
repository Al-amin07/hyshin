import img from '@/assets/about/l2.jpg'
import Image from 'next/image'
const WhyChooseUs = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image */}
      <Image src={img} alt='sdsv' className='absolute w-full h-full'/>

      {/* Content Container */}
      <div className="relative h-full flex items-center bg-black/30 px-8 md:px-16 lg:px-24">
        {/* Left Section with Red Bar */}
        <div className="flex max-w-xl">
          <div className="w-8 md:w-12 h-24 bg-blue-600 mr-6"></div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-7">Why choose us</h2>
            <p className="text-white text-base md:text-lg">
              We specialize in sourcing and selling a wide variety of textile products, ensuring a transparent approach,
              quality materials and speed of shipment.
            </p>
          </div>
        </div>

        {/* Right Section - "Advantage" Text */}
        <div className="absolute right-8 md:right-16 lg:right-24 top-1/2 transform -translate-y-1/2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">Advantage</h1>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
