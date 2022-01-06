import React from "react"
import Slider from "react-slick";
import Section from "../../components/ui/section"


const Slides = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
    {...props}
    className={
    "slick-prev slick-arrow z-10"
    }
    type="button"
    >
    <svg className="inline-block" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M11.027 2.30625L8.9707 0.25L0.220703 9L8.9707 17.75L11.027 15.6938L4.34779 9L11.027 2.30625Z" fill="#1B1F1D"/>
    </svg>
    </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
    {...props}
    className={
    "slick-next slick-arrow z-10"
    }
    type="button"
    >
    <svg className="inline-block" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M0.973046 15.6937L3.0293 17.75L11.7793 9L3.0293 0.249999L0.973047 2.30625L7.65221 9L0.973046 15.6937Z" fill="#1B1F1D"/>
    </svg>
    </button>
    ); 
    const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '25%',
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    variableWidth: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow:<SlickArrowLeft />,
    nextArrow:<SlickArrowRight />,   
    };
    
return( 

<Section className="relative mb:py-28">
<div class="absolute z-1 left-0 w-full bg-pink-100 h-24"></div>
   <Slider {...settings} className="slides d-flex align-items-stretch z-0">
      <div className="flex flex-col w-full h-full p-8 bg-white rounded-lg drop-shadow-xl mb-12">
         <h4>Devops</h4>
         <p className="mb-8">Using Finout, no matter if you are an enterprise or a small business, you ...</p>
         <div className="flex flex-row justify-between items-center">
            <a href="#" className="btn btn-sm border-0 text-blue-600 text-sm py-2 px-3 bg-green-light">Devops</a>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1.5 8.75C0.809644 8.75 0.25 9.30964 0.25 10C0.25 10.6904 0.809644 11.25 1.5 11.25V8.75ZM19.3839 10.8839C19.872 10.3957 19.872 9.60427 19.3839 9.11612L11.4289 1.16117C10.9408 0.67301 10.1493 0.67301 9.66117 1.16117C9.17301 1.64932 9.17301 2.44078 9.66117 2.92893L16.7322 10L9.66117 17.0711C9.17301 17.5592 9.17301 18.3507 9.66117 18.8388C10.1493 19.327 10.9408 19.327 11.4289 18.8388L19.3839 10.8839ZM1.5 11.25H18.5V8.75H1.5V11.25Z" fill="#F87979"/>
            </svg>
         </div>
      </div>
      <div className="flex flex-col w-full h-full p-8 bg-white rounded-lg drop-shadow-xl mb-12">
         <h4>Finance</h4>
         <p className="mb-8">Using Finout, no matter if you are an enterprise or a small business, you ...</p>
         <div className="flex flex-row justify-between items-center">
            <a href="#" className="btn btn-sm border-0 text-green text-sm py-2 px-3 bg-green-light">Finance</a>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1.5 8.75C0.809644 8.75 0.25 9.30964 0.25 10C0.25 10.6904 0.809644 11.25 1.5 11.25V8.75ZM19.3839 10.8839C19.872 10.3957 19.872 9.60427 19.3839 9.11612L11.4289 1.16117C10.9408 0.67301 10.1493 0.67301 9.66117 1.16117C9.17301 1.64932 9.17301 2.44078 9.66117 2.92893L16.7322 10L9.66117 17.0711C9.17301 17.5592 9.17301 18.3507 9.66117 18.8388C10.1493 19.327 10.9408 19.327 11.4289 18.8388L19.3839 10.8839ZM1.5 11.25H18.5V8.75H1.5V11.25Z" fill="#F87979"/>
            </svg>
         </div>
      </div>
      <div className="flex flex-col w-full h-full p-8 bg-white rounded-lg drop-shadow-xl mb-12">
         <h4>Devops</h4>
         <p className="mb-8">Using Finout, no matter if you are an enterprise or a small business, you ...</p>
         <div className="flex flex-row justify-between items-center">
            <a href="#" className="btn btn-sm border-0 text-blue-600 text-sm py-2 px-3 bg-green-light">Devops</a>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1.5 8.75C0.809644 8.75 0.25 9.30964 0.25 10C0.25 10.6904 0.809644 11.25 1.5 11.25V8.75ZM19.3839 10.8839C19.872 10.3957 19.872 9.60427 19.3839 9.11612L11.4289 1.16117C10.9408 0.67301 10.1493 0.67301 9.66117 1.16117C9.17301 1.64932 9.17301 2.44078 9.66117 2.92893L16.7322 10L9.66117 17.0711C9.17301 17.5592 9.17301 18.3507 9.66117 18.8388C10.1493 19.327 10.9408 19.327 11.4289 18.8388L19.3839 10.8839ZM1.5 11.25H18.5V8.75H1.5V11.25Z" fill="#F87979"/>
            </svg>
         </div>
      </div>
      <div className="flex flex-col w-full h-full p-8 bg-white rounded-lg drop-shadow-xl mb-12">
         <h4>Finance</h4>
         <p className="mb-8">Using Finout, no matter if you are an enterprise or a small business, you ...</p>
         <div className="flex flex-row justify-between items-center">
            <a href="#" className="btn btn-sm border-0 text-green text-sm py-2 px-3 bg-green-light">Finance</a>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1.5 8.75C0.809644 8.75 0.25 9.30964 0.25 10C0.25 10.6904 0.809644 11.25 1.5 11.25V8.75ZM19.3839 10.8839C19.872 10.3957 19.872 9.60427 19.3839 9.11612L11.4289 1.16117C10.9408 0.67301 10.1493 0.67301 9.66117 1.16117C9.17301 1.64932 9.17301 2.44078 9.66117 2.92893L16.7322 10L9.66117 17.0711C9.17301 17.5592 9.17301 18.3507 9.66117 18.8388C10.1493 19.327 10.9408 19.327 11.4289 18.8388L19.3839 10.8839ZM1.5 11.25H18.5V8.75H1.5V11.25Z" fill="#F87979"/>
            </svg>
         </div>
      </div>
   </Slider>
</Section>

);
};

export default Slides;