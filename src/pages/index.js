import React from "react"
// import { Helmet } from "react-helmet"

import Header from "../components/header"
import Layout from "../components/layout"
import TenisImg from "../components/tenisImg"
import SEO from "../components/seo"
import Button from "../components/button"

import "./index.css"

const IndexPage = props => (
  <Layout>
    <TenisImg title="Header image" alt="Tenis Courts" />
    <SEO title="Production" />
    <Header sectionTitle="Let's Create">
      Creating custom content is our passion. Commericals, podcast, voiceovers,
      product videos, company culture, event coverage, aerial, you name it! When
      it comes to engaging, eye catching, and emotionaly-impactful content. We
      got you covered!
      <br />
      <div style={{ textAlign: "center" }}>
        <Button title="Make it happen!" />
      </div>
    </Header>
    {/* <Header sectionTitle="Cool Content">
      <div>Add a video here possibly?</div>
    </Header> */}
    <Header sectionTitle="Noise Group Productions" />
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
        actually giving a damn. So, Lets go make a ruckus!
      </p>
    </div>
    <div>
      <h1>Professional Web Content</h1>
      <h2>Our Skills for your project</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignSelf: "center",
        }}
      >
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Header sectionTitle="High quality recordings">
            Available to record a two person podcast up to a full size band. As
            well as, provide mixing and mastering.
          </Header>
        </div>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Header sectionTitle="Custom Drone Videograhy">
            In need of custom aerial footage? Licensed and insured drone
            operator and videographer. Level up your promotional footage by
            adding a stunning aerial perspective to your work.
          </Header>
        </div>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Header sectionTitle="Custom Promotional Film & Video">
            We love to bring your story to the screen. From promotional footage
            to short films, our team goes the extra mile to deliver jaw-dropping
            results. 4K resolution? Lighting and sound? We offer all of the
            above and so much more.
          </Header>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
