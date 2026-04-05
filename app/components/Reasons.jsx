import React from 'react'
import {Check} from "lucide-react"
import Image from 'next/image'

const Reasons = () => {
  return (
    <div className='flex md:flex-row   lg:flex gap-15 p-10 md:mr-23 rounded bg-rose-100 md:ml-30 m-3.5 md:mt-20 font-jost '>
        {/* stared part 1 */}
        <div className='md:w-96 space-y-5 '>
<h1 className='text-4xl font-bold'>Few Reasons Why you Choose us?</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit voluptatibus quaerat maxime ullam odit fuga sed? Minima obcaecati placeat deleniti dolorum.</p>


<ul className='space-y-4'>
   <div className='flex '>
            <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' /> <li>Brilliant Client Service</li>
            </div>
             <div className='flex items-center'>
            <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' /> <li>Flexibility & Adaptibility</li>
            </div>
             <div className='flex items-center'>
            <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' /> <li>We make it Personal</li>
            </div>
             <div className='flex items-center'>
            <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' /> <li>We have expert in our team</li>
            </div>
</ul>
        </div >
        {/* stared section */}
        <div className='md:flex  gap-15'>


<div className= ' absolute '>
 
<Image src="/images/circle.png" width={450} height={100}  alt="" className='relative top-23.5' />
<Image src="/images/four.png" width={200} height={150}  alt="" className='relative z-50 bottom-55 left-80' />
 <Image src="/images/night.png" width={200} height={100}  alt="" className='relative z-50 bottom-96 ' />
  <Image src="/images/calender2.png" width={250} height={100}  alt="" className='relative z-50 bottom-96 right-20' />
   <Image src="/images/manoffice.png" width={250} height={100}  alt="" className='relative z-50 bottom-191 left-20' />

</div>
</div>
        {/* end section */}

    </div>
  )
}

export default Reasons;