import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { NavLink } from "react-router-dom"
import "./index.scss"

const Header = () => {
  return (
    <div className="header">
      <header>
        <nav>
          <ul>
            <li>
              {/* <NavLink exact="true" activeclassname="active" to="/"> */}
              <FontAwesomeIcon icon={faHome} />
              {/* </NavLink> */}
            </li>
            <li>
              {/* <NavLink exact="true" activeclassname="active" to="/about"> */}
              <FontAwesomeIcon icon={faUser} />
              {/* </NavLink> */}
            </li>
            <li>
              {/* <NavLink exact="true" activeclassname="active" to="/projects"> */}
              <FontAwesomeIcon icon={faUser} />
              {/* </NavLink> */}
            </li>
            <li>
              {/* <NavLink exact="true" activeclassname="active" to="/contacts"> */}
              <FontAwesomeIcon icon={faEnvelope} />
              {/* </NavLink> */}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
