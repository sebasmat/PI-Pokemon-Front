import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { Routes,Route} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import SearchBar from './Components/SearchBar/SearchBar';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';
import Home from './Components/Home/Home';
import axios from "axios";
axios.defaults.baseURL = 'https://pi-pokemon-back-production-405e.up.railway.app';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/home" && <SearchBar/>}
      <Routes>
        <Route path='/' element= {<LandingPage/>}/>
        <Route path='/home' element= {<Home/>}/>
        <Route path='/detail/:id' element= {<Detail/>}/>
        <Route path='/form' element= {<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
