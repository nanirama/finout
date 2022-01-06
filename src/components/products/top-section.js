import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"
import Button from "../../components/ui/button"

const TopSection = () => {
    return (


        <Section className="bg-yellow-300 relative py-10">
        <Grid.Container md className="relative">
          <Grid.Inner className="p-12 md:p-24">
           
            <Grid.Row>
              <Grid.Col size="w-full lg:w-1/2">
                <Grid.Inner>
                <h2 className="mb-8 lg:pr-12">
                The Modern cost Observibility platform for 
                <span class="relative"> FinOps
                <svg class="absolute left-0 h-auto w-[105%]" width="50" height="7" viewBox="0 0 50 7" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3277 3.14054C11.4815 3.66293 4.42524 5.00412 1.04901 6.45146L0 4.00442C3.81725 2.36802 11.256 1.0092 20.1708 0.482765C29.1338 -0.0465213 39.7522 0.256196 50 2.03741L49.5441 4.66048C39.5343 2.92066 29.1256 2.62101 20.3277 3.14054Z" fill="#F87979"></path></svg>
                
                </span>
                </h2>
<p className="mb-4 font-normal text-sm">Finout is the first self-service, zero-code, cloud cost observability platform that combines business metrics with your cost, slicing it up to customers, features and unit metrics.
</p>

<Button className="mt-4 p-2 mr-3 rounded text-sm normal-case inline-flex"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="currentColor" class="bi bi-clock" viewBox="0 0 23 11">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> Watch a demo</Button>
<Button className="mt-4 p-2 rounded text-sm normal-case inline-flex"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="currentColor" class="bi bi-calendar2" viewBox="0 0 23 11">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
</svg> Schedule a 1:1</Button>
                </Grid.Inner>
              </Grid.Col>

              
            </Grid.Row>
          </Grid.Inner>
        </Grid.Container>
        <div className="lg:absolute lg:top-12 lg:right-0 lg:w-2/4 lg:mt-3">
        <StaticImage src="../../assets/images/dashbord.png" alt="" />
        </div>
      </Section>


        )
    }
    
    export default TopSection
    