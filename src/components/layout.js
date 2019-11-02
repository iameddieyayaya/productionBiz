/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Menu from "./menu"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: "San Diego production Business" },
          {
            name: "keywords",
            content:
              "drone, video, san diego, videography, photography, real estate, chula vista, la jolla",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Menu />
      <div
        style={{
          margin: `0 auto`,
          position: "absolute",
          width: "100%",
          top: 0,
          zIndex: -1,
        }}
      >
        <main
          style={{
            margin: `0 auto`,
            position: "absolute",
            width: "100%",
            top: "5vh",
            height: "100vh",
          }}
        >
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
