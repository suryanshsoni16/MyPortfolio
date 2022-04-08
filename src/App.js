import React from "react"
import Header from "./component/Head/Header"
import Projects from "./component/Projects/Projects"
import Home from "./component/Hero/Home"
// import Blog from "./component/Blog/Blog"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"
import About from "./component/About/About"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <About />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
