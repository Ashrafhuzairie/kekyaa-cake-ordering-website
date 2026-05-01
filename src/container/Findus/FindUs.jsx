import React from 'react';
import { BsWhatsapp, BsInstagram, BsTiktok } from 'react-icons/bs';
import './FindUs.css';

const FindUs = () => (
  <div className="app__findus app__bg flex__center section__padding" id="contact">
    
    <div className="app__findus-content flex__center">
      
      <div className="app__findus-content_info">

        <h1 className="headtext__cormorant">How to order?</h1>

        {/* INFO */}
        <div className="contact-list">
          <p>📍 Iskandar Puteri / Medini, Johor</p>
          <p>🎂 Pre-order required (1–2 days in advance)</p>
          <p>🚚 Delivery available within Johor Bahru</p>
        </div>

        {/* SOCIAL MEDIA 
        <div className="social-links">
          <a href="https://instagram.com/kekyaa.cakery" target="_blank" rel="noreferrer">
            <BsInstagram className="icon instagram" />
            Instagram
          </a>

          <a href="https://tiktok.com/@kekyaa.cakery" target="_blank" rel="noreferrer">
            <BsTiktok className="icon tiktok" />
            TikTok
          </a>
        </div>*/}

        {/* CTA TEXT */}
        <p className="cta-text">
          🎯 Ready to order your cake? Message us on WhatsApp now!
        </p>

        {/* WHATSAPP */}
        <div className="app__findus-connect">
          <a
            href="https://wa.me/60195905184?text=Hi%20I%20want%20to%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <BsWhatsapp className="wa-icon whatsapp" />
            WhatsApp
          </a>
        </div>

      </div>

    </div>  

  </div>
);

export default FindUs;