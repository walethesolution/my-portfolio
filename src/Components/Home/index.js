import React from "react"
import "./index.scss"
// import me from "../../images/me.jpg"

function Home() {
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          {/* <img src={me} alt="placeholder" /> */}
        </div>
      </div>
      <div className="right">
        <div className="textContainer"></div>
        <h3>Hello there, my name is</h3>
        <h1>Olawale Ayejuyone</h1>
        <h4>I am more than a Software Guy</h4>
      </div>
    </div>
  )
}

export default Home
