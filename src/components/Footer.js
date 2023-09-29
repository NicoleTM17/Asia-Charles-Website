import '../styles/Footer.css';
import '../styles/Responsive.css'; // MOVE TO NEXT COMPONENT

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return(
    <div id="footer">
      <p className='footer-copyright'>© Asia Charles 2023</p>
      <div className='footer-socials'>
        <a href='https://www.linkedin.com/in/asia-charles-113477186/' target='_blank' rel="noreferrer"><span className='footer-linkedin'><FontAwesomeIcon icon={faLinkedin}/></span></a>
        <a href='https://www.youtube.com/@justlovemeditations' target='_blank' rel="noreferrer"><span className='footer-yt'><FontAwesomeIcon icon={faYoutube}/></span></a>
      </div>
    </div>
  )

};

export default Footer;
