"use client"
import React from 'react'
import  {motion} from 'framer-motion'
import Image from 'next/image';




const images=[{
    id:1,
    src:'/images/agoda.svg'
},
{
    id:1,
    src:'/images/airbnb.svg'
},
{
    id:1,
    src:'/images/booking.svg'
},
{
    id:1,
    src:'/images/experida.svg'
},
{
    id:1,
    src:'/images/home.svg'
},
{
    id:1,
    src:'/images/tripe.svg'
},
{
    id:1,
    src:'/images/vrbo.svg'
},
]

const duplicatedImages=[...images ];

const Carousal = () => {

    

  return (
    <div>

         <h1 className=' p-2.5  md:p-0 md:ml-130  mb-2.5 text-xl font-bold font-jost'>Trusted by leaders in 50+ industries</h1> 
        <div className='md:flex  items-center   justify-center gap-25 p-2 bg-gray-300'>
          
            
            {
               duplicatedImages.map((img,idx)=>(
                    <div key={idx} className=''>
<motion.div
 animate={{
            x:['0%',"-100%"],
            transition:{
                ease:"linear",
                duration:15,
                repeat:Infinity
            }
        }}

>
<Image 

 
src={img.src} alt="" width={250} height={80} className='flex'/>
                    </motion.div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Carousal;

