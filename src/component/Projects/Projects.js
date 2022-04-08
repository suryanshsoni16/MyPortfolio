import React from "react"
import "./Projects.css"
import data from "./Projects-Api"
import Card from "./Card"

const Projects = () => {
  return (
    <>
      <section className='features top' id='projects'>
        <div className='container'>
          <div className='heading'>
            <h4>All Projects</h4>
            <h1>personal projects i have done</h1>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} title={val.title} desc={val.desc} link={val.link} />
            })}

          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
