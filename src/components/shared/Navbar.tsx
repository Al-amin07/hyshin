"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const caps = [
  {
    id: 1,
    name: "100% Nylon Yarn",
    href: "nylon-yarn",
  },
  { id: 2, name: "Recycled Nylon Yarn", href: "nylon-yarn" },
  { id: 3, name: "China  Feather Yarn", href: "nylon-yarn" },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/product", label: "PRODUCT" },
    { href: "/process", label: "PROCESS" },
    // { href: "/blog", label: "BLOG" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 top-0  left-0 w-full transition-all duration-300 border-t-0 ${
        scrolled
          ? "fixed bg-white shadow-lg "
          : "absolute bg-transparent  text-white"
      }`}
    >
      <div className="container px-6 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1
              className={`text-2xl font-semibold ${
                pathname !== "/" && "text-black"
              }`}
            >
              HUN HSIN TEXTILE
            </h1>
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            {/* {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}


                                className={`my-2  ${scrolled || pathname !== '/' ? 'text-black   ' : 'text-white '}   hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
                            >
                                {link.label}
                            </Link>


                        ))} */}
            {navLinks.map((link) => (
              <div
                className={`lg:px-2 group cursor-pointer  lg:py-7 `}
                key={link.href}
              >
                <Link
                  href={link.href}
                  className={`my-2   ${
                    scrolled || pathname !== "/"
                      ? "text-black group-hover:text-blue-600   "
                      : "text-white group-hover:text-orange-500 "
                  } ${
                    isOpen && "text-black"
                  }    dark:hover:text-orange-700 md:mx-4 md:my-0  ${
                    pathname === link.href && "underline underline-offset-[6px]"
                  }`}
                >
                  {link.label}
                </Link>
                <div
                  className={`absolute border  hidden  top-16 lg:top-20 left-[135px] w-[175px] bg-gray-50 text-black/75 shadow-lg ${
                    link.label === "PRODUCT" && "group-hover:flex"
                  }`}
                >
                  <div className="flex flex-col  w-full">
                    {caps.map((cap) => (
                      <div key={cap.id} className=" relative group/item">
                        <Link
                          href={`${`/product/${cap.id}`}`}
                          className="py-2.5  group
                                              px-2 text-base flex items-center justify-between gap-1 w-full text-gray-900 text-center dark:text-gray-200 hover:bg-black hover:text-white transition-all duration-300  dark:hover:bg-slate-400/50  
                                            "
                        >
                          {cap.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="flex justify-center md:block mt-4 md:mt-0">
                        <Link href="#" className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C15.895 17 15 17.895 15 19C15 20.105 15.895 21 17 21C18.105 21 19 20.105 19 19C19 17.895 18.105 17 17 17ZM9 19C9 20.105 8.105 21 7 21C5.895 21 5 20.105 5 19C5 17.895 5.895 17 7 17C8.105 17 9 17.895 9 19Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                        </Link>
                    </div> */}
        </div>
      </div>
    </nav>
  );
}
