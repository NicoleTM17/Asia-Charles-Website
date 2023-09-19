/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import '../styles/Navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNavLinks = () => {
    setIsActive(!isActive);
  };

  const isHome = location.pathname === '/'; // Check if the current page is the home page

  const handleNavClick = (section) => {
    // Close the mobile menu when a link is clicked
    setIsActive(false);

    if (isHome) {
      // If the current page is the home page, scroll to the specified section/component
      scroll.scrollTo(section, { smooth: true, duration: 500 });
    } else {
      // If the current page is the services page, navigate to the home page and then scroll
      navigate(`/?section=${section}`);
      setTimeout(() => {
        scroll.scrollTo(section, { smooth: true, duration: 500 });
      }, 100);
    }
  };


  return (
    <div id='home' className='navbar'>
      <NavLink to='/' className='brand-logo'>
        <img src='images/logo.png' alt='logo' />
      </NavLink>

      <a
        href='#'
        className={`toggle-button ${isActive ? 'active' : ''}`}
        onClick={toggleNavLinks}
      >
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
          <li>
            <a
              onClick={() => handleNavClick('')}
              className={isHome ? 'navlink-bold' : ''}
            >
              Home
            </a>
          </li>

          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              style={{ textDecoration: 'none', cursor: 'pointer' }}
              onClick={() => handleNavClick('about')}
            >
              About
            </ScrollLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={isHome === false ? 'navlink-bold' : ''}
              onClick={() => handleNavClick('')}
            >
              Services
            </NavLink>
          </li>

          <li>
            <ScrollLink
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              style={{ textDecoration: 'none', cursor: 'pointer' }}
              onClick={() => handleNavClick('reviews')}
            >
              Reviews
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              style={{ textDecoration: 'none', cursor: 'pointer' }}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </ScrollLink>
          </li>

          <li style={{ marginRight: '0.5em' }}>
            <a
              href='https://drive.google.com/file/d/1RSFSbcX48HvCzbIEpaUu3df6lHdl5BHk/view?usp=drivesdk'
              target='_blank'
              rel="noopener noreferrer"
              onClick={toggleNavLinks}
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
