import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"
import Button from "../../components/ui/button"
import AOS from 'aos';

const TopSection = () => {
  React.useEffect(() => {
      AOS.init({
        duration: 1000,
          delay: 50,
          once: true
      });
      AOS.refresh();
  }, [])

  const { DashboardImg } = useStaticQuery(
    graphql`
      query {
        DashboardImg: file(relativePath: {eq: "dashbord.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    `
  )
    return (


        <Section className="bg-yellow-300 relative py-9">
        <Grid.Container md className="relative">
          <Grid.Inner className="p-12 md:p-24">
           
            <Grid.Row>
              <Grid.Col size="w-full lg:w-1/2"            
              >
                <Grid.Inner>
                <div className="w-full"
               data-aos="fade-right"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
                <h2 className="mb-8 lg:pr-12 text-4xl">
                The Modern cost Observibility platform for 
                <span class="relative"> FinOps
                <div className="absolute right-0 -mt-4 -z-1">
                <svg width="120" height="20" viewBox="0 0 185 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 13C55.5 4.99999 117.5 5 178 13" stroke="#F87979" stroke-width="14" stroke-linecap="round"/>
</svg>
</div>
 </span>
 </h2>
<p className="mb-4 font-normal text-md">Finout is the first self-service, zero-code, cloud cost observability platform that combines business metrics with your cost, slicing it up to customers, features and unit metrics.
</p>

<Button className="mt-4 p-2 mr-3 rounded text-sm normal-case inline-flex"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="currentColor" class="bi bi-clock" viewBox="0 0 23 11">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> Watch a demo</Button>
<Button className="mt-4 p-2 rounded text-sm normal-case inline-flex"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="currentColor" class="bi bi-calendar2" viewBox="0 0 23 11">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
</svg> Schedule a 1:1</Button>
</div>
                </Grid.Inner>
              </Grid.Col>

              
            </Grid.Row>
          </Grid.Inner>
        </Grid.Container>
        <div className="lg:absolute lg:top-12 lg:right-0 lg:w-2/4">
          <div className="w-full"
               data-aos="fade-left"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
              <GatsbyImage image={getImage(DashboardImg)} />
          </div>
        
        </div>
      </Section>


        )
    }
    
    export default TopSection
    