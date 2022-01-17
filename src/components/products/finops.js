import React from "react"
import Section from "../../components/ui/section"
import * as Grid from "../../components/ui/grid"
const Finops = () => {
return( 
<Section className="relative mb:py-28">
   <div class="absolute z-1 left-0 w-full bg-pink h-24"></div>
   <Grid.Container md>
      <Grid.Grid md={3} lg={3}>
         <div className="flex flex-col w-full h-full p-8 bg-white rounded-lg drop-shadow-xl">
            <h4>Finops</h4>
            <p className="mb-8 lg:pr-12 text-lg text-gray-500">Using Finout, no matter if you are an enterprise or a small business, you ...</p>
            <div className="flex flex-row justify-between items-center">
               <a href="#" className="btn btn-sm border-0 text-yellow-600 text-sm py-2 px-3 bg-pink">Finops</a>
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 8.75C0.809644 8.75 0.25 9.30964 0.25 10C0.25 10.6904 0.809644 11.25 1.5 11.25V8.75ZM19.3839 10.8839C19.872 10.3957 19.872 9.60427 19.3839 9.11612L11.4289 1.16117C10.9408 0.67301 10.1493 0.67301 9.66117 1.16117C9.17301 1.64932 9.17301 2.44078 9.66117 2.92893L16.7322 10L9.66117 17.0711C9.17301 17.5592 9.17301 18.3507 9.66117 18.8388C10.1493 19.327 10.9408 19.327 11.4289 18.8388L19.3839 10.8839ZM1.5 11.25H18.5V8.75H1.5V11.25Z" fill="#F87979"/>
               </svg>
            </div>
         </div>
         <div className="flex flex-col w-full h-full p-8 bg-white rounded-lg drop-shadow-xl">
            <h4>Devops</h4>
            <p className="mb-8 lg:pr-12 text-lg text-gray-500">Using Finout, no matter if you are an enterprise or a small business, you ...</p>
            <div className="flex flex-row justify-between items-center">
               <a href="#" className="btn btn-sm border-0 text-blue-600 text-sm py-2 px-3 bg-blue-50">Devops</a>
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 8.75C0.809644 8.75 0.25 9.30964 0.25 10C0.25 10.6904 0.809644 11.25 1.5 11.25V8.75ZM19.3839 10.8839C19.872 10.3957 19.872 9.60427 19.3839 9.11612L11.4289 1.16117C10.9408 0.67301 10.1493 0.67301 9.66117 1.16117C9.17301 1.64932 9.17301 2.44078 9.66117 2.92893L16.7322 10L9.66117 17.0711C9.17301 17.5592 9.17301 18.3507 9.66117 18.8388C10.1493 19.327 10.9408 19.327 11.4289 18.8388L19.3839 10.8839ZM1.5 11.25H18.5V8.75H1.5V11.25Z" fill="#F87979"/>
               </svg>
            </div>
         </div>
         <div className="flex flex-col w-full h-full p-8 bg-white rounded-lg drop-shadow-xl">
            <h4>Finance</h4>
            <p className="mb-8 lg:pr-12 text-lg text-gray-500">Using Finout, no matter if you are an enterprise or a small business, you ...</p>
            <div className="flex flex-row justify-between items-center">
               <a href="#" className="btn btn-sm border-0 text-coral text-sm py-2 px-3 bg-pink">Finance</a>
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 8.75C0.809644 8.75 0.25 9.30964 0.25 10C0.25 10.6904 0.809644 11.25 1.5 11.25V8.75ZM19.3839 10.8839C19.872 10.3957 19.872 9.60427 19.3839 9.11612L11.4289 1.16117C10.9408 0.67301 10.1493 0.67301 9.66117 1.16117C9.17301 1.64932 9.17301 2.44078 9.66117 2.92893L16.7322 10L9.66117 17.0711C9.17301 17.5592 9.17301 18.3507 9.66117 18.8388C10.1493 19.327 10.9408 19.327 11.4289 18.8388L19.3839 10.8839ZM1.5 11.25H18.5V8.75H1.5V11.25Z" fill="#F87979"/>
               </svg>
            </div>
         </div>
      </Grid.Grid>
   </Grid.Container>
</Section>
);
};
export default Finops;