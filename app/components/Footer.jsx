import React from 'react'
import Image from 'next/image';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div>
    <div className='lg:flex justify-between md:flex-2  bg-[#D6D6D6]  border-t border-gray-300 font-jost '>
     
      <div className='p-10'>
<Image age src="/images/google3.png" width={100} height={60} alt=''/>
<p className='md:w-96 md:mt-6.5 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptate magnam inventore sunt, quidem ut sequi fuga minima, nobis repellendus .</p>
{/* icons stared */}
<div className='lg:flex flex items-center gap-10 py-7'>
 <FaTwitter />
 <FaFacebookF />
 <FaInstagram />
 <FaGithub />
</div>
     
      </div>
      <div>
        <ul className='p-10 space-y-5.5'>
          <h1 className='text-xl font-semibold'>Company</h1>
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Career</li>
        </ul>
      </div>
      <div>
        <ul className='p-10 space-y-5.5'>
          <h1 className='text-xl font-semibold'>Help</h1>
          <li>Customer Support</li>
          <li>Delivery Details</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div >
        <ul className='p-10 space-y-5.5'>
          <h1 className='text-xl font-semibold'>Resources</h1>
          <li>Free eBooks</li>
          <li>Development Tutorial</li>
          <li>How to-Blog</li>
          <li>Youtube Playlist</li>
        </ul>
      </div>
     
    </div>
 <div className='bg-[#230B41] md:p-5 flex md:flex items-center justify-center  p-5 text-sm text-white text-center font-jost'>
         <MdCopyright className=' '/> <h2 className='pl-1'>Copyright 2024,All Rights Reserved by XYz,</h2>
      </div>
    </div>
  )
}

export default Footer;