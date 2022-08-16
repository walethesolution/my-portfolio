import { Link } from "react-router-dom"
import React from "react"
import "./index.scss"

function Header({ menuOpen, setMenuOpen }) {
  return (
    <div className={"header " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link to="/" className="logo">
            waleTheSolution
            <div className="subLogo">Code | Life | People</div>
          </Link>
        </div>
        <div className="right">
          <div className="headerMenu" onClick={() => setMenuOpen(!menuOpen)}>
            {/* <a href="#">MENU</a> */}
            MENU
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
