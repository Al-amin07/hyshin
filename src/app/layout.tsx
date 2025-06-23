import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
// import { playDisplay } from "@/components/fonts";
import AnimationProvider from "@/Provider/AnimationProvider";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


import { Toaster } from 'sonner';
export const metadata: Metadata = {
  title: {
    default: 'Nylon Yarn Supplier | Premium & Recycled Yarns',
    template: '%s | Hun Hsin Textile',
  },
  description:
    'Leading supplier of premium 100% Nylon Yarn, Recycled Nylon Yarn, and China Feather Yarn for various textile industries.',
  keywords: [
    '100% Nylon Yarn',
    'Nylon Yarn Supplier',
    'Recycled Nylon Yarn',
    'Eco-friendly Nylon Yarn',
    'China Feather Yarn',
    'Feather Yarn Supplier',
    'Premium Nylon Yarn',
    'Durable Nylon Yarn',
    'Sustainable Yarn Supplier',
    'Textile Yarn Manufacturer',
    'Bulk Nylon Yarn',
    'Nylon Yarn Exporter',
    'Recycled Yarn for Textiles',
    'Soft Feather Yarn',
    'Industrial Nylon Yarn',
    'Knitting Yarn Supplier',
    'Weaving Nylon Yarn',
    'Nylon Yarn for Apparel',
    'Yarn for Textile Industry',
    'Feather Yarn for Sweaters',
    'Custom Nylon Yarn',
    'Low-Melt Nylon Yarn',
    'High Tenacity Nylon Yarn',
    'Recycled Polyamide Yarn',
    'OEM Nylon Yarn Supplier',
    'Bulk Yarn Supplier',
    'Sustainable Textile Materials',
    'Nylon Yarn Rolls',
    'Feather Yarn for Fashion',
    'Eco Yarn Manufacturer',
    'Textile Yarn Export',
    'Nylon Yarn for Sportswear',
    'Anti-Static Nylon Yarn',
    'Recycled Yarn Wholesale',
    'Soft Yarn for Winter Wear',
    'High Quality Nylon Yarn',
    'Yarn for Hosiery',
    'China Nylon Yarn Exporter',
    'Feather Yarn Manufacturer',
    'Recycled Yarn for Circular Fashion',
    'Custom Dyed Nylon Yarn',
    'Nylon Yarn Factory',
    'Feather Yarn for Scarves',
    'Sustainable Yarn Solutions',
    'Textile Yarn Bulk Order',
    'Durable Yarn for Knitting',
    'Nylon Yarn for Industrial Use',
    'Recycled Yarn for Apparel',
    'Eco-Friendly Textile Yarn',
    'Premium Yarn Supplier China',
    'High Strength Nylon Yarn',
    'Soft Yarn for Home Textiles',
    'Nylon Yarn for Fashion Apparel',
    '100% Nylon Yarn for textile manufacturers',
    'Buy recycled nylon yarn in bulk',
    'China feather yarn wholesale supplier',
    'Durable nylon yarn for weaving and knitting',
    'Eco-friendly recycled nylon yarn',
    'Soft feather yarn for winter garments',
    'Nylon filament yarn for industrial use',
    'High tenacity nylon yarn supplier',
    'Sustainable yarn for apparel production',
    'Custom dyed nylon yarn manufacturer',
    'Feather yarn for scarves and sweaters',
    'Bulk nylon yarn for knitting machines',
    'Low melt nylon yarn for home textiles',
    'Anti-static nylon yarn for sportswear',
    'Recycled polyamide yarn supplier',
    'OEM recycled yarn for eco brands',
    'Premium quality yarns from China',
    'Nylon yarn rolls for hosiery production',
    'Feather yarn for luxury fashion fabrics',
    'Recycled nylon yarn for circular fashion',
    'Nylon Yarn Supplier Bangladesh',
    'Recycled Nylon Yarn Bangladesh',
    'Textile Yarn Manufacturer Bangladesh',
    'Wholesale Nylon Yarn Bangladesh',
    'Feather Yarn Bangladesh',
    'Eco-friendly Yarn Bangladesh',
    'Sustainable Yarn Bangladesh',
    'Bulk Yarn Supplier Bangladesh',
    'Custom Nylon Yarn Bangladesh',
    'Nylon Yarn Exporter Bangladesh',
    'China Nylon Yarn Supplier',
    'Wholesale Nylon Yarn China',
    'Recycled Nylon Yarn China',
    'Feather Yarn Manufacturer China',
    'China Textile Yarn Exporter',
    'Premium Nylon Yarn China',
    'Eco-friendly Yarn China',
    'Bulk Nylon Yarn China',
    'Sustainable Yarn China',
    'China Yarn Factory',
    'Nylon Yarn Supplier Europe',
    'Recycled Nylon Yarn Europe',
    'Textile Yarn Manufacturer Europe',
    'Wholesale Nylon Yarn Europe',
    'Sustainable Yarn Europe',
    'Feather Yarn Supplier Europe',
    'Eco-friendly Yarn Europe',
    'Bulk Nylon Yarn Europe',
    'Custom Nylon Yarn Europe',
    'Premium Yarn Europe',
    'Nylon Yarn Supplier USA',
    'Buy Nylon Yarn in USA',
    'Recycled Nylon Yarn USA',
    'Textile Yarn Manufacturer USA',
    'Wholesale Nylon Yarn USA',
    'Sustainable Yarn USA',
    'Feather Yarn Supplier USA',
    'Industrial Nylon Yarn USA',
    'Custom Nylon Yarn USA',
    'Eco-friendly Yarn USA',
    'Bulk Nylon Yarn USA',
    'Premium Yarn USA',

  ],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        <AnimationProvider>
          <Navbar />
          <div className='dark:bg-white dark:text-black min-h-screen mb-24  md:px-0  mx-auto '>
            {children}
          </div>
          <Footer />
          <Toaster position="top-center" richColors />
        </AnimationProvider>

      </body>
    </html>
  );
}
