import React from 'react'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='w-full px-4 py-10 md:py-20 flex flex-col items-center overflow-hidden'>
      
      <div className='max-w-7xl mx-auto flex flex-col items-center space-y-6 font-jost text-center'>
        
        {/* Title Container */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-20'>
          <div className='hidden sm:block transform md:-translate-y-6'>
            <Image src="/images/hero1.png" width={80} height={60} alt="Hero decorative" priority />
          </div>

          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight'>
            Airbnb Assistants For
          </h1>

          <div className='hidden sm:block transform md:-translate-y-6'>
            <Image src="/images/hero4.png" width={80} height={60} alt="Hero picture" priority />
          </div>
        </div>

        {/* Subtitle */}
        <h2 className='text-2xl md:text-4xl font-semibold text-gray-800'>
          Property Management
        </h2>

        {/* Description */}
        <p className='text-gray-600 text-sm md:text-lg max-w-2xl lg:max-w-3xl px-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis hic delectus, 
          eos nulla dolores repellendus. Quam mollitia at dolorem ipsam totam quibusdam, 
          in corporis explicabo consequatur reiciendis.
        </p>

        {/* Action Area */}
        <div className='flex flex-col items-center pt-6 space-y-8 w-full'>
          {/* Main CTA */}
          <button className='bg-rose-600 hover:bg-rose-500 transition-colors px-8 py-4 text-white rounded-md flex items-center gap-2 group shadow-lg shadow-rose-200'>
            Schedule A Meeting 
            <MoveRight className='w-5 transition-transform group-hover:translate-x-1' /> 
          </button>

          {/* Secondary CTA with Decorative Images */}
          <div className='flex items-center justify-center w-full gap-4 md:gap-16 lg:gap-32'>
            {/* Left Decorative Image - Hidden on mobile to prevent clutter */}
            <div className='hidden md:block opacity-80'>
              <Image src="/images/hero2.png" width={60} height={40} alt="" />
            </div>

            <button className='text-lg font-medium underline decoration-rose-600 underline-offset-8 hover:text-rose-600 transition-colors whitespace-nowrap'>
              See Pricing
            </button>

            {/* Right Decorative Image - Hidden on mobile */}
            <div className='hidden md:block opacity-80'>
              <Image src="/images/hero3.png" width={60} height={40} alt="" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero;