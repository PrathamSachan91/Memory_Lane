import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import logo_light from '../../src/components/assets/logo_light.png';
import logo_dark from '../../src/components/assets/logo_dark.png';
import search_icon_light from '../../src/components/assets/search-w.png';
import search_icon_dark from '../../src/components/assets/search-b.png';
import toggle_light from '../../src/components/assets/night.png';
import toggle_dark from '../../src/components/assets/day.png';
import hamburger_light from '../../src/components/assets/hamburger_light.png';
import hamburger_dark from '../../src/components/assets/hamburger_dark.png';
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
const history=useNavigate();
  const menuRef = useRef(null);
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMediaIcons(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const Logout=()=>{
    localStorage.removeItem("token")
    // setAvail(false);
    history("/login")

  }

  return (
    <div className='nav'>
      <Link to='/'><img src={theme === 'light' ? logo_light : logo_dark} alt='' className='logo' /></Link>
      <div className='for_justify' ref={menuRef}>
        <div className={showMediaIcons ? "menu_link menu_link_mobile" : "menu_link"}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Createmem'>Create Memory</Link></li>
            {(!localStorage.getItem("token"))?<><li><Link to='/SignIn'>SignIn</Link></li>
            <li><Link to='/Login'>Login</Link></li></>:<Link to='/Login' style={{fontSize:"19px"}} onClick={Logout}>Logout</Link>}
          </ul>
        </div>
        <div className='search-box'>
          <input type='text' placeholder='Search' />
          <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt='' />
        </div>
        <div>
          <img onClick={toggle_mode} src={theme === 'light' ? toggle_light : toggle_dark} alt='' className='toggle-icons' />
        </div>
        <div className='hamburger-menu'>
          <img onClick={() => setShowMediaIcons(!showMediaIcons)} 
               src={theme === 'light' ? hamburger_dark : hamburger_light} alt='Hamburger' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
