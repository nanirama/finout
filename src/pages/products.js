import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

// import TopSection from "../components/products/top-section"
import TopSection from "../components/products/top-section"
import WhatweDo from "../components/products/what-we-do"
import Clients from "../components/products/clients"
import Features from "../components/products/features"
import Finops from '../components/products/finops'
import Integration from "../components/products/integration"
import Monitoring from "../components/products/monitoring"
import Tabs from "../components/products/tabs"
import CtaWithPosts from "../components/cta-with-posts"
import defaultThumbnail from "../images/thumbnail-finout.png"




const Products = ({ data, location }) => {
  const title = data?.product?.title || ""
  const description = data?.product?.description || ""
  const thumbnail = data?.product?.featuredImage?.resize?.src || defaultThumbnail
  return (
    <Layout
      location={location}
      >
      <Seo
        title="Products page"
        description="Products desc"
         url={location.href}
      />
      {/* <TopSection data={data.product}/> */}
      <TopSection data={data.product}/>
      <WhatweDo data={data.product}/>
      <Clients data={data.product}/>
      <Features data={data.product}/>
      <Integration/>
      <Monitoring data={data.product}/>
      <Finops/>
      <Tabs data={data.product}/>
      <CtaWithPosts/>
    </Layout>
  )
}

export default Products

export const productQuery = graphql`
query {
  product: contentfulPageProducts(slug: {eq: "Product-page"}) {
    slug
    id
    title
    heroHeading
    heroShortText {
      heroShortText
    }
    heroImage {
      id
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
    heroButton1Link
    heroButton2Link
    whatWeDoHeading
    whatWeDoContent {
      whatWeDoContent
    }
    whatWeDoImage {
      file {
        url
      }
    }
    clientsHeading
    clientsLogos {
      image {
        file {
          url
        }
        id
      }
    }
    mainFeaturesButtonLink
    mainFeaturesHeading
    mainFeaturesFeatures {
      title
      content {
        raw
      }
      image {
        id
      }
    }
    howItWorksHeading
    howItWorksFeatures {
      title
      content {
        raw
      }
      image {
        gatsbyImageData(width: 10, layout: FULL_WIDTH, quality: 100)
        id
      }
    }
    services {
      title
      description {
        raw
      }
      featuredImage {
        id
      }
    }
  }
}
`