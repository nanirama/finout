import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"
import Button from "../../components/ui/button"
import SvgImage from "../svgImage"
import Dashboard from "../../images/dashbord.svg";

const TopSection = ({data}) => {
    const { heroHeading, heroShortText, heroImage, heroButton1Link, heroButton2Link } = data;
    return (


      <Section className="bg-yellow-300 relative pt-16 pb-8 top_section">

<Grid.Container xl className="relative px-0">
      <Grid.Inner className="">
         <Grid.Row className="lg:-mx-0 xl:-mx-3 mx-0 mr-0">
            <Grid.Col size="w-full lg:w-1/2 flex items-center">
               <Grid.Inner className="flex justify-center lg:text-left text-center">
                  <div className="w-full flex flex-col xl:pl-40  px-8">
                     <h2 className="mb-8 text-4xl relative z-20">
                        {heroHeading && heroHeading}
                           <span class="relative">
                           <div className="absolute right-0 -bottom-2 -z-1">
                              <svg width="120" height="20" viewBox="0 0 185 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M7 13C55.5 4.99999 117.5 5 178 13" stroke="#F87979" stroke-width="14" stroke-linecap="round"/>
                              </svg>
                           </div>
                        </span>
                     </h2>
                     <p className="mb-4 font-normal text-md">
                     {heroShortText && heroShortText.heroShortText}  
                     </p>
                     <div className="hidden lg:block">
                     <Button to={heroButton1Link} className="mt-4 p-2 mr-3 rounded text-sm normal-case inline-flex text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="currentColor" class="bi bi-clock" viewBox="0 0 23 11">
                           <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                           <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                        Watch a demo
                     </Button>
                     <Button to={heroButton2Link} className="mt-4 p-2 rounded text-sm normal-case inline-flex text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="currentColor" class="bi bi-calendar2" viewBox="0 0 23 11">
                           <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                           <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                        </svg>
                        Schedule a 1:1
                     </Button>
                     </div>
                  </div>
               </Grid.Inner>
            </Grid.Col>
            <Grid.Col size="w-full lg:w-1/2 lg:px-0 lg:mt-0 mt-5">
               <div className="dashboard w-full">
               {/* <Dashboard/> */}
               {/* <img src={heroImage.file.url}/> */}
               {/* <SvgImage id={heroImage.id}/> */}
               <GatsbyImage image={getImage(heroImage)} />
               </div>
            </Grid.Col>

         </Grid.Row>
      </Grid.Inner>
   </Grid.Container>
      </Section>


        )
    }
    
    export default TopSection
    