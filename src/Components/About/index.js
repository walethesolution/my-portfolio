import AnimatedLetters from "../AnimatedLetters"
import { useState } from "react"
import "./index.scss"

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
          I’m a passionate individual that’s captivated by how things work. My
          great discovery of software happened in high school back in Nigeria. I
          witnessed a simple google search that changed everything as it created
          this curiosity and passion for understanding how software can improve
          our lives. This has ultimately led to pursuing my career goal of
          becoming a software engineer.
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
    </div>
  )
}

export default About
