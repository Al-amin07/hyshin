import { StaticImageData } from "next/image";
import img1 from "@/assets/nylon/one.webp";
import img2 from "@/assets/nylon/two.webp";
import img3 from "@/assets/nylon/33.jpg";

import nylonimg1 from "@/assets/nylon/1.jpg";
import nylonimg2 from "@/assets/nylon/2.jpg";
type Product = {
  id: number;
  title: string;
  specifications?: { name: string; desc: string }[];
  keyFeatures?: string[];
  applications?: string[];
  short: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  image1?: string | StaticImageData;
  image2?: string | StaticImageData;
  image: string | StaticImageData;
  link: string;
  conc?: {
    title: string;
    desc: string;
  };
};
export const products: Product[] = [
  {
    id: 1,
    title: "100% Nylon Yarn",
    short: "Virgin Strength. Sweater-Ready Softness.",
    desc1:
      "100% Nylon Yarn is the foundation of premium sweater knitting. Crafted from virgin nylon, it provides a soft hand feel, reliable elasticity, and strong color absorption making it ideal for solid-colored, textured, or blended sweaters.",
    desc2:
      "Known for its high durability and abrasion resistance, this yarn ensures long-lasting wear and perfect form retention. Whether for fine gauge or chunky knits, it's trusted by global sweater brands seeking consistency, comfort, and scalable supply.",
    desc3:
      "Hun Hsin Textile’s 100% Nylon Yarn is engineered from virgin polyamide 6 or 6.6 chips, processed using advanced dyeing and spinning technology.",
    desc4:
      "It offers outstanding strength, durability, and elasticity, making it ideal for premium activewear, socks, underwear, seamless knits, and industrial applications. Its smooth finish and color vibrancy make it one of the most demanded synthetic yarns for modern textile manufacturing. ",
    image: img1,
    image1: nylonimg1,
    image2: nylonimg2,
    keyFeatures: [
      "Virgin-grade nylon chips ensure consistent output",
      "High strength & stretch for long-lasting garments",
      "Excellent dyeability ideal for fashion-forward brands",
      "Low pilling, abrasion-resistant",
      "Scalable MOQ from 1kg sample to 1000kg+ bulk",
      "Anti-static, anti-microbial (on request)",
    ],
    applications: [
      "Socks & Stockings",
      "Women’s Lingerie & Seamless Wear",
      "Compression Wear",
      "Outdoor Apparel",
      "Industrial Netting, Parachutes, Tents",
      "Automotive & Tech-Textile Components",
    ],
    specifications: [
      {
        name: "Denier/Filament Options",
        desc: "20D/1, 40D/2, 50D/2, 70D/1, 70D/2, 80D/1",
      },
      {
        name: "Yarn Types",
        desc: "FDY, DTY, ATY, POY ",
      },
      {
        name: "Luster Types",
        desc: "Semi-dull, Bright, Full-dull (customizable) ",
      },
      {
        name: "Color Options",
        desc: "Raw white or dyed to Pantone/custom shades ",
      },
      {
        name: "Strength",
        desc: "High tenacity, low elongation rate ",
      },
      {
        name: "Moisture Management",
        desc: "Excellent wicking & drying ",
      },
    ],
    link: "/nylon-yarn",
    conc: {
      title: "Why It Matters to You",
      desc: "If you’re looking for a dependable supply of virgin nylon yarn with strict quality standards and flexible customizations, Hun Hsin is your global sourcing partner. Backed by OEKO-TEX® and REACH compliance, our yarns are suitable for EU/US markets. ",
    },
  },
  {
    id: 2,
    title: "Recycled Nylon Yarn",
    short: "Circular Innovation for Sweater Fashion.",
    desc1:
      "Recycled Nylon Yarn is designed for sweater manufacturers who want to embrace sustainability without sacrificing quality. Produced from regenerated materials such as post-industrial waste and recovered fishing nets, this yarn combines environmental responsibility with sweater-friendly performance.",
    desc2:
      "Engineered for softness, warmth, and stretch, it blends seamlessly into modern knitwear from cozy pullovers to fashion-forward layering pieces. Ideal for brands aiming to align with circular fashion trends, our recycled nylon delivers style, comfort, and a cleaner footprint.",
    desc3:
      "Hun Hsin Textile’s 100% Nylon Yarn is engineered from virgin polyamide 6 or 6.6 chips, processed using advanced dyeing and spinning technology.",
    desc4:
      "It offers outstanding strength, durability, and elasticity, making it ideal for premium activewear, socks, underwear, seamless knits, and industrial applications. Its smooth finish and color vibrancy make it one of the most demanded synthetic yarns for modern textile manufacturing. ",
    image: img2,
    image1: nylonimg1,
    image2: nylonimg2,
    keyFeatures: [
      "Virgin-grade nylon chips ensure consistent output",
      "High strength & stretch for long-lasting garments",
      "Excellent dyeability ideal for fashion-forward brands",
      "Low pilling, abrasion-resistant",
      "Scalable MOQ from 1kg sample to 1000kg+ bulk",
      "Anti-static, anti-microbial (on request)",
    ],
    applications: [
      "Socks & Stockings",
      "Women’s Lingerie & Seamless Wear",
      "Compression Wear",
      "Outdoor Apparel",
      "Industrial Netting, Parachutes, Tents",
      "Automotive & Tech-Textile Components",
    ],
    specifications: [
      {
        name: "Composition",
        desc: "100% Nylon",
      },
      {
        name: "Count",
        desc: "70D/2 & 100D/2",
      },
      {
        name: "Color",
        desc: "As per buyer requirement",
      },
      {
        name: "Certification",
        desc: "Oeko-Tex Standard 100",
      },
    ],
    link: "/nylon-yarn",
    conc: {
      title: "Why It Matters to You",
      desc: "If you’re looking for a dependable supply of virgin nylon yarn with strict quality standards and flexible customizations, Hun Hsin is your global sourcing partner. Backed by OEKO-TEX® and REACH compliance, our yarns are suitable for EU/US markets. ",
    },
  },
  {
    id: 3,
    title: "China Feather Yarn",
    short: "Plush Texture. Perfect for Statement Sweaters.",
    desc1:
      "China Feather Yarn brings volume and tactile richness to fashion sweaters and winter collections. Crafted with synthetic blends and engineered to mimic feather softness, it delivers both structure and softness in each loop.",
    desc2:
      "Ideal for cardigans, oversized knits, trims, and cozy layering pieces, this specialty yarn turns everyday sweaters into standout garments. Easy to knit, dye, and style; Feather Yarn by Hun Hsin is where comfort meets runway-ready texture. ",
    desc3:
      "Hun Hsin Textile’s 100% Nylon Yarn is engineered from virgin polyamide 6 or 6.6 chips, processed using advanced dyeing and spinning technology.",
    desc4:
      "It offers outstanding strength, durability, and elasticity, making it ideal for premium activewear, socks, underwear, seamless knits, and industrial applications. Its smooth finish and color vibrancy make it one of the most demanded synthetic yarns for modern textile manufacturing. ",
    image: img3,
    keyFeatures: [
      "Virgin-grade nylon chips ensure consistent output",
      "High strength & stretch for long-lasting garments",
      "Excellent dyeability ideal for fashion-forward brands",
      "Low pilling, abrasion-resistant",
      "Scalable MOQ from 1kg sample to 1000kg+ bulk",
      "Anti-static, anti-microbial (on request)",
    ],
    applications: [
      "Socks & Stockings",
      "Women’s Lingerie & Seamless Wear",
      "Compression Wear",
      "Outdoor Apparel",
      "Industrial Netting, Parachutes, Tents",
      "Automotive & Tech-Textile Components",
    ],
    specifications: [
      {
        name: "Composition",
        desc: "100% Nylon",
      },
      {
        name: "Count",
        desc: "70D/2 & 100D/2",
      },
      {
        name: "Color",
        desc: "As per buyer requirement",
      },
      {
        name: "Certification",
        desc: "Oeko-Tex Standard 100",
      },
    ],
    image1: nylonimg1,
    image2: nylonimg2,
    link: "/nylon-yarn",
    conc: {
      title: "Why It Matters to You",
      desc: "If you’re looking for a dependable supply of virgin nylon yarn with strict quality standards and flexible customizations, Hun Hsin is your global sourcing partner. Backed by OEKO-TEX® and REACH compliance, our yarns are suitable for EU/US markets. ",
    },
  },
];
