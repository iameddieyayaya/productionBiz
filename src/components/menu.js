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
      <li>NOISE GROUP</li>
      <li className="navbarStyle">
        <Link to="/">Production</Link>
      </li>
      {/* Debating whether to have this */}
      {/* <li className="navbarStyle">
        <Link to="/about">About</Link>
      </li> */}
      {/* <li className="navbarStyle">
        <Link to="/services">Services</Link>
      </li> */}
      <li className="navbarStyle">
        <Link to="/contact">Hire Us</Link>
      </li>
      <li className="instagram">
        <a
          href="https://www.instagram.com/everythinmatters/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="IG: @everythinmatters"
        >
          <FontAwesomeIcon icon={faInstagram} color="#c32aa3" size="lg" />
        </a>
      </li>
    </ul>
  </div>
)

export default Menu
