import {Routes, Route} from 'react-router-dom'

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from './pages/Signup';
import Account from './pages/Account.jsx'
import ProtectAccount from './components/ProtectAccount';
import Popular from './pages/Popular';
import MovieShow from './pages/MovieShow';
import MovieList from './pages/MovieList';
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  return (
  <>
    <Routes>
      <Route exact path = '/' element = {<Home />} />
      <Route exact path = '/login' element = {<Login />} />
      <Route exact path = '/signup' element = {<Signup />} />
      <Route path = '/movies' element = {<Popular />} />
      <Route exact path = '/imdb' element = {<MovieShow />} />
        <Route path=":genre" element={<MovieList />}></Route>
        <Route path="/:genre/:movieId" element={<MovieDetails/>}></Route>
      <Route exact path = '/my-list' element = {<ProtectAccount> <Account /> </ProtectAccount>} />
    </Routes>      
  </>
  );
}

export default App;
