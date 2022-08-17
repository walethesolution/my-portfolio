import { Link } from "react-router-dom"
import React from "react"
import "./index.scss"

function Header({ openMenu, setOpenMenu }) {
  return (
    <div className={"header " + (openMenu && "active")}>
      <div className="wrapper">
        <div className="left">
          <Link to="/" className="logo">
            waleTheSolution
            <div className="subLogo">Code | Life | People</div>
          </Link>
        </div>
        <div className="right">
          <div className="headerMenu" onClick={() => setOpenMenu(!openMenu)}>
            MENU
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
