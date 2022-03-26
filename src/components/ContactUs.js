import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Popup trigger={<button>Contact Us</button>} position="right center">
    <div>
    <FormContainer>
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group><p>Name</p>
      <Form.Control>
      <input type="text" name="user_name" />
      <p>Email</p>
      <input type="email" name="user_email" />
      <p>Message</p>
      <textarea name="message" />
      <input type="submit" value="Send" />
      </Form.Control>
      </Form.Group>
    </Form>
    </FormContainer>
    </div>
    </Popup>
  );
};