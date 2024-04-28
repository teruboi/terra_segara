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
    centerPadding: '200px',
    className: 'relative',
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };
  return (
    <div className="slider-container h-fit w-full mx-auto rounded-xl transition-all relative">
      <Slider ref={slider => {
        sliderRef = slider;
      }} {...settings} >
        {content.map((e, i)=>{
            return(
                <div key={i} className="min-h-[480px] py-10 w-full text-center relative focus:outline-0 border-[16px] border-white rounded-[48px] bg-primary grid">
                  <div className="flex h-full w-[95%] px-10 gap-6 items-center mx-auto">
                    <Image
                        src={e.img}
                        height={400}
                        width={400}
                        placeholder="blur"
                        blurDataURL={e.img}
                        alt={e.name}
                        className="object-cover object-center w-1/2 aspect-square rounded-3xl"
                    />
                    <div className="w-1/2">
                        <h1 className="text-3xl text-left text-white">{e.name}</h1>
                        <h3 className="text-base text-justify text-white leading-relaxed">{e.desc}</h3>
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