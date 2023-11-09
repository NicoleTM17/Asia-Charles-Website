import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import WebFont from 'webfontloader';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';


import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Services from './components/Services.js';
import Footer from './components/Footer.js';


library.add(faChevronDown);
library.add(faChevronUp);
library.add(faInstagram);
library.add(faYoutube);
library.add(faCircleUp);
library.add(faLinkedin);



// WebFont.load({
//   google: {
//   families: [
//     'Josefin+Sans:ital,wght@0,300;0,600;1,300;1,500',
//     'Text+Me+One',
//     'Ubuntu:wght@300;400&display=swap',
//     'Croissant+One&family',
//   ]
//   }
//   });

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



export default App;
