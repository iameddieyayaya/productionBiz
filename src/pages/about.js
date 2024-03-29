import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EddieImg from "../components/eddieImg"
import Header from "../components/header"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <EddieImg />
    <Header sectionTitle="Eduardo Gómez">
      <p style={{ width: "75vw", margin: "0 auto" }}>
        Eduardo Gomez completed the Bachelors of Arts in Music with an emphasis
        in Recording Arts and Technology at Chico State in 2018. This program
        taught him the ins and outs of creating high quality content in the
        studio with post production techniques for both audio recordings and
        videos. As well as, working in live sound. For instance, he has worked
        with Lake Street Dive, Pink Martini, Lee Ann Womack, Booker T. Jones,
        Buddy Guy, Chris Cain, Tony Lindsay (Santana), Antonio Sanchez
        (Birdman), Graham Nash, Tyler Childers, Lillie Mae, Enso String Quartet,
        Tower of Power, Mexrrissey, La Santa Cecilia, Mariachi Flor de Toloache,
        Lysander Piano Trio, North State Symphony, Borgore, Tokimonsta, Zhu, DJ
        Carnage.
      </p>
    </Header>
  </Layout>
)

export default AboutPage
