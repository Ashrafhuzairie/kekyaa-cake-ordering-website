import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBirthdayCake } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

import images from '../../constants/images';
import { useAuth } from '../../context/AuthContext';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user } = useAuth();

  return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <Link to="/"><img src={images.kekyaa} alt="app logo" /></Link>
    </div>

    <ul className="app__navbar-links">
      <li className="p_opensans"><a href="/#home">Home</a></li>
      <li className="p_opensans"><a href="/#about">About</a></li>
      <li className="p_opensans"><a href="/#menu">Menu</a></li>
      <li className="p_opensans"><a href="/#baker">Baker</a></li>
      <li className="p_opensans"><a href="/#intro">Intro</a></li>
      <li className="p_opensans"><a href="/#gallery">Gallery</a></li>
    </ul>

    <div className="app__navbar-login">
      {user ? <Link to="/account" className="p_opensans">My Account</Link> : <Link to="/login" className="p_opensans">Log In / Register</Link>}
      {user && user.role === 'admin' && <Link to="/admin" className="p_opensans">Admin</Link>}
    </div>

    <div className="app__navbar-smallscreen">
      <FaBirthdayCake color="#000000" fontSize={27} className="menu-icon" onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom" >
          <MdRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen-links">
              <li className="p_opensans"><a href="/#home">Home</a></li>
              <li className="p_opensans"><a href="/#about">About</a></li>
              <li className="p_opensans"><a href="/#menu">Menu</a></li>
              <li className="p_opensans"><a href="/#baker">Baker</a></li>
              <li className="p_opensans"><a href="/#intro">Intro</a></li>
              <li className="p_opensans"><a href="/#gallery">Gallery</a></li>
              <li className="p_opensans"><Link to={user ? '/account' : '/login'}>{user ? 'My Account' : 'Login'}</Link></li>
            </ul>
        </div>
        )}
    </div>
  </nav>
  );
}

export default Navbar;
