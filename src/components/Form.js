import { useState } from "react";
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2';

import '../styles/Form.css';

function Form(){

  const [counter, setCounter] = useState(0);

  // const form = useRef();

  // const sendEmail = (event) => {
    // event.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //  .then((result) => {
    //      // show the user a success message
    //      console.log(result.text);

    //      Swal.fire({ // sweet alert
    //       title: 'Thanks for reaching out!',
    //       text: 'Your response has been sent.',
    //       icon: 'success',
    //       confirmButtonText: 'Great!'
    //     });

    //       setCounter(0); // resettingt the counter
    //  }, (error) => {
    //      // show the user an error
    //      console.log(error.text);
    //  });
    //  event.target.reset();
  // };

  function handleChange(event){
    console.log(event.target.value.length);
    const counterLength = event.target.value.length;
    setCounter(counterLength);
  }

  return(
    <form id='contact-form'>

      <span>
        <input type="text" name='first_name' placeholder='First name*' required style={{width: '45%', marginBottom: '2em'}} />
        <input type="text" name='last_name' placeholder='Last name' style={{width: '45%', marginLeft: '.5em'}} />
      </span>

      <input type="email" name='user_email' placeholder='Email address*' required style={{width: '91%', marginBottom: '2em'}} />

      <input type="text" name='subject' placeholder='Subject*' required style={{width: '91%', marginBottom: '2em'}} />

      <textarea onChange={handleChange} name="message" placeholder='Enter a message...*' maxLength='180' cols="30" rows="7" required style={{width: '91%', marginBottom: '2em'}}></textarea>
      <p className={counter >= 180 ? 'max-chars' : ''} style={{fontSize: '.7em', fontStyle: 'italic', opacity: '0.7', textAlign: 'start', color: 'var(--licorice-black-color', marginTop: '-2.5em'}}>Do not exceed 180 characters <strong>({counter})</strong></p>
      <input type="submit" className="submit-btn" value='Submit' style={{width: '40%'}} />
    </form>

  );
}

export default Form;
