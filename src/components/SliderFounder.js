"use client"

import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import TSImg from "./TSImg";

function SliderFounder({ content }) {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

  const settings = {
    dots: true,
    dotsClass: 'slick-dots focus:text-primary',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '300px',
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerMode: false
        }
      }
    ],
    className: 'relative',
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };
  return (
    <div className="slider-container h-fit w-full max-sm:w-11/12 mx-auto rounded-xl transition-all relative">
      <Slider ref={slider => {
        sliderRef = slider;
      }} {...settings} >
        {content.map((e, i)=>{
            return(
                <div key={i} className="min-h-[400px] max-sm:max-h-[120px] h-full max-sm:py-5 py-10 text-center focus:outline-0 border-[16px] border-white rounded-[48px] bg-primary grid relative">
                  <div className="flex absolute min-h-66 h-full w-fit px-10 max-sm:px-5 max-sm:gap-2 gap-6 items-start justify-center top-1/2 -translate-y-1/2">
                    <TSImg
                        src={e.img}
                        height={250}
                        width={250}
                        alt={e.name}
                        className="object-cover object-center aspect-square rounded-3xl max-sm:rounded-xl max-sm:w-16 w-2/5 my-auto"
                    />
                    <div className="w-full flex-grow last:translate-y-1/4 translate-y-10">
                        <h1 className="text-3xl max-sm:text-base text-left text-white">{e.name}</h1>
                        <h3 className="text-xs max-sm:text-[8px] text-justify text-white leading-snug">{e.desc}</h3>
                    </div>
                  </div>
                    
                </div>
            )
        })}
      </Slider>
    </div>
  );
}

export default SliderFounder;