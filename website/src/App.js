import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';

import Profile from './Pages/Profile';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Register from "./Pages/Register"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { UserContext, userType } from './UserContext';
import { useContext } from 'react';
import Notification from './Pages/Notifications';
import Network from './Pages/Network';
import Jobs from './Pages/Jobs';

function App() {
  const {userId} = useContext(userType);
  return (
    <>
    
    <BrowserRouter basename = "/linkedin-clone">
    
      <Routes>
       {userId!==null ?  <Route path='/' element = {<Home />} />
       : <Route path='/' element = {<Login />} />}
        <Route path='/register' element = {<Register />} />
       
        <Route path='/home' element = {<Home />} />
        <Route path='/profile' element = {<Profile />} />
        <Route path='/notification' element = {<Notification />} />
        <Route path='/jobs' element = {<Jobs />} />
        <Route path='/network' element = {<Network />} />
      </Routes>
      
    </BrowserRouter>
    
  
    </>
  );
}

export default App;
