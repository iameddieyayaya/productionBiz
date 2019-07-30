import React from "react"
// import { Helmet } from "react-helmet"

import Header from "../components/header"
import Layout from "../components/layout"
import TenisImg from "../components/tenisImg"
import SEO from "../components/seo"
import Button from "../components/button"
import * as serviceWorker from "./serviceWorker"

import "./index.css"

const IndexPage = props => (
  <Layout>
    <TenisImg title="Header image" alt="Tenis Courts" />
    <SEO title="Home" />
    <Header sectionTitle="Let's Create">
      If you have a story to tell, we can help you create it. Commericals,
      podcast, voiceovers, product videos, company culture, event coverage,
      aerial, you name it! When it comes to engaging, eye catching, and
      emotionaly-impactful content. We got you covered!
      <br />
      <div style={{ textAlign: "center" }}>
        <Button title="Make it happen!" />
      </div>
    </Header>
    <Header sectionTitle="Cool Content">
      <div>Add a video here possibly?</div>
    </Header>
    <Header sectionTitle="Coolbeans Productions" />
    <div
      style={{
        display: "flex",
        margin: "0 auto",
        maxWidth: "80vw",
        alignItems: "center",
      }}
    >
      <p
        style={{
          justifyContent: "center",
          paddingLeft: "20px",
        }}
      >
        Good content is custom made. No two organizations are exactly alike.
        Great video content should be{" "}
        <strong>tailor-made for a specific purpose. </strong>
        Our mission is to create video content that has authentic storytelling,
        is compelling and high quality, while paying attention to detail and
        actually giving a damn!
      </p>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
