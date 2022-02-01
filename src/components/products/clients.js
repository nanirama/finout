import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"

import TltIcon from "../../images/tlticon.svg";
import Client1 from "../../images/client-logo1.svg";
import Client2 from "../../images/client-logo2.svg";
import Client3 from "../../images/client-logo3.svg";

import SvgImage from "../svgImage"

const Clients = ({data}) => {
const { clientsHeading, clientsLogos } = data;

return (
<Section className="group relative lg:pt-10 pt-5 lg:mt-5 lg:pb-20 pb-10 text-center">
   <div class="container max-w-4xl">
      <div className="w-full">
      <TltIcon/>
         <h2 className="font-bold text-40xl mb-10 lg:mb-16">{clientsHeading ? clientsHeading : 'Our Clients'}</h2>
         <Grid.Row className="w-full flex justify-items-stretch">
            {clientsLogos && clientsLogos.map((item,index)=>{
               console.log('Item', item)
               return(
                  <Grid.Col size="w-full md:w-1/4 pl-6 pr-6 pb-4" className="flex justify-items-stretch clientsvg" key={index}>
                     <SvgImage id={item.image.id}/>
                  </Grid.Col>
               )
            })}
         </Grid.Row>
         <a class="lg:mt-10 mt-2 block text-lg text-gray-500" href="#">And more...</a>
      </div>
   </div>
</Section>
)
}
export default Clients