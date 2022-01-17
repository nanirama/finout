import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
const { Aws, Kubernet, SnowFlake, DataDog } = useStaticQuery(
  graphql`
  query {
    Aws: file(relativePath: {eq: "aws.png"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 100)
      }
    }
    Kubernet: file(relativePath: {eq: "kubernet.png"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 100)
      }
    }
    SnowFlake: file(relativePath: {eq: "snowflake.png"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 100)
      }
    }
    DataDog: file(relativePath: {eq: "datadog.png"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 100)
      }
    }
  }
`
)
return (
<Section className="bg-pink pt-16 pb-20 lg:mt-56">
   <div class="container max-w-4xl">
      <Grid.Row>
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full pt-24"
               data-aos="fade-right"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
               <h2 className="mb-6 text-5xl leading-tight">
                  AWS Cost  <br/>
                  <span class="relative">
                     Observibility
                     <div className="absolute right-0 -mt-4 -z-1">
                        <svg width="280" height="23" viewBox="0 0 269 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.35938 16C78.3559 4.9776 170.96 3.06059 261.359 16" stroke="#F8CECE" stroke-width="14" stroke-linecap="round"/>
                        </svg>
                     </div>
                  </span>
               </h2>
               <p className="text-lg">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride.</p>
               <a href="#" className="my-3 text-coral text-xl font-bold inline-flex">
                  Learn More 
                  <svg className="ml-2" width="20" height="33" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.5 5.76416C1.08579 5.76416 0.75 6.09995 0.75 6.51416C0.75 6.92837 1.08579 7.26416 1.5 7.26416V5.76416ZM19.0303 7.04449C19.3232 6.7516 19.3232 6.27672 19.0303 5.98383L14.2574 1.21086C13.9645 0.917966 13.4896 0.917966 13.1967 1.21086C12.9038 1.50375 12.9038 1.97863 13.1967 2.27152L17.4393 6.51416L13.1967 10.7568C12.9038 11.0497 12.9038 11.5246 13.1967 11.8175C13.4896 12.1104 13.9645 12.1104 14.2574 11.8175L19.0303 7.04449ZM1.5 7.26416H18.5V5.76416H1.5V7.26416Z" fill="#F87979"/>
                  </svg>
               </a>
            </div>
         </Grid.Col>
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full lg:pl-8"
               data-aos="fade-left"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
               <GatsbyImage className="lg:-mt-72" image={getImage(Aws)} />
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
               <GatsbyImage className="mb-3" image={getImage(Kubernet)} />
            </div>
         </Grid.Col>
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full lg:pl-8"
               data-aos="fade-left"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
               <h2 className="mb-6 leading-tight text-5xl">
                  Kubernetes <br/>Cost 
                  <span class="relative">
                     Monitoring
                     <div className="absolute right-0 -mt-4 -z-1">
                        <svg width="240" height="23" viewBox="0 0 269 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.35938 16C78.3559 4.9776 170.96 3.06059 261.359 16" stroke="#F8CECE" stroke-width="14" stroke-linecap="round"/>
                        </svg>
                     </div>
                  </span>
               </h2>
               <p className="text-lg">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride.</p>
               <a href="#" className="my-3 text-coral text-xl font-bold inline-flex">
                  Learn More 
                  <svg className="ml-2" width="20" height="33" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
               <h2 className="mb-6 leading-tight text-5xl">
                  Snowflake Cost  <br/>
                  <span class="relative">
                     Monitoring
                     <div className="absolute right-0 -mt-4 -z-1">
                        <svg width="240" height="23" viewBox="0 0 269 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.35938 16C78.3559 4.9776 170.96 3.06059 261.359 16" stroke="#F8CECE" stroke-width="14" stroke-linecap="round"/>
                        </svg>
                     </div>
                  </span>
               </h2>
               <p className="text-lg">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride.</p>
               <a href="#" className="my-3 text-coral text-xl font-bold inline-flex">
                  Learn More 
                  <svg className="ml-2" width="20" height="33" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.5 5.76416C1.08579 5.76416 0.75 6.09995 0.75 6.51416C0.75 6.92837 1.08579 7.26416 1.5 7.26416V5.76416ZM19.0303 7.04449C19.3232 6.7516 19.3232 6.27672 19.0303 5.98383L14.2574 1.21086C13.9645 0.917966 13.4896 0.917966 13.1967 1.21086C12.9038 1.50375 12.9038 1.97863 13.1967 2.27152L17.4393 6.51416L13.1967 10.7568C12.9038 11.0497 12.9038 11.5246 13.1967 11.8175C13.4896 12.1104 13.9645 12.1104 14.2574 11.8175L19.0303 7.04449ZM1.5 7.26416H18.5V5.76416H1.5V7.26416Z" fill="#F87979"/>
                  </svg>
               </a>
            </div>
         </Grid.Col>
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full flex" 
               data-aos="fade-left"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
               <GatsbyImage className="mb-3" image={getImage(SnowFlake)} />
            </div>
         </Grid.Col>
      </Grid.Row>
      <div className="py-8"></div>
      <Grid.Row>
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full lg:pr-18"
               data-aos="fade-right"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
               <GatsbyImage className="mb-3" image={getImage(DataDog)} />
            </div>
         </Grid.Col>
         <Grid.Col size="w-full lg:w-1/2">
            <div className="w-full"
               data-aos="fade-left"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
               <h2 className="mb-6 leading-tight text-5xl">
                  Datadog Cost <br/>
                  <span class="relative">
                     Monitoring
                     <div className="absolute right-0 -mt-4 -z-1">
                        <svg width="240" height="23" viewBox="0 0 269 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.35938 16C78.3559 4.9776 170.96 3.06059 261.359 16" stroke="#F8CECE" stroke-width="14" stroke-linecap="round"/>
                        </svg>
                     </div>
                  </span>
               </h2>
               <p className="text-lg">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride.</p>
               <a href="#" className="my-3 text-coral text-xl font-bold inline-flex">
                  Learn More 
                  <svg className="ml-2" width="20" height="33" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.5 5.76416C1.08579 5.76416 0.75 6.09995 0.75 6.51416C0.75 6.92837 1.08579 7.26416 1.5 7.26416V5.76416ZM19.0303 7.04449C19.3232 6.7516 19.3232 6.27672 19.0303 5.98383L14.2574 1.21086C13.9645 0.917966 13.4896 0.917966 13.1967 1.21086C12.9038 1.50375 12.9038 1.97863 13.1967 2.27152L17.4393 6.51416L13.1967 10.7568C12.9038 11.0497 12.9038 11.5246 13.1967 11.8175C13.4896 12.1104 13.9645 12.1104 14.2574 11.8175L19.0303 7.04449ZM1.5 7.26416H18.5V5.76416H1.5V7.26416Z" fill="#F87979"/>
                  </svg>
               </a>
            </div>
         </Grid.Col>
      </Grid.Row>
   </div>
</Section>
)
}
export default Monitoring