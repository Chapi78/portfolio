import React, { useRef } from 'react'
import emailjs from "@emailjs/browser"

import '../../index.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3ld0m8d",
      "template_k2grkb1",
      form.current,
      "53MHs3veilb4ZFWZ4",
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
      <div></div>
      <div className='article'>
        <form id='contact-form' ref={form} onSubmit={sendEmail}>
          <div className=''>
            <div className='input-form text-center d-inline'>
              <label htmlFor="user_name">
                Nom :
              </label>
              <input className='' type="text" name='user_name' id='user_name' required />
            </div>
            <div className='input-form text-center d-inline'>
              <label htmlFor="user_email">
                Email :
              </label>
              <input className='' type="email" name='user_email' id='user_email' required />
            </div>
          </div>
          <div className=''>
            <div className=''>
              <label className='' htmlFor="message">
                Message :
              </label>
              <textarea className='' name='message' required />
            </div>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </>
  )
}
