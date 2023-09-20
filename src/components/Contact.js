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
        <li>To discuss services</li>
        <li>To discuss pricing</li>
        <li>Business collaborations</li>
        <li>General inquiries</li>
      </ul>
      <p>Email by filling in this form - I will get back to you within 2-4 working days </p>
      <p>Or directly send an email to <a style={{color: 'var(--licorice-black-color'}} href='mailto:asicharles.mindfulness@gmail.com' target='_blank' rel="noreferrer"><span style={{textDecoration: 'underline', fontWeight: 'bold'}}>asicharles.mindfulness@gmail.com</span></a></p>

      <div className='youtube'>Subscribe to my <a style={{color: 'var(--licorice-black-color)'}} href='https://www.youtube.com/@justlovemeditations' target='_blank' rel="noreferrer"><FontAwesomeIcon style={{marginRight: '.2em'}} icon={faYoutube}/></a>channel to check out my guided meditations </div>
      <a style={{color: 'var(--licorice-black-color)', fontWeight: 'bold'}} href='https://www.youtube.com/@justlovemeditations' target='_blank' rel="noreferrer"><span>Just Love Meditations</span></a>

    </div>



    <div className='contact-form-section'>
      <Form/>

    </div>



    </div>
    </div>
  )
};

export default Contact;
