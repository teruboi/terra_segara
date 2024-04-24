"use client"

import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

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
    centerPadding: '400px',
    className: 'relative',
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };
  return (
    <div className="slider-container h-[720px] w-full mx-auto rounded-xl transition-all relative">
      <Slider ref={slider => {
        sliderRef = slider;
      }} {...settings} >
        {content.map((e, i)=>{
            return(
                <div key={i} className="h-[600px] w-full text-center relative focus:outline-0 border-[16px] border-white rounded-[48px] bg-primary grid">
                  <div className="flex h-full w-[95%] px-10 gap-6 items-center mx-auto">
                    <Image
                        src={e.img}
                        height={600}
                        width={600}
                        placeholder="blur"
                        blurDataURL={e.img}
                        alt={e.name}
                        className="object-cover object-center w-1/2"
                    />
                    <div className="w-1/2">
                        <h1 className="text-7xl text-left text-white">{e.name}</h1>
                        <h3 className="text-2xl text-justify text-white leading-relaxed">{e.desc}</h3>
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