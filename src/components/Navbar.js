/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import '../styles/Navbar.css';


function Navbar(){

  const [isActive, setIsActive] = useState(false);


  function toggleNavLinks() {
    setIsActive(!isActive);
  }

  // function scrollToSection(sectionId) {
  //   scroll.scrollTo(sectionId, {
  //     duration: 800, // Adjust the duration as needed
  //     smooth: 'easeInOutQuart', // You can change the scrolling behavior
  //     offset: -50, // Adjust the offset as needed (to account for any fixed headers)
  //   });
  //   toggleNavLinks(); // Close the navigation menu after clicking a link
  // }



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
          <li><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
          <li><Link to='#about' smooth style={{ textDecoration: 'none', cursor: 'pointer' }}>About</Link></li>
          <li><Link to='/services' smooth style={{ textDecoration: 'none' }}>Services</Link></li>
          <li><Link to='#reviews' smooth style={{ textDecoration: 'none', cursor: 'pointer' }}>Reviews</Link></li>
          <li><Link to='#contact' smooth  style={{ textDecoration: 'none', cursor: 'pointer' }}>Contact</Link></li>
          <li style={{ marginRight: '0.5em' }}><a href='#' target='_blank' rel="noopener noreferrer">CV</a></li>
        </ul>

      </div>

    </div>
  );
};

export default Navbar;
