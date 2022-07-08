import AnimatedLetters from "../AnimatedLetters"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./index.scss"
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons"

function About() {
  const [lettersClass, setLettersClass] = useState("text-animation")
  return (
    <div className=" about">
      <div className="text-container">
        <h1>
          <strong>
            <AnimatedLetters
              lettersClass={lettersClass}
              stringArray={["Get", " ", "to", " ", "know", " ", "me"]}
              index={15}
            />
          </strong>
        </h1>
        <p>
          I’m a passionate developer that’s captivated by how things work. My
          great discovery of software happened in high school back in Nigeria
          when I witnessed my friend do a simple google search and that changed
          everything as it created this curiosity and passion for understanding
          how software works. This has ultimately led to pursuing my career goal
          of becoming a software engineer.
        </p>
        <p>
          Migrating to the US has been a blessing as I have completed a
          Certificate Program in software engineering where I have learned to
          build User Interfaces, Create Application Programming Interfaces, and
          Construct databases.
        </p>
        <p>
          Some <strong>facts</strong> about me: I can learn anything if given
          reasonable time for its completion, I’m that lofty dreamer that wants
          to win the UEFA champions league one day.
        </p>
      </div>
      <div className="all-cubes">
        <div className="spin-cubes">
          <div className="cube1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
        </div>
        <div className="spin-cubes">
          <div className="cube2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
        </div>
        <div className="spin-cubes">
          <div className="cube3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
        </div>
        <div className="spin-cubes">
          <div className="cube4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
        </div>
        <div className="spin-cubes">
          <div className="cube5">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4" />
          </div>
        </div>
        <div className="spin-cubes">
          <div className="cube6">
            <FontAwesomeIcon icon={faNodeJs} color="#000" />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default About
