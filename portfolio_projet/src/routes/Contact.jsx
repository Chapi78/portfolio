import React, { useRef } from 'react'
import emailjs from "@emailjs/browser"

import '../App.css'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fe90jfo",
      "template_contact",
      form.current,
      "eZbY7F8rrcNVmp3Rv",
    ).then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
      },
      (error) => {
        console.log(error.text);
      }
    )
  }

  return (
    <>
      <div className='row'></div>
      <form id='contact-form' ref={form} onSubmit={sendEmail}>
        <div className='col-md-12 d-inline-flex'>
          <div className='col-md-6'>
            <label htmlFor="user_name">
              Nom
            </label>
            <input className='col-md-6' type="text" name='user_name' id='user_name' required />
          </div>
          <div className='col-md-6'>
            <label htmlFor="user_email">
              Email
            </label>
            <input className='col-md-6' type="email" name='user_email' id='user_email' required />
          </div>
        </div>        
        <div className='col-md-12'>
          <div className=''>
            <label className='' htmlFor="message">
              Message
            </label>
            <textarea className='md-textarea form-control' name='message' required />
          </div>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </>
  )
}
