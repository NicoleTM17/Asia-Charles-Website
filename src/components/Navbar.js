/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


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
        <li><Link to='#home' smooth style={{ textDecoration: 'none' }}>Home</Link></li>
        <li><Link to='#about' smooth style={{ textDecoration: 'none' }}>About</Link></li>
        <li><Link to='#services' smooth style={{ textDecoration: 'none' }}>Services</Link></li>
        <li><Link to='#reviews' smooth style={{ textDecoration: 'none' }}>Reviews</Link></li>
        <li><Link to='#contact' smooth style={{ textDecoration: 'none' }}>Contact</Link></li>
        <li style={{ marginRight: '0.5em' }}><a href='#' target='_blank'>CV</a></li>
      </ul>

      </div>

    </div>
  );
};

export default Navbar;
