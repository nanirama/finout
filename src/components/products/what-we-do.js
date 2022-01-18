import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"
import Fac from "../../images/fac1.svg";
import TltIcon from "../../images/tlticon.svg";

const WhatweDo = () => {

return (
<Section className="group relative pt-24 pb-10 text-center">
   <Grid.Container xs className="text-center">
      <div className="w-full">
         
         <TltIcon/>
         <h2 className="font-bold text-40xl mb-8">What we do</h2>
         <div className="lg:w-3/4 m-auto">
            <div class="whatwedo_img relative">
            <Fac/>
         {/* <StaticImage src="../../images/fac.svg" alt="" /> */}
       
         {/* <StaticImage className="ellipse" src="../../images/ellipse.svg" alt="" /> */}
            {/* <GatsbyImage image={getImage(WhatWedoImg)} /> */}
            </div>
         </div>
         <p className="text-md">We Integrate with cloud providers, data warehouses and observability platforms to correlate and analyze cost into business KPIs , wrapped up as a modern-day ERP system.</p>
      </div>
   </Grid.Container>
</Section>
)
}
export default WhatweDo