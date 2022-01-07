import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"
import AOS from 'aos';

const Revolution = () => {
    React.useEffect(() => {
        AOS.init({
          duration: 1000,
            delay: 50,
            once: true
        });
        AOS.refresh();
    }, [])
    return (


      <Section className="">        
    <div className="group relative py-20 bg-green lg:py-28">  
      <Grid.Container sm className="text-center">
      <div className="w-full"
               data-aos="fade-up"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
      <h2 className="mb-7 leading-tight text-white">
              <span class="relative z-20"> Join<svg class="absolute -bottom-2 left-0 h-auto w-[105%]" width="50" height="7" viewBox="0 0 50 7" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3277 3.14054C11.4815 3.66293 4.42524 5.00412 1.04901 6.45146L0 4.00442C3.81725 2.36802 11.256 1.0092 20.1708 0.482765C29.1338 -0.0465213 39.7522 0.256196 50 2.03741L49.5441 4.66048C39.5343 2.92066 29.1256 2.62101 20.3277 3.14054Z" fill="#F87979"></path></svg>
</span> the FinOps Revolution</h2> 
<p className="text-white">"Whether you're a part of a team with an established FinOps practice, or are building up the discipline, everyone can relate to the challenges of mapping cloud utilization cost to their drivers one-to-one." – FinOps Foundation</p>
<a class="btn btn-coral mt-12" href="#">Start Your Free Trial </a>

        </div>
      </Grid.Container>
    </div>

    <div class="relative mb-20">
        <div class="absolute z-1 left-0 w-full bg-green h-24"></div>
        <div className="w-full"
               data-aos="fade-down"
               data-aos-delay="200"
               data-aos-duration="1500"
               >
        <Grid.Container md className="relative text-center">
                
                <Grid.Row>
                <Grid.Col size="w-full lg:w-1/3 text-center mb-5">
                <a class="group flex flex-wrap col-start-1 col-end-4 bg-white text-left shadow-xl rounded-xl overflow-hidden transform transition duration-300 ease-out md:flex-col md:col-start-auto md:col-end-auto md:grid-cols-full md:col-start-auto md:col-end-auto h-full" href="#">
        <div class="w-full">
            
        <StaticImage src="../../assets/images/post-img1.jpg" alt="" />
        <div class="flex flex-col p-6 lg:flex-1 w-full md:px-10 md:py-8">
            <time class="font-medium text-xs text-gray mb-2.5 uppercase">Dec 15th, 2021</time>
            <h2 class="font-display text-2xl text-green-dark transition group-hover:text-black">Why did we prioritize support for Snowflake in our FinOps Observability platform?</h2>
            <div class="mt-auto">
                <span class="flex items-center mt-4 font-bold text-coral text-sm uppercase">
                <span>Read more</span><span class="arrow transition-all duration-150 ml-2  group-hover:w-10">
                    <span class="arrow__head"></span>
                    </span>
                    </span>
        </div>
        </div>
            </div>
            </a>
                    </Grid.Col>
                    <Grid.Col size="w-full lg:w-1/3 text-center mb-5">
                <a class="group flex flex-wrap col-start-1 col-end-4 bg-white text-left shadow-xl rounded-xl overflow-hidden transform transition duration-300 ease-out md:flex-col md:col-start-auto md:col-end-auto md:grid-cols-full md:col-start-auto md:col-end-auto h-full" href="#">
        <div class="w-full">
            
        <StaticImage src="../../assets/images/post-img2.jpg" alt="" />
        <div class="flex flex-col p-6 lg:flex-1 w-full md:px-10 md:py-8">
            <time class="font-medium text-xs text-gray mb-2.5 uppercase">Dec 9th, 2021</time>
            <h2 class="font-display text-2xl text-green-dark transition group-hover:text-black">How redesigning our Navigation Bar improved Finout’s UX</h2>
            <div class="mt-auto">
                <span class="flex items-center mt-4 font-bold text-coral text-sm uppercase">
                <span>Read more</span><span class="arrow transition-all duration-150 ml-2 group-hover:w-10">
                    <span class="arrow__head"></span>
                    </span>
                    </span>
        </div>
        </div>
            </div>
            </a>
                    </Grid.Col>
                    <Grid.Col size="w-full lg:w-1/3 text-center mb-5">
                <a class="group flex flex-wrap col-start-1 col-end-4 bg-white text-left shadow-xl rounded-xl overflow-hidden transform transition duration-300 ease-out md:flex-col md:col-start-auto md:col-end-auto md:grid-cols-full md:col-start-auto md:col-end-auto h-full" href="#">
        <div class="w-full">
            
        <StaticImage src="../../assets/images/post-img1.jpg" alt="" />
        <div class="flex flex-col p-6 lg:flex-1 w-full md:px-10 md:py-8">
            <time class="font-medium text-xs text-gray mb-2.5 uppercase">Dec 15th, 2021</time>
            <h2 class="font-display text-2xl text-green-dark transition group-hover:text-black">Kubernetes: A Cost Challenge Waiting to Happen</h2>
            <div class="mt-auto">
                <span class="flex items-center mt-4 font-bold text-coral text-sm uppercase">
                <span>Read more</span><span class="arrow transition-all duration-150 ml-2 group-hover:w-10">
                    <span class="arrow__head"></span>
                    </span>
                    </span>
        </div>
        </div>
            </div>
            </a>
                    </Grid.Col>

                    </Grid.Row>

                    <a class="btn btn-coral hidden mt-8 lg:inline-block" href="/blog/">View More</a>
                    </Grid.Container>
                    </div>
                 


        

        </div>
        </Section>


        )
    }
    
    export default Revolution
    