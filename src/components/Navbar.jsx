import { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import SearchBar from './SearchBar'
import { ReactComponent as NetLogo } from '../Netflix-Logo.wine.svg'
import  profile  from '../assets/img/profile.png'
import { FiUser, FiEdit3 } from "react-icons/fi";


const Navbar = () => {


  const {user, logOut } = UserAuth()
  const [ topUp , setTopUp] = useState(false) 
  const navigate = useNavigate()  
  const {tabs,setTabs} = useState(false)


  const tabPanel = () => {
  

  }

  const handleLogout = async () =>{
    try{
      await logOut()
      navigate('/login ')
    } catch (error){
      console.log(error);
    }
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setTopUp(true)
    } 
    else if (scrolled <= 300){
      setTopUp(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);




  return (
    <div className='flex items-center justify-between h-[70px] p-2 md:p-2 lg:p-4 '>
      <div className='flex item-center'>            
        <NetLogo onClick = {scrollToTop} className='cursor-pointer w-20 md:w-36 lg:ml-7 '/>  
        <div className='flex item-center p-2 ml-2 show-browse'>
          <div className='browse-menu relative'>
            <span className='text-white font-bold'>Browse</span>
            <span className='browse-carret ml-2 pb-4'></span>
          </div>
          <ul className='browse-sub-menu'> 
            <Link to='/'>
              <li className='font-bold text-white px-4 py-2 text-sm flex items-center justify-center cursor-pointer'>Home</li>
            </Link>
            <Link to='/movies'>
              <li className='text-trans-grey px-4 py-2 text-sm flex items-center justify-center cursor-pointer'>Movie</li>
            </Link>
            <Link to='/imdb'>
              <li className='text-trans-grey px-4 py-2 text-sm flex items-center justify-center cursor-pointer'>IMDB</li>
            </Link>
            <Link to='/my-list'>
              <li className='text-trans-grey px-4 py-2 text-sm flex items-center justify-center cursor-pointer'>My List</li>
            </Link>
          </ul>
          
        </div>
        <ul className='nav-list p-2 ml-2 flex item-center fix-mt none'>
          <Link to='/'>
            <li className='text-white mx-4 cursor-pointer font-bold'>Home</li>
          </Link>
          <Link to='/movies'>
            <li className='text-white mx-4 cursor-pointer' >Movies</li>
          </Link>
          <Link to='/imdb'>
            <li className='text-white mx-4 cursor-pointer'> IMDB </li> 
          </Link>
          
          <Link to='/my-list'>
            <li className='text-white mx-4 cursor-pointer'>My List</li> 
          </Link>   
        </ul>
      </div>
  
     {user?.email ? ( 
      <div className='flex items-center lg:mr-10'>  
        <SearchBar/>      
        <div className='nav-element '>
          <div className='account-dropdown-button'>
            <span className='profile-link'>
              <img className='profile-icon' src={profile} alt='proflie-link' />
            </span>
            <span className='caret'></span>
          </div>

          <div className='account-menu'>
            <ul className='sub-menu '>
              <li className='text-white px-4 py-2 mt-4 text-base flex items-center cursor-pointer hover:underline'> <FiUser className='mr-4' size={20}/> Manager Profile </li>
              <li className='text-white px-4 py-2 text-base flex items-center cursor-pointer hover:underline'> <FiEdit3 className='mr-4' size={20}/>Account </li> 
              <li onClick={handleLogout} className="text-white flex items-center justify-center p-4 border-t border-gray-400 cursor-pointer hover:underline">Sign out of Netflix</li>
            </ul>
          </div>
        </div>
    
      </div>
      ) : ( 
      <div> 
      <Link to='/login'>
        <button className='text-white pr-4'>Sign In</button>
      </Link>
      <Link to='/signup'>
        <button className='text-white bg-red-600 px-6 py-2 rounded'>Sign Up</button>
      </Link>
    </div>     
    )}
    

 
    </div>
  )
}

export default Navbar