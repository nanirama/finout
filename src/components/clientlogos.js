import React from "react"
import Slider from "react-slick";
import Section from "../components/ui/section"
import SvgImage from "../components/svgImage"

import Hunters from "../images/Hunters-logo.svg"
import Bigabid from "../images/Bigabid-logo.svg"
import Singular from "../images/Singular-logo.svg"
import Logz from "../images/Logz-logo.svg"
import Pixellot from "../images/Pixellot-logo.svg"

const ClientLogos = ({data}) => {   
  console.log('Logos', data)    
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
       {
        breakpoint: 600,
        settings: {
          slidesToShow:3,
        },
      },
    ],
      
    };
   
return( 

<Section className="relative md:py-8 py-5 z-10">
   <Slider {...settings} className="slides">
       {data && data.map((item, index)=>{
         return(
           <>
           <SvgImage id={item?.image?.id} className="clientimg" /> 
          </>     
         )
       })}
       {data && data.map((item, index)=>{
         return(
           <>
           <SvgImage id={item?.image?.id} className="clientimg" /> 
          </>     
         )
       })}
         {/* <div className="clientimg">        
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
         </div> */}

   </Slider>
</Section>

);
};

export default ClientLogos;