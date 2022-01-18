import React from "react"
import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"
import Button from "../../components/ui/button"


import Feature1 from "../../images/feature1.svg";
import Feature2 from "../../images/feature2.svg";
import Feature3 from "../../images/feature3.svg";
import Feature4 from "../../images/feature4.svg";

const Features = () => {

return (
<Section className="group bg-blue-50 pt-40 pb-28">
   <div class="container max-w-4xl lg:flex">
      <div class="md:w-2/5 w-full">
         <div className="w-full">
            <h3 className="text-4xl font-semi-bold mb-5 -mt-2 leading-none">Finout's <br/>main features</h3>
            <Button className="mt-4 py-2 px-5 rounded text-base normal-case inline-flex">Let's Start</Button>
         </div>
      </div>
      <div class="md:w-3/5 w-full">
         <Grid.Row>
            <Grid.Col size="w-full lg:w-1/2">
               <div className="lg:mb-16 mb-5 lg:pr-10">
               <Feature1/>
                  <h4 className="mt-3 mb-2">All in one</h4>
                  <p>AWS, K8s and Snowflake cost in one platform.</p>
               </div>
            </Grid.Col>
            <Grid.Col size="w-full lg:w-1/2">
               <div className="lg:mb-16 mb-5 lg:pr-10">
               <Feature2/>
                  <h4 className="mt-3 mb-2">Quick onboarding</h4>
                  <p>Onboard in minutes - No SDK’s, No API’s. No agents.</p>
               </div>
            </Grid.Col>
            <Grid.Col size="w-full lg:w-1/2">
               <div className="mb-5 lg:pr-10">
               <Feature3/>
                  <h4 className="mt-3 mb-2">Absolute cost</h4>
                  <p>Absolute cost to cost per tenant easily.</p>
               </div>
            </Grid.Col>
            <Grid.Col size="w-full lg:w-1/2">
               <div className="mb-5 lg:pr-5">
               <Feature4/>
                  <h4 className="mt-3 mb-2">Pricing</h4>
                  <p>Pricing will never be connected to the percentage of the bill.</p>
               </div>
            </Grid.Col>
         </Grid.Row>
      </div>
   </div>
</Section>
)
}
export default Features