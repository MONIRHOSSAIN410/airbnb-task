import React from 'react'
import { Check } from "lucide-react"
import Image from 'next/image'

const Reasons = () => {
  return (
    <div className='flex flex-col md:flex-row gap-10 lg:gap-15 p-6 md:p-10 rounded bg-rose-100 m-3.5 md:mx-auto md:max-w-6xl md:mt-20 font-jost overflow-hidden'>
        
        {/* Section 1: Text Content */}
        <div className='w-full md:w-1/2 space-y-5 z-10 mt-12 pt-14'>
          <h1 className='text-3xl md:text-4xl font-bold'>Few Reasons Why you Choose us?</h1>
          <p className='text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit voluptatibus quaerat maxime ullam odit fuga sed? 
          </p>

          <ul className='space-y-4'>
            {["Brilliant Client Service", "Flexibility & Adaptability", "We make it Personal", "We have experts in our team"].map((text, index) => (
              <li key={index} className='flex items-center gap-2'>
                <div className='bg-rose-300 p-1 rounded-full'>
                  <Check className='w-4 h-4 text-white' />
                </div>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2: Image Composition */}
        <div className='w-full md:w-1/2 relative  min-h-100 md:min-h-125'>
          <div className='relative w-full h-full pt-108'>
            
            {/* Background Circle */}
            <div className='absolute top-39.5 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 w-full max-w-[350px] md:max-w-[450px]'>
              <Image src="/images/circle.png" width={450} height={450} alt="" className='object-contain' priority />
            </div>

            {/* Floating Images - Adjusted to be responsive using percentages or smaller rem values */}
            <Image src="/images/four.png" width={150} height={100} alt="" 
              className='absolute z-20 top-10 pt-15 right-0 md:right-10 w-24 md:w-48' />
            
            <Image src="/images/night.png" width={150} height={100} alt="" 
              className='absolute z-30 top-40 left-0 w-24 md:w-48' />

            <Image src="/images/calender2.png" width={200} height={100} alt="" 
              className='absolute  z-40 bottom-10 left-2.5 w-32 md:w-56' />

            <Image src="/images/manoffice.png" width={200} height={300} alt="" 
              className='absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 md:w-64' />

          </div>
        </div>
    </div>
  )
}

export default Reasons;