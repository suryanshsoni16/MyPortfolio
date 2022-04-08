import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href={props.link}>
          click here to check out
        </a>
      </div>
    </>
  )
}

export default Card
