import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/", label: "PRODUCT" },
        { href: "/process", label: " PROCESS" },
        // { href: "/blog", label: "BLOG" },
        { href: "/about", label: "ABOUT" },
        { href: "/contact", label: "CONTACT" },
    ];
    return (
        <footer className="bg-black text-white py-8 md:py-12 lg:py-20 px-8 md:px-10 lg:px-16">
            <div className='flex flex-col lg:flex-row justify-between border-b border-gray-700  mb-8'>
                <div className='w-full lg:w-2/3 mx-auto pb-10'>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5  ">
                        {/* Contact Details */}
                        <div>
                            <h3 className="text-2xl uppercase font-semibold mb-4 ">Contact Details</h3>
                            <p className="text-base leading-relaxed  mb-2">
                                Address: Duntou industrial park, haian county, nantong city, jiangsu province, China.
                            </p>
                            <p className="text-base mb-2">TEL: +86 15850491859</p>
                            <p className="text-base mb-4">E-mail: sales-betty@hsnylon.com</p>
                            <Image src="/qr-code.png" alt="QR Code" width={120} height={120} />
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-2xl uppercase font-semibold mb-4">Quick Link</h3>
                            <ul className="space-y-2 ">

                                {
                                    navLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link className='hover:underline' href={link.href}>{link.label}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Product Links */}
                        <div>
                            <h3 className="text-2xl uppercase font-semibold mb-4">Product</h3>
                            <ul className="space-y-2 ">
                                <li>Nylon Monofilament Yarn</li>
                                <li>Nylon Multifilament Yarn</li>
                                <li>Nylon Mother Yarn</li>
                                <li>Nylon Elastic Yarn</li>
                                <li>Bi-component FDY Yarn</li>
                            </ul>

                        </div>


                    </div>
                    <div className="mt-4 flex items-center lg:justify-end gap-4 text-white pr-6">
                        <span className="font-bold text-2xl">Follow Us : </span>
                        <FaFacebookF className='text-4xl transition-all duration-500 cursor-pointer hover:bg-white hover:text-black p-1 rounded-full' />
                        <FaTwitter className='text-4xl transition-all duration-500 cursor-pointer hover:bg-white hover:text-black p-1 rounded-full' />
                        <FaInstagram className='text-4xl transition-all duration-500 cursor-pointer hover:bg-white hover:text-black p-1 rounded-full' />
                        <FaLinkedinIn className='text-4xl transition-all duration-500 cursor-pointer hover:bg-white hover:text-black p-1 rounded-full' />
                    </div>
                </div>
                {/* Contact Form */}
                <div className='lg:w-1/3 lg:pl-8 pb-5 lg:border-l border-gray-700 '>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                        If You Are Interested In Our Products, Please Consult Us
                    </h2>
                    <form className="flex flex-col space-y-3">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="NAME*"
                                required
                                className="w-1/2 p-2 bg-transparent border border-white text-sm placeholder-gray-400"
                            />
                            <input
                                type="email"
                                placeholder="E-MAIL*"
                                required
                                className="w-1/2 p-2 bg-transparent border border-white text-sm placeholder-gray-400"
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                rows={3}
                                placeholder="MESSAGE*"
                                required
                                className="w-full p-2 bg-transparent border border-white text-sm placeholder-gray-400"
                            />
                            <button
                                type="submit"
                                className="absolute top-0 right-0 h-[77px] px-4 bg-white text-black flex items-center justify-center"
                            >
                                →
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            {/* Bottom Bar */}
            <div className="mt-6 text-center text-sm md:text-base text-white">
                <p>Copyright © by Jiangsu Hongshun Synthetic Fiber Technology Co., Ltd. Rights Reserved.</p>
                <p>Technical Support : <span className="text-white">Smart Cloud</span></p>
            </div>
        </footer>
    );
}
