import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.gallery1, images.gallery2, images.gallery3, images.gallery4, images.gallery5, images.gallery6, images.gallery7];


const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
      current.style.scrollBehavior = 'smooth';
    } else {
      current.scrollLeft += 300;
      current.style.scrollBehavior = 'smooth';
    }
  }


  return (

  <div className="app__gallery flex__center" id="gallery">
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{ color: '#000000', marginTop: '2rem' }}>Batik's Collection</p>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>View More</button>
    </div>
    <div className="app__gallery-images">
      <div className="app__gallery-images_container"
        ref={scrollRef}>
        {galleryImages.map((image, index) => (
          <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
            <img src={image} alt="gallery" />
          </div>
        ))}
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className="app__gallery_arrow-icon" onClick={() => scroll('left')} />
        <BsArrowRightShort className="app__gallery_arrow-icon" onClick={() => scroll('right')} />
      </div>
    </div>
  </div>
)};


export default Gallery;
