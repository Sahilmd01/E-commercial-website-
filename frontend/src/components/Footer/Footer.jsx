import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();  // Dynamic current year

  return (
    <footer className='footer' id='footer'>
      <div className="footer-container">
        <div className="footer-brand">
          <img src={assets.logo} alt="Eattoo Logo" />
          <p>
            Eattoo is your go-to food partner, bringing delicious meals right to your doorstep. Trusted by thousands across India.
          </p>
          <div className="social-icons">
            <a href="#"><img src={assets.facebook_icon} alt="Facebook" /></a>
            <a href="#"><img src={assets.twitter_icon} alt="Twitter" /></a>
            <a href="#"><img src={assets.linkedin_icon} alt="LinkedIn" /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📞 +91-98765-43210</p>
          <p>📧 support@Eattoo.in</p>
          <p>📍 Mumbai, Maharashtra, India</p>
        </div>

        <div className="footer-subscribe">
          <h3>Subscribe</h3>
          <p>Get updates, offers, and more.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Eattoo. All rights reserved. made with ❤️ by sahil</p>
        <button className="scroll-to-top" onClick={scrollToTop}>↑ Top</button>
      </div>
    </footer>
  );
};

export default Footer;
