import { useState, useEffect } from 'react';

import '../styles/Navbar.css';


function Navbar(){

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 200)
        // console.log(window.scrollY);
      }
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    });

  return(
    <div id='navbar' className={`${isSticky ? "sticky" : ""}`}>
      <img className='logo' src='images/logo.png' alt='logo'/>
      <ul className='links'>
        <li className='link'>Home</li>
        <li className='link'>About</li>
        <li className='link'>Services</li>
        <li className='link'>Reviews</li>
        <li className='link space'>Contact me</li>
      </ul>
    </div>
  )
};

export default Navbar;
