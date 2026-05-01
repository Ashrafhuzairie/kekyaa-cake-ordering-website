import React from 'react';
import { BsInstagram, BsTiktok, BsWhatsapp, BsThreads } from 'react-icons/bs';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className="app__footer" id="login">
    
    {/*<FooterOverlay />
    <Newsletter /> */}

    <div className="app__footer-links">

      {/* LOGO */}
      <div className="app__footer-links_logo">
        <img src={images.kekyaa} alt="footer_logo" />

        <p className="app__footer-links-headtext">
          "Freshly crafted cakes, made with passion."
        </p>

        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />

        {/* SOCIAL ICONS */}
        <div className="app__footer-links_icons">
          <a href="https://instagram.com/kekyaa.cakery" target="_blank" rel="noreferrer">
            <BsInstagram className="icon instagram" />
          </a>

          <a href="https://tiktok.com/@kekyaa.cakery" target="_blank" rel="noreferrer">
            <BsTiktok className="icon tiktok" />
          </a>

          <a href="https://wa.me/60195905184" target="_blank" rel="noreferrer">
            <BsWhatsapp className="icon whatsapp" />
          </a>

          <a href= "https://www.threads.com/@kekyaa.cakery?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noreferrer">
            <BsThreads className="icon thread" />
          </a>
        </div>
      </div>

    </div>

    {/* COPYRIGHT */}
    <div className="app__footer-copyright">
      <p>2026 Kekyaa. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;