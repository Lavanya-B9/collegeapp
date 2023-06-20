import React from 'react';
import './ContactFormStyles.css';

const ContactForm = () => {
  return (
    <div className='contact-form-container'>
        <h2>share your thoughts with us</h2>
        <div className='contact-form'>
         <input type='text'placeholder='enter your name'/>
        <input type='email'placeholder='enter your Email'/>
        <textarea row='4' placeholder='enter your message'></textarea>
        <button>submit</button>
        </div>
    </div>
  )
}

export default ContactForm