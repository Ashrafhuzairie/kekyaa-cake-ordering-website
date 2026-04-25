import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className ="app__wrapper-info">
      <SubHeading title="Life is too short to skip the cakes" />
      <h1 className="app__header-h1">The Best Cake in Town</h1>
      <p className="p_opensans" style={{ margin: '2rem 0' }}>Indulge in our delectable cakes, crafted with love and the finest ingredients. From classic flavors to innovative creations, we have a cake for every occasion. Experience the perfect blend of taste and artistry with us.</p>
      <button type="button" className="custom__button">Explore Menu</button>

    </div>

    <div className="app__wrapper-img">
      <img src={images.Welcome} alt="header img" />
    </div>


  </div>
);

export default Header;
