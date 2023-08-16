
import '../styles/Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return(
    <div id='contact'>

      <div className='contact-me'>

        <div className='contact-details'>
          <h1 className='connect-header'>Connect with me!</h1>
          <p style={{textAlign: 'center', fontSize: '2em'}}>‧₊˚❀༉‧₊˚.</p>
          <div className='enquiries'>
            <h2 className='business-enquiries'>Business enquiries:</h2>
            <p className='email'>Email address</p>
            <p className='phone'>Phone number</p>
          </div>

          <div className='socials'>
            <h2 className='socials-header'>My socials:</h2>
            <a href='https://instagram.com' target='_blank' rel="noreferrer"><span className='insta'><FontAwesomeIcon icon={faInstagram}/></span></a>
            <a href='https://youtube.com' target='_blank' rel="noreferrer"><span className='yt'><FontAwesomeIcon icon={faYoutube}/></span></a>
            {/* <p className='yt'>Youtube</p>
            <p className='insta'>Instagram</p> */}
            {/* <p className='super'>Superprof</p> */}
          </div>

        </div>


        <div className='contact-image'>
          <img className='contact-img' src='images/collage2.png' alt='collage-2'/>

        </div>


      </div>


    </div>
  )
};

export default Contact;
