import {useState,useContext } from 'react'
import { IoIosAdd,IoIosCheckmark } from "react-icons/io";
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
// import { ModalContext } from '../context/ModalContext'

const SearchCard = (movie) => {

  const { item } = movie 
  const [add, setAdd] = useState(false)  
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth()
  const movieID = doc(db, 'users', `${user?.email}`);
  // const {onOpen} = useContext(ModalContext)

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

  return (
    <>
      <div  className='w-[200px] h-[300px] m-2 inline-block cursor-pointer relative mb-12'>
        <img className='max-w-full h-auto block' src={`https://image.tmdb.org/t/p/w200/${item?.poster_path}`} alt={item?.title}/>
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
          <p onClick={saveShow}>
          { add ? (
            <IoIosCheckmark className='absolute flex justify-centeritems-center h-full translate-x-[88px]' size={30}/>
          ) : (
            <IoIosAdd className='absolute flex justify-center items-center h-full translate-x-[88px]' size={30}/>
          )}
          </p>
        </div>
        <h1  className='font-bold text-sm mt-2'>{item.title}</h1>
        <h1 className='font-bold text-sm mt-2'>{item.first_air_date}</h1>
      </div> 
    </>
  )
}


export default SearchCard