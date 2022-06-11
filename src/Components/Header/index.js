import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "./index.scss"

function Header() {
  return (
    <div className="header">
      <header>
        <nav>
          <div className="nav1">
            <FontAwesomeIcon icon={faHome} />
          </div>
          <div className="nav1">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="nav1">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="nav1">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
