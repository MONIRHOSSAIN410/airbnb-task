import React from 'react'
import {Plus} from 'lucide-react'

const Frequently = () => {
  return (
    <div className='md:m-10  bg-[#F9FAFB] font-jost'>
      <div className='p-8'>
      {/* title stared */}
      <div className='place-items-center md:ml-8.5'>
        <h1 className='text-3xl font-bold '>Frequently asked <span className='text-[#ED3C6A]'>questions</span></h1>
        <h2 className='font-semibold mt-6 text-sm tracking-wider'>Everything you need to know about the product and billing</h2>
      </div>
      {/* title end */}
      {/* stared below topic */}
      <div className='md:place-items-center'>
        <h3 className='font-bold md:mr-105 mt-10'>Is there a free trial available?</h3>
        <p className='md:w-160  mt-5 text-gray-400'>Yes, you can try us for free for 30 days. If you want,we'll provide you with a free personally you with a free,personalized 30- minute onboarding call to get you up and running as soon as possible</p>
<ul className='md:w-160  space-y-3.5  font-bold mt-10'>
  <li className='border-t flex items-center border-[#ED3C6A]  p-2.5 '>Can I change my plan later? <Plus className='text-[#ED3C6A]  w-4 h-4 rounded-full border border-[#ED3C6A] ml-14 md:ml-97' /></li>
  <li className='border-t  flex items-center border-[#ED3C6A] p-2.5'>What is your cancellation policy? <Plus className='text-[#ED3C6A]  w-4 h-4 rounded-full border border-[#ED3C6A] ml-3.5 md:ml-87' /></li>
  <li className='border-t flex items-center border-[#ED3C6A] p-2.5'>Can other info be added to an invoice? <Plus className='text-[#ED3C6A]  w-4 h-4 rounded-full border border-[#ED3C6A] ml-3.5 md:ml-77' /></li> 
  <li className='border-t  flex items-center border-[#ED3C6A] p-2.5'>How does billing work? <Plus className='text-[#ED3C6A]  w-4 h-4 rounded-full border border-[#ED3C6A] ml-22 md:ml-106' /></li>
  <li className='border-t flex items-center border-[#ED3C6A] p-2.5'>How do I change my account email? <Plus className='text-[#ED3C6A]  w-4 h-4 rounded-full border border-[#ED3C6A] md:ml-90' /></li>
</ul>
      </div>
      {/*end below topic */}
      </div>
    </div>
  )
}

export default Frequently