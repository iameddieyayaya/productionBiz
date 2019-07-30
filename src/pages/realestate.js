import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import RealEstateImgs from "../components/real_estate_imgs"

const RealEstatePage = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <div style={{}}>
        <Header sectionTitle="Real Estate">
          <RealEstateImgs />
        </Header>
      </div>
    </Layout>
  )
}

export default RealEstatePage
