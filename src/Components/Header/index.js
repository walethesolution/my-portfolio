import { Link } from "react-router-dom"
import React from "react"
import "./index.scss"

function Header() {
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
            <Link to="/">HOME</Link>
          </div>
          <div className="nav">
            <Link to="/about">ABOUT</Link>
          </div>
          <div className="nav">
            <Link to="/project">PROJECT</Link>
          </div>
          <div className="nav">
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
