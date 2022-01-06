import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as Grid from "../components/ui/grid"

// Assets
import defaultThumbnail from "../images/thumbnail-finout.png"

const PageContentfulTemplate = ({ data, location }) => {
  const currentURL = location.href
  const thumbnail = defaultThumbnail
  const page = data.contentfulPage

  return (
    <Layout location={location}>
      <Seo
        title={page?.title}
        description={page?.description}
        image={thumbnail}
        url={currentURL}
      />

      <Grid.Container md>
        <div className="prose max-w-none mb-8 py-12 md:py-20">
          <h1 className="mb-12">{page?.title}</h1>

          {renderRichText(page?.content)}
        </div>
      </Grid.Container>
    </Layout>
  )
}

export default PageContentfulTemplate

export const pageQuery = graphql`
  query PageContentfulBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(slug: { eq: $slug }) {
      title
      description
      content {
        raw
      }
    }
  }
`
