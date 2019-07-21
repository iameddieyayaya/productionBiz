import React from "react"
import backgroundStyles from "./backgroundRed.module.css"

export default ({ children }) => (
  <div className={backgroundStyles.makeItRed}>{children}</div>
)
