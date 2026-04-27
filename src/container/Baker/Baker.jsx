import React from 'react';
import { images } from '../../constants';
import { SubHeading} from '../../components';
import './Baker.css';

const Baker = () => (
  <div className="app__bg app__wrapper section__padding" id="baker">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.baker} alt="baker img" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Baker's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      
      <div className="app__baker-content">
        <div className="app__baker-content_quote">
          <img src={images.quote} alt="quote img" />
          <p className="p__opensans">Our cakes are crafted with love and passion, using only the finest ingredients to create unforgettable flavors that delight your taste buds</p>
        </div>

        <p>""</p>
        
        <p className="p__opensans">With a commitment to quality and a passion for baking, we strive to create cakes that not only look stunning but also taste heavenly. Our dedication to using the finest ingredients and our meticulous attention to detail ensure that every bite is a delightful experience. We believe that a cake is more than just a dessert; it's a celebration of life's sweetest moments, and we are honored to be a part of those special occasions with our delectable creations</p>
      </div>

      <div className="app__baker-sign">
        <p>Aliatul Aqilah </p>
        <p className="p__opensans">Baker & Founder</p>
        <img src={images.sign} alt="sign img" />
      </div>
    </div>
  </div>
);

export default Baker;
