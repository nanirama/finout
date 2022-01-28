import React from "react"
import Slider from "react-slick";
import Section from "../components/ui/section"

import Hunters from "../images/Hunters-logo.svg"
import Bigabid from "../images/Bigabid-logo.svg"
import Singular from "../images/Singular-logo.svg"
import Logz from "../images/Logz-logo.svg"
import Pixellot from "../images/Pixellot-logo.svg"

const ClientLogos = () => {
       
    const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0%',
    slidesToShow: 8,
    slidesToScroll: 1,
    speed: 500,
    variableWidth: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
    
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
         breakpoint: 750,
         settings: {
           slidesToShow:3,
         },
       },
    ],
      
    };
   
return( 

<Section className="relative md:py-8 py-5 z-10">

   <Slider {...settings} className="slides">
     
         <div className="clientimg">           
           <Hunters/>   
         </div>
         <div className="clientimg">        
          <Bigabid/>                 
         </div>
         <div className="clientimg">   
          <Singular/>                 
         </div>
         <div className="clientimg">         
          <Pixellot/>                 
         </div>
         <div className="clientimg">         
          <Logz/>                 
         </div>
         <div className="clientimg">   
          <Hunters/>                 
         </div>
         <div className="clientimg">       
          <Bigabid/>                 
         </div>
         <div className="clientimg">     
          <Singular/>                 
         </div>
         <div className="clientimg">      
          <Pixellot/>                 
         </div>
     
      {/* <div className="flex flex-col w-full h-full">
       
      <div className="flex flex-row justify-between items-center">           
           <Client1/>           
         </div>
      </div>
      <div className="flex flex-col w-full h-full">
        
         <div className="flex flex-row justify-between items-center">
           666
         </div>
      </div>
      <div className="flex flex-col w-full h-full">
       
         <div className="flex flex-row justify-between items-center">
            444
         </div>
      </div> */}
   </Slider>
</Section>

);
};

export default ClientLogos;