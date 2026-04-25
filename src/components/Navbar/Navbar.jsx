import React,{ useState } from 'react';
import { FaBirthdayCake } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

import images from '../../constants/images';  

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.kekyaa} alt="app logo" />
    </div>

    <ul className="app__navbar-links">
      <li className="p_opensans"><a href="#home">Home</a></li>
      <li className="p_opensans"><a href="#about">About</a></li>
      <li className="p_opensans"><a href="#menu">Menu</a></li>
      <li className="p_opensans"><a href="#contact">Contact</a></li>
    </ul>

    <div className="app__navbar-login">
      <a href="#login" className="p_opensans">Log In / Register</a>
    </div>

    <div className="app__navbar-smallscreen">
      <FaBirthdayCake color="#000000" fontSize={27} className="menu-icon" onClick={() => setToggleMenu(true)}/>
        
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom" > 
          <MdRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen-links">
              <li className="p_opensans"><a href="#home">Home</a></li>
              <li className="p_opensans"><a href="#about">About</a></li>
              <li className="p_opensans"><a href="#menu">Menu</a></li>
              <li className="p_opensans"><a href="#contact">Contact</a></li>
            </ul>
        </div>
        )}
    </div>
  </nav>
  );
}

export default Navbar;
