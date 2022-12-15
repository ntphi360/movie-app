import { useState, useEffect, useContext } from 'react'
import { NavContext } from '../context/NavbarContext'
import {SearchContext} from '../context/SearchContext'


import axios from 'axios'

import bgNet from '../assets/img/bgNet.jpg'
import Navbar from '../components/Navbar'
import PopularCard from '../components/PopularCard'
import MoviePoular from '../components/MoviePoster'
// import SearchCard from '../components/SearchCard'



const Popular = () => {  

  const key = "d04c6fe19f7147b9ca52f61fd8c472c9"
  const { movies } = useContext(SearchContext)
  const { navbar } = useContext(NavContext)
  const [showMovies, setShowMovies] = useState([])
  const [page, setPage] = useState(1);

    useEffect(() => {
      fetchData(page);
    }, [page]);
  
    
    const fetchData = async (pageNum) => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${pageNum}`
        )
        .then((response) => {
          setShowMovies((prevstate) => [...prevstate, ...response.data.results]);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    console.log(movies)

    const loadMore = () => {
      setPage((prevstate) => prevstate + 1);
    };
    


  return (
    <div className='w-full text-white p-0'>
       {navbar ? (
        <div className='w-full fixed top-0 l-0 r-0 z-50 bg-nav-color' >
        <Navbar  />
        </div>          
      ) : (
        <div className='w-full h-[70px] fixed top-0  l-0 r-0 z-50 bg-gradient-to-b from-black' >  
          <Navbar/>
        </div>
      )}   

      <img src={bgNet} className='w-full md:h-[400px] object-cover' alt='bg-netflix'/>
      <div className='bg-black/60 absolute top-0 left-0 w-full md:h-[400px]'></div>
      <div className='w-full absolute top-[15%] md:top-[20%] flex justify-center items-center'>
        <h1 className='text-3xl md:text-5xl lg:ml-6 font-bold'>Movies on Netflix</h1>
        <div className='mt-2'>
        </div>
      </div>  
      <div className='w-full'>
        {movies.length > 0 ? (  
         <div className='wrap-grid wide '>
          <div className='grid row mt-5 sm-s sm-sm sm-tab grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
              {movies.map((item) =>(
                <div key={item.id}>
                  <MoviePoular item={item} genre='search'/>
                </div>
              ))}
            </div>
         </div>
      ) : (
      <div className='wrap-grid wide'>
        <div className='grid row mt-5 sm-s sm-sm sm-tab grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
          {showMovies?.map((item, id) => (    
            <PopularCard item={item} key={id} genre='movies' />      
          ))}
        </div>  
      </div>
      )}
      </div>      
      <div className="flex items-center justify-center my-10">
        <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded " onClick={loadMore} disabled={page>15 ? true: false}>
          Load More
        </button>
      </div>
    </div>  
  )
}


export default Popular


