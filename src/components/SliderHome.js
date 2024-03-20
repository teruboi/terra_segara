'use client'

import Glide, {
    Controls,
    Autoplay,
} from "@glidejs/glide/dist/glide.modular.esm"

import "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css"
import "../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css"
import { useEffect } from "react"

// const SlideContents = ({ title, date })=>{
//     <div
// }


export default function SliderHome({ content }) {
    useEffect(()=>{
        const glide = new Glide(".glide", {
            type: "carousel",
            autoplay: 5000,
            gap: 32,
            perView: 3,
            focusAt: 'center',
        })

        glide.mount({ Controls: Glide.Controls, Autoplay: Glide.Autoplay });

        return () => {
            glide.destroy();
        }
    }, [])

    

    if (content == null) {
        content = [
            'url(Untitled design (4) 1.png)',
            'url(Untitled design (4) 1.png)',
            'url(Untitled design (4) 1.png)'
        ]
    }

    return(
        <div className="container mx-auto h-auto flex flex-grow max-w-4xl">
            <div className="glide">
                <div className="glide__track w-full relative" data-glide-el="track">
                    <ul className="glide__slides">
                        {content.map((e, i)=>{
                            return(
                                <li className="glide__slide h-big w-full" key={i}>

                                </li>
                            )
                        })}
                        <li className="glide__slide">0</li>
                        <li className="glide__slide">1</li>
                        <li className="glide__slide">2</li>
                    </ul>
                </div>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
                <button className="glide__bullet" data-glide-dir="=0"></button>
                <button className="glide__bullet" data-glide-dir="=1"></button>
                <button className="glide__bullet" data-glide-dir="=2"></button>
            </div>
        </div>
        
    )
}