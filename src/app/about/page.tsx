import ab1 from '@/assets/about/ab-01.jpg'
import ab2 from '@/assets/about/ab-02.jpg'
import Image from "next/image";
import bg1 from '@/assets/about/t1.jpeg'
export default function AboutUs() {
    return (
        <section className="my-28  font-sans space-y-20">
            {/* Block 0 */}
            <div
                className="relative h-[80vh] flex items-center bg-no-repeat bg-center bg-fixed bg-cover "
                style={{ backgroundImage: `url(${bg1.src})` }}
            >

                <div className="absolute inset-0 bg-black/40 " />
                <div className="relative  z-10 px-6 md:px-12 max-w-5xl text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <div className="w-16 h-[2px] bg-white mb-6" />
                    <p className="text-xl md:text-2xl font-light mb-2">
                        Coming From China, Marketing To The World.
                    </p>
                    <p className="text-xl md:text-2xl font-light mb-6">
                        We Are A Professional Manufacturer Of Nylon Yarn.
                    </p>
                    <p className="text-sm text-gray-300">Home / About Us</p>
                </div>
            </div>
            <div className='md:px-12 space-y-20'>

                {/* Block 1 */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <Image
                            src={ab1} // Replace with your actual image path in /public
                            alt="Company Building"
                            width={800}
                            height={600}
                            className=" w-full h-auto"
                        />
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl text-gray-800 mb-3">FOUNDED IN 2012</h3>
                        <h2 className="text-xl md:text-3xl font-semibold text-blue-600 mb-5">
                            Coming From China, Marketing To The World.
                        </h2>
                        <p className="text-gray-800  leading-relaxed">
                            HUN HSIN TEXTILE Fiber Technology Co., Ltd. is an enterprise
                            established in June 2012, especially good at producing polyamide filament
                            yarn (FDY, DTY, MOTHER YARN, MONOFILAMENT YARN). Our fixed assets:
                            USD15000000, covers an area of 105228 square meters, 31000 square meters
                            of plant. We have more than 300 employees and over 50 professional
                            technicians with our Parent Company – “Nantong Jingshan Polyamide Fiber Co., Ltd.”.
                            <br /><br />
                            Our products are widely applied in textile enterprises like circular knitting
                            machines, rapier looms and hydraulic looms. Applications include knitting
                            underwear, elastic leotards, socks, bath products, swimming wear, cleaning
                            products, filter cloths, curtain cloths, window screens with a parachute,
                            gauze kerchiefs, mosquito net laces, ribbons and garments textiles.
                        </p>
                    </div>
                </div>
                {/* Block 2 */}
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    <div className=" ">
                        <h3 className="font-bold text-2xl text-gray-800 mb-2 uppercase">Outstanding Quality</h3>
                        <h2 className="text-xl md:text-3xl font-semibold text-blue-600 mb-4">
                            Hongshun Was First Established In 2012
                        </h2>
                        <p className="text-gray-800  leading-relaxed">
                            During the past 10 years since our parent company was established in September
                            of 2006, we always regarded innovation as our core competitiveness and developed
                            new products to meet the requirements of markets every year.
                            <br /><br />
                            We always insist on “cooperate in good faith and create a win-win situation” as
                            our business philosophy, and we sincerely welcome clients visiting from home and abroad.
                        </p>
                    </div>
                    <div>
                        <Image
                            src={ab2} // Replace with your actual image path in /public
                            alt="Company Building"
                            width={800}
                            height={600}
                            className=" w-full h-auto"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}
