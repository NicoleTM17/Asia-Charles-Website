import { HashLink as Link } from 'react-router-hash-link';
import Carousel from 'react-bootstrap/Carousel';

import Banner1 from './carousel/Banner1.jpg';
import Banner2 from './carousel/Banner2.jpg';
import Banner3 from './carousel/Banner3.jpg';

import '../styles/Banner.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';

function Banner() {
  return(
    <Carousel fade controls={false} indicators={false} interval={5000} id="banner" className="carousel-container">
      <Carousel.Item className='carousel-item'>
        <img className="d-block min-vh-100 w-100 carousel-image custom-opacity" src={Banner1} alt="First slide" />
        <Carousel.Caption className='carousel-caption d-flex flex-column justify-content-center h-100'>
          <h3 className="slogan fade-in-text">Be brave, be free, be you</h3>
          <Link to='#about' smooth><div><FontAwesomeIcon className='chevron-down' icon={faChevronDown}/></div></Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <img className="d-block min-vh-100 w-100 carousel-image custom-opacity" src={Banner2} alt="Second slide" />
        <Carousel.Caption className='carousel-caption d-flex flex-column justify-content-center h-100'>
          <h3 className="slogan">Be brave, be free, be you</h3>
          <Link to='#about' smooth><div><FontAwesomeIcon className='chevron-down' icon={faChevronDown}/></div></Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <img className="d-block min-vh-100 w-100 carousel-image custom-opacity" src={Banner3} alt="Third slide" />
        <Carousel.Caption className='carousel-caption d-flex flex-column justify-content-center h-100'>
          <h3 className="slogan">Be brave, be free, be you</h3>
          <Link to='#about' smooth><div><FontAwesomeIcon className='chevron-down' icon={faChevronDown}/></div></Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

};

export default Banner;
