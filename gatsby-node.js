const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a templates
  const pageDefault = path.resolve(`./src/templates/page-default.js`)
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get data
  const result = await graphql(
    `
      {
        allContentfulPage {
          edges {
            node {
              title
              slug
              content {
                raw
              }
            }
          }
        }
        allContentfulPost(limit: 1000) {
          edges {
            node {
              title
              slug
              content {
                raw
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const pages = result.data.allContentfulPage.edges
  const posts = result.data.allContentfulPost.edges

  if (pages.length > 0) {
    pages.forEach(page => {
      createPage({
        path: `/${page.node.slug}/`,
        component: pageDefault,
        context: {
          slug: page.node.slug,
        },
      })
    })
  }

  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: `/blog/${post.node.slug}/`,
        component: blogPost,
        context: {
          slug: post.node.slug,
        },
      })
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type SeoMetadata {
      title: String
      description: String
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Fields {
      slug: String
    }
  `)
}
