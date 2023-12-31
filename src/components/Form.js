import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import '../styles/Form.css';

function Form(){


  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_oe7obo6', 'template_81fxgqn', form.current, 'NwW80pzW_-M-q0Y2A')
     .then((result) => {
         // show the user a success message
         console.log(result.text);

         Swal.fire({ // sweet alert
          title: 'Thank you!',
          text: 'Your enquiry has been sent.',
          icon: 'success',
          confirmButtonText: 'Great!',
        });

    }, (error) => {
       // show the user an error
         console.log(error.text);
     });
     event.target.reset(); // resetting the form
  };



  return(
    <form ref={form} onSubmit={sendEmail} autoComplete="on" id='contact-form'>

      <span>
        <input type="text" name='first_name' placeholder='First name*' required style={{width: '45%', marginBottom: '2em'}} />
        <input type="text" name='last_name' placeholder='Last name' style={{width: '45%', marginLeft: '.5em'}} />
      </span>

      <input type="email" name='user_email' placeholder='Email address*' required style={{width: '91%', marginBottom: '2em'}} />

      <input type="text" name='subject' placeholder='Subject*' required style={{width: '91%', marginBottom: '2em'}} />

      <textarea name="message" placeholder='Enter a message...*' cols="30" rows="7" required style={{width: '91%', marginBottom: '1em'}}></textarea>

      <input type="submit" className="submit-btn" value='Submit' style={{width: '40%'}} />

    </form>

  );
}

export default Form;
