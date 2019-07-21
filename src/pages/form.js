import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: "teal" }}>
    <Link to="/">Home</Link>
    <Header siteTitle="Form B" />
    <p>Shot a message yo!</p>
  </div>
)
