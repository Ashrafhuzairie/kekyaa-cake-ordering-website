import React from 'react';
import { images , data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fill your palate"/>
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-cakes flex__center" style={{ flexDirection: 'column' }}>
        <p className="app__specialMenu-menu_heading">Cakes</p>
        <div className="app__specialMenu-menu_items">
          {data.cakes.map((cake, index) => (
            <MenuItem key={cake.title + index} title={cake.title} price={cake.price} tags={cake.tags} />
          ))}
        </div>
        <div style={{ marginTop: '1rem' }}>
          <button type="button" className="custom__button">View More</button>
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

    </div>  
  </div>);

export default SpecialMenu;
