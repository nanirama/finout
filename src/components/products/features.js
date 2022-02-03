import React from "react"
import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"
import Button from "../../components/ui/button"
import RichTextContent from "../ui/RichTextContent"
import SvgImage from "../svgImage"


import Feature1 from "../../images/feature1.svg";
import Feature2 from "../../images/feature2.svg";
import Feature3 from "../../images/feature3.svg";
import Feature4 from "../../images/feature4.svg";

const Features = ({data}) => {
const { mainFeaturesHeading, mainFeaturesFeatures, mainFeaturesButtonLink } = data;
console.log('List',mainFeaturesFeatures)

return (
<Section className="group bg-blue-50 lg:text-left text-center features_blk">
   <div class="container max-w-4xl lg:flex">
      <div class="lg:w-2/5 w-full">
         <div className="w-full">
            <h3 className="text-4xl font-semi-bold lg:mb-5 mb-16 -mt-2 leading-none">{mainFeaturesHeading && mainFeaturesHeading}</h3>
            <Button to={mainFeaturesButtonLink} className="lg:mt-4 mb-8 py-2 px-5 rounded text-base normal-case inline-flex start_btn">Let's Start</Button>
         </div>
      </div>
      <div class="lg:w-3/5 w-full">
         <Grid.Row>
            {mainFeaturesFeatures && mainFeaturesFeatures.map((card, index)=>{
               return(
                  <Grid.Col size="w-full lg:w-1/2" key={index}>
                     <div className="lg:mb-16 mb-12 lg:pr-10 mainfeatures">
                        <SvgImage id={card?.image?.id} width="30"/>
                        {/* <Feature1/> */}
                        <h4 className="mt-3 mb-2">{card?.title}</h4>
                        <RichTextContent
                        description={card?.content}
                        />
                     </div>
                  </Grid.Col>
               )
            })}
         </Grid.Row>
      </div>
   </div>
</Section>
)
}
export default Features