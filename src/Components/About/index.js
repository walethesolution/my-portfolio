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
          I’m a passionate individual that’s captivated by how things work. I
          recall my first encounter in high school back in Nigeria with the
          Google search engine and I was amazed at how you can search and ask
          questions with a phone and the internet and get the most accurate
          answer within seconds. Ever since that discovery, my curiosity, and
          passion for understanding how software can improve our lives have led
          to pursuing my career goal of becoming a software developer.
        </p>
        <p>
          Migrating to the United States has truly been a blessing as I have
          completed a Certificate Program in software engineering where I have
          learned to build User Interfaces, Create Application Programming
          Interfaces, and Construct databases and daily I also get the chance to
          daily improve on my software journey
        </p>
        <p>
          If I had to drop some facts about myself they will include: I’m that
          guy that can learn anything if given a reasonable time for its
          completion, I’m that lofty dreamer that wants to win the Uefa
          champions league one day.
        </p>
      </div>
    </div>
  )
}

export default About
