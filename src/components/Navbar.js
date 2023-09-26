/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';

import '../styles/Navbar.css';


function Navbar(){

  const [isActive, setIsActive] = useState(false);


  function toggleNavLinks() {
    setIsActive(!isActive);
  }

  function closeNav(){
    setIsActive(false);
  }


  return(
    <div id='home' className='navbar'>

      <NavLink to='/' className='brand-logo'><img src='images/logo.png' alt='logo'/></NavLink>


      <div className={`menu-btn ${isActive === true ? 'exit-nav' : ''}`} onClick={toggleNavLinks}>
          <div className='menu-btn-burger'>

          </div>
      </div>


      <div className={`navbar-links ${isActive ? 'active' : ''}`}>

        <ul>
          <li><NavLink onClick={closeNav} to="/" className={(navData) => (navData.isActive ? "navlink-bold" : 'none')}>Home</NavLink></li>

          <li><NavLink onClick={closeNav} to="/?id=about" style={{ textDecoration: 'none', cursor: 'pointer' }}>About</NavLink></li>

          <li><NavLink onClick={closeNav} to="/services" className={(navData) => (navData.isActive ? "navlink-bold" : 'none')}>Services</NavLink></li>

          <li><NavLink onClick={closeNav} to="/?id=reviews"  style={{ textDecoration: 'none', cursor: 'pointer' }}>Reviews</NavLink></li>

          <li><NavLink onClick={closeNav} to="/?id=contact"  style={{ textDecoration: 'none', cursor: 'pointer' }}>Contact</NavLink></li>

          <li style={{ marginRight: '0.5em' }}><a href='https://drive.google.com/file/d/1RSFSbcX48HvCzbIEpaUu3df6lHdl5BHk/view?usp=drivesdk' target='_blank' rel="noopener noreferrer">CV</a></li>
        </ul>

      </div>


    </div>
  );
};

export default Navbar;
