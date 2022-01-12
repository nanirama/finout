import * as React from "react"
import { graphql } from "gatsby"
import Slider from "react-slick"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import AOS from 'aos';
// Components
import * as Grid from "../components/ui/grid"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroIndex from "../components/hero-index"
import CtaWithPosts from "../components/cta-with-posts"
import CardFeature from "../components/ui/card-feature"
import Section from "../components/ui/section"
import Button from "../components/ui/button"
import Blockquote from "../components/ui/blockquote"
import BgExtension from "../components/ui/bg-extension"
import CardIcon from "../components/ui/card-icon"
import Decor from "../components/ui/decor"

// Assets
import infographic from "../images/infographic.mp4"
import infographicMobile from "../images/infographic-mobile.mp4"
import Video from "../components/ui/video"
import defaultThumbnail from "../images/thumbnail-finout.png"

const Index = ({ data, location }) => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
        delay: 50,
        once: true
    });
    AOS.refresh();
}, [])

  const breakpoints = useBreakpoint()
  const title = data?.page?.title || ""
  const description = data?.page?.description || ""
  const thumbnail = data?.page?.featuredImage?.resize?.src || defaultThumbnail
  const testimonials = data?.page?.testimonials || null
  const features = data?.page?.features || []
  const featureSpotlightTitle = data?.page?.featureSpotlightTitle || null
  const featureSpotlightButton = data?.page?.featureSpotlightButton || null
  const servicesTitle = data?.page?.servicesTitle || null
  const services = data?.page?.servicesFeatures || []
  const servicesButton = data?.page?.servicesButton || null

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }

  return (
    <Layout
      location={location}
      hero={<HeroIndex />}
      beforeFooter={<CtaWithPosts />}>
      <Seo
        title={title}
        description={description}
        image={thumbnail}
        url={location.href}
      />

      <Section className="py-16 bg-green-light overflow-hidden">
      <div className="w-full"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Slider {...settings}>
          {testimonials &&
            testimonials.map(testimonial => (
              <Blockquote
                key={testimonial?.id}
                name={testimonial?.name}
                cite={testimonial?.company}
                quote={testimonial?.content?.content}
                className="max-w-4xl mx-auto pb-6"
              />
            ))}
        </Slider>
        </div>
      </Section>

      <Section className="relative cardfeature">
        <BgExtension />
       
        <Grid.Container md className="relative z-10 cardfeature">
        <div className="w-full"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
          <Grid.Grid lg={3}>
            {features &&
              features.map(card => (
                <CardFeature
                  key={card?.id}
                  icon={card?.image?.file?.url}
                  title={card?.title}
                  description={card?.content}
                                   
                />
              ))}
          </Grid.Grid>
          </div>
        </Grid.Container>
       
      </Section>

      <Section className="py-24 lg:py-32">
        <Grid.Container md className="text-center">
        <div className="w-full"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
          <h2 className="max-w-md mx-auto text-4xl">{featureSpotlightTitle}</h2>

          <div className="my-12"></div>

          {breakpoints.lg && (
            <Video
              src={infographicMobile}
              loop
              autoPlay
              height="auto"
              className="px-8"
            />
          )}

          {!breakpoints.lg && (
            <Video src={infographic} loop autoPlay height="auto" />
          )}

          <Button
            title={featureSpotlightButton?.title}
            to={featureSpotlightButton?.url}></Button>
            </div>
        </Grid.Container>
      </Section>

      <Section className="help group relative py-24 bg-green-light 2xl:py-28">
        <Decor animated />

        <Grid.Container xs className="text-center">
        <div className="w-full"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
          <h2 className="font-medium mb-10 2xl:mb-14">{servicesTitle}</h2>

          <Grid.Grid xs={2} md={3}>
            {services &&
              services.map(card => (
                <Grid.Inner key={card?.id} className="my-2 md:my-3">
                  <CardIcon icon={card?.image?.file?.url} title={card?.title} />
                </Grid.Inner>
              ))}
          </Grid.Grid>

          <Button
            to={servicesButton?.url}
            title={servicesButton?.title}
            className="mt-16"
          />
          </div>
        </Grid.Container>
      </Section>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    page: contentfulPageHome {
      title
      description
      featuredImage {
        gatsbyImageData
        resize(width: 512, quality: 70) {
          src
        }
      }
      testimonials {
        id
        name
        company
        content {
          content
        }
      }
      features {
        id
        image {
          title
          file {
            url
          }
        }
        title
        content {
          raw
        }
      }
      featureSpotlightTitle

      featureSpotlightButton {
        title
        url
      }
      servicesTitle
      servicesFeatures {
        id
        content {
          raw
        }
        title
        image {
          file {
            url
          }
        }
      }
      servicesButton {
        title
        url
      }
    }
  }
`
