import * as React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import { find } from "lodash-es"
import { GatsbyImage } from "gatsby-plugin-image"
import { getRelatedPosts, maxChar } from "../helpers"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import CtaWithPosts from "../components/cta-with-posts"
import * as Grid from "../components/ui/grid"
import Meta from "../components/ui/meta"
import Share from "../components/ui/share"
import CodeSnippet from "../components/ui/code-snippet"
import Author from "../components/ui/author"
import BgExtension from "../components/ui/bg-extension"

// Assets
import ChevronLeft from "../svg/chevron-left.svg"
import defaultThumbnail from "../images/thumbnail-finout.png"

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => (
      <GatsbyImage
        image={node?.data?.target?.gatsbyImageData}
        alt={node?.data?.target?.title}
        className="my-12"
      />
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.length === 1 &&
        find(node.content[0].marks, { type: "code" })
      ) {
        return <CodeSnippet>{children}</CodeSnippet>
      }

      return <p>{children}</p>
    },
  },
}

const BlogPostTemplate = ({ data, location }) => {
  const currentURL = location.href
  const {
    id,
    title,
    publishDate,
    description,
    content,
    author,
    featuredImage,
  } = data.contentfulPost

  const shareImage =
    featuredImage.gatsbyImageData.images.fallback.src || defaultThumbnail
  const allPosts = data?.allContentfulPost?.edges
  const related = getRelatedPosts(allPosts, id)

  return (
    <Layout location={location} title={title} beforeFooter={<CtaWithPosts />}>
      <Seo
        title={title}
        description={description || ""}
        image={shareImage}
        url={currentURL}
      />

      <div className="relative pt-6 md:pt-12 bg-green-light">
        <BgExtension position="bottom" color="white" />

        <Grid.Container md>
          <div className="mb-6">
            <Link
              to="/blog/"
              className="inline-block font-bold text-coral text-sm">
              <ChevronLeft className="inline-block w-2 h-auto mr-2 mb-0.5" />
              <span>Back to blog page</span>
            </Link>
          </div>

          <GatsbyImage
            image={featuredImage?.gatsbyImageData}
            alt={featuredImage?.title}
            className="aspect-w-16 aspect-h-15 rounded-xl safari-overflow-fix md:aspect-h-5"
          />
        </Grid.Container>
      </div>

      <Grid.Container md className="mb-20 md:mb-44">
        <div className="flex flex-wrap">
          <div className="max-w-full lg:w-2/3 lg:pr-16 xl:24">
            <header className="pt-10 pb-6 mb-6 border-b border-green-light md:pt-12 md:pb-12 md:mb-12">
              <h1
                itemProp="headline"
                className="mb-6 max-w-4xl text-3xl md:text-4xl">
                {title}
              </h1>

              <Meta author={author} date={publishDate} className="mb-3" />
            </header>

            <article
              itemScope
              itemType="http://schema.org/Article"
              className="w-full overflow-hidden prose prose-lg max-w-none">
              {content && renderRichText(content, options)}
            </article>

            <footer>
              <Author author={author} />
            </footer>
          </div>

          <aside className="w-full pt-20 lg:pt-12 lg:pl-12 lg:w-1/3">
            <div className="sticky top-44 space-y-8">
              {related.length > 0 && (
                <div className="space-y-6">
                  <div className="font-bold">You may also like...</div>

                  {related.map(post => (
                    <Link
                      key={post?.node?.id}
                      to={`/blog/${post?.node?.slug}/`}
                      className="flex flex-wrap items-center">
                      <div className="w-24 mr-4">
                        <GatsbyImage
                          image={post?.node?.featuredImage?.gatsbyImageData}
                          alt={post?.node?.featuredImage?.title}
                          className="aspect-w-1 aspect-h-1 rounded-xl safari-overflow-fix"
                        />
                      </div>

                      <div className="flex-1">
                        <time className="font-display font-medium text-xs text-gray">
                          {post?.node?.publishDate}
                        </time>

                        <h4 className="mb-0 font-medium text-sm">
                          {maxChar(post?.node?.title)}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              <div className="mb-12 text-center lg:mb-0 lg:text-left">
                <Share
                  url={currentURL}
                  title={title}
                  description={description}
                  className="mt-12 lg:mt-0"
                />
              </div>
            </div>
          </aside>
        </div>
      </Grid.Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      title
      description
      publishDate(formatString: "MMM Do, YYYY")
      author {
        name
        bio {
          raw
        }
        photo {
          gatsbyImageData(layout: FIXED, width: 72)
        }
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            __typename
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      featuredImage {
        title
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    allContentfulPost(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "MMM Do, YYYY")
          featuredImage {
            title
            gatsbyImageData(layout: FIXED, width: 96)
          }
        }
      }
    }
  }
`
