import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import Goto from './components/Goto';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = () => {
  const current_theme=localStorage.getItem('current_theme');
  const [theme,setTheme]=useState(current_theme?current_theme:'light');
  useEffect(()=>{
    localStorage.setItem('current_theme',theme);
  },[theme])
  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
      </div>
      <div  className={`routing ${theme}`}>
      <Routes>
        <Route path='/' element={<Home theme={theme} setTheme={setTheme}/>}/> 
        <Route path='/About' element={<About theme={theme} setTheme={setTheme}/>}/>
        <Route path='/SignIn' element={<SignIn theme={theme} setTheme={setTheme}/>}/>
        <Route path='/LogIn' element={<Login theme={theme} setTheme={setTheme}/>}/>
      </Routes>
      </div>
      <div className={` ${theme}`}>
        <Goto theme={theme} setTheme={setTheme}/>
      </div>
      <div className={`${theme}`}>
        <Footer theme={theme} setTheme={setTheme}/>
      </div>
    </Router>
  );
};
export default App;
