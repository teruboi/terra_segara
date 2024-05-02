'use client'

import { TSImg } from '@/components/TSImg';
import Image from 'next/image'
import { useState } from 'react';

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

//Opening ceremony attended by youth participants, and partners from Nusa Penida Dive Center, Nuansa Pulau, and SMAN 1 Nusa Penida
const SCUBAGallery1 = [
    {
        src: '/DOS02590.JPG',
    },
    {
        src: '/DOS02585.JPG',
    },
    {
        src: '/DOS02647.JPG',
    },
    {
        src: '/DOS02568.JPG',
    },
    {
        src: '/DOS02596.JPG',
    },
]

//Dive Theory Session
const SCUBAGallery2 = [
    {
        src: '/DOS02740.JPG',
    },
    {
        src: '/DOS02816.JPG',
    },
    {
        src: '/DOS03326.JPG',
    }
]



//Confined water session
const SCUBAGallery3 = [
    {
        src: '/DOS02695.JPG',
    },
    {
        src: '/DOS02682.JPG',
    },
    {
        src: '/DOS02690.JPG',
    }
]

//Open water session
const SCUBAGallery4 = [
    {
        src: '/DOS03270.JPG',
    },
    {
        src: '/DOS03256.JPG',
    },
    {
        src: '/DOS03126.JPG',
    },
    {
        src: '/DOS03115.JPG',
    },
    {
        src: '/DOS03231.JPG',
    }
]

//Monitoring and evaluation process attended by participants and YTSI team
const SCUBAGallery5 = [
    {
        src: '/DOS03425.JPG',
    },
    {
        src: '/DOS03430.JPG',
    },
    {
        src: '/DOS03439.JPG',
    },
    {
        src: '/DOS03450.JPG',
    },
    {
        src: '/DOS03459.JPG',
    }
]

//Closing and graduation ceremony attended by participants, volunteer instructors and partners in February 
const SCUBAGallery6 = [
    {
        src: '/DOS03701.JPG',
    },
    {
        src: '/DOS03664.JPG',
    },
    {
        src: '/DOS03712.JPG',
    },
    {
        src: '/DJI_0182.JPG',
    }
]

//Thanks to our amazing volunteer instructor!
const volunteer = '/DOS02583.JPG'

//Beach Cleaning with local children and YTSI team
const BeachCleaning = [
    {
        src: '/IMG_5460.JPG',
    },
    {
        src: '/IMG_5462.JPG',
    },
    {
        src: '/IMG_5464.JPG',
    },
    {
        src: '/IMG_5456.JPG',
    },
    {
        src: '/IMG_0328.jpg',
    }
]

const gallery1 = [
    {
        src: 'https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/Website+Asset/IMG_5423.png',
        title: 'Lorem Ipsum'
    },
    {
        src: 'https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/Website+Asset/IMG_5446.png',
        title: 'Lorem Ipsum'
    },
    {
        src: 'https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/Website+Asset/IMG_5462.png',
        title: 'Lorem Ipsum'
    },
]

const gallery2 = [
    {
        src: '/IMG_5417.png',
        blurDataURL: '/IMG_5417_small.png',
        alt: 'Lorem Ipsum',
    },
    {
        src: '/IMG_5443.png',
        blurDataURL: '/IMG_5443_small.png',
        alt: 'Lorem Ipsum',
    },
    {
        src: '/IMG_5452 1.png',
        blurDataURL: '/IMG_5452 1_small.png',
        alt: 'Lorem Ipsum',
    },
    {
        src: '/IMG_5460.png',
        blurDataURL: '/IMG_5460_small.png',
        alt: 'Lorem Ipsum',
    },
    {
        src: '/IMG_5464.png',
        blurDataURL: '/IMG_5464_small.png',
        alt: 'Lorem Ipsum',
    },
    {
        src: '/IMG_5465.png',
        blurDataURL: '/IMG_5465_small.png',
        alt: 'Lorem Ipsum',
    },
]





const Photos = ({src, title})=>{
    return(
        <div className='aspect-square w-96 flex flex-col items-center text-xl text-center text-secondary bg-white border-4 border-secondary shadow-lg gap-4 justify-center'>
            <Image
                src={src}
                width={350}
                height={250}
                alt={title}
                className='object-cover '
            />
            <p>{title}</p>
        </div>
    )
}

export default function Gallery(){
    const [open, setOpen] = useState(false)

    const GalleryPhoto = ({ gallery, title }) => {
        return(
            <>
                <div className='w-full h-fit flex flex-wrap px-10 gap-2'>
                {gallery.map((e, i)=>{
                    console.log(e.src)
                    return(
                        <Image
                        key={i}
                        src={e.src}
                        width={300}
                        height={225}
                        className='w-fit hover:scale-[95%] transition-all ease-in flex-1 last:grow object-cover object-center'
                        />
                    )
                })}
                </div>
                <div className='w-2/3 text-center text-white -translate-y-14 text-base italic last:text-secondary'>
                    {title}
                </div>
            </>
        )
    }
    

    return(
        <>
            <div className="w-screen h-screen flex justify-between px-20 pt-32 pb-24 items-center bg-secondary relative">
                <div className="text-white -bottom-0 relative w-[45%]">
                    <h1 className="leading-[0.8] text-8xl">Seas of<br/><b>Impact.</b></h1>
                </div>
                <TSImg
                    src={'IMG_5459 1.png'}
                    width={450}
                    height={450}
                    className='rounded-bl-[200px] relative -bottom-0 translate-y-8'
                />
                <Image
                    src={'/Object-graphic2 1.png'}
                    width={300}
                    height={300}
                    className='absolute left-0 bottom-0 translate-y-5'
                />
                <Image
                    src={'/Object-graphic0 3.png'}
                    width={125}
                    height={125}
                    className='absolute right-7 top-24'
                />
                <Image
                    src={'/Object-graphic0 3.png'}
                    width={125}
                    height={125}
                    className='absolute right-1/3 bottom-12 translate-x-0'
                />
            </div>
            <div className='max-w-screen w-screen h-fit py-20 flex flex-col gap-[72px] justify-center items-center bg-gradient-to-t from-white via-secondary via-50% to-100% text-2xl text-secondary text-center'>
                <h1 className='max-w-fit mx-32 translate-y-2 font-bold'>Empowering Local Youth through SCUBA Dive Training Scholarship - Batch 1/2024</h1>
                <GalleryPhoto gallery={SCUBAGallery1} title={'Opening ceremony attended by youth participants, and partners from Nusa Penida Dive Center, Nuansa Pulau, and SMAN 1 Nusa Penida'}/>
                <GalleryPhoto gallery={SCUBAGallery2} title={'Dive Theory Session'}/>
                <GalleryPhoto gallery={SCUBAGallery3} title={'Confined water session'}/>
                <GalleryPhoto gallery={SCUBAGallery4} title={'Open water session'}/>
                <GalleryPhoto gallery={SCUBAGallery5} title={'Monitoring and evaluation process attended by participants and YTSI team'}/>
                <GalleryPhoto gallery={SCUBAGallery6} title={'Closing and graduation ceremony attended by participants, volunteer instructors and partners in February '}/>
                <Photos src={volunteer} title={'Thanks to our amazing volunteer instructor!'} />
                <GalleryPhoto gallery={BeachCleaning} title={'Beach Cleaning with local children and YTSI team'}/>
            </div>
        </>
    )
}