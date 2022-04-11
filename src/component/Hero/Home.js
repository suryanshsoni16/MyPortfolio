import React from "react"
import "./Home.css"

import skill1 from "../pic/skill1.png"

import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Suryansh Soni</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Developer.."," Problem Solver..."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p> Dynamic and creative individual with a strong foundation in Web Development and Latest Technologies. Seeking to raise coding KPIs by providing error-free codes. Excellent in teamwork, interpersonal and communication skills and a quick learner.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME ON</h4>
                <div className='button'>
                  <button className='btn_shadow' title="GitHub" onClick={() => window.open("https://github.com/tigerbhai16")}>
                  <i class="fab fa-github"></i>
                  </button>
                  <button className='btn_shadow' title="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/suryansh-soni16")}>
                    <i class='fab fa-linkedin-in' ></i>
                  </button>
                  <button className='btn_shadow' title="WhatsApp"  onClick={() => window.open("https://wa.me/918109348378")}>
                  <i class="fab fa-whatsapp"></i>
                  </button>
                  <button className='btn_shadow' title="E-mail" onClick={() => window.open("https://mailto: suryanshsoni16@gmail.com")}>
                  <i class="fas fa-at"></i>
                  </button>
                </div>
              </div>
             
            </div>
          </div>
          <div className='right'> 
            <div className='right_img col_1 hero_btn h4 '>
            
             <h4>BEST SKILLs ON</h4>
             <button className='btn_shadow' title="HTML5 Semantic">
                <i class="fab fa-html5"></i>
             </button>
             <button className='btn_shadow' title="CSS3">
                <i class="fab fa-css3"></i>
             </button>
             <button className='btn_shadow' title="JavaScript Advance">
                <i class="fab fa-js"></i>
             </button>
              <button className='btn_shadow' title="React.js">
                <i class="fab fa-react"></i>
              </button>
              <button className='btn_shadow' title="Bootstrap">
                <i class="fab fa-bootstrap"></i>
              </button>
              <button className='btn_shadow' title="Material UI">
                <img src={skill1}/>
              </button>
              <br />
              <br />
              <hr />
              <button className="btn_resume" onClick={() => window.open("https://drive.google.com/file/d/1uSV39O8PDtEN30C8kXG8v65ob-JbtsUC/view?usp=sharing")}>Download Resume</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
