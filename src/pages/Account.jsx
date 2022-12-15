import React from 'react'
import bgNet from '../assets/img/bgNet.jpg'
import SavedShows from '../components/SavedShows'


const Account = () => {
  return (
  <>
    <div className='w-full text-white'>
    <img src={bgNet} className='w-full md:h-[400px] object-cover' alt='bg-netflix'/>
      <div className='bg-black/60 absolute top-0 left-0 w-full md:h-[400px]'></div>
      <div className='w-full absolute top-[15%] md:top-[20%] flex justify-center items-center'>
        <h1 className='text-3xl md:text-5xl lg:ml-6 font-bold'>My Movies</h1>
        <div className='mt-2'>
        </div>
      </div>
    </div>
    <SavedShows />
    
    
  </>
  )
}

export default Account