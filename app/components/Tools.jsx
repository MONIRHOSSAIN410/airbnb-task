import React from 'react'
import Image from 'next/image'

const Tools = () => {
  return (
    <div className='font-jost mt'>
        <div className='md:text-center m-3.5 '>
            <h1 className='md:text-2xl font-semibold text-[17px]'>Our <span className='text-rose-600'>Tools</span></h1>
            <p className='md:w-xl  md:ml-103 md:mt-3.5 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, quis eaque alias rerum illo cum inventore fugiat error mollitia totam, facilis reiciendis consequuntur dicta rem impedit aperiam iusto debitis facere.</p>
        </div>
        <div className='bg-gray-200 mt-8'>
     
        <div className='grid md:grid-cols-3 md:p-8 md:ml-25'>
  {/* 1 */}
   <div>
<Image src="/images/pricelabs.png" width={300} height={120} alt="" className='mr-30'/>
</div>
{/* 2 */}
<div className='md:mt-6 ml-6.5'>
<Image src="/images/wheel.png" width={250} height={120} alt="" className=''/>
</div>
{/* 3 */}
<div className='md:mt-6 m-6.5 ' >
<Image src="/images/beyond.png" width={250} height={120} alt="" className=''/>
</div>
{/* 4 */}
<div className='md:mb-6 m-6.5 md:ml-6'>
<Image src="/images/hostfully.png" width={250} height={120} alt="" className=''/>
</div>
{/* 5 */}
<div className='md:mb-4 m-6.5 ' >
<Image src="/images/guesty.png" width={250} height={120} alt="" className=''/>
</div>
{/* 6 */}
<div className='md:mb-6 m-6.5'>
<Image src="/images/lodgify.png" width={250} height={120} alt="" className=''/>
</div>
{/* 7 */}
<div  className='md:mb-4 m-6.5 md:ml-6'>
<Image src="/images/hostfully.png" width={250} height={120} alt="" className=''/>
</div>
{/* 8 */}
<div className='md:mb-4 m-6.5 '>
<Image src="/images/guesty.png" width={250} height={120} alt="" className=''/>
</div>
{/* 9 */}
<div className='md:mb-6 m-6.5 '>
<Image src="/images/lodgify.png" width={250} height={120} alt="" className=''/>
</div>
</div>


        </div>
    </div>
  )
}

export default Tools