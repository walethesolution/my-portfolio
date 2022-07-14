import "./index.scss"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import AnimatedLetters from "../AnimatedLetters"

const Contact = () => {
  const refForm = useRef()

  const sendForm = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        refForm.current,
        "tmk79fZLRKKgac7Wz"
      )
      .then(
        () => {
          alert("Message successfully sent!")
          window.location.reload(false)
        },
        () => {
          alert("Message failed, please try again")
        }
      )
  }

  const [lettersClass, setLettersClass] = useState("text-animation")
  const contactArray = ["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]

  return (
    <div className="contact">
      <div className="text-container ">
        <h1>
          <AnimatedLetters
            lettersClass={lettersClass}
            stringArray={contactArray}
            index={15}
          />
        </h1>
        <p>
          As a software enthusiast, I am interested in working on projects that
          will make me a better programmer and also a thriving environment.
        </p>
        <p>
          If this sounds like your company, do not hesitate to reach out to me
          using the form below
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendForm}>
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
