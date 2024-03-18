import Image from "next/image";

export default function AboutUs() {
    return(
        <>
        <div className="w-fit h-fit bg-gradient-to-t from-white from-10% to-40%">
            <div style={{backgroundImage:'url(about-us-hero.png)'}} className="w-screen h-screen bg-gradient-to-t from-white from-10% to-40%">
                <div className="text-[140px] font-bold text-secondary text-center w-full h-full align-text-bottom">
                    <h1 className="">About Us</h1>
                </div>
            </div>
        </div>
        </>
    )
}