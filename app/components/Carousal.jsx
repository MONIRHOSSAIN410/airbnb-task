"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const images = [
  { id: 1, src: '/images/agoda.svg' },
  { id: 2, src: '/images/airbnb.svg' },
  { id: 3, src: '/images/booking.svg' },
  { id: 4, src: '/images/experida.svg' },
  { id: 5, src: '/images/home.svg' },
  { id: 6, src: '/images/tripe.svg' },
  { id: 7, src: '/images/vrbo.svg' },
]

// Duplicate the array to ensure a seamless infinite loop
const duplicatedImages = [...images, ...images];

const Carousal = () => {
  return (
<div>
     <h1 className="text-center mb-8 text-xl font-bold font-jost px-4">
        Trusted by leaders in 50+ industries
      </h1>
    <div className="py-5 overflow-hidden bg-gray-300">
     

      {/* Main Container */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex flex-none gap-8 md:gap-20"
          animate={{
            x: ["0%", "-50%"], // Move half the width (the first set of images)
          }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((img, idx) => (
            <div key={idx} className="flex-none w-30 md:w-50 h-20 relative">
              <Image
                src={img.src}
                alt="Partner Logo"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
    </div>
  )
}

export default Carousal;