import React from "react";
import c1 from "@/assets/certificate/C1.png";
import c2 from "@/assets/certificate/C2.png";
import c3 from "@/assets/certificate/C3.png";
import c4 from "@/assets/certificate/C4.png";
import Image from "next/image";
const CertificationSection = () => {
  const certifications = [

    {
      name: "amfori BSCI",
      logo: c1,
      alt: "amfori BSCI logo",
      description: "Trade with purpose",
    },
    {
      name: "OEKO-TEX®",
      logo: c2,
      alt: "OEKO-TEX® logo",
      description: "",
    },
    {
      name: "Global Recycled Standard",
      logo: c3,
      alt: "Global Recycled Standard logo",
      description: "",
    },
    {
      name: "Sedex",
      logo: c4,
      alt: "Sedex logo",
      description: "",
    },

  ];

  return (
    <section className="w-full  font-inter">
      {/* Header Section */}
      <div className="bg-[#3399CC] py-20 text-center shadow-md">
        <h2 className="text-5xl font-bold text-white tracking-wide">
          Certifications
        </h2>
      </div>

      {/* Logos Section */}
      <div className=" py-12 px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer p-4 shadow-lg shadow-gray-300 rounded-md flex items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={cert.logo}
                alt={cert.alt}
                className="max-w-full max-h-full object-contain rounded-md"
                width={450}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
