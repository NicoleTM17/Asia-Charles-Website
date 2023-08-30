import { useState } from "react";
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2';

import '../styles/Form.css';

function Form(){

  const [counter, setCounter] = useState(0);

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    // emailjs.sendForm('service_sr2w8xn', 'template_urtaepo', form.current, '-THRAOnbNB9mtEi9u')
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
  };

  function handleChange(event){
    // console.log(event.target.value.length);
    const counterLength = event.target.value.length;
    setCounter(counterLength);
  }

  return(
    <div className='form-wrapper'>
      <h1 style={{marginBottom: '0.7em', fontStyle: 'italic'}}>Get in touch!</h1>
      <form ref={form} onSubmit={sendEmail} autoComplete="on">

        <span>
          <input type='text' name='first_name' placeholder='First Name*' required style={{width: '40%', marginBottom: '2em', padding: '5px 5px', borderRadius: '5px'}}/>
          <input type='text' name='last_name' placeholder='Last Name*' required style={{width: '40%', marginBottom: '2em', marginLeft: '1em', padding: '5px 5px', borderRadius: '5px'}}/>
        </span>

        <span>
          <input type='email' name='user_email' placeholder='Email address*' required style={{width: '40%', marginBottom: '2em', padding: '5px 5px', borderRadius: '5px'}}/>
          <input type='text' name='subject' placeholder='Subject' style={{width: '40%', marginBottom: '2em', marginLeft: '1em', padding: '5px 5px', borderRadius: '5px'}}/>
        </span>

        <textarea onChange={handleChange} name='message' placeholder='Enter a message...*' maxLength='180' required rows="7" cols="30" style={{width: '85%', borderRadius: '5px'}} ></textarea>
        <p className={counter >= 180 ? 'max-chars' : ''} style={{fontSize: '.7em', fontStyle: 'italic', opacity: '0.7', textAlign: 'start', marginLeft: '4em', marginTop: '-0.2em'}}>Do not exceed 180 characters <strong>({counter})</strong></p>
        <input className='submit-btn' type='submit' value='submit' style={{width: '40%', padding: '0.5em 0.5em', marginTop: '2em', marginBottom: '2em', borderRadius: '5px'}}/>
      </form>
    </div>

  );
}

export default Form;
