import "./index.scss"
import { useState } from "react"
import AnimatedLetters from "../AnimatedLetters"

const Contact = () => {
  const [lettersClass, setLettersClass] = useState("text-animation")
  const contactArray = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]

  return (
    <div className=" contact" id="contact">
      <div className="text-container ">
        <h1>
          <AnimatedLetters
            lettersClass={lettersClass}
            stringArray={contactArray}
            index={15}
          />
        </h1>
        <p>
          As a software enthusiast, I am interested in working on large projects
          and in a thriving environment.
        </p>
        <p>
          If this sounds like your company, do not hesitate to reach out to me
          using the form below
        </p>
        <div className="contact-form">
          <form>
            <ul>
              <li className="form-half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="form-half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="send-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
