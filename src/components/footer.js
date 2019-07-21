import React from "react"

const Footer = () => {
  return (
    <footer style={{ textAlign: "center" }}>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://github.com/iameddieyayaya">Eduardo Gomez</a>
    </footer>
  )
}

export default Footer
