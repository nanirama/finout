import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import * as SIZES from "../shared/sizes"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroAbout from "../components/hero-about"
import Contact from "../components/contact"
import CtaWithPosts from "../components/cta-with-posts"
import * as Grid from "../components/ui/grid"
import Button from "../components/ui/button"
import Section from "../components/ui/section"
import CardTeam from "../components/ui/card-team"
import BgExtension from "../components/ui/bg-extension"

// Assets
import defaultThumbnail from "../images/thumbnail-finout.png"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="mt-6">{children}</p>
    },
  },
}

const About = ({ data, location }) => {
  const title = data?.page?.title || ""
  const description = data?.page?.description || ""
  const thumbnail = data?.page?.featuredImage?.resize?.src || defaultThumbnail
  const storyTitle = data?.page?.storyTitle || ""
  const storyColumnLeft = data?.page?.storyColumnLeft || ""
  const storyColumnRight = data?.page?.storyColumnRight || ""
  const teamTitle = data?.page?.teamTitle || ""
  const teamMembers = data?.page?.teamMembers || ""
  const teamButton = data?.page?.teamButton || ""

  return (
    <Layout
      location={location}
      hero={<HeroAbout />}
      beforeFooter={<CtaWithPosts />}>
      <Seo
        title={title}
        description={description}
        image={thumbnail}
        url={location.href}
      />

      <Section offset className="bg-green-light">
        <Grid.Container md className="relative -top-16 lg:-top-32">
          <Grid.Inner className="-mx-4 bg-white p-12 shadow-xl sm:mx-0 sm:rounded-xl md:p-24">
            <h2 className="text-center lg:text-left">{storyTitle}</h2>

            <Grid.Row>
              <Grid.Col size="w-full lg:w-1/2">
                <Grid.Inner className="lg:pr-12">
                  {storyColumnLeft && renderRichText(storyColumnLeft, options)}
                </Grid.Inner>
              </Grid.Col>

              <Grid.Col size="w-full lg:w-1/2">
                <Grid.Inner className="lg:pr-12">
                  {storyColumnRight &&
                    renderRichText(storyColumnRight, options)}
                </Grid.Inner>
              </Grid.Col>
            </Grid.Row>
          </Grid.Inner>
        </Grid.Container>
      </Section>

      <Section offset className="pb-12 bg-green-light lg:pb-0 lg:bg-white">
        <BgExtension size={SIZES.lg} />

        <Grid.Container md className="relative z-10 lg:text-center">
          <h2 className="mb-12 text-center">{teamTitle}</h2>

          <Grid.Grid lg={3}>
            {teamMembers &&
              teamMembers.map(item => (
                <Grid.Inner key={item?.id}>
                  <CardTeam
                    img={item?.image?.gatsbyImageData}
                    name={item?.name}
                    title={item?.title}
                    description={item?.content}
                  />
                </Grid.Inner>
              ))}
          </Grid.Grid>

          <div className="text-center">
            <Button
              to={teamButton?.url}
              title={teamButton?.title}
              className="mt-16"
            />
          </div>
        </Grid.Container>
      </Section>

      <Contact />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    page: contentfulPageAbout {
      title
      description
      featuredImage {
        gatsbyImageData
        resize(width: 512, quality: 80) {
          src
        }
      }

      storyTitle
      storyColumnRight {
        raw
      }
      storyColumnLeft {
        raw
      }
      teamTitle
      teamMembers {
        id
        image {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          title
        }
        content {
          raw
        }
        name
        title
      }
      teamButton {
        title
        url
      }
    }
  }
`
