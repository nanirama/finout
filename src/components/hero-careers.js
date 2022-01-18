import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import { AnchorLink } from "gatsby-plugin-anchor-links"

// Components
import * as Grid from "../components/ui/grid"
import Section from "./ui/section"

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className="mb-8 text-white">{children}</h1>
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <p className="mb-6 max-w-3xl mx-auto text-lg text-white">{children}</p>
      )
    },
  },
}

const HeroCareers = () => {
  const { data } = useStaticQuery(
    graphql`
      query {
        data: contentfulPageCareers {
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
    <Section className="relative pt-32 pb-64 bg-green">
      {img && (
        <div className="absolute left-0 top-0 w-full h-full">
          <GatsbyImage
            className="!h-full !w-full"
            image={img?.gatsbyImageData}
            alt={img?.title}
          />
          <div className="absolute z-0 left-0 top-0 w-full h-full bg-green-dark/60"></div>
        </div>
      )}

      <Grid.Container sm className="relative z-10">
        <Grid.Inner className="text-center">
          {content && renderRichText(content, options)}

          <AnchorLink to="/careers#jobs" className="btn btn-coral mt-6">
            View Job Openings
          </AnchorLink>
        </Grid.Inner>
      </Grid.Container>
    </Section>
  )
}

export default HeroCareers
