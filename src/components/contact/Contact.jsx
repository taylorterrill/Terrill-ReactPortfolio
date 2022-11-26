import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j7x8953', 'template_nyi4lsh', form.current, '4Fuz2xihjzjCIqfKY')
    
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Let's Talk</h5>
      <h2>Contact</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>taylorpterrill@gmail.com</h5>
            <a href='mailto:taylorpterrill@gmail.com' target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <AiOutlinePhone className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>801-628-9404</h5>
            <a href='tel: 801-628-9404' target="_blank">Call or Text</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Full Name' required />
          <input type='email' name='email' placeholder="Email Address" required />
          <textarea name='message' rows='7' placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
};

export default Contact