import React from 'react'
import {MoveRight} from 'lucide-react'
import Image from 'next/image'


const Hero = () => {
  return (
    <div className='items-center  md:p-0 md:m-10  '>
       <div className='place-items-center mt-30 space-y-4 font-jost'>
        <h1 className='text-5xl font-bold'>Airbnb Assistants For</h1>
        <h2 className='text-3xl font-semibold'>Property Management</h2>
        <p className='text-center   md:w-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis hic delectus, eos nulla dolores repellendus. Quam mollitia at dolorem ipsam totam quibusdam, in corporis explicabo consequatur reiciendis, molestiae sed aspernatur!in corporis explicabo consequatur reiciendis, molestiae sed aspernatur! </p>
        <button className='bg-rose-600 hover:bg-rose-500 mb-3.5 p-2.5 mt-10 text-white rounded  block flex'>Schedule A Meeting <MoveRight className='ml-1.5 w-4' /> </button>
        <p className=' mt-10 md:p-0 underline'>See Pricing</p>
        <div>
       
      </div>
        
       </div>
        
    </div>
  )
}

export default Hero;