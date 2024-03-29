import React from "react"
import "./index.scss"
import Menu from "../Menu"
import Header from "../Header"
import Footer from "../Footer"
import Home from "../Home"
import Project from "../Project"
import About from "../About"
import Contact from "../Contact"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"

function Layout() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="layout">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="group">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
