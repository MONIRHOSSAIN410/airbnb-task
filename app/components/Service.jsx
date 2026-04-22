import React from 'react'
import Image from 'next/image';

const Service = () => {
  return (
    <div>
        <div className='md:text-center m-7 place-items-center '>
            <h1 className='md:text-2xl  mt-6.5 font-semibold font-jost'>Our <span className='text-rose-600'>Service</span></h1>
            <p className='md:w-2xl md:mt-3.5 md:mb-8 font-jost'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, quis eaque alias rerum illo cum inventore fugiat error mollitia totam, facilis reiciendis consequuntur dicta rem impedit aperiam iusto debitis facere.</p>
        </div>

        <div className='md:grid m-7 md:grid-cols-2 lg:grid-cols-3 md:ml-45'>
        {/* first colum */}
        <div className='md:w-75 shadow-lg   mb-9.5  md:h-90 border p-3.5 space-y-5 font-jost'>
           <Image src="/images/note.png" width={60} height={50} alt=""/> 
           <h2 className='text-2xl font-bold '>Manage Property Listings</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem expedita, quo impedit tempore debitis Lorem.</p>
           <button className='px-8   py-2 text-rose-400 border rounded-3xl border-rose-400'>Read More</button>
        </div>

        {/* second column */}
         <div className='md:w-75  h-90 rounded border border-rose-400 mb-9.5 p-3.5 space-y-5 font-jost'>
           <Image src="/images/clander.png" width={60} height={50} alt=""/> 
           <h2 className='text-2xl font-bold '>Manage Customer
Bookings</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem expedita, quo impedit tempore debitis Lorem.</p>
           <button className='px-8  py-2 text-rose-400 border rounded-3xl border-rose-400'>Read More</button>
        </div>

        {/* thired column */}
         <div className='md:w-75 mb-8 shadow-lg rounded  md:h-90 border border-rose-400 space-y-5  p-3.5 font-jost'>
           <Image src="/images/schedule.png" width={60} height={50} alt=""/> 
           <h2 className='text-2xl font-bold '>Schedule House 
Cleaning</h2>
           <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem expedita, quo impedit tempore debitis Lorem.</p>
           <button className='px-8 py-2 rounded-3xl  text-rose-400 border  border-rose-400'>Read More</button>
        </div>

        {/* four column */}
         <div className='md:w-75 shadow-lg md:h-95 mb-8  rounded   border border-rose-600 space-y-9  p-3.5  font-jost'>
           <Image src="/images/like.png" width={60} height={50} alt=""/> 
           <h2 className='text-2xl font-bold mt-8 '>Monitor Guest Reviews</h2>
           <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem expedita, quo impedit tempore debitis Lorem.</p>
           <button className='px-8 py-2 text-rose-400 border rounded-3xl border-rose-400 '>Read More</button>
        </div>

        {/* five column */}
         <div className='md:w-75 shadow-lg mb-8 rounded  md:h-94 border   border-rose-600 p-3.5 space-y-5 font-jost'>
           <Image src="/images/phone.png" width={60} height={50} alt=""/> 
           <h2 className='text-2xl font-bold '>Track & Report Expenses</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem expedita, quo impedit tempore debitis Lorem.</p>
           <button className='px-8 m py-2 text-rose-400 border rounded-3xl border-rose-400'>Read More</button>
        </div>
        {/* six column */}
         <div className='md:w-75 t-10 rounded  md:h-94 border   border-rose-600 mb-9.5 p-3.5 space-y-4.5 font-jost'>
           <Image src="/images/message.png" width={60} height={50} alt=""/> 
           <h2 className='text-2xl font-bold '>Guest Inquiry & Support</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem expedita, quo impedit tempore debitis Lorem.</p>
           <button className='px-8 py-2 text-rose-400 border rounded-3xl border-rose-400'>Read More</button>
        </div>
        </div>
    </div>
  )
}

export default Service;