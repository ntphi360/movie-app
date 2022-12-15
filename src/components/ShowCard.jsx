import React from 'react'
import { useNavigate } from 'react-router-dom';


const ShowCard = (movie) => {
  
  const {item} = movie 
  
  const navigate = useNavigate()

  const handleClick=()=>{
    navigate(`/${movie.genre}/${item?.id}`)
  }
  

  return (
    <div className='col my-2'>
    <div onClick={handleClick} className='max-w-[300px] w-sm-s w-sm-sm w-sm-tab relative inline-block cursor-pointer '>
      <img className='w-full h-auto block hover:bg-black/80 opacity-1 hover:opacity-50' src={`https://image.tmdb.org/t/p/w300/${item?.poster_path || item?.backdrop_path}`} alt={item?.title}/>
      <h1 className='font-bold text-sm mt-2'>{item.title}</h1>
    </div> 
  </div>
  )
}

export default ShowCard
