import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import NavbarElements from './components/Navbar.js';
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

function App() {
  return (
    <div className="wrapper">
      <NavbarElements/>
      <Banner/>
      <About/>
      <Services/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
