import {useContext} from 'react'
// import { Link } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'
import { NavContext } from '../context/NavbarContext'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Row from '../components/Row'
import Footer from '../components/Footer'
import MoviePoular from '../components/MoviePoster'
import requests from '../request'


const Home = () => {

  const {movies} = useContext(SearchContext)
  const {navbar} = useContext(NavContext)
  return (
    <>
      {navbar ? (
        <div className='w-full fixed top-0 l-0 r-0 z-50 bg-nav-color' >
        <Navbar/>
        </div>          
      ) : (
        <div className='w-full h-[70px] fixed top-0  l-0 r-0 z-50 bg-gradient-to-b from-black' >
          <Navbar/>
        </div>
      )}
      
      <div className='w-full'>
        {movies.length > 0 ? (  
         <div className='wrap-grid wide '>
          <div className='grid row mt-20 sm-s sm-sm sm-tab grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
              {movies.map((item) =>(
                <div key={item.id}>
                  <MoviePoular item={item} genre='search'/>
                </div>
              ))}
            </div>
         </div>
      ) : (
        <div className='w-full'>         
          <Main genre='popular'/>
          <Row title='Up Coming' fetchURL={requests.requestUpcoming} genre='upcoming'/>
          <Row title='Popular' fetchURL={requests.requestPopular} genre='popular'/>
          <Row title='Top Rated' fetchURL={requests.requestTopRated} genre='top_rated'/>
          <Row title='Now Playing' fetchURL={requests.requestNowPlaying} genre='now_playing'/>      
        </div>
        )}       
       </div>
      <Footer/>
    </>
  )
}

export default Home