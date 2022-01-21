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

const Integration = () => {
return (
<Section className="group relative pt-24 pb-20 text-center">
   <div class="container lg:max-w-3xl w-full mt-10">
      <div className="w-full">
         <TltIcon/>
         <h2 className="font-bold pb-10 mb-10 text-5xl">Integrations</h2>
         <div className="relative w-full integration flex lg:flex-row flex-col">
 <Grid.Col size="lg:w-2/5 w-full left_blk">
  <div className="absolute lef-0">
<div className="int-logo logo1">
<img src={Integration1} alt="" className="scale-90 hover:scale-110 ease-in-out transition duration-500" />
</div>
<div className="int-logo logo2">
<img src={Integration2} alt="" className="scale-90 hover:scale-110 ease-in-out transition duration-500" />
</div>
<div className="int-logo logo3">
<img src={Integration3} alt="" className="scale-90 hover:scale-110 ease-in-out transition duration-500" />
</div>
<div className="int-logo logo4">
<img src={Integration4} alt="" className="scale-90 hover:scale-110 ease-in-out transition duration-500" />
</div>
<div className="int-logo logo5">
<img src={Integration5} alt="" className="scale-90 hover:scale-110 ease-in-out transition duration-500" />
</div>
<div className="int-logo logo6">
<img src={Integration6} alt="" className="scale-90 hover:scale-110 ease-in-out transition duration-500" />
</div>
</div>
 </Grid.Col>
 <Grid.Col size="lg:w-1/5 flex justify-center items-center w-full center_blk">
<div className="int-logo logo7">
<img src={Integration7} alt="" className="scale-110 hover:scale-125 ease-in-out transition duration-500" />
</div>
 </Grid.Col>
 <Grid.Col size="lg:w-2/5 w-full right_blk">
 <div className="absolute right-0">
<div className="int-logo logo8">
<img src={Integration8} alt="" className="scale-90 hover:scale-110 ease-in-out transition duration-500" />
</div>
<div className="int-logo logo9">
<img src={Integration9} alt="" className="scale-90 hover:scale-110 ease-in-out transition duration-500" />
</div>
<div className="int-logo logo10">
<img src={Integration10} alt="" className="scale-90 hover:scale-110 ease-in-out transition duration-500" />
</div>
<div className="int-logo logo11">
<img src={Integration11} alt="" className="scale-90 hover:scale-110 ease-in-out transition duration-500" />
</div>
<div className="int-logo logo12">
<img src={Integration12} alt="" className="scale-90 hover:scale-110 ease-in-out transition duration-500" />
</div>
<div className="int-logo logo13">
<img src={Integration13} alt="" className="scale-90 hover:scale-110 ease-in-out transition duration-500" />
</div>
</div>
 </Grid.Col>
         </div>
         {/* <div className="flex justify-center">
            <Grid.Col size="lg:w-2/5">
               <div className="flex">
                  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
                     <Integration1/>
                  </div>
                  <div className="shape -ml-10 scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
                     <Integration2/>
                  </div>
               </div>
               <div className="flex lg:-ml-16 -ml-10">
                  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
                     <Integration3/>
                  </div>
                  <div className="shape -ml-10 scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
                     <Integration4/>
                  </div>
               </div>
               <div className="flex">
                  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
                     <Integration5/>
                  </div>
                  <div className="shape -ml-10 scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
                     <Integration6/>
                  </div>
               </div>
            </Grid.Col>
            <Grid.Col size="lg:w-2/5 flex items-center">
               <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
                  <Integration7/>
               </div>
            </Grid.Col>
            <Grid.Col size="lg:w-2/5 flex flex-col items-end">
               <div className="flex">
                  <div className="shape -mr-10 scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
                     <Integration8/>
                  </div>
                  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
                     <Integration9/>
                  </div>
               </div>
               <div className="flex lg:-mr-16 -mr-10">
                  <div className="shape -mr-10 scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
                     <Integration10/>
                  </div>
                  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
                     <Integration11/>
                  </div>
               </div>
               <div className="flex">
                  <div className="shape -mr-10 scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
                     <Integration12/>
                  </div>
                  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
                     <Integration13/>
                  </div>
               </div>
            </Grid.Col>
         </div> */}
      </div>
   </div>
</Section>
)
}
export default Integration

