import axios from 'axios'
import { useState, useEffect } from 'react'
import requests from '../request'
// import Modal from './Modal'
import { useNavigate } from 'react-router-dom'



const Main = (props) => {
  
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()
  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results)
    })
  },[])

  const truncateString = (str, num ) =>{
    if(str?.length > num){
      return str.slice(0, num) + '...'
    } else{
      return str
    } 
  }

  const handleClick=()=>{
    navigate(`/${props.genre}/${movie.id}`)
  }

  
  return (
    <div className='w-full md:h-[90vh] text-white'>
      <div className='w-full h-full'>
        <img className='w-[767px] h-[400px] md:w-full md:h-full md:object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/> 
        {/* <Modal movie={movie}/> */}
        <div className='absolute w-full top-[150px] md:top-[35%] z-10 pl-4 md:pl-8 lg:ml-7'>
          <h1 className='text-xl md:text-5xl font-bold '>
            {movie?.title}
          </h1>
          <div className='my-5 md:my-10 '>
            <button onClick={handleClick} className='border text-black border-white rounded bg-white py-2 px-5 font-bold cursor-pointer'>Play</button>
            <button className='border-none bg-trans-grey rounded py-2 px-5 ml-2 font-bold cursor-pointer '> More Info </button>
          </div>
          <p className='w-full text-base md:text-xl pr-50 text-white md:pr-30 md:max-w-[70%]  lg:max-w-[50%] xl:max-w[35%]  '>
            {truncateString(movie?.overview, 150)}
          </p> 
        </div>
        <div className='full-panel'></div>
        <div className='bottom-shadow'></div>
      </div>
    </div>
  )
}

export default Main