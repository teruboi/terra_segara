"use client"

import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";

function SliderHome({ content }) {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

  const settings = {
    dots: true,
    dotsClass:'slick-dots hover:text-primary',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '150px',
    className: 'relative',
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };
  return (
    <div className="h-[500px] w-full mx-auto rounded-xl transition-all relative slider-container ">
      <div className="flex absolute h-full w-full z-10 justify-between pointer-events-none">
        <div className="h-full w-1/3 bg-gradient-to-r from-white to-50%"/>
        <div className="h-full w-1/3 bg-gradient-to-l from-white to-50%"/>
      </div>
      <Slider ref={slider => {
        sliderRef = slider;
      }} {...settings} >
        {content.map((e, i)=>{
            return(
                <div key={i} className="h-[500px] w-full text-center relative focus:outline-0 border-[16px] border-white rounded-[48px]">
                    <Image
                        src={e.image}
                        placeholder="blur"
                        blurDataURL={e.imageSmall}
                        fill
                        alt={e.title}
                        className="object-cover object-bottom h-full mx-auto -z-10"
                    />
                    <div className="absolute bottom-0 pb-5 w-full bg-gradient-to-t from-secondary -z-10">
                        <h1 className="text-3xl font-bold">{e.title}</h1>
                        <h3 className="text-xl">{e.date}</h3>
                    </div>
                </div>
            )
        })}
      </Slider>
    </div>
  );
}

export default SliderHome;