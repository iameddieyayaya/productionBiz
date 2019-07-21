import Link from "gatsby-link"
import PropTypes from "prop-types"
import React from "react"

const Poop = props => (
  <div>
    {props.someVariable}
    <h2>{props.arbitraryPhrase}</h2>
  </div>
)

Poop.propTypes = {
  someVariable: PropTypes.string,
}

Poop.defaultProps = {
  someVariable: `Poop`,
}

export default Poop
