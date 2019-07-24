import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Real_Estate_Imgs = () => (
  <StaticQuery
    query={graphql`
      query allimgQuery {
        source: allFile(
          filter: { absolutePath: { regex: "/real estate drone/" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 1080) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          margin: "0 auto",
          display: "grid",
          gridGap: ".5rem",
        }}
      >
        {data.source.edges.map(({ node }, i) => (
          <Img key={i} fluid={node.childImageSharp.fluid} />
        ))}
      </div>
    )}
  />
)
export default Real_Estate_Imgs
