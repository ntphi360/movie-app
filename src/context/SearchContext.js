import { createContext, useState } from 'react';
import axios from "axios";

export const SearchContext = createContext()

export const SearchContextProvider = ({children}) => {
  
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const key = "d04c6fe19f7147b9ca52f61fd8c472c9"

  const searchMovie = async(e) =>{
    e.preventDefault();
    console.log("Searching");
    setQuery(e.target.value)

    try{
      await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then((response) =>{
        setMovies(response.data.results)
        console.log(response.data.results)
      })
    } catch(e) {
      console.log(e);
    }
  } 


  

  return (
    <SearchContext.Provider value={{searchMovie,movies,query}} >
      { children }
    </SearchContext.Provider>
  )
}
// export const UserSearch = () => {
//   return useContext(SearchContext)
// }

