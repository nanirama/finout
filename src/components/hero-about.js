import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

// Components
import * as Grid from "./ui/grid"
import Section from "./ui/section"

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className="text-white max-w-2xl mx-auto">{children}</h1>
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="mt-6 text-lg text-white">{children}</p>
    },
  },
}

const HeroCompany = () => {
  const { data } = useStaticQuery(
    graphql`
      query {
        data: contentfulPageAbout {
          heroContent {
            raw
          }
          featuredImage {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 70
            )
            title
          }
        }
      }
    `
  )

  const content = data?.heroContent || ""
  const img = data?.featuredImage || null

  return (
    <Section className="relative pt-32 pb-64">
      {img && (
        <div className="absolute -z-1 left-0 top-0 w-full h-full bg-green">
          <GatsbyImage
            className="!h-full !w-full"
            image={img?.gatsbyImageData}
            alt={img?.title}
          />
          <div className="absolute z-0 left-0 top-0 w-full h-full bg-green-dark/60"></div>
        </div>
      )}

      <Grid.Container xxs className="text-center">
        {content && renderRichText(content, options)}
      </Grid.Container>
    </Section>
  )
}

export default HeroCompany
