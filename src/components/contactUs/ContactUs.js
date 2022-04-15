import React, { useRef } from 'react';
import emailjs, { init } from '@emailjs/browser';
import { Form } from 'react-bootstrap';
import FormContainer from './FormContainer';
init("k1rZyMHa8BFwYBJaX");

export const ContactUs = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1wmg3cs', 'template_qhc6qt9', form.current, 'k1rZyMHa8BFwYBJaX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contactus'>
      <div >
      <p className='contacttitle1'>Address Information</p>
      <br />
      <p>123 Elf Road, North Pole, 88888</p>
      <br />
      <p className='contacttitle'>Email Contact</p>
      <p>Customer Service Representative</p>
      <p className='contactem'>Hodor = hodor@hodor.hodor</p>
      <p>CEO</p>
      <p className='contactem'>Mr. Vader = DVader@dstar.gov</p>
      <p>Regional Representative (Africa)</p>
      <p className='contactem'>Toto = toto@africa.com</p>
      </div>
    <FormContainer>
    <Form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='name'type="text" name="from_name" />
      <label>Email</label>
      <input className='name' type="email" name="from_email" />
      <label>Message</label>
      <div>
      <textarea className="message" name='message'/>
      <input className='contactb' type="submit" value="Send"  onClick={refreshPage}/>
      </div>
    </Form>
    </FormContainer>
    </div>
  );
};
