import React from "react"
import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"
import Fac from "../../images/fac1.svg";
import TltIcon from "../../images/tlticon.svg";

const WhatweDo = ({data}) => {
const { whatWeDoHeading, whatWeDoContent, whatWeDoImage } = data;
return (
<Section className="group relative pt-24 pb-10 text-center">
   <Grid.Container xs className="text-center">
      <div className="w-full">
         <TltIcon/>
         {/* <img src={whatWeDoImage.file.url}/> */}
         <h2 className="font-bold text-40xl mb-8">{whatWeDoHeading && whatWeDoHeading}</h2>
         <div className="lg:w-3/4 m-auto">
            <div class="whatwedo_img relative flex justify-center">
            {/* <Fac/> */}
            <img src={whatWeDoImage.file.url}/>
            </div>
         </div>
         <p className="text-md">{whatWeDoContent.whatWeDoContent}</p>
      </div>
   </Grid.Container>
</Section>
)
}
export default WhatweDo