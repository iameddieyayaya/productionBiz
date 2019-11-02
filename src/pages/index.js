import React from "react"
// import { Helmet } from "react-helmet"

import Header from "../components/header"
import Layout from "../components/layout"
import TenisImg from "../components/tenisImg"
import ServicesImg from "../components/servicesImg"
import ChildrenspoolImg from "../components/childrenspoolImg"
import WebdevImg from "../components/webdevImg"
import SEO from "../components/seo"
import Button from "../components/button"

import "./index.css"

const IndexPage = props => (
  <Layout>
    <TenisImg title="Header image" alt="Tenis Courts" />
    <SEO title="Production" />
    <Header sectionTitle="Let's Create">
      Creating custom content is our passion. Commericals, podcast, web
      development, product videos, company culture, event coverage, aerial, SEO,
      you name it! When it comes to engaging, eye catching, and
      emotionaly-impactful content. We got you covered!
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
        actually giving a damn. So, lets go make a ruckus!
      </p>
    </div>
    <div className="servicesCard-container">
      <div className="servicesCard-items">
        <Header sectionTitle="Promotional Film & Video">
          <ServicesImg className="servicesCard-img" />
        </Header>
        <p className="servicesCard-text">
          We love to bring your story to the screen. From promotional footage to
          short films, our team goes the extra mile to deliver jaw-dropping
          results. 4K resolution? Lighting and sound? We offer all of the above
          and so much more.
        </p>
      </div>
      <div className="servicesCard-items">
        <Header sectionTitle="Drone">
          <ChildrenspoolImg className="servicesCard-img" />
        </Header>
        <p className="servicesCard-text">
          In need of custom aerial footage? Licensed and insured drone operator
          and videographer. Level up your promotional footage by adding a
          stunning aerial perspective to your work.
        </p>
      </div>
      <div className="servicesCard-items">
        <Header sectionTitle="Web Development">
          <WebdevImg className="servicesCard-img" />
        </Header>
        <p className="servicesCard-text">
          Need a website? We can help you create beautiful websites for you
          business.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
