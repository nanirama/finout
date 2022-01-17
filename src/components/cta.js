import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import * as COLORS from "../shared/colors"
import AOS from 'aos';
// Components
import * as Grid from "./ui/grid"
import Button from "./ui/button"
import TextDecor from "./ui/text-decor"
import Decor from "./ui/decor"

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
        <h2 className="text-white text-4xl mb-6 lg:text-5xl lg:pr-12">
          {children}
        </h2>
      )
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="mt-4 text-lg text-white">{children}</p>
    },
  },
}
const Cta = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
        delay: 50,
        once: true
    });
    AOS.refresh();
}, [])
  const { data } = useStaticQuery(
    graphql`
      query {
        data: contentfulCtaDefault {
          content {
            raw
            references {
              ... on ContentfulTextDecor {
                contentful_id
                __typename
                content
              }
            }
          }

          buttonPrimary {
            title
            url
          }
        }
      }
    `
  )
  const content = data?.content || null
  const buttonPrimary = data?.buttonPrimary || null
  return (
    <div className="group relative py-20 bg-green lg:py-28">
      <Decor color={COLORS.green} animated />
      <Grid.Container sm className="text-center">
      <div className="w-full"
               data-aos="fade-up"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
        {content && renderRichText(content, options)}

        <Button
          title={buttonPrimary?.title}
          to={buttonPrimary?.url}
          className="mt-12"
        />
        </div>
      </Grid.Container>
    </div>
  )
}
export default Cta