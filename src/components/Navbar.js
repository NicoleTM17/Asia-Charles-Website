/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import '../styles/Navbar.css';


function Navbar(){

  const [isActive, setIsActive] = useState(false);


  function toggleNavLinks() {
    setIsActive(!isActive);
  }


  return(
    <div id='home' className='navbar'>

      <img src='images/logo.png' className='brand-logo' alt='logo'/>

      <a href='#' className={`toggle-button ${isActive ? 'active' : ''}`} onClick={toggleNavLinks}>
        {isActive ? (
          <span className='exit'>✘</span>
        ) : (
          <>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </>
          )}
      </a>


      <div className={`navbar-links ${isActive ? 'active' : ''}`}>

        <ul>
          <li><Link to="/" className='active-link' style={{ textDecoration: 'none' }}>Home</Link></li>

          <li><ScrollLink to="about" spy={true} smooth={true} duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }}>About</ScrollLink></li>

          <li><Link to="/services" className='active-link' style={{ textDecoration: 'none' }}>Services</Link></li>

          <li><ScrollLink to="reviews" spy={true} smooth={true} duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }}>Reviews</ScrollLink></li>

          <li><ScrollLink to="contact" spy={true} smooth={true} duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }}>Contact</ScrollLink></li>

          <li style={{ marginRight: '0.5em' }}><a href='#' target='_blank' rel="noopener noreferrer">CV</a></li>
        </ul>
      </div>


    </div>
  );
};

export default Navbar;
