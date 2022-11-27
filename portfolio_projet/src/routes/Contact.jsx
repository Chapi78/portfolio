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
      <div className='article'>
        <form id='contact-form' ref={form} onSubmit={sendEmail}>
          <div className='col-md-10 d-inline-flex justify-content-center'>
            <div className='input-form text-center d-inline'>
              <label htmlFor="user_name">
                sujet :
              </label>
              <input className='col-md-8' type="text" name='user_name' id='user_name' required />
            </div>
            <div className='input-form text-center d-inline'>
              <label htmlFor="user_email">
                Email :
              </label>
              <input className='col-md-8' type="email" name='user_email' id='user_email' required />
            </div>
          </div>        
          <div className='col-md-12'>
            <div className=''>
              <label className='' htmlFor="message">
                Message :
              </label>
              <textarea className='md-textarea form-control' name='message' required />
            </div>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </>
  )
}
