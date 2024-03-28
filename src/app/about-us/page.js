import Image from "next/image";

export default function AboutUs() {
    return(
        <>
        <div className="max-w-full w-screen h-screen bg-no-repeat bg-cover" style={{backgroundImage:'url(images/about-us-hero.png)'}}>
            <div className="absolute w-full h-full bg-gradient-to-t from-white to-40% text-center text-secondary text-[140px] font-bold grid content-end">
                About Us
            </div>
        </div>
        <div className="max-w-[1920px] w-screen h-fit py-12 text-center text-secondary text-[42px]">
            <h1 className="text-6xl font-bold">Who Are We?</h1>
            <br />
            Yayasan Terra Segara Indonesia (YTSI) is a non-profit organization based in Nusa Penida, Bali.<br />
            Its name is derived from the Sanskrit words "Terra'' which means land and "Segara'' which<br />
            means sea. Our first point of departure is we believe that the dynamics of land, sea, and the<br />
            people—all constituent parts of the earth—impact one another as a single, interconnected<br />
            whole. Thus, as a responsible human being we have the prominent responsibility to maintain<br />
            the balance between the two. The founders of YTSI are all diving instructors whom have been<br />
            living and working in Nusa Penida Marine Protected Area (MPA) for more than five years.<br />
        </div>
        <div className="max-w-[1920px] w-screen h-fit py-12 text-center text-secondary text-[42px]">
            <h1 className="text-6xl font-bold">Founder</h1>
        </div>
        <div className="max-w-[1920px] w-screen h-fit py-12 text-center text-secondary text-[42px]">
            <h1 className="text-6xl font-bold mb-12">What we do?</h1>
            <Image className="mb-12"/>
            We are eager to solve coral degradation and ocean plastic pollution problems<br />around the island. However, our main objective is to spread our eagerness<br />to everyone and work together in any ways we can. These problems may or may not<br />contribute to climate action but we are working towards grounding the notion of<br />climate change and action in a more profound yet practical way. Climate change is<br />indeed a global issue yet it needs to be addressed locally from our closest proximity.<br />Which is why we bring the concept of cultural preservation, a way in which climate<br />action can be pursued in a culturally appropriate and convenient way.
        </div>
        <div className="max-w-[1920px] w-screen h-fit py-12 text-center text-secondary text-[42px] mb-10">
            <h1 className="text-6xl font-bold mb-12">How do we work?</h1>
            <Image className="mb-12"/>
            To achieve our main objective we propose three agendas of <b>educate, preserve, and conserve.</b><br /><br />
            <ol className="list-decimal list-outside text-secondary ml-10">
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