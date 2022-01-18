import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"

import TltIcon from "../../images/tlticon.svg";
import Client1 from "../../images/client-logo1.svg";
import Client2 from "../../images/client-logo2.svg";
import Client3 from "../../images/client-logo3.svg";

const Clients = () => {

return (
<Section className="group relative pt-10 mt-5 pb-20 text-center">
   <div class="container max-w-3xl">
      <div className="w-full">
      <TltIcon/>
         <h2 className="font-bold text-40xl mb-10 lg:mb-16">Our Clients</h2>
         <Grid.Row>
            <Grid.Col size="w-full md:w-1/3 pl-8 pr-8">
                         <Client1/>
            </Grid.Col>
            <Grid.Col size="w-full md:w-1/3 pl-8 pr-8">
            
            <Client2/>
            </Grid.Col>
            <Grid.Col size="w-full md:w-1/3 pl-8 pr-8">
            
            <Client3/>
            
            </Grid.Col>
         </Grid.Row>
         <a class="mt-10 block text-lg text-gray-500" href="#">And more...</a>
      </div>
   </div>
</Section>
)
}
export default Clients