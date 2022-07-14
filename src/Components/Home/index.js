import React from "react"
import { Link } from "react-router-dom"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"

function Home() {
  const lettersClass = "text-animation"
  const nameArray = [
    "O",
    "l",
    "a",
    "w",
    "a",
    "l",
    "e",
    " ",
    "A",
    "y",
    "e",
    "j",
    "u",
    "y",
    "o",
    "n",
    "e",
  ]

  return (
    <div className="home" id="home">
      <div className="textContainer">
        <h2>Hello there, my name is</h2>
        <h1>
          <AnimatedLetters
            lettersClass={lettersClass}
            stringArray={nameArray}
            index={15}
          />
        </h1>
        <h2>
          I am <strong>MORE</strong> than a Software Guy
        </h2>
        <br></br>
        <h4>Software developer / Full Stack Engineer</h4>
        <>
          <Link to="/contact" className="btn">
            CONTACT ME
          </Link>
        </>
      </div>
    </div>
  )
}

export default Home
