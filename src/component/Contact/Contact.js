import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import emailjs from 'emailjs-com'
import { useRef } from 'react';


const Contact = () => {
    const [result,showResult]= useState(false)
    const form = useRef();
    const results=()=>{
      alert("hello dear i have got received your message successfully i will contact you soon 😃😄😉")
      console.log("your message is sent successfully")
    
    }
    const formSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_h9jdx5t','template_zkonrfq',form.current,'oHF1YifQ9nHSO1tiD')
    .then((result) => {
      console.log(result.text);
      results();
    }, (error) => {
      console.log(error.text);
  });

  e.target.reset();
  showResult(true);
  



  //   alert(
  //     `My name is ${data.fullname}. 
	// My phone number is ${data.phone}. 
	// My email address is ${data.email}. 
	// My Subject on  ${data.subject}. 
	// Here is my message I want to say : ${data.message}. 
	// `
  //   )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Suryansh Soni</h1>
                  {/* <p>Fronted Developer</p> */}
                  <p>I am looking for Fronted Developer and Software Engineer role.</p> <br />
                  <p>Phone: +918109348378</p>
                  <p>Email: suyanshsoni16@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                  <button className='btn_shadow' title="GitHub" onClick={() => window.open("https://github.com/tigerbhai16")}>
                  <i class="fab fa-github"></i>
                  </button>
                  <button className='btn_shadow' title="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/suryansh-soni-86b1b5251/")}>
                    <i class='fab fa-linkedin-in' ></i>
                  </button>
                  <button className='btn_shadow' title="WhatsApp"  onClick={() => window.open("https://wa.me/918109348378")}>
                  <i class="fab fa-whatsapp"></i>
                  </button>
                  <button className='btn_shadow' title="E-mail" onClick={() => window.open("https://mailto:suryanshsoni16@gmail.com")}>
                  <i class="fas fa-at"></i>
                  </button>
                </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form ref={form} onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname'/>
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email'  />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject'  />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message'></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
