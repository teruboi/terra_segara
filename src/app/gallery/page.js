import Image from 'next/image'

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

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
                className='object-cover'
            />
            <p>{title}</p>
        </div>
    )
}

export default function Gallery(){
    return(
        <>
            <div className="w-screen h-fit flex justify-between px-20 pt-32 pb-24 items-center bg-secondary relative">
                <div className="text-white -bottom-0 relative w-[45%]">
                    <h1 className="leading-[0.8] text-8xl">Seas of<br/><b>Impact.</b></h1>
                    <p className="text-[34px] leading-snug mt-5">Discover the Heart of Our Mission.</p>
                    <p className="text-[28px] mt-5">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”
                    </p>
                </div>
                <Image
                    src={'https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/Website+Asset/IMG_5459+1.png'}
                    width={500}
                    height={500}
                    className='rounded-bl-[200px] relative -bottom-0'
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
                    className='absolute right-8 top-20'
                />
                <Image
                    src={'/Object-graphic0 3.png'}
                    width={125}
                    height={125}
                    className='absolute right-1/2 bottom-24 translate-x-44'
                />
            </div>
            <div className='max-w-screen w-screen h-fit py-20 flex flex-col gap-[72px] justify-center items-center bg-gradient-to-t from-white via-secondary via-50% to-100% text-2xl text-secondary text-center'>
                <p className='max-w-fit mx-32 translate-y-2'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."</p>
                <div className='flex w-fit h-fit gap-9 items-center justify-center'>
                    {gallery1.map((e, i)=>{ 
                        return(<Photos src={e.src} title={e.title} key={i}/>)
                    })}
                </div>
                <p className='max-w-fit mx-40'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."</p>
            </div>
            <div className='max-w-full max-h-fit h-fit w-screen py-1'>
                <div className='mx-10 h-fit w-fit flex flex-wrap justify-stretch gap-4'>
                    {gallery2.map((e, i)=>{
                        return(
                            <Image
                                key={i}
                                src={e.src}
                                width={getRandomInt(200,400)}
                                height={getRandomInt(200,400)}
                                alt={e.alt}
                                placeholder='blur'
                                blurDataURL={e.blurDataURL}
                                className='colspan-2 hover:scale-105 transition-all ease-in object-center object-cover flex-grow'
                            />
                        )
                    })}
                </div>
                <p className='w-fit mx-20 text-2xl text-secondary text-center my-16'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </>
    )
}