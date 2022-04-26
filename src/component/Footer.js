import React from "react"
import logo from "./pic/logo.PNG"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo} alt='' style={
              {marginTop:"0px",
              height:"70px" ,
              width:"70px" , 
              borderRadius:"50px"
               }}/>
          </div>
          <p>Made by Suryansh 🥎</p>
          <p>Thankyou</p>
          <p>@2022 Copyright All Rights Reserved </p>
          <p>Built using React 😎 </p>

        </div>
      </footer>
    </>
  )
}

export default Footer
