"use client";  

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from './SearchBar';


const images=[

    '/images/Hero-1.webp',
    '/images/Hero-2.webp',
    '/images/Hero-3.jpg',
    '/images/Hero-4.jpg',

]

const duration = 5000;

const HomeHero = () => {

    const [current, setCurrent] = useState(0)

    useEffect(()=>{
        const timer = setTimeout(() => {

            setCurrent((prev)=> (prev+1) %images.length)
            
        }, duration);

        return ()=> clearTimeout(timer)

    },[current]);


  return (
    <div className="">
        

         <div className="relative max-w-[1360px] mx-auto h-[500px] overflow-hidden flex justify-between shadow-xl p-4 rounded-3xl bg-black  mt-8">
      <AnimatePresence>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt="Background Slide"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 5 }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      {/* Your hero content here */}
       <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

       
      <div className="relative z-10 text-white p-8 flex justify-center items-center flex-col mx-auto">
        <h1 className="text-4xl   ">Waves, Wanderlust & Wild Green Dreams</h1>
        <p className="mt-2 text-lg text-gray-300">Kerala invites you to slow down, breathe deeply, and explore its timeless beauty. </p>
        <SearchBar/>
      </div>
    </div>
    
    </div>
  );
};

export default HomeHero;
