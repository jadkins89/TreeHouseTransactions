import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from 'gatsby-image'

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }

      const imageFluid = image.node.childImageSharp.fluid;
      // console.log(imageSizes);
      return (
        <Img
          alt={props.alt}
          fluid={imageFluid}
          style={{
            maxHeight: imageFluid.presentationHeight
          }}
        />
      );
    }}
  />
)

export default Image
