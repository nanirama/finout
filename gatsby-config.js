const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const breakpoints = {
  xs: "(max-width: 319px)",
  sm: "(max-width: 629px)",
  md: "(max-width: 767px)",
  lg: "(max-width: 1023px)",
  xl: "(max-width: 1279px)",
  "2xl": "(max-width: 1535px)",
  portrait: "(orientation: portrait)",
}

module.exports = {
  siteMetadata: {
    title: "Finout",
    description: "Description",
    siteUrl: "https://www.finout.io",
    login: "https://app.finout.io",
    signup: "https://app.finout.io/account/sign-up",
    social: {
      facebook: "https://facebook.com/finout.io",
      twitter: "https://twitter.com/finout_io",
      linkedin: "https://linkedin.com/company/finout-io",
      github: null,
    },
    menuLinks: [
      {
        title: "About",
        url: "/about/",
      },
      {
        title: "Careers",
        url: "/careers/",
      },
      {
        title: "Blog",
        url: "/blog/",
      },
      {
        title: "Contact",
        url: "/contact/",
      },
    ],
    footerMenuLinks: [
      {
        title: "About",
        url: "/about/",
      },
      {
        title: "Careers",
        url: "/careers/",
      },
      {
        title: "Blog",
        url: "/blog/",
      },
      {
        title: "Contact",
        url: "/contact/",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-177011304-1",
        head: true,
        // See all options at https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N4WT9QL",
        enableWebVitalsTracking: true,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-plugin-force-trailing-slashes",
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: breakpoints,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "ryr7ghq",
        },
      },
    },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "8840961",
        respectDNT: true,
        productionOnly: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -150,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 100,
          backgroundColor: `transparent`,
          webpOptions: {quality: 100}
        }
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              backgroundColor: "white",
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
