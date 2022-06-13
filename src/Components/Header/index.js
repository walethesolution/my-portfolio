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
  return (
    <header>
      <div className="header">
        <nav>
          <ul>
            {/* <li> */}
            <FontAwesomeIcon icon={faHome} />
            {/* </li> */}
            {/* <li> */}
            <FontAwesomeIcon icon={faUser} />
            {/* </li> */}
            {/* <li> */}
            <FontAwesomeIcon icon={faFolder} />
            {/* </li> */}
            {/* <li> */}
            <FontAwesomeIcon icon={faEnvelope} />
            {/* </li> */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
