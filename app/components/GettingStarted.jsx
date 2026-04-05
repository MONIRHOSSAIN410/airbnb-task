import React from 'react'
import Image from 'next/image';

const GettingStarted = () => {
  return (
    <div className='m-12 ml-13 font-jost'>
         <div className='place-items-center'>
            <h1 className='md:text-2xl font-semibold'>Getting Started is <span className='text-rose-600'>Easy</span></h1>
            <p className='md:w-2xl md:ml-7 md:mt-3.5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, quis eaque alias rerum illo cum inventore fugiat error mollitia totam, facilis reiciendis consequuntur dicta rem impedit .</p>
        </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 md:ml-55 mt-8'>
     {/* first column */}
      <div>
        <Image src="/images/number1.png" width={50} height={30} alt='' className='relative top-7 right-7'/>
        <div className='w-50 h-36 border border-[#FDEBF0]'>
       
<Image src="/images/plus.png" width={80} height={60} alt='' className='mx-auto pt-3.5'/>
         
        </div>
       <p className='text-[15px]  font-bold w-48  mt-6'>Add requirements & sign up today</p>
        </div>
        {/* Second column */}
          <div className=''>
        <Image src="/images/number2.png" width={50} height={30} alt='' className='relative top-7 right-7'/>
        <div className='w-50 h-36  border border-[#FDEBF0]'>
       
<Image src="/images/man.png" width={80} height={60} alt='' className='mx-auto pt-3.5'/>
        </div>
         <p className='text-[16px] font-bold w-48  mt-6' >Connect with your CSM & onboarding team</p>
        </div>
         
         {/* thired column */}
          <div>
        <Image src="/images/number3.png" width={50} height={30} alt='' className='relative top-7 right-7'/>
        <div className='w-50 h-36  border border-[#FDEBF0]'>
       
<Image src="/images/headphone.png" width={80} height={60} alt='' className='mx-auto pt-3.5'/>
<Image src="/images/plus2.png" width={20} height={10} alt='' className='relative left-22 bottom-10'/>
       
       
        </div>
         <p className='text-[16px]  font-bold w-48  mt-6' >Meet your STR Assistant next week</p>
        </div>

        </div>
    </div>
  )
}

export default GettingStarted;