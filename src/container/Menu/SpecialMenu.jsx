import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu section__padding" id="menu">

    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fill your palate" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-cakes">

        <div className="app__specialMenu-menu_items">


{data.klasik.map((cake, index) => (
            <div key={index} className="product-group">
              
              {/* TITLE */}
              <p className="product-title">{cake.title}</p>

              <div className="product-title-img">
                <img src={cake.img} alt={cake.title} />
              </div>

              {/* VARIANTS */}
              <div className="product-variants">
              {cake.variants.map((v, i) => (
               <div key={i}>
                  <span>{v.size}</span>
                  <span>{v.price}</span>
                </div>
              ))}

            </div>
          </div>
          ))}

          {data.klasikGanache.map((cake, index) => (
            <div key={index} className="product-group">
              
              {/* TITLE */}
              <p className="product-title">{cake.title}</p>

              <div className="product-title-img">
                <img src={cake.img} alt={cake.title} />
              </div>

              {/* VARIANTS */}
              <div className="product-variants">
                {cake.variants.map((v, i) => (
                <div key={i}>
                  <span>{v.size}</span>
                  <span>{v.price}</span>
                </div>
                ))}
              </div>
            </div>
          ))}

          {data.indulgenceMousses.map((cake, index) => (
            <div key={index} className="product-group">
              
              {/* TITLE */}
              <p className="product-title">{cake.title}</p>

              <div className="product-title-img">
                <img src={cake.img} alt={cake.title} />
              </div>

              {/* VARIANTS */}
              <div className="product-variants">
                {cake.variants.map((v, i) => (
                <div key={i}>
                  <span>{v.size}</span>
                  <span>{v.price}</span>
                </div>
                ))}
              </div>
          </div>
          ))}

          {data.indulgence.map((cake, index) => (
            <div key={index} className="product-group">
              
              {/* TITLE */}
              <p className="product-title">{cake.title}</p>

              <div className="product-title-img">
                <img src={cake.img} alt={cake.title} />
              </div>

              {/* VARIANTS */}
              <div className="product-variants">
                {cake.variants.map((v, i) => (
                <div key={i}>
                  <span>{v.size}</span>
                  <span>{v.price}</span>
                </div>
                ))}
              </div>

            </div>
            
          ))} 

        </div>

        {/* BUTTON */}
        <div style={{ marginTop: '1rem' }}>
          <button type="button" className="custom__button">
            View More
          </button>
        </div>

      </div>

    </div>
  </div>
);

export default SpecialMenu;

/* import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu section__padding" id="menu">
    <img src={img} alt={title} className="primary-img" />

    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fill your palate" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">

      <div className="app__specialMenu-cakes">

        <p className="app__specialMenu-menu_subheading">Kek Batik Indulgence</p>
        <div className="app__specialMenu-menu_items">
          {data.indulgence.map((cake, index) => (
            <MenuItem
              key={cake.title + index}
              title={cake.title}
              price={cake.price}
              img={cake.img}
            />
          ))}
        </div>

        <p className="app__specialMenu-menu_subheading">Kek Batik Indulgence Mousses</p>
        <div className="app__specialMenu-menu_items">
          {data.indulgenceMousses.map((cake, index) => (
            <MenuItem
              key={cake.title + index}
              title={cake.title}
              price={cake.price}
              img={cake.img}
            />
          ))}
        </div>

        <p className="app__specialMenu-menu_subheading">Kek Batik Klasik</p>
        <div className="app__specialMenu-menu_items">
          {data.klasik.map((cake, index) => (
            <MenuItem
              key={cake.title + index}
              title={cake.title}
              price={cake.price}
              img={cake.img}
            />
          ))}
        </div>

        <div style={{ marginTop: '1rem' }}>
          <button type="button" className="custom__button">
            View More
          </button>
        </div>

      </div>

    </div>
  </div>
);

export default SpecialMenu; */

/*const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fill your palate"/>
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-cakes flex__center" style={{ flexDirection: 'column' }}>
        <p className="app__specialMenu-menu_heading">Cakes</p>

        <p className="app__specialMenu-menu_subheading">Kek Batik Indulgence</p>

        <div className="app__specialMenu-menu_items">
          {data.indulgence.map((cake, index) => (
            <MenuItem 
            key={cake.title + index} 
            title={cake.title} 
            price={cake.price}
            img={cake.img} 
            />
          ))}
        </div>
        <p className="app__specialMenu-menu_subheading">Kek Batik Indulgence Mousses</p>

        <div className="app__specialMenu-menu_items">
          {data.indulgenceMousses.map((cake, index) => (
            <MenuItem key={cake.title + index} 
            title={cake.title} 
            price={cake.price} 
            img={cake.img} 
            />
          ))}
        </div>

        <p className="app__specialMenu-menu_subheading">Kek Batik Klasik</p>
        <div className="app__specialMenu-menu_items">
          {data.klasik.map((cake, index) => (
            <MenuItem key={cake.title + index} 
            title={cake.title}
            price={cake.price} 
            img={cake.img} 
            />
          ))}
        </div>

        <div style={{ marginTop: '1rem' }}>
          <button type="button" className="custom__button">View More</button>
        </div>
      </div>

    </div>  
  </div>); */

