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
          <Link to='#home' smooth style={{textDecoration: 'none'}} ><li><a href='#'>Home</a></li></Link>
          <Link to='#about' smooth style={{textDecoration: 'none'}}><li><a href='#'>About</a></li></Link>
          <Link to='#services' smooth style={{textDecoration: 'none'}}><li><a href='#'>Services</a></li></Link>
          <Link to='#reviews' smooth style={{textDecoration: 'none'}}><li><a href='#'>Reviews</a></li></Link>
          <Link to='#contact' smooth style={{textDecoration: 'none'}}><li><a className='longer' href='#'>Contact</a></li></Link>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
