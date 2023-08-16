import '../styles/Footer.css';
import '../styles/Responsive.css'; // MOVE TO NEXT COMPONENT

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return(
    <div id="footer">
      <p className='footer-copyright'>© Asia Charles 2023</p>
      <div className='footer-socials'>
        <span className='footer-insta'><FontAwesomeIcon icon={faInstagram}/></span>
        <span className='footer-yt'><FontAwesomeIcon icon={faYoutube}/></span>
      </div>
    </div>
  )

};

export default Footer;
