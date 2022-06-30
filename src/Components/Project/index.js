import "./index.scss"
import { useState } from "react"
import flashcard from "../../Images/flashcard.png"
import restaurant from "../../Images/restaurant.png"
import AnimatedLetters from "../AnimatedLetters"

function Project() {
  const [lettersClass, setLettersClass] = useState("text-animation")
  const projectArray = ["P", "r", "o", "j", "e", "c", "t", "s"]

  return (
    <div className="project">
      <div className="container">
        <h1>
          <AnimatedLetters
            lettersClass={lettersClass}
            stringArray={projectArray}
            index={15}
          />
        </h1>
        <ul>
          <li className="active">Bootcamp</li>
          <li>Ideas</li>
        </ul>
        <div className="project-container">
          <div className="item">
            <img src={flashcard} alt="home page of flashcard" />
            <h3>Flashcard-o-matic</h3>
          </div>
          <div className="item">
            <img src={restaurant} alt="home page of restaurant site" />
            <h3>Periodic Tables</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
