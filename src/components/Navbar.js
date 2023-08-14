import { useState, useEffect } from 'react';

import '../styles/Navbar.css';
import Menu from './Menu.js';


function Navbar(){

    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    }

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 540);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


  return(
    <div id='nav-bar'>
      <img className='logo' src='images/logo.png' alt='logo'/>
      {isMobile ? (
        <Menu isOpen={menuOpen} onClick={handleMenuClick} />
      ) : (
        <ul className='links'>
          <li className='link'>Home</li>
          <li className='link'>About</li>
          <li className='link'>Services</li>
          <li className='link'>Reviews</li>
          <li className='link space'>Contact me</li>
        </ul>
      )}
      {isMobile && menuOpen && (
        <div className="mobile-links">
          <ul>
            <li className='link'>Home</li>
            <li className='link'>About</li>
            <li className='link'>Services</li>
            <li className='link'>Reviews</li>
            <li className='link space'>Contact me</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;



 // OLD CODE FOR MAKING STICKY NAVBAR:
    // const [isSticky, setIsSticky] = useState(false);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     setIsSticky(window.scrollY > 200)
    //     // console.log(window.scrollY);
    //   }
    //   window.addEventListener('scroll', handleScroll);
    //   return () => window.removeEventListener('scroll', handleScroll);
    // });
