import React from 'react'
import Image from 'next/image'

const Tools = () => {
  return (
    <div className='font-jost mt-6'>
        <div className='md:text-center m-3.5 '>
            <h1 className='md:text-2xl text-center font-semibold text-[17px]'>Our <span className='text-rose-600'>Tools</span></h1>
            <p className='md:w-xl  md:ml-93 md:mt-3.5 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, quis eaque alias rerum illo cum inventore fugiat error mollitia totam, facilis reiciendis consequuntur dicta rem impedit aperiam iusto debitis facere.</p>
        </div>
        <div className='bg-gray-200 mt-8'>
     
        <div className='grid md:grid-cols-3 md:p-8 md:ml-25 place-items-center'>
  {/* 1 */}
   <div>
<Image src="/images/pricelabs.png" width={300} height={120} alt="" className=''/>
</div>
{/* 2 */}
<div className='mb-8.5'>
<Image src="/images/wheel.png" width={250} height={120} alt="" className=''/>
</div>
{/* 3 */}
<div className=' mb-8.5' >
<Image src="/images/beyond.png" width={250} height={120} alt="" className=''/>
</div>
{/* 4 */}
<div className=' mb-8.5'>
<Image src="/images/hostfully.png" width={250} height={120} alt="" className=''/>
</div>
{/* 5 */}
<div className=' mb-8.5' >
<Image src="/images/guesty.png" width={250} height={120} alt="" className=''/>
</div>
{/* 6 */}
<div className=' mb-8.5 '>
<Image src="/images/lodgify.png" width={250} height={120} alt="" className=''/>
</div>
{/* 7 */}
<div  className=' mb-8.5 '>
<Image src="/images/hostfully.png" width={250} height={120} alt="" className=''/>
</div>
{/* 8 */}
<div className=' mb-8.5 '>
<Image src="/images/guesty.png" width={250} height={120} alt="" className=''/>
</div>
{/* 9 */}
<div className=' mb-8.5'>
<Image src="/images/lodgify.png" width={250} height={120} alt="" className=''/>
</div>
</div>


        </div>
    </div>
  )
}

export default Tools