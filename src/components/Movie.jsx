import { useState } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { BiPlayCircle,BiCheckCircle } from "react-icons/bi"; 
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import imdb from '../assets/img/imdb.png'

const Movie = (movie) => {

  const { item } = movie
  const [add, setAdd] = useState(false)
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate()
  const { user } = UserAuth()
  const movieID = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setAdd(!add);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item?.id,
          title: item?.title,
          img: item?.poster_path,
          imdb: item?.vote_average,
          overview:item?.overview,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };
  
  const handleClick=()=>{
    navigate(`/${movie.genre}/${item?.id}`)
  }

  const backdropMovie ={
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  //
  return (
    <div className='container'>
      <div className='w-[178px] h-[100px] md:w-[292px] md:h-[165px] mx-1 rounded row-square block cursor-pointer transition-all' style={backdropMovie} alt={item?.title}>  
          <div className='row-poster px-2 py-1 md:px-4 md:py-2 text-white text-sm md:text-base'>
            <h5 className='ml-1'>{item?.title}</h5>
            <div className='row-desrciption'>
              <p onClick={handleClick}><BiPlayCircle/></p>
              <p onClick = {saveShow}>{add ? <BiCheckCircle/> : <IoAddCircleOutline/>}</p>
            </div>
            <div className='flex items-center ml-1 bottom-0'>
              <img className='w-[35px] h-[30px] md:w-[40px] md:h-[40px]' src={imdb} alt='imdb-icon'/>
              <p className='ml-2 text-amber-300'>{item?.vote_average}</p>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default Movie

 

