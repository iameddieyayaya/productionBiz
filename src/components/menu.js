import React from "react"
import Link from "gatsby-link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Menu = () => (
  <div
    style={{
      background: "#f4f4f4",
      paddingTop: "10px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: "1vh",
      }}
    >
      <li className="navbarStyle">
        <Link to="/">Home</Link>
      </li>
      <li className="navbarStyle">
        <Link to="/about">About</Link>
      </li>
      <li className="navbarStyle">
        <Link to="/services">Services</Link>
      </li>
      <li className="navbarStyle">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="instagram">
        <a
          href="https://www.instagram.com/everythinmatters/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} color="#c32aa3" size="lg" />
        </a>
      </li>
    </ul>
  </div>
)

export default Menu
