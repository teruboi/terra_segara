import ButtonDefault from "@/components/Button";
import Image from "next/image";

const dummy = {
    avatar: 'https://ui-avatars.com/api/?name=Terra+Segara',
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. quis nostrud exercitation ullamco.'
}

const Partners = ({ partner })=>{
    return(
    <div className="min-w-[400px] max-sm:min-w-[100px] min-h-[50px] w-fit h-fit rounded-[45px] shadow-2xl bg-white p-10 max-sm:p-3">
        <div className="my-5 flex items-start justify-center gap-x-9 max-sm:gap-x-2">
            <Image
                src={partner.avatar}
                width={450}
                height={450}
                alt={partner.name}
                className="rounded-full aspect-square max-sm:scale-50 object-center"
            />
            <div className="text-secondary">
                <h1 className="text-2xl max-sm:text-base font-bold mb-4">{partner.name}</h1>
                <p className="text-lg max-sm:text-[8px] leading-tight">{partner.description}</p>
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
            width={200}
            height={200}
            className="absolute right-48 top-1/2 translate-y-24 hidden"
        />
        <div className="max-w-full max-h-fit bg-white grid grid-flow-cols text-secondary text-xl max-sm:text-sm mt-28 mb-10 max-sm:mx-8 mx-20 gap-y-2 items-center">
            <h1 className="text-6xl max-sm:text-3xl font-bold flex-grow">Join Us</h1>
            <p className="w-full">
            In relation to our project, aside from financial contributions, we welcome assistance in logistics, provisions, and communication channels. We encourage interested parties to reach out to us via the contact information provided at the bottom of this webpage. Every form of support is highly valued, as we aim to execute our project over an extended period in a cohort-based approach, with the goal of engaging as many local participants as possible.
            </p>
            <div className="leading-tight my-3 max-sm:my-1">
                <p className="font-bold">Email</p>
                hello@terrasegara.org
            </div>
            <div className="leading-tight my-3 max-sm:my-1">
                <p className="font-bold">WhatsApp</p>
                +62 111 2222 333
            </div>
            <div className="leading-tight my-3 max-sm:my-1">
                <p className="font-bold">Instagram</p>
                @terrasegaraindonesia
            </div>
        </div>
        <div className="max-w-fit w-screen h-fit mb-20 px-60 max-sm:px-8">
            <h1 className="text-secondary text-6xl max-sm:text-3xl font-bold text-right mb-5">What Our Partners Said</h1>
            <div className="h-fit flex gap-x-9 max-sm:gap-x-3 justify-center items-center">
                <Partners partner={dummy} />
                <Partners partner={dummy} />
            </div>
        </div>
        <div className="max-w-full w-full h-fit max-sm:px-8 px-20 flex flex-col gap-2">
            <h1 className="text-secondary text-6xl max-sm:text-3xl font-bold">Let's Get in Touch!</h1>
            <p className="text-xl max-sm:text-sm text-secondary leading-tight">We are dedicated to engaging a wide array of stakeholders, including institutions, organizations, and individuals who share our vision and ethos. We welcome any insights, opportunities, or recommendations you may have to offer. Kindly share your name, email address, and any valuable messages you wish to convey in the space provided below.</p>
            <form className="text-lg max-sm:text-xs flex flex-col gap-y-2 my-4 justify-start">
                <input type="text" name="name" placeholder="Your Name" className="placeholder:text-secondary border-[3px] text-secondary border-secondary rounded-2xl max-sm:rounded-lg px-5 max-sm:px-3 py-2.5 max-sm:py-2 max-h-[60px] h-fit w-[346px] max-sm:w-[180px] focus:placeholder:text-opacity-50 transition-colors shadow-md"/>
                <input type="email" name="email" placeholder="Your Email" className="placeholder:text-secondary border-[3px] text-secondary border-secondary rounded-2xl max-sm:rounded-lg px-5 max-sm:px-3 py-2.5 max-sm:py-2 max-h-[60px] h-fit w-[346px] max-sm:w-[180px] focus:placeholder:text-opacity-50 transition-colors shadow-md"/>
                <textarea name="message" cols={7} placeholder="Your Message" className="placeholder:text-secondary border-[3px] text-secondary border-secondary rounded-2xl max-sm:rounded-lg px-5 max-sm:px-3 py-2.5 max-sm:py-2 h-[340px] max-sm:h-60 focus:placeholder:text-opacity-50 transition-colors shadow-md"/>
                <button type="submit" className="bg-secondary min-w-[220px] max-h-[60px] h-fit w-fit px-10 py-1 text-base text-white text-center rounded-[32px] transition-all mt-2 max-sm:mx-auto">Send</button>
            </form>
        </div>
        </>
    )
}