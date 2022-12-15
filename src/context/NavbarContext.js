import { createContext, useState, useEffect } from 'react';


export const NavContext = createContext()

export const NavContextProvider = ({children}) => {
  
  const [navbar, setNavbar] = useState(false)

  const changeNavbar = () =>{
    if (window.scrollY >= 70) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeNavbar()
    window.addEventListener("scroll", changeNavbar)
  });

  

  return (
    <NavContext.Provider value = {{navbar}}  >
      { children }
    </NavContext.Provider>
  )
}
