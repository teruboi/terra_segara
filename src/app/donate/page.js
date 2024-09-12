import ButtonDefault from "@/components/Button";
import TSImg from "@/components/TSImg";
import Image from "next/image";
import Link from "next/link";

export default function Donate(){
    return(
        <>
            <Image
                src={'/Object-graphic3 2.png'}
                width={300}
                height={150}
                className="absolute left-0 top-1/2 -translate-y-8 invisible"
            />
            <div className="max-w-full w-screen h-fit bg-white flex flex-col text-secondary text-xl max-sm:text-xs mt-44 max-sm:mt-20 justify-center gap-y-2 px-28 max-sm:px-10">
                <h1 className="text-5xl max-sm:text-xl">We can make <span className="font-bold text-7xl max-sm:text-2xl">A Difference,</span></h1>
                <div className="relative w-full h-[30vh] max-sm:h-[10vh]">
                    <TSImg
                        src={'crystal bay.png'}
                        fill={true}
                        className="rounded-3xl max-sm:rounded-xl object-center object-cover"
                    />
                </div>
                <p className="font-bold text-7xl text-right max-sm:text-2xl">Together.</p>
                <p className="mb-5 mt-28 max-sm:mt-10 text-justify">
                Welcome to our donation page! Your support is invaluable in helping us achieve our mission and make a meaningful impact in the lives of those we serve. With your generous contributions, we can continue to provide essential resources, support, and opportunities to those in need. Whether you choose to donate once or become a recurring donor, every contribution brings us closer to creating positive change and building a better future for all. 
                <br/><br/>
                Thank you for joining us in our journey to make a difference! Your generosity today is a beacon of hope for a brighter tomorrow.
                </p>
            </div>
            <div className="max-w-screen w-screen h-fit py-12 max-sm:inline flex gap-1 justify-evenly text-secondary bg-gradient-to-b items-center from-white via-secondary via-50% to-100% px-32 max-sm:px-10">
                <div className="text-2xl max-sm:text-lg w-1/2 max-sm:w-full">
                    If you want to support us you can also donate through our coral adoption or scholarship scheme
                    <div className="w-fit h-fit bg-white mt-9 rounded-3xl shadow-xl px-12 py-16 max-sm:px-4 max-sm:py-6 flex-row">
                        <ButtonDefault url={'https://app.midtrans.com/payment-links/1722997680304'} text={'Transfer'} variant={2} target={'_blank'}/>
                        <div className="h-5"></div>
                        <ButtonDefault url={'https://app.midtrans.com/payment-links/1722998300661'} text={'QRIS'} variant={2} target={'_blank'}/>
                    </div>
                </div>
                <TSImg
                    src={'11.png'}
                    width={450}
                    height={450}
                    className="rounded-[45px] mx-auto translate-x-6 max-sm:hidden object-cover"
                />
            </div>
        </>
    )
}