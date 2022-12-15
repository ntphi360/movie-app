import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { AuthContextProvider} from './context/AuthContext';
import { NavContextProvider } from './context/NavbarContext';
import { SearchContextProvider } from './context/SearchContext';
import {  ModalContextProvider } from './context/ModalContext';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      {/* <HashRouter> */}
        <AuthContextProvider>
          <NavContextProvider>
            <SearchContextProvider>
              <ModalContextProvider>
                <App />  
              </ModalContextProvider>
            </SearchContextProvider>
          </NavContextProvider>
        </AuthContextProvider>     
      {/* </HashRouter> */}
    </Router>

);



