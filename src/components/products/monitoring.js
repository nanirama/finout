import React from "react"
import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"
import Aws from "../../images/aws.svg";
import Kubernet from "../../images/kubernet.svg";
import SnowFlake from "../../images/snowflake.svg";
import DataDog from "../../images/datadog.svg";
import RichTextContent from "../ui/RichTextContent"
import SvgImage from "../svgImage"
const Monitoring = ({data}) => {
   const { services } = data
   console.log('services', services)
return (
<Section className="bg-pink pt-16 pb-20 lg:mt-56 aws_outer lg:text-left text-center">
   <div class="container max-w-4xl">
      <Grid.Row className="column-reverse">
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full pt-40 aws_blk">
               <h2 className="mb-6 text-5xl">
               {services[0].title && services[0].title}
                  <span class="relative">
                     <div className="absolute right-0 -mt-4 -z-1">
                      {services[0].featuredImage.id && <SvgImage id={services[0].featuredImage.id}/>} 
                        {/* <svg width="280" height="23" viewBox="0 0 269 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.35938 16C78.3559 4.9776 170.96 3.06059 261.359 16" stroke="#F8CECE" stroke-width="14" stroke-linecap="round"/>
                        </svg> */}
                     </div>
                  </span>
               </h2>
               <RichTextContent
                        description={services[0].description}
                        classes="text-lg"
                        />
               {/* <p className="text-lg">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride.</p> */}
               
            </div>
         </Grid.Col>
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full lg:pl-8">
            {services[0].featuredImage.id && <SvgImage id={services[0].featuredImage.id } className="lg:-mt-72 -mt-64"/>} 
               {/* <Aws className="lg:-mt-72 -mt-64" /> */}
            </div>
         </Grid.Col>
      </Grid.Row>
      <div className="md:py-8 py-4"></div>
      <Grid.Row>
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full">
            {services[1].featuredImage.id && <SvgImage id={services[1].featuredImage.id } className="lg:mb-3 mb-10"/>} 
               {/* <Kubernet className="lg:mb-3 mb-10"/> */}
            </div>
         </Grid.Col>
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full lg:pl-8">
               <h2 className="mb-6 leading-tight text-5xl">
               {services[1].title && services[1].title}
                  <span class="relative">
                     <div className="absolute right-0 -mt-4 -z-1">
                        <svg width="240" height="23" viewBox="0 0 269 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.35938 16C78.3559 4.9776 170.96 3.06059 261.359 16" stroke="#F8CECE" stroke-width="14" stroke-linecap="round"/>
                        </svg>
                     </div>
                  </span>
               </h2>
               <RichTextContent
                        description={services[1].description}
                        classes="text-lg"
                        />
               {/* <p className="text-lg">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride.</p> */}
              
            </div>
         </Grid.Col>
      </Grid.Row>
      <div className="md:py-8 py-4"></div>
      <Grid.Row className="column-reverse">
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full">
               <h2 className="mb-6 leading-tight text-5xl">
               {services[2].title && services[2].title}
                  <span class="relative">
                     <div className="absolute right-0 -mt-4 -z-1">
                        <svg width="240" height="23" viewBox="0 0 269 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.35938 16C78.3559 4.9776 170.96 3.06059 261.359 16" stroke="#F8CECE" stroke-width="14" stroke-linecap="round"/>
                        </svg>
                     </div>
                  </span>
               </h2>
               <RichTextContent
                        description={services[2].description}
                        classes="text-lg"
                        />
               {/* <a href="#" className="my-3 text-coral text-xl font-bold inline-flex">
                  Learn More 
                  <svg className="ml-2" width="20" height="33" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.5 5.76416C1.08579 5.76416 0.75 6.09995 0.75 6.51416C0.75 6.92837 1.08579 7.26416 1.5 7.26416V5.76416ZM19.0303 7.04449C19.3232 6.7516 19.3232 6.27672 19.0303 5.98383L14.2574 1.21086C13.9645 0.917966 13.4896 0.917966 13.1967 1.21086C12.9038 1.50375 12.9038 1.97863 13.1967 2.27152L17.4393 6.51416L13.1967 10.7568C12.9038 11.0497 12.9038 11.5246 13.1967 11.8175C13.4896 12.1104 13.9645 12.1104 14.2574 11.8175L19.0303 7.04449ZM1.5 7.26416H18.5V5.76416H1.5V7.26416Z" fill="#F87979"/>
                  </svg>
               </a> */}
            </div>
         </Grid.Col>
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full flex">
            {services[2].featuredImage.id && <SvgImage id={services[2].featuredImage.id } className="lg:mb-3 mb-10"/>} 
               {/* <SnowFlake className="lg:mb-3 mb-10"/> */}
            </div>
         </Grid.Col>
      </Grid.Row>
      <div className="md:py-8 py-4"></div>
      <Grid.Row>
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full lg:pr-18">
            {services[3].featuredImage.id && <SvgImage id={services[3].featuredImage.id } className="lg:mb-3 mb-10"/>} 
               {/* <DataDog className="lg:mb-3 mb-10"/> */}
            </div>
         </Grid.Col>
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full">
               <h2 className="mb-6 leading-tight text-5xl">
               {services[3].title && services[3].title}
                  <span class="relative">
                     <div className="absolute right-0 -mt-4 -z-1">
                        <svg width="240" height="23" viewBox="0 0 269 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.35938 16C78.3559 4.9776 170.96 3.06059 261.359 16" stroke="#F8CECE" stroke-width="14" stroke-linecap="round"/>
                        </svg>
                     </div>
                  </span>
               </h2>
               <RichTextContent
                        description={services[3].description}
                        classes="text-lg"
                        />
               {/* <a href="#" className="my-3 text-coral text-xl font-bold inline-flex">
                  Learn More 
                  <svg className="ml-2" width="20" height="33" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.5 5.76416C1.08579 5.76416 0.75 6.09995 0.75 6.51416C0.75 6.92837 1.08579 7.26416 1.5 7.26416V5.76416ZM19.0303 7.04449C19.3232 6.7516 19.3232 6.27672 19.0303 5.98383L14.2574 1.21086C13.9645 0.917966 13.4896 0.917966 13.1967 1.21086C12.9038 1.50375 12.9038 1.97863 13.1967 2.27152L17.4393 6.51416L13.1967 10.7568C12.9038 11.0497 12.9038 11.5246 13.1967 11.8175C13.4896 12.1104 13.9645 12.1104 14.2574 11.8175L19.0303 7.04449ZM1.5 7.26416H18.5V5.76416H1.5V7.26416Z" fill="#F87979"/>
                  </svg>
               </a> */}
            </div>
         </Grid.Col>
      </Grid.Row>
   </div>
</Section>
)
}
export default Monitoring