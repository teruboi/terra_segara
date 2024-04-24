import SliderFounder from "@/components/SliderFounder";
import Image from "next/image";

const Founder = [
    {
        name: "Prisilia Resolute",
        desc: "PADI Scuba Diving Instructor, sociologist and development practitioner who has been engaged in several action research projects on waste management and community development in several areas in Indonesia. Her favorite quote is “We must create the living interest in the/our work” - Bradbury & Reason, 2001",
        img: '/BG 1.png'
    },
    {
        name: "Prisilia Resolute",
        desc: "PADI Scuba Diving Instructor, sociologist and development practitioner who has been engaged in several action research projects on waste management and community development in several areas in Indonesia. Her favorite quote is “We must create the living interest in the/our work” - Bradbury & Reason, 2001",
        img: '/BG 1.png'
    },
    {
        name: "Prisilia Resolute",
        desc: "PADI Scuba Diving Instructor, sociologist and development practitioner who has been engaged in several action research projects on waste management and community development in several areas in Indonesia. Her favorite quote is “We must create the living interest in the/our work” - Bradbury & Reason, 2001",
        img: '/BG 1.png'
    },
    {
        name: "Prisilia Resolute",
        desc: "PADI Scuba Diving Instructor, sociologist and development practitioner who has been engaged in several action research projects on waste management and community development in several areas in Indonesia. Her favorite quote is “We must create the living interest in the/our work” - Bradbury & Reason, 2001",
        img: '/BG 1.png'
    },
    {
        name: "Prisilia Resolute",
        desc: "PADI Scuba Diving Instructor, sociologist and development practitioner who has been engaged in several action research projects on waste management and community development in several areas in Indonesia. Her favorite quote is “We must create the living interest in the/our work” - Bradbury & Reason, 2001",
        img: '/BG 1.png'
    },
]

export default function AboutUs() {
    return(
        <>
        <Image
            src={'/Object-graphic4 1.png'}
            width={200}
            height={200}
            className="absolute left-0 top-3/4 z-10 translate-y-20"
        />
        <Image
            src={'/Object-graphic3 1.png'}
            width={300}
            height={300}
            className="absolute right-0 top-2/3 z-10 translate-y-28"
        />
        <div className="w-screen h-screen">
            <Image
                src={'/images/about-us-hero.png'}
                placeholder="blur"
                blurDataURL="/IMG_0328 1.png"
                fill
                className="object-cover object-center"
            />
            <div className="absolute w-full h-full bg-gradient-to-t from-white to-40% text-center text-secondary text-[140px] font-bold grid content-end">
                About Us
            </div>
        </div>
        <div className="max-w-full h-fit py-12 mx-auto w-2/3 text-justify text-secondary text-2xl px-32">
            <h1 className="text-6xl font-bold text-center">Who Are We?</h1>
            <br />
            Yayasan Terra Segara Indonesia (YTSI) is a non-profit organization based in Nusa Penida, Bali. Its name is derived from the Sanskrit words "Terra'' which means land and "Segara'' which means sea. Our first point of departure is we believe that the dynamics of land, sea, and the people—all constituent parts of the earth—impact one another as a single, interconnected whole. Thus, as a responsible human being we have the prominent responsibility to maintain the balance between the two. The founders of YTSI are all diving instructors whom have been living and working in Nusa Penida Marine Protected Area (MPA) for more than five years.
        </div>
        <div className="w-screen h-fit py-12 text-center text-secondary text-2xl">
            <h1 className="text-6xl font-bold">Founder</h1>
            <SliderFounder content={Founder} />
        </div>
        <div className="w-2/3 h-fit py-12 text-justify text-secondary text-2xl">
            <h1 className="text-6xl font-bold mb-12 text-center">What we do?</h1>
            <Image
                src={'/4 1.png'}
                width={1280}
                height={720}
                className="mb-12 object-fill"
            />
            <p className="px-32">
            We are eager to solve coral degradation and ocean plastic pollution problems around the island. However, our main objective is to spread our eagerness to everyone and work together in any ways we can. These problems may or may not contribute to climate action but we are working towards grounding the notion of climate change and action in a more profound yet practical way. Climate change is indeed a global issue yet it needs to be addressed locally from our closest proximity. Which is why we bring the concept of cultural preservation, a way in which climate action can be pursued in a culturally appropriate and convenient way.
            </p>
        </div>
        <div className="w-2/3 h-fit py-12 text-center text-secondary text-2xl mb-10">
            <h1 className="text-6xl font-bold mb-12">How do we work?</h1>
            <Image
                src={'/5 1.png'}
                width={1280}
                height={720}
                className="mb-12"
            />
            To achieve our main objective we propose three agendas of <b>educate, preserve, and conserve.</b><br /><br />
            <ol className="list-decimal list-outside text-secondary w-fit flex flex-col mx-auto -translate-x-16">
                <li className="text-left ml-36">
                    Educate: Climate change issues need to be informed through formal, informal, and non-<br/>formal education. Scuba Dive training for example, can provide non-formal education to<br/>inform climate change adaptation through hands-on experience and a fun way.                    
                </li>
                <li className="text-left ml-36">
                    Preserve: Inasmuch as climate change is an environmental issue, its adaptation is a social<br/>and cultural issue. Addressing climate change adaptation thus needs to be done through<br/>preserving culture by acknowledging local wisdom or knowledge.
                </li>
                <li className="text-left ml-36">
                    Conserve: Education and preservation can increase people's awareness of the climate<br/>change issue and adaptation which lead them to the act of conserving nature and culture.
                </li>
            </ol><br />
            The three agendas are fluid and subject to change as we work on a participatory<br />research basis. This means, Nusa Penida people know better than us the 'expert', thus<br />our point of departure is their local knowledge and wisdom, instead of ours.
        </div>
        </>
    )
}