import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import CtaWithPosts from "../components/cta-with-posts"
import HeroCareers from "../components/hero-careers"
import * as Grid from "../components/ui/grid"
import CardFeature from "../components/ui/card-feature"
import Section from "../components/ui/section"
import WidgetComeet from "../components/widget-comeet"
import TextDecor from "../components/ui/text-decor"

// Assets
import defaultThumbnail from "../images/thumbnail-finout.png"

const options = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      const type = node?.data?.target?.__typename || null

      if (type !== "ContentfulTextDecor") {
        return children
      }

      return <TextDecor>{node?.data?.target?.content}</TextDecor>
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <h2 className="text-4xl mb-6 text-center lg:text-5xl lg:pr-12">
          {children}
        </h2>
      )
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="mt-4 text-lg text-center">{children}</p>
    },
  },
}

const Careers = ({ data, location }) => {
  const title = data?.page?.title || ""
  const description = data?.page?.description || ""
  const thumbnail = data?.page?.featuredImage?.resize?.src || defaultThumbnail
  const cards = data?.page?.cards || []
  const teamPhoto = data?.page?.teamPhoto || null
  const ourValuesTitle = data?.page?.ourValuesTitle || ""
  const ourValues = data?.page?.ourValues || null

  return (
    <Layout
      location={location}
      hero={<HeroCareers />}
      beforeFooter={<CtaWithPosts />}>
      <Seo
        title={title}
        description={description}
        image={thumbnail}
        url={location.href}
      />

      <Section className="bg-green-light">
        <Grid.Container sm className="relative z-10 -top-24">
          <Grid.Grid md={2}>
            {cards &&
              cards.map(card => (
                <CardFeature
                  key={card?.id}
                  icon={card?.image?.file?.url}
                  title={card?.title}
                  description={card?.content}
                />
              ))}
          </Grid.Grid>
        </Grid.Container>
      </Section>

      <div className="group relative z-0 bg-green-light lg:-top-44">
        <div className="hidden absolute transition duration-300 z-10 top-0 left-0 h-full w-full bg-green/50 lg:block group-hover:opacity-0"></div>
        <GatsbyImage
          image={teamPhoto?.gatsbyImageData}
          alt={teamPhoto?.title}
          imgClassName="lg:filter lg:grayscale lg:contrast-125 group-hover:lg:filter-none"
          className="aspect-w-16 aspect-h-8 md:aspect-w-16 md:aspect-h-7"
        />
      </div>

      <Section className="relative bg-green-light py-24 md:py-28 lg:-top-44">
        <Grid.Container className="relative z-10">
          {ourValuesTitle && renderRichText(ourValuesTitle, options)}

          <Grid.Grid md={2} xl={4} className="mt-12 md:mt-16">
            {ourValues &&
              ourValues.map(card => (
                <CardFeature
                  key={card?.id}
                  icon={card?.image?.file?.url}
                  title={card?.title}
                  description={card?.content}
                />
              ))}
          </Grid.Grid>
        </Grid.Container>
      </Section>

      <Grid.Container>
        <div id="jobs" className="relative py-12 lg:-top-16 lg:pt-0">
          <WidgetComeet />
        </div>
      </Grid.Container>
    </Layout>
  )
}

export default Careers

export const pageQuery = graphql`
  query {
    page: contentfulPageCareers {
      title
      description
      featuredImage {
        gatsbyImageData
        resize(width: 512, quality: 80) {
          src
        }
      }
      cards {
        id
        title
        content {
          raw
        }
        image {
          file {
            url
          }
          title
        }
      }
      teamPhoto {
        title
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 70)
      }
      ourValues {
        id
        title
        content {
          raw
        }
        image {
          file {
            url
          }
          title
        }
      }
      ourValuesTitle {
        raw
        references {
          ... on ContentfulTextDecor {
            contentful_id
            __typename
            content
          }
        }
      }
    }
  }
`
