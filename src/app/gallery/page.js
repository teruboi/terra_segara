import Image from 'next/image'

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

const Photos = ({src, title})=>{
    return(
        <div className='w-[582px] h-[582px] flex flex-col items-center text-[42px] text-center text-secondary bg-white border-[3px] border-secondary shadow-lg gap-6 justify-center'>
            <Image
                src={src}
                width={508}
                height={435}
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
            <div className="max-w-[1920px] max-h-[1080px] w-screen h-screen grid grid-cols-2 px-28 items-center justify-evenly bg-secondary">
                <div className="text-white -bottom-20 relative max-w-[761px]">
                    <h1 className="text-[140px] leading-none">Seas of<br/><b>Impact.</b></h1>
                    <p className="text-[50px] font-medium">Discover the Heart of Our Mission.</p>
                    <p className="text-[42px] mt-8">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”
                    </p>
                </div>
                <Image
                    src={'https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/Website+Asset/IMG_5459+1.png'}
                    width={800}
                    height={800}
                    className='rounded-bl-[200px] relative -bottom-20'
                />
            </div>
            <div className='max-w-[1920px] max-h-[1080px] w-screen h-screen flex flex-col gap-[72px] justify-center items-center bg-gradient-to-t from-white via-secondary via-50% to-100% text-[42px] text-secondary text-center'>
                <p className='max-w-[1718px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."</p>
                <div className='flex w-fit h-fit gap-9 items-center justify-center'>
                    {gallery1.map((e, i)=>{
                        return(<Photos src={e.src} title={e.title} key={i}/>)
                    })}
                </div>
                <p className='max-w-[1718px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."</p>
            </div>
        </>
    )
}