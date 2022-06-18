import {
  faEnvelope,
  faHome,
  faUser,
  faFolder,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "./index.scss"

function Header() {
  // let history = useHistory()

  // function GoHome() {
  //   history.push("/home")
  // }

  return (
    <div className="header">
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            waleTheSolution
            <div className="subLogo">Code | Life | People</div>
          </a>
        </div>
        <div className="right">
          <div className="nav">
            <a href="#home">
              <FontAwesomeIcon icon={faHome} />
            </a>
          </div>
          <div className="nav">
            <a href="#about">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </div>
          <div className="nav">
            <a href="#project">
              <FontAwesomeIcon icon={faFolder} />
            </a>
          </div>
          <div className="nav">
            <a href="#contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
