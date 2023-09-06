// import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faChevronUp} from '@fortawesome/free-solid-svg-icons';

import Form from './Form.js';

function Contact() {
  return(
    <div id='contact'>

    {/* <Link className='chevron-btn sticky' to='#home' smooth><FontAwesomeIcon icon={faChevronUp}/></Link> */}

      <div className='contact-me'>

        <div className='contact-details'>
          <h1 className='connect-header'>Connect with me</h1>
          {/* <p style={{textAlign: 'center', fontSize: '2em'}}>‧₊˚❀༉‧₊˚.</p> */}
          <div className='enquiries'>
            <h2 className='business-enquiries'>Business enquiries:</h2>
            <p className='email'>Email address: asicharles.mindfulness@gmail.com </p>
          </div>

            <a href='https://www.instagram.com/gypsysoulsnippet/' target='_blank' rel="noreferrer"><span className='insta'><FontAwesomeIcon icon={faInstagram}/></span></a>
            <div className='youtube'><a href='https://www.youtube.com/@justlovemeditations' target='_blank' rel="noreferrer"><span className='yt'><FontAwesomeIcon icon={faYoutube}/></span></a><span style={{fontStyle: 'italic',fontSize: '0.75em'}}>Subscribe to my channel/Listen to my guided meditations</span></div>

        </div>


        <div className='form-section' style={{marginRight: '-7em'}}>
          <Form/>

        </div>


      </div>


    </div>
  )
};

export default Contact;
