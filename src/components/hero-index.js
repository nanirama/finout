import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import * as POSITIONS from "../shared/positions"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

// Components
import * as Grid from "./ui/grid"
import Button from "./ui/button"
import VideoHero from "./ui/video-hero"

// Assets
import video from "../images/hero.mp4"
import videoThumbnail from "../images/hero-thumbnail.png"
import videoMobile from "../images/hero-mobile.mp4"
import videoMobileThumbnail from "../images/hero-mobile-thumbnail.png"
import SlideDice from "../svg/slide-dice.svg"

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <h1 className="text-white pr-12 lg:pr-20 xl:text-6xl">{children}</h1>
      )
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-white text-lg lg:text-xl">{children}</p>
    },
  },
}

const HeroIndex = () => {
  const breakpoints = useBreakpoint()
  const { data } = useStaticQuery(
    graphql`
      query {
        data: contentfulPageHome {
          heroContent {
            raw
          }
          heroButton {
            title
            url
          }
        }
      }
    `
  )

  const content = data?.heroContent || ""
  const btn = data?.heroButton || ""

  return (
    <section className="relative py-16 overflow-hidden bg-green lg:py-20 2xl:py-24">
      <Grid.Container className="relative z-10">
        <Grid.Row alignY={POSITIONS.center}>
          <Grid.Col size="w-full lg:w-2/5 xl:w-2/6">
            <Grid.Inner className="text-center lg:pr-12 lg:text-left 2xl:pr-20">
              <SlideDice className="w-auto h-24 mx-auto lg:ml-0 lg:mb-6 lg:h-32" />

              <div className="pb-[95%] lg:hidden"></div>
              {content && renderRichText(content, options)}

              <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4">
                <Button title={btn?.title} to={btn?.url} color="coral" />
              </div>
            </Grid.Inner>
          </Grid.Col>

          <Grid.Col size="w-full hidden lg:w-3/5 xl:w-4/6 lg:block">
            <Grid.Inner className="order-last">
              <div className="mt-8 lg:-mr-12 lg:mt-0">
                <div className="relative pb-[64%]"></div>
              </div>
            </Grid.Inner>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      {breakpoints.lg && (
        <VideoHero
          src={videoMobile}
          poster={videoMobileThumbnail}
          className="hero-video absolute object-cover z-0 !w-full bottom-0 left-0 right-0 !h-[calc(100%+64px)] !-top-16 lg:hidden"
          autoPlay
        />
      )}

      {!breakpoints.lg && (
        <VideoHero
          src={video}
          poster={videoThumbnail}
          className="hero-video hidden absolute object-cover z-0 !w-full !h-full top-0 bottom-0 left-0 right-0 lg:block"
          autoPlay
        />
      )}
    </section>
  )
}

export default HeroIndex
