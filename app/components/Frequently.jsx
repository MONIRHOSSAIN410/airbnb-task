import React from 'react'
import { Plus } from 'lucide-react'

const Frequently = () => {
  return (
    <section className='bg-[#F9FAFB] font-jost py-12 md:py-20'>
      <div className='max-w-4xl mx-auto px-6'>
        
        {/* Title Section */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl md:text-4xl font-bold'>
            Frequently asked <span className='text-[#ED3C6A]'>questions</span>
          </h1>
          <p className='font-semibold mt-4 text-gray-600 text-sm md:text-base tracking-wider'>
            Everything you need to know about the product and billing
          </p>
        </div>

        {/* FAQ Content */}
        <div className='flex flex-col items-center w-full'>
          
          {/* Main Expanded Item */}
          <div className='w-full mb-10'>
            <h3 className='font-bold text-lg mb-4'>Is there a free trial available?</h3>
            <p className='text-gray-500 leading-relaxed'>
              Yes, you can try us for free for 30 days. If you want, we'll provide you with a 
              free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </p>
          </div>

          {/* Question List */}
          <ul className='w-full space-y-2'>
            <FaqItem text="Can I change my plan later?" />
            <FaqItem text="What is your cancellation policy?" />
            <FaqItem text="Can other info be added to an invoice?" />
            <FaqItem text="How does billing work?" />
            <FaqItem text="How do I change my account email?" />
          </ul>
        </div>

      </div>
    </section>
  )
}

// Reusable component for the list items
const FaqItem = ({ text }) => (
  <li className='border-t border-[#ED3C6A]/30 flex items-center justify-between py-5 group cursor-pointer hover:bg-white transition-colors px-2'>
    <span className='font-bold text-gray-800'>{text}</span>
    <Plus className='text-[#ED3C6A] w-5 h-5 rounded-full border border-[#ED3C6A] p-0.5 flex-shrink-0' />
  </li>
)

export default Frequently