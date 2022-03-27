import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import{ init } from '@emailjs/browser';
init("k1rZyMHa8BFwYBJaX");

export const ContactUs = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_83xkqfo', 'template_qhc6qt9', form.current, 'k1rZyMHa8BFwYBJaX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Popup trigger={<button className='contact'>Contact Us</button>} position="right center">
    <div>
    <FormContainer>
    <Form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='name'type="text" name="user_name" />
      <label>Email</label>
      <input className='name' type="email" name="user_email" />
      <label>Message</label>
      <div>
      <textarea className="message" />
      <input type="submit" value="Send"  onClick={refreshPage}/>
      </div>
    </Form>
    </FormContainer>
    </div>
    </Popup>
  );
};