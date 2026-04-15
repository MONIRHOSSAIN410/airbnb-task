import React from 'react'
import Image from 'next/image';
import {Check,X} from 'lucide-react'

const Airnbn = () => {
  return (
    <div className='font-jost'>
        <div className='place-items-center'>
            <h1 className='items-center text-3xl'>Airnbn Assistent <span className='text-rose-600 '>pricing</span></h1>
            <p className='text-xl'>Choose a plan that's right for you</p>
       
   <div className='md:flex gap-8 '>
       <div>
       <h2 className='md:ml-45'>Pay Monthly Pay

         <span>Yearly</span></h2>
         </div>
       <Image src="/images/save.png" height={60} width={150} alt="" className='text-2xl'/>
       </div>
        </div>
      {/* first plate */}
      <div className='md:flex md:ml-16  m-5  gap-6 md:flex-2 items-center justify-center mt-10 '>
        <div className='space-y-6 px-5  pt-8 md:w-88 md:h-150 border-2 border-rose-300 rounded'>
          <span className='text-2xl font-bold '>Freeble</span>
          <p className='text-gray-500'>ideal for individuals who need quick access to basic features</p>
          <h3 className='text-3xl'>$0 <span className='text-sm text-gray-600'>/Month</span></h3>
          <h1 className='md:w-70 md:h-10 border-2 pl-22 pt-1.5 text-rose-600 rounded border-rose-700'>Get Started Now</h1>
          <ul className='space-y-3 pt-6'>
            <div className='flex items-center'>
            <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' /> <li>20000+ of PNG & SVG graphics</li>
            </div>
              <div className='flex items-center'>
           <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' /> <li>Access to 100 million stock images</li>
            </div>
<div className='flex items-center' >
            <X className='w-4.5 h-4.5 border p-1 rounded-4xl bg-gray-100 mr-1.5' /> <li className='text-gray-400'>Upload custom icons and fonts</li>
            </div>

<div className='flex items-center' >
           <X className='w-4.5 h-4.5 border p-1 rounded-4xl bg-gray-100 mr-1.5' /> <li className='text-gray-400'>Unlimited Sharing</li>

</div>
<div className='flex items-center' >
            <X className='w-4.5 h-4.5 border p-1 rounded-4xl bg-gray-100 mr-1.5' /> <li className='text-gray-400'>Upload graphics & video in up to 4k</li>
            </div>
            <div className='flex items-center' >
            <X className='w-4.5 h-4.5 border p-1 rounded-4xl bg-gray-100 mr-1.5' /> <li className='text-gray-400'>Unlimited Projects</li>
            </div>
<div className='flex items-center' >
           <X className='w-4.5 h-4.5 border p-1 rounded-4xl bg-gray-100 mr-1.5' />  <li className='text-gray-400'>instant Access to our design system</li>
            </div>
            <div className='flex items-center' >
            <X className='w-4.5 h-4.5 border p-1 rounded-4xl bg-gray-100 mr-1.5' /> <li className='text-gray-400'>Create teams to collaborate on designs</li>
            </div>
          </ul>
        </div>
        {/* finished  */}
        {/* Second  */}
              <div className='space-y-6 px-5 mb-3.5 mt-3.5  bg-[#ED3C6A] pt-8 md:w-88  md:h-150 border-2 border-white rounded'>
          <span className='text-2xl font-bold text-white '>Professional</span>
          <p className=' text-white'>ideal for individuals who need quick access to basic features</p>
          <h3 className='text-3xl text-white'>$25 <span className='text-sm text-white '>/Month</span></h3>
          <h1 className='md:w-70 md:h-10 border-2 pl-22 pt-1.5 rounded border-white text-white'>Get Started Now</h1>
          <ul className='space-y-3 pt-6 text-white'>
            <div className='flex items-center'>
            <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' /> <li>20000+ of PNG & SVG graphics</li>
            </div>
              <div className='flex items-center'>
           <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' /> <li>Access to 100 million stock images</li>
            </div>
<div className='flex items-center' >
             <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' />  <li className='text-gray-400'>Upload custom icons and fonts</li>
            </div>

<div className='flex items-center' >
            <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' />  <li className='text-gray-400'>Unlimited Sharing</li>

</div>
<div className='flex items-center' >
            <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' />  <li className='text-gray-400'>Upload graphics & video in up to 4k</li>
            </div>
            <div className='flex items-center' >
             <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' />  <li className='text-gray-400'>Unlimited Projects</li>
            </div>
<div className='flex items-center' >
            <X className='w-4.5 h-4.5 border p-1 rounded-4xl bg-gray-100 mr-1.5' />  <li className='text-gray-400'>instant Access to our design system</li>
            </div>
            <div className='flex items-center' >
            <X className='w-4.5 h-4.5 border p-1 rounded-4xl bg-gray-100 mr-1.5' /> <li className='text-gray-400'>Create teams to collaborate on designs</li>
            </div>
          </ul>
        </div>

{/* second finished */}
{/* thired  */}
              <div className='space-y-6  pt-8 md:w-88 px-5  md:h-150 border-2 border-rose-300 rounded'>
          <span className='text-2xl font-bold '>Enterprise</span>
          <p className='text-gray-500'>ideal for individuals who need quick access to basic features</p>
          <h3 className='text-3xl'>$100<span className='text-sm text-gray-600'>/Month</span></h3>
          <h1 className='md:w-70 md:h-10 border-2 pl-22 pt-1.5 text-rose-600 rounded border-rose-700'>Get Started Now</h1>
          <ul className='space-y-3 pt-6'>
            <div className='flex items-center'>
            <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' /> <li>20000+ of PNG & SVG graphics</li>
            </div>
              <div className='flex items-center'>
           <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' /> <li>Access to 100 million stock images</li>
            </div>
<div className='flex items-center' >
             <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' />  <li className='text-gray-400'>Upload custom icons and fonts</li>
            </div>

<div className='flex items-center' >
            <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' />  <li className='text-gray-400'>Unlimited Sharing</li>

</div>
<div className='flex items-center' >
             <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' />  <li className='text-gray-400'>Upload graphics & video in up to 4k</li>
            </div>
            <div className='flex items-center' >
             <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' />  <li className='text-gray-400'>Unlimited Projects</li>
            </div>
<div className='flex items-center' >
            <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' />   <li className='text-gray-400'>instant Access to our design system</li>
            </div>
            <div className='flex items-center' >
             <Check className='w-4.5 h-4.5 border p-1 rounded-4xl bg-rose-300 mr-1.5' />  <li className='text-gray-400'>Create teams to collaborate on designs</li>
            </div>
          </ul>
        </div>
        {/* thired finished */}
        </div>
    </div>
  )
}

export default Airnbn;