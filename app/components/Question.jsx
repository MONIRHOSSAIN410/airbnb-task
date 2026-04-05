import React from 'react'
import Image from 'next/image'

const Question = () => {
  return (
    <div>
        <div className='md:place-items-center bg-[#F9FAFB] space-y-7 md:p-5 m-10 font-jost'>
<Image src="/images/three pic.png" width={100} height={80} alt=""/>
<h1 className='text-xl font-bold'>Still have Questions?</h1>
<p className='text-gray-500'>Can't find the answer you're looking for? Please chat to our friendly team</p>
<button className='md:px-6 md:items-center md:py-2.5 rounded bg-[#ED3C6A] hover:bg-rose-500 text-white p-3.5 md:ml-137'>Get in touch</button>
        </div>
    </div>
  )
}

export default Question