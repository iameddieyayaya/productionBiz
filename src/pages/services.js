import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

import Link from "gatsby-link"
import ServicesImg from "../components/servicesImg"

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <div className="services">
        <div className="sevice-item">
          <Link to="/audio/">
            <Card sectionTitle="Audio">
              <ul>
                <li>Mixing</li>
                <li>Mastering</li>
                <li>Recording</li>
                <li>Audio Restoration</li>
              </ul>
            </Card>
          </Link>
        </div>
        <div className="sevice-item">
          <Link to="/video">
            <Card sectionTitle="Video">
              <ul>
                <li>Marketing Content</li>
                <li>Product Videos</li>
                <li>Events</li>
                <li>Weddings</li>
              </ul>
            </Card>
          </Link>
        </div>
        <div className="sevice-item">
          <Link to="/drone/">
            <Card sectionTitle="Drone">
              <ul>
                <li>Aerial Videography & Photography</li>
                <Link to="/realestate/">
                  <li>Real Estate</li>
                </Link>
              </ul>
            </Card>
          </Link>
        </div>
      </div>
      <ServicesImg />
    </Layout>
  )
}

export default ServicesPage
