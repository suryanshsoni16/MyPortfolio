import React from "react";
import "./About.css";
import AboutApi from "./AboutApi";
import Card from "./Card";

const About = () => {
  return (
    <>
      <section className="About" id="about">
        <div className="container top">
          <div className="heading text-center">
            <h1>||......................About Me......................||</h1>
          </div>

          <div className="content-section mtop d_flex">
            <div className="left">
              <div className="heading">
                <h1>Education & Experience </h1>
              </div>

              <div className="content">
                {AboutApi.map((val, id) => {
                  if (val.category === "education") {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        place={val.place}
                        time={val.time}
                        desc={val.desc}
                        link={val.link}
                      />
                    );
                  }
                })}
              </div>
            </div>
            <div className="left">
              <div className="heading">
                <h1>{"."} </h1>
              </div>

              <div className="content">
                {AboutApi.map((val, index) => {
                  if (val.category === "experience") {
                    return (
                      <Card
                        key={index}
                        title={val.title}
                        place={val.place}
                        time={val.time}
                        desc={val.desc}
                        link={val.link}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
