import PropTypes from "prop-types"
import React from "react"

const Header = ({ sectionTitle, children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: "80vw",
      padding: `1.45rem 1.0875rem`,
      textAlign: "center",
    }}
  >
    <h2 style={{ margin: "0 0 .8rem", fontSize: "2rem" }}>{sectionTitle}</h2>
    <div
      style={{
        textAlign: "justify",
        lineHeight: "1.5",
      }}
    >
      {" "}
      {children}
    </div>
  </div>
)

Header.propTypes = {
  sectionTitle: PropTypes.string,
}

Header.defaultProps = {
  sectionTitle: `title`,
}

export default Header
