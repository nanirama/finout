import React from "react"
import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"
import TltIcon from "../../images/tlticon.svg";
import Integration1 from "../../images/integration/logo-a.png";
import Integration2 from "../../images/integration/logo-aws.png";
import Integration3 from "../../images/integration/logo-n.png";
import Integration4 from "../../images/integration/logo-k-s.png";
import Integration5 from "../../images/integration/logo-c.png";
import Integration6 from "../../images/integration/logo-p2.png";
import Integration7 from "../../images/integration/logo-green.png";
import Integration8 from "../../images/integration/logo-dd.png";
import Integration9 from "../../images/integration/logo-dd.png";
import Integration10 from "../../images/integration/logo-k-s.png";
import Integration11 from "../../images/integration/logo-p2.png";
import Integration12 from "../../images/integration/logo-p3.png";
import Integration13 from "../../images/integration/logo-p1.png";

const Integrations = () => {
return (
<Section className="group relative pt-24 pb-20 text-center">
   <div class="container lg:max-w-3xl w-full mt-10">
      <div className="w-full">
         <TltIcon/>
         <h2 className="font-bold pb-10 mb-20 text-5xl">Integrations</h2>
         <div className="relative w-full flex lg:flex-row">
 <Grid.Col size="lg:w-2/5">
 <div className="int-logo logo1">
<img src={Integration1} alt="" />
</div>
<div className="int-logo logo2">
<img src={Integration2} alt="" />
</div>
<div className="int-logo logo3">
<img src={Integration3} alt="" />
</div>
<div className="int-logo logo4">
<img src={Integration4} alt="" />
</div>
<div className="int-logo logo5">
<img src={Integration5} alt="" />
</div>
<div className="int-logo logo6">
<img src={Integration6} alt="" />
</div>
 </Grid.Col>
 <Grid.Col size="lg:w-2/5">
5
 </Grid.Col>
 <Grid.Col size="lg:w-2/5">
6
 </Grid.Col>
         </div>
       
      </div>
   </div>
</Section>
)
}
export default Integrations

