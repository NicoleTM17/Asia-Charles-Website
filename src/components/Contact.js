// import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faChevronUp} from '@fortawesome/free-solid-svg-icons';

import Form from './Form.js';

function Contact() {
  return(
    <div id='contact'>

    <div className='contact-wrapper'>


    <div className='contact-details'>
      <h1 className='contact-header'>Contact and bookings</h1>
      <p>Get in touch with me today to discuss...</p>
      <ul className='discussion-list'>
        <li>Bookings and Consultations</li>
        <li>Questions about services</li>
        <li>Questions about pricing</li>
        <li>General enquiries</li>
      </ul>
      <p>Email by filling in this form - I will try to get back to you within 2-4 working days </p>
      <p>Or directly send an email to <span style={{textDecoration: 'underline', fontWeight: 'bold'}}>asicharles.mindfulness@gmail.com</span></p>

      <div className='youtube'>Subscribe to my <a style={{color: 'var(--nav-color)'}} href='https://www.youtube.com/@justlovemeditations' target='_blank' rel="noreferrer"><FontAwesomeIcon style={{marginRight: '.2em'}} icon={faYoutube}/></a>channel to check out my guided meditations </div>
      <span style={{marginRight: '.2em'}}>↳</span><a style={{color: 'var(--nav-color)', fontWeight: 'bold'}} href='https://www.youtube.com/@justlovemeditations' target='_blank' rel="noreferrer"><span>Just Love Meditations</span></a>

    </div>



    <div className='contact-form-section'>
      <Form/>

    </div>



    </div>
    </div>
  )
};

export default Contact;
