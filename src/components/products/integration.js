import React from "react"
import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"

import TltIcon from "../../images/tlticon.svg";
import Integration1 from "../../images/int-icon1.svg";
import Integration2 from "../../images/int-icon2.svg";
import Integration3 from "../../images/int-icon3.svg";
import Integration4 from "../../images/int-icon4.svg";
import Integration5 from "../../images/int-icon5.svg";
import Integration6 from "../../images/int-icon6.svg";
import Integration7 from "../../images/int-icon7.svg";
import Integration8 from "../../images/int-icon8.svg";
import Integration9 from "../../images/int-icon9.svg";
import Integration10 from "../../images/int-icon10.svg";
import Integration11 from "../../images/int-icon11.svg";
import Integration12 from "../../images/int-icon12.svg";
import Integration13 from "../../images/int-icon13.svg";


const Integration = () => {
 
    return (


      <Section className="group relative pt-24 pb-20 text-center">      
           <div class="container lg:max-w-3xl w-full mt-10">
      <div className="w-full">
      <TltIcon/>   
        <h2 className="font-bold mb-5 lg:mb-18 text-5xl">Integrations</h2>       
            <div className="flex justify-center">
            <Grid.Col size="lg:w-2/5">
              <div className="flex">
            <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
           <Integration1/>
   {/* <GatsbyImage image={getImage(Integration1)} /> */}
  </div>
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <Integration2/>
  {/* <GatsbyImage image={getImage(Integration2)} /> */}

  </div>
  </div>
  <div className="flex lg:-ml-16 -ml-10">
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <Integration3/>
  {/* <GatsbyImage image={getImage(Integration3)} /> */}

  </div>
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <Integration4/>
  {/* <GatsbyImage image={getImage(Integration4)} /> */}
  </div>
  </div>
  <div className="flex">
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <Integration5/>
  {/* <GatsbyImage image={getImage(Integration5)} /> */}
  </div>
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <Integration6/>
  {/* <GatsbyImage image={getImage(Integration6)} /> */}
  </div>
  </div>

            </Grid.Col>
            <Grid.Col size="lg:w-1/5 flex items-center">
            
            <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
            <Integration7/>
            {/* <GatsbyImage image={getImage(Integration7)} /> */}
  </div>

            </Grid.Col>
            <Grid.Col size="lg:w-2/5 flex flex-col items-end">
              <div className="flex">
            <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
            <Integration8/>
            {/* <GatsbyImage image={getImage(Integration8)} /> */}

  </div>
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <Integration9/>
  {/* <GatsbyImage image={getImage(Integration9)} /> */}
  </div>
  </div>
  <div className="flex lg:-mr-16 -mr-10">
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <Integration10/>
  {/* <GatsbyImage image={getImage(Integration10)} /> */}

  </div>
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <Integration11/>
  {/* <GatsbyImage image={getImage(Integration11)} /> */}
  </div>
  </div>
  <div className="flex">
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">

  <Integration12/>
  {/* <GatsbyImage image={getImage(Integration12)} /> */}
  </div>
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <Integration13/>
  {/* <GatsbyImage image={getImage(Integration13)} /> */}


  </div>
  </div>

            </Grid.Col>
         
            </div>
</div>
</div>

      </Section>


        )
    }
    
    export default Integration
    