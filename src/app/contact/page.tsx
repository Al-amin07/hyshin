"use client";
import TextWithBorder from "@/components/TextWithBorder";
import Image from "next/image";
import { toast } from "sonner";

import img from '@/assets/contact-2x-635x624.jpg'

export default function Contact() {
    const addressData = [
        {
            title: "Head Office",
            lines: [
                "60/6B, 60 Green Rd, Panthapath,",
                "Dhaka-1205, Bangladesh",
                "Phone: +880 1712345678",
            ],
        },
        {
            title: "Corporate Office",
            lines: [
                "House # 78, Road # 11, Block # F, Banani, ",
                "Dhaka – 1213, Bangladesh",
                "Phone: +880 1712345678",
            ],
        },
        {
            title: "Factory Address 01",
            lines: [
                "KuniaTargach, Hotapara, Gazipur",
                "Bangladesh",
                "Phone: +880 1712345678",
                "Phone: +880 1712345678",
            ],
        },
        {
            title: "Factory Address 02",
            lines: [
                "Jamirdia, Masterbari, Valuka, ",
                "Mymensingh, Bangladesh",
            ],
        },
    ];
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const toastId = toast.loading("Submitting your message...");
        const form = e.currentTarget;
        const name = form.fullname.value || "";
        const email = form.email.value || "";
        const phone = form.phone.value || "";
        const surname = form.surname.value || "";
        const message = form.message.value || "";
        console.table({ name, email, phone, message, surname });
        try {
            const result = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, comment: message }),
            });
            console.log({ result });
            if (result?.ok) {
                toast.success("Email send successfully. wait for response", {
                    id: toastId,
                });
            } else {
                toast.error("Failed to send email", { id: toastId });
            }
            form.reset();
        } catch (error) {
            console.log("Error sending email:", error);
        }
    }
    return (
        <div className="font-sans mt-24">
            {/* Header Section */}
            <section className="flex max-w-6xl mx-auto flex-col md:flex-row items-center justify-between bg-white">
                <div className="bg-[#0A2540] md:min-h-[300px] text-white px-6 py-10 w-full md:w-1/2 text-center md:text-left">
                    <div className=' mb-6'>
                        <span className='w-20 h-[1px] bg-white block mb-1'></span>
                        <h1 className='text-3xl md:text-4xl font-medium text-left'>Contact</h1>
                    </div>
                </div>
                <div className="w-full md:w-1/2 min-h-[350px] md:min-h-[500px] relative">
                    <Image src={img} alt="Office" fill className="object-cover" />
                </div>
            </section>


            <section className="max-w-5xl mb-8 mx-auto ">
                <section className="max-w-3xl   grid grid-cols-1 sm:grid-cols-2 gap-8 py-10 text-sm text-gray-700">
                    {addressData.map((address, index) => (
                        <div key={index}>
                            <TextWithBorder text={address.title} />
                            <div className='space-y-2'>
                                {address?.lines.map((line, index) => (
                                    <p key={index} className="text-lg text-gray-600">{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </section>

            {/* Contact Form */}
            <section className="bg-[#0A2540] text-white px-6 md:px-20 py-12">
                <div className='max-w-5xl mx-auto'>

                    <TextWithBorder text="Get in Touch" />
                    <form onSubmit={handleSubmit} className=" grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            name="fullname"
                            className="p-2 bg-white text-black placeholder-gray-500 focus:outline-none"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required
                            className="p-2 bg-white text-black placeholder-gray-500 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Surname"
                            name="surname"

                            className="p-2 bg-white text-black placeholder-gray-500 focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            className="p-2 bg-white text-black placeholder-gray-500 focus:outline-none"
                        />
                        <textarea
                            placeholder="Message"
                            rows={4}
                            name="message"
                            required
                            className="md:col-span-2 p-2 bg-white text-black placeholder-gray-500 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="border border-white px-6 py-2 mt-2 hover:bg-white rounded-full cursor-pointer hover:text-black transition-all duration-300 w-max"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
