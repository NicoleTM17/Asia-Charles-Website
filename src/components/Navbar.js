// import { HashLink as Link } from 'react-router-hash-link';
import Nav from 'react-bootstrap/Nav';
import Navbar  from 'react-bootstrap/Navbar';
import { useState } from 'react';

import '../styles/Navbar.css';


function NavbarElements(){

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  }

  // const screenSize = window.innerWidth;

  return(
    <div id='home' className='nav-bar'>
      <Navbar expand="md" expanded={expanded} onToggle={handleToggle}>
        <Navbar.Brand href="#home">
          <img
            src="images/logo.png"
            className="d-inline-block align-top logo"
            alt="logo"
          />
        </Navbar.Brand>

        <div className='ml-auto'>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className='links ml-auto'>
            <Nav.Link className='link' style={{textDecoration: 'underline', textUnderlineOffset: 3}} href="#home">Home</Nav.Link>
            <Nav.Link className='link' href="#about">About</Nav.Link>
            <Nav.Link className='link' href="#services">Services</Nav.Link>
            <Nav.Link className='link' href="#reviews">Reviews</Nav.Link>
            <Nav.Link className='link' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarElements;
