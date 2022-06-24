import {
  faEnvelope,
  faHome,
  faUser,
  faFolder,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
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
          <Link to="/" className="logo">
            waleTheSolution
            <div className="subLogo">Code | Life | People</div>
          </Link>
        </div>
        <div className="right">
          <div className="nav">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </div>
          <div className="nav">
            <Link to="/about">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
          <div className="nav">
            <Link to="/project">
              <FontAwesomeIcon icon={faFolder} />
            </Link>
          </div>
          <div className="nav">
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
