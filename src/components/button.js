import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Button = ({ title }) => (
  <button
    style={{
      padding: "0.4em 2em 0.6em",
      fontSize: "26px",
      marginTop: "1em",
      cursor: "pointer",
    }}
  >
    <Link to="/contact">{title}</Link>
  </button>
)

Button.propTypes = {
  title: PropTypes.string,
}

Button.defaultProps = {
  title: `Button`,
}

export default Button
