import React from 'react';

import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center"> 
        <img src={images.kekyaa} alt="about_kekyaa" />
      </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p_opensans">Welcome to Kekyaa, where we are passionate about creating the most delicious and visually stunning cakes. Our mission is to bring joy and sweetness to every occasion with our handcrafted cakes made from the finest ingredients.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_cake flex__center">
        <img src={images.cake11} alt="about_cake" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p_opensans">Founded in 2020, Kekyaa has quickly become a beloved destination for cake lovers. Our journey began with a simple idea: to create cakes that not only taste amazing but also look like works of art. With a team of skilled bakers and decorators, we have crafted a wide variety of cakes that cater to every taste and occasion.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
