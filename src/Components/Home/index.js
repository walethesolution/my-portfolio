import React from "react"
import { Link, BrowserRouter } from "react-router-dom"
import "./index.scss"
// import me from "../../images/me.jpg"

function Home() {
  return (
    <div className="home" id="home">
      <div className="textContainer">
        <h2>Hello there, my name is</h2>
        <h1>Olawale Ayejuyone</h1>
        <h2>
          I am <strong>MORE</strong> than a Software Guy
        </h2>
        <br></br>
        <h4>Software developer / Full Stack Engineer</h4>
        <BrowserRouter>
          <Link to="/contact" className="btn">
            CONTACT ME
          </Link>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default Home
