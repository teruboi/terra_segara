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
        <div className='w-[518px] h-[518px] flex flex-col items-center text-4xl text-center text-secondary bg-white border-4 border-secondary shadow-lg gap-4 justify-center'>
            <Image
                src={src}
                width={452}
                height={387}
                alt={title}
                objectFit='cover'
            />
            <p>{title}</p>
        </div>
    )
}

export default function Gallery(){
    return(
        <>
            <div className="max-w-full w-screen h-fit grid grid-cols-2 px-28 py-40 items-center bg-secondary">
                <div className="text-white -bottom-0 relative w-[86.4%]">
                    <h1 className="text-9xl leading-none">Seas of<br/><b>Impact.</b></h1>
                    <p className="text-5xl font-medium leading-snug">Discover the Heart of Our Mission.</p>
                    <p className="text-4xl mt-8">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”
                    </p>
                </div>
                <Image
                    src={'https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/Website+Asset/IMG_5459+1.png'}
                    width={800}
                    height={800}
                    className='rounded-bl-[200px] relative -bottom-0'
                />
            </div>
            <div className='max-w-full w-screen h-fit py-20 flex flex-col gap-[72px] justify-center items-center bg-gradient-to-t from-white via-secondary via-50% to-100% text-4xl text-secondary text-center'>
                <p className='max-w-fit mx-40 translate-y-2'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."</p>
                <div className='flex w-fit h-fit gap-9 items-center justify-center'>
                    {gallery1.map((e, i)=>{ 
                        return(<Photos src={e.src} title={e.title} key={i}/>)
                    })}
                </div>
                <p className='max-w-fit mx-40'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."</p>
            </div>
            <div className='max-w-full max-h-fit h-fit w-screen py-1'>
                <div className='mx-32 h-fit w-fit flex flex-wrap justify-stretch gap-4'>
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
                <p className='w-fit mx-40 text-4xl text-secondary text-center my-16'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </>
    )
}