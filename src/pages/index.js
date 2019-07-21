import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Layout from "../components/layout"
import TenisImg from "../components/tenisImg"
import SEO from "../components/seo"
import Poop from "../components/poop"
import Container from "../components/container"
import Button from "../components/button"

import coolbeans from "../images/coolbeans.gif"

import "./index.css"

const IndexPage = props => (
  <Layout>
    <TenisImg title="Header image" alt="Tenis Courts" />
    <SEO title="Home" />
    <Header sectionTitle="Let's Create">
      If you have a story to tell, we can help you create it. Commericals,
      product videos, company culture, event coverage, aerial, you name it! When
      it comes to engaging, eye catching, and emotionaly-impactful content. We
      got you covered!
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
      <img src={coolbeans} alt="Coolbeans" style={{ width: "25%" }} />
      <p
        style={{
          justifyContent: "center",
          paddingLeft: "20px",
        }}
      >
        We’re a team of filmmakers with a simple belief: the best stories are
        true. From that core flows everything that we do. It starts with
        facilitating a space that allows you to be wholly present in your day.
        There, we can find and film the genuine and unfiltered. We can see and
        feel the full breadth of what you mean to each other. Together, it’s
        those moments, those intimate and unscripted smiles and inflections,
        that combine to tell your unique love story. WE'RE STOKED TO HAVE YOU.
        And boy, is it beautiful.{" "}
      </p>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
