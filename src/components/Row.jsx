import { useState, useEffect} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import Movie from './Movie'
import { useNavigate } from 'react-router-dom'
import { FiChevronsRight } from 'react-icons/fi';

const Row = ({title, fetchURL, genre}) => {
  
  const [movies, setMovies] = useState([])
  const navigate= useNavigate();
  
  useEffect(() => {
    axios.get(fetchURL).then((respone) => {
      setMovies(respone.data.results)
    })
  },[fetchURL])

  const handleClick=()=>{
    navigate(`${genre}`)
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 1,
    className: "slider variable-width",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1812,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
          infinite: true,
          className: "slider variable-width",
          variableWidth: true,
          speed: 500,
          initialSlide: 1,
          
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
          infinite: true,
          className: "slider variable-width",
          variableWidth: true,
          speed: 500,
          initialSlide: 1,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2 ,
          initialSlide: 1,
          speed: 500,
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          speed: 500,
        }
      }
    ]
  };

  return (
    <>     
      <div className='flex items-center z-50 cursor-pointer openShow'>
        <h2 className='text-white font-bold text-xl mt-4 mb-6 md:ml-8 lg:ml-14 ml-4'>{title}</h2>
        {genre ? <p onClick={handleClick} className='text-white font-medium text-sm ml-4 opacity-0 showAll flex items-center'>Show all <FiChevronsRight className='ml-1'/></p> : null}
      </div>
      <div className='w-full h-full mb-4'>
        <Slider {...settings} >
          {movies?.map((item,id) => (        
            <Movie item={item} key={id} genre={genre} />       
          ))}
        </Slider>
      </div>
    </>
  )
}
export default Row

