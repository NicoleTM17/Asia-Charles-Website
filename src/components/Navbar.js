import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

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
    <div id ='home' className='nav-bar'>
      <img className='logo' src='images/logo.png' alt='logo'/>
      {isMobile ? (
        <Menu isOpen={menuOpen} onClick={handleMenuClick} />
      ) : (
        <ul className='links'>
          <li className='link' style={{textDecoration: 'underline', textUnderlineOffset: 3}}>Home</li>
          <Link to='#about' style={{textDecoration: 'none'}} smooth><li className='link'>About</li></Link>
          <Link to='#services' style={{textDecoration: 'none'}} smooth><li className='link'>Services</li></Link>
          <Link to='#reviews' style={{textDecoration: 'none'}} smooth><li className='link'>Reviews</li></Link>
          <Link to='#contact' style={{textDecoration: 'none'}} smooth><li className='link space'>Contact me</li></Link>
        </ul>
      )}
      {isMobile && menuOpen && (
        <div className="mobile-links">
          <ul>
            {/* <li className='link'>Home</li> */}
            <Link to='#about' style={{textDecoration: 'none'}} smooth><li className='link'>About</li></Link>
            <Link to='#services' style={{textDecoration: 'none'}} smooth><li className='link'>Services</li></Link>
            <Link to='#reviews' style={{textDecoration: 'none'}} smooth><li className='link'>Reviews</li></Link>
            <Link to='#contact' style={{textDecoration: 'none'}} smooth><li className='link space'>Contact me</li></Link>
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
