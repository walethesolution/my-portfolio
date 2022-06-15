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
    <header>
      <div className="logo">waleTheSolution</div>
      <nav>
        <ul>
          <li>
            {/* <FontAwesomeIcon icon={faHome} />
             */}
            Home
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faUser} /> */}
            About
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faFolder} /> */}
            project
          </li>
          <li>
            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
            contacts
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
