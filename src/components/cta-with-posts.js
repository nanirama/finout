

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import * as COLORS from "../shared/colors"
import AOS from 'aos';
// Components
import Button from "./ui/button"
import * as Grid from "./ui/grid"
import CardPost from "./ui/card-post"
import Cta from "./cta"
import BgExtension from "./ui/bg-extension"
const CtaWithPosts = () => {
React.useEffect(() => {
AOS.init({
duration: 1000,
delay: 50,
once: true
});
AOS.refresh();
}, [])
const data = useStaticQuery(
  graphql`
  query {
    contentfulCtaDefault {
      content {
        raw
      }
      buttonPrimary {
        title
        url
      }
    }
    allContentfulPost(
      limit: 3
      sort: { fields: publishDate, order: DESC }
    ) {
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
          content {
            raw
          }
        }
      }
    }
  }
`
)
const settings = {
dots: true,
infinite: true,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1,
lazyLoad: "progressive",
responsive: [
  {
    breakpoint: 9999,
    settings: "unslick",
  },
  {
    breakpoint: 1023,
    settings: {
    slidesToShow: 1,
  },
  },
],
}
const posts = data?.allContentfulPost?.edges || []
return (
<div className="mb-20">
   <Cta />
   <div className="relative">
      <BgExtension color={COLORS.green} />
      <Grid.Container md className="text-center">
         <div className="w-full"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1500"
            >
            <div className="-mx-4 pb-8 overflow-hidden lg:mx-0 lg:pb-8 lg:overflow-visible">
               <Slider
                  {...settings}
                  className="lg:grid lg:gap-y-8 lg:gap-8 lg:grid-cols-3">
                  {posts &&
                  posts.map(item => {
                  return (
                  <Grid.Inner
                     key={item?.node?.id}
                     className="h-full px-4 pb-12 sm:px-18 lg:px-0 lg:pb-0">
                     <CardPost
                        title={item?.node?.title}
                        date={item?.node?.publishDate}
                        to={`/blog/${item?.node?.slug}/`}
                        img={item?.node?.featuredImage?.gatsbyImageData}
                        className="h-full"
                        />
                  </Grid.Inner>
                  )
                  })}
               </Slider>
            </div>
            <Button
               title="View More"
               to="/blog"
               className="hidden mt-8 lg:inline-block"
               />
         </div>
      </Grid.Container>
   </div>
</div>
)
}
export default CtaWithPosts