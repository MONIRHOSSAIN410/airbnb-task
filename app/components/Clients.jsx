"use client"
import React from 'react'
import Image from 'next/image';
import {Star} from 'lucide-react';
import {motion} from 'framer-motion'


const Clients = () => {
  return (
    <div className='font-jost ' >
        <div className='md:place-items-center ml-3.5 md:mt-10 md:p-0 space-y-3.5'>
            <h1 className="text-2xl">Check Our Clients <span className='text-rose-600'>Review </span> </h1>
            <p className='md:w-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fugiat? Impedit exercitationem inventore repellat earum modi incidunt soluta fugit ut odit. Suscipit odit itaque expedita magni quisquam </p>
        </div>
        {/* stared carsoual */}
        {/* first  */}
        <div className='md:flex mt-3.5 md:gap-4.5 md:m-8'>
        <div className='md:flex gap-3.5 items-center p-3.5  bg-[#F6F6F6] md:w-115 shadow-2xl  '>
          <div>
            <Image src="/images/grils2.png" width={100} height={100} alt="" className='rounded-full'/>
          </div>
          <div>
          <h1 className='text-2xl font-bold block   mb-3.5'>Jenny Wilson</h1>
<p className='md:w-85  mb-3.5 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum quod a minus sit animi eveniet ipsum </p>
<div className='md:flex flex md:mb-3.5'>
<Star className='text-yellow-500'/>
<Star className='text-yellow-500'/>
<Star className='text-yellow-500'/>
<Star className='text-yellow-500'/>
<Star className='text-yellow-500'/>
</div>
</div>
</div>

 {/* Second */}

<div className='flex gap-3.5 items-center p-3.5  bg-[#FFFFFF] md:w-115 shadow-2xl  '>
          <div>
            <Image src="/images/young.png" width={100} height={100} alt="" className='rounded-full'/>
          </div>
          <div>
          <h1 className='text-2xl font-bold block   mb-3.5'>Esther Howard</h1>
<p className='md:w-85  mb-3.5 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum quod a minus sit animi eveniet ipsum </p>
<div className='flex mb-3.5'>
<Star className='text-yellow-500'/>
<Star className='text-yellow-500'/>
<Star className='text-yellow-500'/>
<Star className='text-yellow-500'/>
<Star className='text-yellow-500'/>
</div>
</div>
</div>

{/* thired */}

<div className='md:flex  mb-3.5 gap-3.5 items-center p-3.5  bg-[#F6F6F6] md:w-115 shadow-2xl  '>
          <div>
            <Image src="/images/girls.png" width={100} height={100} alt="" className='rounded-full'/>
          </div>
          <div>
          <h1 className='text-2xl font-bold block    mb-3.5'>Robert Fox</h1>
<p className='md:w-85  mb-3.5 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum quod a minus sit animi eveniet ipsum </p>
<div className='flex mb-3.5'>
<Star className='text-yellow-500'/>
<Star className='text-yellow-500'/>
<Star className='text-yellow-500'/>
<Star className='text-yellow-500'/>
<Star className='text-yellow-500'/>
</div>
</div>
</div>




        </div> 
        {/* end carsoual */}
        
    </div>
  )
}

export default Clients;
