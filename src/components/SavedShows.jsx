import { useState, useEffect,useContext } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { NavContext } from "../context/NavbarContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
import { BiPlayCircle,BiCheckCircle } from "react-icons/bi"; 

import Navbar from "./Navbar";
import imdb from '../assets/img/imdb.png'

const SavedShows = (movie) => {
  
  const {item} = movie 
  const navigate = useNavigate()
  const { user } = UserAuth();
  const {navbar} = useContext(NavContext)
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick=()=>{
    navigate(`/${item?.id}`)
  }

  return (
    <div className="w-full h-auto">
      <div className='w-full h-full'>
        {navbar ? (
          <div className='w-full fixed top-0 l-0 r-0 z-50 bg-nav-color' >
            <Navbar/>
          </div>          
        ) : (
          <div className='w-full h-[70px] fixed top-0  l-0 r-0 z-50 bg-gradient-to-b from-black' >
            <Navbar/>
          </div>
        )}
  
        <div className="wrap-grid wide">
          <div className="grid row my-2  sm-s sm-sm sm-tab grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
            {movies.map((item,id )=>(
              <div key={id} className="col mt-2">
                <div className='max-w-[300px] w-sm-s w-sm-sm w-sm-tab relative inline-block  cursor-pointer text-white '>
                  <img className='w-full h-auto block rounded' src={`https://image.tmdb.org/t/p/w300/${item?.img}`} alt={item?.title}/>
                  <div className="absolute top-0 left-0 w-full h-full hover:bg-black/40 opacity-0 hover:opacity-100 text-white px-5">
                    <div className="flex flex-row justify-center items-center absolute top-2 right-2 text-gray-300">
                      <p onClick={() => deleteShow(item.id)} className="close absolutetext-white top-2 right-0 hover:opacity-50" ><AiOutlineClose /> </p>
                    </div>
                    <div className="absolute block bottom-2 ">
                      <h5>{item?.title}</h5>
                      <div className='flex'>
                        <p onClick={handleClick}><BiPlayCircle size='30'/></p>
                        <p onClick={() => deleteShow(item.id)} ><BiCheckCircle size='30'/></p>
                      </div>
                      <div className='flex items-center ml-1 bottom-0'>
                        <img className='w-[35px] h-[30px] md:w-[40px] md:h-[40px]' src={imdb} alt='imdb-icon'/>
                        <p className='ml-2 text-amber-300 '>{item?.imdb}</p>
                      </div> 
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default SavedShows;
