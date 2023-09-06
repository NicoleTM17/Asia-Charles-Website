import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import WebFont from 'webfontloader';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Reviews from './components/Reviews.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';


library.add(faChevronDown);
library.add(faChevronUp);
library.add(faInstagram);
library.add(faYoutube);



WebFont.load({
  google: {
  families: [
    'Bellota:ital,wght@0,300;1,400',
    'Buda:wght@300',
    'GFS+Neohellenic:ital@0,1',
    'Josefin+Sans:ital,wght@0,300;0,600;1,300;1,500',
    'Quicksand:wght@300;600',
    'Text+Me+One',
    'Asap:wght@300',
    'Ubuntu:wght@300;400&display=swap',
  ]
  }
  });

function App() {
  return (
    <Router>
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

function Home() {
  return (
    <>
      <Banner  />
      <About id='about' />
      <Reviews id='reviews'  />
      <Contact id='contact'  />
    </>
  );
}

export default App;


// Banner
// About
// Reviews
// Contact
