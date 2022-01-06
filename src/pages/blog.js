import * as React from "react"
import { graphql } from "gatsby"
import BeatLoader from "react-spinners/BeatLoader"
import { GatsbyImage } from "gatsby-plugin-image"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from "../components/cta"
import * as Grid from "../components/ui/grid"
import CardPost from "../components/ui/card-post"

// Assets
import defaultThumbnail from "../images/thumbnail-finout.png"

const IndexBlog = ({ data, location, perLoad }) => {
  const allPosts = data?.allContentfulPost?.edges || []

  const [posts, setPosts] = React.useState([...allPosts.slice(0, perLoad)])
  const [loadMore, setLoadMore] = React.useState(false)
  const [hasMore, setHasMore] = React.useState(allPosts.length > perLoad)
  const loadRef = React.useRef()

  // Handle intersection with load more div
  const handleObserver = entities => {
    const target = entities[0]
    if (target.isIntersecting) {
      setLoadMore(true)
    }
  }

  // Initialize the intersection observer API
  React.useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(handleObserver, options)

    if (loadRef.current) {
      observer.observe(loadRef.current)
    }
  }, [])

  // Handle loading more articles
  React.useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = posts.length
      const isMore = currentLength < allPosts.length
      const nextResults = isMore
        ? allPosts.slice(currentLength, currentLength + perLoad)
        : []

      setPosts([...posts, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  // Check if there is more
  React.useEffect(() => {
    const isMore = posts.length < allPosts.length
    setHasMore(isMore)
  }, [posts]) //eslint-disable-line

  // Metadata
  const title = data?.page?.title || ""
  const description = data?.page?.description || ""
  const thumbnail = data?.page?.featuredImage?.resize?.src || defaultThumbnail
  const featuredImage = data?.page?.featuredImage || null

  return (
    <Layout location={location} beforeFooter={<Cta />}>
      <Seo
        title={title}
        description={description}
        url={location.href}
        image={thumbnail}
      />

      <div className="relative py-16 bg-green md:py-32">
        {featuredImage && (
          <GatsbyImage
            className="!absolute left-0 top-0 !h-full !w-full"
            image={featuredImage?.gatsbyImageData}
            alt={featuredImage?.title}
          />
        )}
      </div>

      <div className="relative -top-14 mb-16">
        <Grid.Container md>
          <Grid.Grid md={2} lg={3}>
            {posts &&
              posts.map(item => (
                <CardPost
                  key={item?.node?.id}
                  title={item?.node?.title}
                  author={item?.node?.author}
                  date={item?.node?.publishDate}
                  to={`/blog/${item?.node?.slug}/`}
                  img={item?.node?.featuredImage?.gatsbyImageData}
                />
              ))}
          </Grid.Grid>

          <div ref={loadRef} className="text-center pt-12">
            <BeatLoader color="#49a57f" loading={hasMore} size={20} />
          </div>
        </Grid.Container>
      </div>
    </Layout>
  )
}

IndexBlog.defaultProps = {
  perLoad: 15,
}

export default IndexBlog

export const pageQuery = graphql`
  query {
    page: contentfulBlogHome {
      title
      description
      featuredImage {
        title
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 70)
        resize(width: 512, quality: 80) {
          src
        }
      }
    }
    allContentfulPost(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          description
          publishDate(formatString: "MMM Do, YYYY")
          featuredImage {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          author {
            name
            photo {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          content {
            raw
          }
        }
      }
    }
  }
`
