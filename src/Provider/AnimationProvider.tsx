"use client"
import 'aos/dist/aos.css';
import { ReactNode, useEffect } from 'react';
import AOS from 'aos';


export default function AnimationProvider({children}: {children: ReactNode}) {
      useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div>
        {children}
    </div>
  )
}

