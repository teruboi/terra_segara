'use client'

import Image from "next/image"

export default function SliderHome({ content }) {
    return(
        <div className="transition-all">
            {content.map((e, i)=>{
                return(
                    <div className="w-fit h-fit aspect-video rounded-3xl relative" key={i}>
                        <Image
                            src={e.src}
                            placeholder="blur"
                            blurDataURL={e.blurDataURL}
                            width={1280}
                            height={720}
                            className="object-cover object-center"
                        />
                        <div className="text-3xl text-white absolute w-full h-full align-text-bottom">
                            <p className="font-bold text-5xl">{e.title}</p>
                            {e.date}
                        </div>
                    </div>

                )
            })}
        </div>
    )
}