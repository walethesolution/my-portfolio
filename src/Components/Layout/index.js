import React from "react"
import "./index.scss"
import Header from "../Header"
import Footer from "../Footer"
import Home from "../Home"
import Project from "../Project"
import About from "../About"
import Contact from "../Contact"
import { Routes, Route } from "react-router-dom"

function Layout() {
  return (
    <div className="layout lay-container">
      <Header />
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
