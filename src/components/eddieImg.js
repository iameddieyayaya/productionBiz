import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const EddieImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "eddie-ssl.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default EddieImg
