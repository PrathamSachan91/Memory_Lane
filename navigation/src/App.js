import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import Goto from './components/Goto';
import Createmem from './components/Createmem';
import OTP from "./components/OTP"
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MemoryState from './Context/Memory/MemoryState';
const App = () => {
  const current_theme=localStorage.getItem('current_theme');
  const [theme,setTheme]=useState(current_theme?current_theme:'light');
  useEffect(()=>{
    localStorage.setItem('current_theme',theme);
  },[theme])
  return (
    <MemoryState>
      <Router>
        <div className={`contain ${theme}`}>
          <Navbar theme={theme} setTheme={setTheme}/>
        </div>
        <div  className={`routing ${theme}`}>
        <Routes>
          <Route path='/' element={<Home theme={theme} setTheme={setTheme}/>}/> 
          <Route path='/About' element={<About theme={theme} setTheme={setTheme}/>}/>
          <Route path='/SignIn' element={<SignIn theme={theme} setTheme={setTheme}/>}/>
          <Route path='/LogIn' element={<Login theme={theme} setTheme={setTheme}/>}/>
          <Route path='/OTP' element={<OTP theme={theme} setTheme={setTheme}/>}/>
          <Route path='/Createmem' element={<Createmem theme={theme} setTheme={setTheme}/>}/>
        </Routes>
        </div>
        <div className={` ${theme}`}>
          <Goto theme={theme} setTheme={setTheme}/>
        </div>
        <div className={`${theme}`}>
          <Footer theme={theme} setTheme={setTheme}/>
        </div>
      </Router>
    </MemoryState>
  );
};
export default App;
