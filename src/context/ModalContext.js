import { useState, createContext } from "react";

export const ModalContext = createContext()

export const ModalContextProvider = ({children}) => {
 
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false)
  }

  const onOpen = () =>{
    setOpen(true)
  }

  
  return (
    <ModalContext.Provider value = {{open,onClose,onOpen}}>
      { children }
    </ModalContext.Provider>
  )
}

