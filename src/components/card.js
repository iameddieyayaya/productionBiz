import PropTypes from "prop-types"
import React from "react"

const Card = ({ sectionTitle, children }) => (
  <div
    style={{
      display: "flex",
    }}
  >
    <h2 style={{ fontSize: "5rem" }}>{sectionTitle}</h2>
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
