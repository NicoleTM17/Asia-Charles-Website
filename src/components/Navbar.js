/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
// import { HashLink as Link } from 'react-router-hash-link';

import '../styles/Navbar.css';


function Navbar(){

  const [isActive, setIsActive] = useState(false);


  function toggleNavLinks() {
    setIsActive(!isActive);
  }


  return(
    <div id='home' className='navbar'>

      <NavLink to='/' className='brand-logo'><img src='images/logo.png' alt='logo'/></NavLink>

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
          <li><NavLink to="/" className={(navData) => (navData.isActive ? "navlink-bold" : 'none')}>Home</NavLink></li>

          <li><ScrollLink to="about" spy={true} smooth='true' duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }}>About</ScrollLink></li>

          <li><NavLink to="/services" className={(navData) => (navData.isActive ? "navlink-bold" : 'none')}>Services</NavLink></li>

          <li><ScrollLink to="reviews" spy={true} smooth='true' duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }}>Reviews</ScrollLink></li>

          <li><ScrollLink to="contact" spy={true} smooth='true' duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }}>Contact</ScrollLink></li>

          <li style={{ marginRight: '0.5em' }}><a href='https://drive.google.com/file/d/1RSFSbcX48HvCzbIEpaUu3df6lHdl5BHk/view?usp=drivesdk' target='_blank' rel="noopener noreferrer">CV</a></li>
        </ul>
      </div>


    </div>
  );
};

export default Navbar;
