import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"
import AOS from 'aos';

const Monitoring = () => {
  React.useEffect(() => {
      AOS.init({
        duration: 1000,
          delay: 50,
          once: true
      });
      AOS.refresh();
  }, [])
    return (
      
      <Section className="bg-pink-100 pb-20">        
      <Grid.Container xs className="">
              
        <Grid.Row>
           
            <Grid.Col size="w-full lg:w-1/2 pt-20">
            <div className="w-full"
               data-aos="fade-right"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
            <h2 className="mb-7 leading-tight">AWS Cost 
            <span class="relative z-20"> Observibility<svg className="absolute z-0" width="200" height="16" viewBox="0 0 302 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16.5142C87.5 5.01424 192.5 3.01416 295 16.5142" stroke="#F8CECE" stroke-width="14" stroke-linecap="round"/>
</svg>
</span> </h2>

<p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride.</p>
<a href="#" className="my-3 text-pink-400 inline-flex">Learn More <svg className="ml-2" width="20" height="27" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 5.76416C1.08579 5.76416 0.75 6.09995 0.75 6.51416C0.75 6.92837 1.08579 7.26416 1.5 7.26416V5.76416ZM19.0303 7.04449C19.3232 6.7516 19.3232 6.27672 19.0303 5.98383L14.2574 1.21086C13.9645 0.917966 13.4896 0.917966 13.1967 1.21086C12.9038 1.50375 12.9038 1.97863 13.1967 2.27152L17.4393 6.51416L13.1967 10.7568C12.9038 11.0497 12.9038 11.5246 13.1967 11.8175C13.4896 12.1104 13.9645 12.1104 14.2574 11.8175L19.0303 7.04449ZM1.5 7.26416H18.5V5.76416H1.5V7.26416Z" fill="#F87979"/>
</svg>
</a>
            </div>
            </Grid.Col>
            <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full"
               data-aos="fade-left"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
            <StaticImage className="lg:w-9/12 lg:-mt-8" src="../../assets/images/aws.png" alt="" />
            </div>
            </Grid.Col>
            </Grid.Row>
<div className="py-8"></div>
<Grid.Row>
<Grid.Col size="w-full lg:w-1/2">
            <div className="w-full"
               data-aos="fade-right"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
            <StaticImage className="lg:w-9/12 mb-3" src="../../assets/images/kubernet.png" alt="" />
            </div>
            </Grid.Col>
            <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full"
               data-aos="fade-left"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
            <h2 className="mb-7 leading-tight">Kubernetes 

            <span class="relative z-20"> Cost Monitoring<svg className="absolute z-0" width="200" height="16" viewBox="0 0 302 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16.5142C87.5 5.01424 192.5 3.01416 295 16.5142" stroke="#F8CECE" stroke-width="14" stroke-linecap="round"/>
</svg>
</span> </h2>

<p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride.</p>
<a href="#" className="my-3 text-pink-400 inline-flex">Learn More <svg className="ml-2" width="20" height="27" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 5.76416C1.08579 5.76416 0.75 6.09995 0.75 6.51416C0.75 6.92837 1.08579 7.26416 1.5 7.26416V5.76416ZM19.0303 7.04449C19.3232 6.7516 19.3232 6.27672 19.0303 5.98383L14.2574 1.21086C13.9645 0.917966 13.4896 0.917966 13.1967 1.21086C12.9038 1.50375 12.9038 1.97863 13.1967 2.27152L17.4393 6.51416L13.1967 10.7568C12.9038 11.0497 12.9038 11.5246 13.1967 11.8175C13.4896 12.1104 13.9645 12.1104 14.2574 11.8175L19.0303 7.04449ZM1.5 7.26416H18.5V5.76416H1.5V7.26416Z" fill="#F87979"/>
</svg>
</a>
            </div>
            </Grid.Col>
            
            </Grid.Row>
            <div className="py-8"></div>  
            <Grid.Row>
           
           <Grid.Col size="w-full lg:w-1/2">
           <div className="w-full"
               data-aos="fade-right"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
           <h2 className="mb-7 leading-tight">Snowflake Cost 
           <span class="relative z-20"> Monitoring<svg className="absolute z-0" width="200" height="16" viewBox="0 0 302 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16.5142C87.5 5.01424 192.5 3.01416 295 16.5142" stroke="#F8CECE" stroke-width="14" stroke-linecap="round"/>
</svg>
</span> </h2>

<p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride.</p>
<a href="#" className="my-3 text-pink-400 inline-flex">Learn More <svg className="ml-2" width="20" height="27" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 5.76416C1.08579 5.76416 0.75 6.09995 0.75 6.51416C0.75 6.92837 1.08579 7.26416 1.5 7.26416V5.76416ZM19.0303 7.04449C19.3232 6.7516 19.3232 6.27672 19.0303 5.98383L14.2574 1.21086C13.9645 0.917966 13.4896 0.917966 13.1967 1.21086C12.9038 1.50375 12.9038 1.97863 13.1967 2.27152L17.4393 6.51416L13.1967 10.7568C12.9038 11.0497 12.9038 11.5246 13.1967 11.8175C13.4896 12.1104 13.9645 12.1104 14.2574 11.8175L19.0303 7.04449ZM1.5 7.26416H18.5V5.76416H1.5V7.26416Z" fill="#F87979"/>
</svg>
</a>
          </div>
           </Grid.Col>
           <Grid.Col size="w-full lg:w-1/2">
           <div className="w-full"
               data-aos="fade-left"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
           <StaticImage className="lg:w-9/12" src="../../assets/images/snowflake.png" alt="" />
           </div>
           </Grid.Col>
           </Grid.Row> 
           <div className="py-8"></div>  
            <Grid.Row>
            <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full"
               data-aos="fade-right"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
           <StaticImage className="lg:w-9/12 mb-3" src="../../assets/images/datadog.png" alt="" />
           </div>
           </Grid.Col>
           <Grid.Col size="w-full lg:w-1/2">
           <div className="w-full"
               data-aos="fade-left"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
           <h2 className="mb-7 leading-tight">Datadog Cost 
           <span class="relative z-20"> Monitoring<svg className="absolute z-0" width="200" height="16" viewBox="0 0 302 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16.5142C87.5 5.01424 192.5 3.01416 295 16.5142" stroke="#F8CECE" stroke-width="14" stroke-linecap="round"/>
</svg>
</span> </h2>

<p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride.</p>
<a href="#" className="my-3 text-pink-400 inline-flex">Learn More <svg className="ml-2" width="20" height="27" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 5.76416C1.08579 5.76416 0.75 6.09995 0.75 6.51416C0.75 6.92837 1.08579 7.26416 1.5 7.26416V5.76416ZM19.0303 7.04449C19.3232 6.7516 19.3232 6.27672 19.0303 5.98383L14.2574 1.21086C13.9645 0.917966 13.4896 0.917966 13.1967 1.21086C12.9038 1.50375 12.9038 1.97863 13.1967 2.27152L17.4393 6.51416L13.1967 10.7568C12.9038 11.0497 12.9038 11.5246 13.1967 11.8175C13.4896 12.1104 13.9645 12.1104 14.2574 11.8175L19.0303 7.04449ZM1.5 7.26416H18.5V5.76416H1.5V7.26416Z" fill="#F87979"/>
</svg>
</a>
            </div>
           </Grid.Col>
           
           </Grid.Row> 
      </Grid.Container>
      </Section>
        )
    }
    
    export default Monitoring
    