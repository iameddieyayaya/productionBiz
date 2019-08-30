import PropTypes from "prop-types"
import React from "react"

const Card = ({ sectionTitle, children }) => (
  <div
    style={{
      display: "flex",
    }}
  >
    <h1 style={{ fontSize: "3rem" }}>{sectionTitle}</h1>
    <div> {children}</div>
  </div>
)

Card.propTypes = {
  sectionTitle: PropTypes.string,
}

Card.defaultProps = {
  sectionTitle: `title`,
}

export default Card
