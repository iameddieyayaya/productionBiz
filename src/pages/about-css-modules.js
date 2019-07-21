import React from "react"

import styles from "./about-css-modules.module.css"
import Container from "../components/container"
import BackgroundRed from "../components/backgroundRed"
import Layout from "../components/layout"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Container>
    <Layout />
    <h1>About CSS Moduels</h1>
    <BackgroundRed>
      <p>CSS Modules are DOPE!</p>
    </BackgroundRed>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. lorem asdasdas adasdsa bakhasdlahdklah"
    />
    <BackgroundRed>
      <User
        username="Bob Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Doe. lorem asdasdas adasdsa bakhasdlahdklah"
      />
    </BackgroundRed>
  </Container>
)
