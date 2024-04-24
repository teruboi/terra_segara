import ButtonDefault from "@/components/Button";
import Image from "next/image";

const dummy = {
    avatar: 'https://ui-avatars.com/api/?name=Terra+Segara',
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. quis nostrud exercitation ullamco.'
}

const Partners = ({ partner })=>{
    return(
    <div className="min-w-96 min-h-[400px] w-fit h-fit rounded-[45px] shadow-2xl bg-white p-10">
        <div className="my-5 flex items-start justify-center gap-x-9">
            <Image
                src={partner.avatar}
                width={450}
                height={450}
                alt={partner.name}
                className="rounded-full"
            />
            <div className="text-secondary">
                <h1 className="text-4xl font-bold mb-4">{partner.name}</h1>
                <p className="text-2xl leading-tight">{partner.description}</p>
            </div>
        </div>
    </div>
    )
}

export default function JoinUs() {
    return(
        <>
        <Image
            src={'/Object-graphic6 2.png'}
            width={300}
            height={300}
            className="absolute right-48 top-1/2 translate-y-24"
        />
        <div className="max-w-full max-h-fit bg-white grid grid-flow-cols text-secondary text-3xl mt-44 mb-10 mx-60 gap-y-6 items-center">
            <h1 className="text-8xl font-bold flex-grow">Join Us</h1>
            <p className="w-full">
            Related to our project, other than funding options we are also open to any support covering our logistics, consumption, and/or other communication outreach. Please do not hesitate to contact us through the contact info provided at the end of this webpage. Any support is invaluable as we are planning to conduct our project in a long-term cohort- based period and involve as many locals as possible.
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
        <div className="max-w-fit w-screen h-fit mb-20 px-60">
            <h1 className="text-secondary text-8xl font-bold text-right">What Our Partners Said</h1>
            <div className="h-fit flex gap-x-9 justify-center items-center">
                <Partners partner={dummy} />
                <Partners partner={dummy} />
            </div>
        </div>
        <div className="max-w-full w-screen h-fit px-60 flex flex-col gap-4">
            <h1 className="text-secondary text-8xl font-bold">Let's Get in Touch!</h1>
            <p className="text-3xl text-secondary leading-tight">We strive to involve as many people, institutions, organizations, as well as individuals aligned with our objective and process as possible. We open every opportunity and recommendation from you. Please provide us your name, email, and valuable message in the column below.</p>
            <form className="text-[34px] flex flex-col gap-y-5 my-10 justify-start">
                <input type="text" name="name" placeholder="Your Name" className="placeholder:text-secondary border-[3px] text-secondary border-secondary rounded-2xl px-5 py-2.5 max-h-[60px] h-fit w-[346px] focus:placeholder:text-opacity-50 transition-colors shadow-md"/>
                <input type="email" name="email" placeholder="Your Email" className="placeholder:text-secondary border-[3px] text-secondary border-secondary rounded-2xl px-5 py-2.5 max-h-[60px] h-fit w-[346px] focus:placeholder:text-opacity-50 transition-colors shadow-md"/>
                <textarea name="message" cols={7} placeholder="Your Message" className="placeholder:text-secondary border-[3px] text-secondary border-secondary rounded-2xl px-5 py-2.5 h-[340px] focus:placeholder:text-opacity-50 transition-colors shadow-md"/>
                <button type="submit" className="bg-secondary min-w-[220px] max-h-[60px] h-fit w-fit px-10 py-1 text-[34px] text-white text-center rounded-[32px] transition-all mt-2">Send</button>
            </form>
        </div>
        </>
    )
}