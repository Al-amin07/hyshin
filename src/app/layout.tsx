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
  title: "Create Next App",
  description: "Generated by create next app",
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
