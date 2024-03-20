import Image from "next/image";

export default function AboutUs() {
    return(
        <>
        <div className="max-w-[1920px] max-h-[1080px] w-screen h-screen bg-gradient-to-t from-white from-10% to-40%">
            <div
            /*style={{backgroundImage:'url(about-us-hero.png)', backgroundRepeat:'no-repeat'}}*/
            className="w-full h-full bg-secondary">
                <div className="relative text-secondary font-bold text-[140px] w-fit h-fit">About Us</div>
            </div>
        </div>
        </>
    )
}