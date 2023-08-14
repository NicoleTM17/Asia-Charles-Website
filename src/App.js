import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import About from './components/About.js';

library.add(faChevronDown);

function App() {
  return (
    <div className="wrapper">
      <Navbar/>
      <Banner/>
      <About/>
    </div>
  );
}

export default App;
