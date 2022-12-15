import '../modal.style.scss'
import {useContext,useEffect,useState} from 'react'
import { ModalContext } from '../context/ModalContext'
// import { useParams } from "react-router-dom";
import axios from 'axios';


const Modal = ({showMovies}) => {  

  // const key = "d04c6fe19f7147b9ca52f61fd8c472c9"
  const { onClose } = useContext(ModalContext)
  // let params = useParams();
  const [movie, setMovie] = useState();

  // const fetchMovie = async(id) =>{
  //   try{
  //     await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`).then((response) =>{
  //       setMovie(response.data.results)
  //       console.log(response.data.results)
  //     })
  //   } catch(e) {
  //     console.log(e);
  //   }
  // } 

  // useEffect(() => {
  //   fetchMovie(params.movieId);
  // }, [movie]);

  return (
  <div className="modal" > 
    {movie &&
      <div className="overlay"> 
        <div className="modal-header">
          <img className='w-full h-[500px]' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="modal" />
          <button onClick={onClose} type="button" className="close hover:opacity-70">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="button" aria-label="close" tabindex="0">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z" fill="currentColor"></path>
            </svg>
          </button>

          <div className="header-content">
            <div className="header-title">
              <h1>{movie?.title}</h1>

              <div className="header-buttons">
                <button type="button" className="play">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                  </svg>
                  Play
                </button>

                <button type="button" className="add">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="modal-body">
          <h1>{movie?.overview}</h1>
        </div> */}
      </div>
    }
    

  </div>
  )
}
export default Modal