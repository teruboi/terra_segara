import Image from 'next/image'

export default function Gallery(){
    return(
        <>
            <div className="max-w-[1920px] max-h-[1080px] w-screen h-screen grid grid-cols-2 px-28 items-center justify-evenly bg-secondary">
                <div className="text-white -bottom-20 relative">
                    <h1 className="text-[140px] leading-none">Seas of<br/><b>Impact.</b></h1>
                    <p className="text-[50px] font-medium">Discover the Heart of Our Mission</p>
                    <p className="text-[42px] mt-8">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”
                    </p>
                </div>
                <Image />
            </div>
        </>
    )
}