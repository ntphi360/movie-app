import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube } from "react-icons/fa";

const footer = () => {
  return (
    <div className=' mx-auto mt-10 md:mt-[80px] max-w-[980px] min-h-[150px] mb-10 px-10 lg:px-2 border-t-slate-50'>
        <div className='flex items-center text-white mb-[14px] cursor-pointer '>
          <FaFacebookF size={25}/>
          <FaInstagram className='ml-5' size={25}/>
          <FaTwitter className='ml-5' size={25}/>
          <FaYoutube className='ml-5' size={25}/>

        </div>
        <ul className='flex items-start flex-row flex-wrap text-sm p-0 mb-14px text-trans-grey cursor-pointer '>
          <li className='basis-[50%] md:basis-[25%] mb-4 hover:underline'>Audio Description</li>
          <li className='basis-[50%] md:basis-[25%] mb-4 hover:underline'>Investor Relarions</li>
          <li className='basis-[50%] md:basis-[25%] mb-4 hover:underline'>Legal Notices</li>
          <li className='basis-[50%] md:basis-[25%] mb-4 hover:underline'>Help Center</li>
          <li className='basis-[50%] md:basis-[25%] mb-4 hover:underline'>Jobs</li>
          <li className='basis-[50%] md:basis-[25%] mb-4 hover:underline'>Cookie Preferences</li>   
          <li className='basis-[50%] md:basis-[25%] mb-4 hover:underline'>Media Center</li>
          <li className='basis-[50%] md:basis-[25%] mb-4 hover:underline'>Privacy</li>
          <li className='basis-[50%] md:basis-[25%] mb-4 hover:underline'>Contact Us</li>
        </ul>

        <div className='text-sm'>
          <span className='text-trans-grey '>&copy; Cover by Phi Nguyen - 2022</span>
        </div>
      </div>
   
  )
}

export default footer
