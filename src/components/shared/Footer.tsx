"use client";
import { products } from "@/constant/data";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { toast } from "sonner";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/", label: "Product" },
    { href: "/process", label: " Process" },
    // { href: "/blog", label: "BLOG" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Submitting your message...");
    const form = e.currentTarget;
    const name = form.fullname.value || "";
    const email = form.email.value || "";
    // const phone = form.phone.value || "";
    // const surname = form.surname.value || "";
    const message = form.message.value || "";
    console.table({ name, email, message });

    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, comment: message }),
      });
      console.log({ result });
      if (result?.ok) {
        toast.success("Email send successfully. wait for response", {
          id: toastId,
        });
      } else {
        toast.error("Failed to send email", { id: toastId });
      }

    } catch (error) {
      console.log("Error sending email:", error);
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <footer className="bg-black/90 text-white  py-8 md:py-16 px-8 md:px-10 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between border-b border-gray-700  mb-8">
        <div className="w-full lg:w-2/3 mx-auto pb-10">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5  ">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl uppercase font-semibold mb-4 ">
                Headquarter
              </h3>
              <p className="text-base leading-relaxed  mb-2">
                House No. 04, Road No. 12, <br /> Sector 04, Uttara Model Town,{" "}
                <br /> Dhaka, Bangladesh.
              </p>
              <p className="text-base mb-2">+880 1911-247183 </p>
              <p className="text-base mb-4">info.hunhsintextile@gmail.com</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl uppercase font-semibold mb-4">
                Quick Link
              </h3>
              <ul className="space-y-2 capitalize ">
                {navLinks.map((link, index) => (
                  <li key={index} className="capitalize">
                    <Link
                      className="hover:underline capitalize"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-2xl uppercase font-semibold mb-4">Product</h3>
              <ul className="space-y-2 ">
                {products.map((el) => (
                  <li key={el.id} className="hover:underline">
                    <Link href={`/product/${el.id}`}>{el.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="lg:w-1/3 lg:pl-8 pb-5 lg:border-l border-gray-700 ">
          <h2 className="text-2xl uppercase font-bold mb-4 leading-tight">
            Consult Us
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="NAME*"
                required
                name="fullname"
                className="w-1/2 p-2 bg-transparent border border-white text-sm placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="E-MAIL*"
                required
                className="w-1/2 p-2 bg-transparent border border-white text-sm placeholder-gray-400"
              />
            </div>
            <div className="relative">
              <textarea
                rows={3}
                placeholder="MESSAGE*"
                name="message"
                required
                className="w-full p-2 bg-transparent border border-white text-sm placeholder-gray-400"
              />
              <button
                disabled={loading}
                type="submit"
                className="absolute cursor-pointer top-0 right-0 h-[77px] px-4 bg-white hover:bg-gray-200 text-black flex items-center justify-center"
              >
                →
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center lg:justify-start gap-4 text-white pr-6">
            <span className="font-bold text-2xl">Follow Us : </span>
            <FaFacebookF className="text-4xl transition-all duration-500 cursor-pointer bg-blue-500  p-1 rounded-full" />
            {/* <FaTwitter className='text-4xl transition-all duration-500 cursor-pointer hover:bg-white hover:text-black p-1 rounded-full' />
                        <FaInstagram className='text-4xl transition-all duration-500 cursor-pointer hover:bg-white hover:text-black p-1 rounded-full' /> */}
            <FaLinkedinIn className="text-4xl transition-all duration-500 cursor-pointer bg-[#0A66C2] p-1 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6  text-sm md:text-base text-white">
        <p className="text-2xl font-semibold">
          Hun Hsin Textile Co., (BD) Ltd.
        </p>
        <p>Leading Exporter of Premium Nylon Yarns</p>
        <p>
          © 2008 – 2025 Hun Hsin Textile Co., (BD) Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
