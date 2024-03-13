import {  } from "react-icons/";

export default function SliderHome() {
    const imageList = [
        'Untitled design (4) 1.png',
        'Untitled design (4) 1.png',
        'Untitled design (4) 1.png',
    ]

    return(
        <div className="w-[1460px] h-[821px]">
            {imageList.map((e)=>{
                return(
                    <div className="max-w-[1460px] max-h-[821px] rounded=[45px] shadow-lg ">
                    </div>
                )
            })}
        </div>
    )
}