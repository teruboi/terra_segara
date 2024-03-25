import ButtonDefault from "@/components/Button";
import Image from "next/image";

const dummy = {
    avatar: 'https://ui-avatars.com/api/?name=Terra+Segara',
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. quis nostrud exercitation ullamco.'
}

const Partners = ({ partner })=>{
    return(
    <div className="w-[836px] h-[496px] rounded-[45px] shadow-lg flex items-start justify-center bg-white p-10 gap-x-9">
        <Image
            src={partner.avatar}
            width={550}
            height={550}
            alt={partner.name}
            className="rounded-full"
        />
        <div className="text-secondary">
            <h1 className="text-[50px] font-bold mb-4">{partner.name}</h1>
            <p className="text-[42px] leading-tight">{partner.description}</p>
        </div>
    </div>
    )
}

export default function JoinUs() {
    return(
        <>
        <div className="max-w-[1920px] max-h-[1080px] w-screen h-screen bg-white flex flex-col text-secondary text-[42px] mt-44 mx-28 gap-y-6">
            <h1 className="text-[100px] font-bold">Join Us</h1>
            <p>
            Related to our project, other than funding options we are also open to any support<br/>covering our logistics, consumption, and/or other communication outreach. Please<br/>do not hesitate to contact us through the contact info provided at the end of this<br/>webpage. Any support is invaluable as we are planning to conduct our project in a<br/>long-term cohort- based period and involve as many locals as possible.
            </p>
            <div className="leading-tight my-3">
                <p className="font-bold">Email</p>
                terrasegara@gmail.com
            </div>
            <div className="leading-tight my-3">
                <p className="font-bold">WhatsApp</p>
                +62 111 2222 333
            </div>
            <div className="leading-tight my-3">
                <p className="font-bold">Instagram</p>
                @terrasegaraindonesia
            </div>
        </div>
        <div className="max-w-[1920px] w-screen h-fit px-24 mb-20">
            <h1 className="text-secondary text-[100px] font-bold text-right">What Our Partners Said</h1>
            <div className="h-fit flex gap-x-9 justify-center items-center">
                <Partners partner={dummy} />
                <Partners partner={dummy} />
            </div>
        </div>
        <div className="max-w-[1920px] w-screen h-fit px-24">
            <h1 className="text-secondary text-[100px] font-bold">Let's Get in Touch!</h1>
            <p className="text-[42px] text-secondary leading-tight">We strive to involve as many people, institutions, organizations, as well as individuals aligned with our objective and process as possible. We open every opportunity and recommendation from you. Please provide us your name, email, and valuable message in the column below.</p>
            <form className="text-[34px] flex flex-col gap-y-5 my-14 justify-start">
                <input type="text" name="name" placeholder="Your Name" className="placeholder:text-secondary border-[3px] text-secondary border-secondary rounded-2xl px-5 py-2.5 max-h-[60px] h-fit w-[346px] focus:placeholder:text-opacity-50 transition-colors shadow-md"/>
                <input type="email" name="email" placeholder="Your Email" className="placeholder:text-secondary border-[3px] text-secondary border-secondary rounded-2xl px-5 py-2.5 max-h-[60px] h-fit w-[346px] focus:placeholder:text-opacity-50 transition-colors shadow-md"/>
                <textarea name="message" cols={7} placeholder="Your Message" className="placeholder:text-secondary border-[3px] text-secondary border-secondary rounded-2xl px-5 py-2.5 h-[340px] focus:placeholder:text-opacity-50 transition-colors shadow-md"/>
                <button type="submit" className="bg-secondary min-w-[220px] max-h-[60px] h-fit w-fit px-10 py-1 text-[34px] text-white text-center rounded-[32px] transition-all mt-2">Send</button>
            </form>
        </div>
        </>
    )
}