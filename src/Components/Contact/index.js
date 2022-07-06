import "./index.scss"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import AnimatedLetters from "../AnimatedLetters"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

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
          As a software enthusiast, I am interested in working on large projects
          and in a thriving environment.
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
      {/* <div className="map-info">
        Olawale Ayejuyone
        <br />
        Brooklyn, New York
        <br />
        USA
        <br />
        <span>Olawaleayejuyone@gmail.com</span>
      </div> */}
      {/* <div className="map-wrapper">
        <MapContainer center={[40.6101, 73.9201]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[40.6101, 73.9201]}>
            <Popup>
              Olawale lives around here, stop by for a chat and cup of coffee.
            </Popup>
          </Marker>
        </MapContainer>
      </div> */}
    </div>
  )
}

export default Contact
