import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo.PNG"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' style={{marginTop:"0px" ,height:"70px" ,width:"70px" , borderRadius:"50px"}} />
              <span id="logo-name">Suryansh Soni</span>
          </div>
          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#projects'>projects</a>
              </li>
              <li>
                <a href='#about'>about</a>
              </li>
              <li>
                <a href='#' title="Download my resume ">resume</a>
              </li>
              <li>
                <a href='#blog' title="adding soon 😄">blog</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
