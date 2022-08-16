import "./index.scss"
import { Link } from "react-router-dom"

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">HOME</Link>{" "}
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/about">ABOUT</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/project">PROJECT</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
