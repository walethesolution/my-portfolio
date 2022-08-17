import "./index.scss"
import { Link } from "react-router-dom"

function Menu({ openMenu, setOpenMenu }) {
  return (
    <div className={"menu " + (openMenu && "active")}>
      <ul>
        <li onClick={() => setOpenMenu(false)}>
          <Link to="/">HOME</Link>{" "}
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <Link to="/about">ABOUT</Link>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <Link to="/project">PROJECT</Link>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
