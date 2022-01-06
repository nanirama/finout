import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

// Components
import * as Grid from "../components/ui/grid"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Social from "../components/ui/social"
import WidgetHubspotForm from "../components/widget-hubspot-form"
import WidgetHubspotMeeting from "../components/widget-hubspot-meeting"

// Assets
import Azure from "../svg/logos/azure.svg"
import Aws from "../svg/logos/aws.svg"
import Datadog from "../svg/logos/datadog.svg"
import Kubernetes from "../svg/logos/kubernetes.svg"
import Snowflake from "../svg/logos/snowflake.svg"
import Tableau from "../svg/logos/tableau.svg"
import NewRelic from "../svg/logos/new-relic.svg"
import SCompany from "../svg/logos/s-company.svg"
import GoogleCloud from "../svg/logos/google-cloud.svg"
import SendGrid from "../svg/logos/send-grid.svg"
import defaultThumbnail from "../images/thumbnail-finout.png"

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1>{children}</h1>
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-lg">{children}</p>
    },
  },
}

const Contact = ({ data, location }) => {
  const title = data?.page?.title || ""
  const description = data?.page?.description || ""
  const thumbnail = data?.page?.featuredImage?.resize?.src || defaultThumbnail
  const content = data?.page?.heroContent || ""
  const calendarTitle = data?.page?.calendarTitle || ""
  const address = data?.settings?.address || ""
  const logoClass = "w-auto h-14 mx-auto"

  return (
    <Layout location={location} className="bg-green-light">
      <Seo
        title={title}
        description={description}
        image={thumbnail}
        url={location.href}
      />

      <div className="relative z-10 bg-green lg:pt-28">
        <Grid.Container md>
          <Grid.Grid lg={2}>
            <Grid.Inner className="relative -mx-4 lg:mx-0">
              <div className="top-0 left-0 w-full px-8 py-16 bg-white shadow-xl lg:absolute lg:w-11/12 lg:p-16 lg:rounded-xl">
                <WidgetHubspotForm />
              </div>
            </Grid.Inner>

            <Grid.Inner className="pt-10 text-center text-white max-w-xl mx-auto lg:pt-0 lg:text-left">
              {content && renderRichText(content, options)}

              <div className="mt-12 py-12 border-t border-white/20">
                <Grid.Grid md={2} className="justify-center items-center">
                  <Grid.Inner>{content && renderRichText(address)}</Grid.Inner>

                  <Grid.Inner>
                    <Social className="justify-center mt-6 md:mt-0" />
                  </Grid.Inner>
                </Grid.Grid>
              </div>
            </Grid.Inner>
          </Grid.Grid>
        </Grid.Container>
      </div>

      <Grid.Container md>
        <Grid.Grid lg={2}>
          <Grid.Inner></Grid.Inner>

          <Grid.Grid xs={3} md={5} className="mt-6 text-center lg:mt-12">
            <GoogleCloud className={logoClass} />
            <Kubernetes className={logoClass} />
            <Datadog className={logoClass} />
            <SendGrid className={logoClass} />
            <Azure className={logoClass} />
            <Tableau className={logoClass} />
            <Aws className={logoClass} />
            <SCompany className={logoClass} />
            <NewRelic className={logoClass} />
            <Snowflake className={logoClass} />
          </Grid.Grid>
        </Grid.Grid>

        <div className="mt-24 mb-12 text-center lg:mt-44">
          <h2>{calendarTitle}</h2>
          <WidgetHubspotMeeting />
        </div>
      </Grid.Container>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    page: contentfulPageContact {
      title
      description
      featuredImage {
        gatsbyImageData
        resize(width: 512, quality: 70) {
          src
        }
      }
      heroContent {
        raw
      }
      calendarTitle
    }
    settings: contentfulSettings {
      address {
        raw
      }
    }
  }
`
