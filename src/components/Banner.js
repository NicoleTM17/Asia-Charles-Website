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
    <div id='banner' className='carousel-container'>
      <Carousel fade controls={false} indicators={false}>

        <Carousel.Item>
          <img className="d-block w-100 carousel-image custom-opacity" src={Banner1} alt="First slide"/>
          <Carousel.Caption>
            <h3 className='carousel-slogan slogan fade-in-text'>Be brave, be free, be you</h3>
            <Link to='#about' smooth><div><FontAwesomeIcon className='chevron-down' icon={faChevronDown}/></div></Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item> <img className="d-block w-100 carousel-image custom-opacity" src={Banner2} alt="Second slide"/>
          <Carousel.Caption>
            <h3 className='carousel-slogan slogan'>Be brave, be free, be you</h3>
            <Link to='#about' smooth><div><FontAwesomeIcon className='chevron-down' icon={faChevronDown}/></div></Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item> <img className="d-block w-100 carousel-image custom-opacity" src={Banner3} alt="Third slide"/>
          <Carousel.Caption>
            <h3 className='carousel-slogan slogan'>Be brave, be free, be you</h3>
            <Link to='#about' smooth><div><FontAwesomeIcon className='chevron-down' icon={faChevronDown}/></div></Link>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );

};

export default Banner;
