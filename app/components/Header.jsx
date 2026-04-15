"use client"
import React, { useState } from 'react'
import {X,Menu,MoveRight} from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false)
  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className='bg-white shadow-lg p-3.5 '>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white md:text-lg px-15'>
<Image age src='/images/google1.png' width={100} height={60} alt=''/>

        </div>
<div className='md:hidden'>
<button onClick={toggleMenu}>
  <svg className='h-6 w-6'>
    {
      isMenuOpen ?(<X/>):(<Menu/>)
    }
  </svg>
</button>
</div>
<div className='hidden font-jost transition delay-150 duration-300 ease-in-out items-center text-[18px] md:flex justify-between space-x-4 font-semibold'>
<a href="" className='  text-red-600  underline  underline-offset-6  px-3 py-2'>Home</a> 
<a href="" className='  hover:text-red-600  hover:underline  underline-offset-6  px-3 py-2'>About</a> 
<a href="" className=' hover:text-red-600  hover:underline  underline-offset-6  px-3 py-2'>Services</a> 
<a href="" className='  hover:text-red-600  hover:underline underline-offset-6  px-3 py-2'>Pricing</a> 
<a href="" className=' hover:text-red-600  hover:underline underline-offset-6  px-3 py-2'>Blog</a> 
<a href="" className='  hover:text-red-600  hover:underline  underline-offset-6 px-3 py-2'>Resources</a> 
 <button className='bg-rose-600 hover:bg-rose-500 p-2.5 text-white rounded flex items-center ml-3.5'>Schedule A Meeting<MoveRight className='ml-1.5 w-4' /></button>
<div>
 
</div>
</div>
      </div>
 <div className={`md:hidden ${isMenuOpen ? 'block' :'hidden'} text-[16px] font-jost mt-2.5 text-white `}>
<a href="" className=' block  bg-pink-400 hover:text-red-600  hover:underline  underline-offset-6  px-3 py-2'>Home</a> 
<a href="" className=' block bg-pink-400 hover:text-red-600  hover:underline  underline-offset-6  px-3 py-2'>About</a> 
<a href="" className='block bg-pink-400 hover:text-red-600  hover:underline  underline-offset-6  px-3 py-2'>Services</a> 
<a href="" className='block bg-pink-400 hover:text-red-600  hover:underline underline-offset-6  px-3 py-2'>Pricing</a> 
<a href="" className='block bg-pink-400 hover:text-red-600  hover:underline underline-offset-6  px-3 py-2'>Blog</a> 
<a href="" className='block  bg-pink-400 hover:text-red-600  hover:underline  underline-offset-6 px-3 py-2'>Resources</a> 
  <button className='bg-rose-500 hover:rose-500 p-2.5 text-white rounded mt-2.5 flex'>Schedule A Meeting<MoveRight className='ml-1.5 w-4' /></button>
 </div>
    </nav>
  )
}

export default Header;