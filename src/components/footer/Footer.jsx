import React from 'react'

import './footer.scss'

import { Link } from 'react-router-dom'

import bg from '../../assets/footer-bg.jpg'
import logo from '../../assets/logo_web.png'

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">Movie</Link>
          </div>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Term Of Services</Link>
            <Link to="/">About Us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">FAQs</Link>
            <Link to="/">VietNam Movies</Link>
            <Link to="/">Rotten Tomato</Link>
            <Link to="/">My Company</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Disney Plus+</Link>
            <Link to="/">HBO HD</Link>
            <Link to="/">NetFlix</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer