import { useState, useContext} from "react"; 
import { SearchContext } from '../context/SearchContext'
import { FiSearch, FiX } from "react-icons/fi";




const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const { query, searchMovie } = useContext(SearchContext)

  function handleClick () {
    setIsActive(true);
  };

  function handleClickClose () {
    setIsActive(false);
  };
  
  return (
    <>
      {!isActive ? (
        <div onClick = {handleClick} className='search-box'>
          <FiSearch className="search-box__icon"/>
          <input className="search-box__input" type='text' placeholder="Search movie" />
        </div>
      ) 
      : 
      (
        <div className='search-box active'>
          <FiSearch onClick = { handleClickClose } className="search-box__icon"/>
          <input className="search-box__input" type='text' placeholder="Search movie" value={query} onChange={searchMovie}/>
          <FiX onClick = { handleClickClose } className="search-box__close"/>
        </div>
      )
    }
    </>
    

   
    

  )
}

export default SearchBar