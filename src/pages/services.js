import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Real_Estate_Imgs from "../components/real_estate_imgs"

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <div
        style={{
          border: "2px solid magenta",
        }}
      >
        <Header sectionTitle="Real Estate">
          <Real_Estate_Imgs />
        </Header>
      </div>
    </Layout>
  )
}

export default ServicesPage
