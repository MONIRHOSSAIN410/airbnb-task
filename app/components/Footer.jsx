import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='w-full font-jost'>
      {/* Main Content Container */}
      <div className='bg-[#D6D6D6] border-t border-gray-300 px-6 py-10 md:px-12 lg:px-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12'>
          
          {/* Logo and Description Section - Spans 2 columns on large screens */}
          <div className='lg:col-span-2 flex flex-col items-start'>
            <Image src="/images/google3.png" width={100} height={60} alt='Logo' className='mb-6' />
            <p className='text-gray-700 max-w-sm mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptate magnam inventore sunt, quidem ut sequi fuga minima, nobis repellendus.
            </p>
            {/* Social Icons */}
            <div className='flex items-center gap-6 text-xl'>
              <FaTwitter className="cursor-pointer hover:text-blue-400 transition-colors" />
              <FaFacebookF className="cursor-pointer hover:text-blue-600 transition-colors" />
              <FaInstagram className="cursor-pointer hover:text-pink-600 transition-colors" />
              <FaGithub className="cursor-pointer hover:text-gray-900 transition-colors" />
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h1 className='text-xl font-semibold mb-4'>Company</h1>
            <ul className='space-y-3 text-gray-700'>
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Features</li>
              <li className="hover:underline cursor-pointer">Works</li>
              <li className="hover:underline cursor-pointer">Career</li>
            </ul>
          </div>

          <div>
            <h1 className='text-xl font-semibold mb-4'>Help</h1>
            <ul className='space-y-3 text-gray-700'>
              <li className="hover:underline cursor-pointer">Customer Support</li>
              <li className="hover:underline cursor-pointer">Delivery Details</li>
              <li className="hover:underline cursor-pointer">Terms & Conditions</li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h1 className='text-xl font-semibold mb-4'>Resources</h1>
            <ul className='space-y-3 text-gray-700'>
              <li className="hover:underline cursor-pointer">Free eBooks</li>
              <li className="hover:underline cursor-pointer">Development Tutorial</li>
              <li className="hover:underline cursor-pointer">How to-Blog</li>
              <li className="hover:underline cursor-pointer">Youtube Playlist</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className='bg-[#230B41] py-5 px-4 text-white flex items-center justify-center text-sm md:text-base'>
        <MdCopyright className='mr-2' />
        <p className='text-center'>
          Copyright 2024, All Rights Reserved by XYZ
        </p>
      </div>
    </footer>
  );
};

export default Footer;