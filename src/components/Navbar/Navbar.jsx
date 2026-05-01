import React, { useEffect, useState } from 'react';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('kekyaa_user_email');
    if (storedUser) setCurrentUser(storedUser);
  }, []);

  const openAuthModal = (event) => {
    event.preventDefault();
    setShowAuthModal(true);
    setError('');
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }

    localStorage.setItem('kekyaa_user_email', email.trim());
    setCurrentUser(email.trim());
    closeAuthModal();
  };

  const handleLogout = () => {
    localStorage.removeItem('kekyaa_user_email');
    setCurrentUser('');
  };

  return (
    <>
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
          {currentUser ? (
            <>
              <span className="p_opensans app__navbar-user">Hi, {currentUser}</span>
              <button type="button" className="app__navbar-auth-btn p_opensans" onClick={handleLogout}>Log Out</button>
            </>
          ) : (
            <a href="#login" className="p_opensans" onClick={openAuthModal}>Log In / Register</a>
          )}
        </div>

        <div className="app__navbar-smallscreen">
          <FaBirthdayCake color="#000000" fontSize={27} className="menu-icon" onClick={() => setToggleMenu(true)} />

          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
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

      {showAuthModal && (
        <div className="app__auth-modal-overlay" onClick={closeAuthModal}>
          <div className="app__auth-modal" onClick={(event) => event.stopPropagation()}>
            <h2 className="headtext__cormorant">Login</h2>
            <form onSubmit={handleLogin} className="app__auth-form">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {error && <p className="app__auth-error">{error}</p>}
              <button type="submit" className="custom__button">Continue</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
