import Image from "next/image";
import WorkProject from "@/components/WorkProject";

const example = {
    title: 'Empowering Local Youth through SCUBA Dive Training Scholarship - Batch 1/2024',
    article: 
        <>
            <p>
            Backgorund: Nusa Penida is a district located in the southeast part of Bali island. It consists of three islands of Nusa Penida, Nusa Lembongan, and Nusa Ceningan. The islands' diving industry is internationally recognized due to its locally unique currents' condition, situated in the coral triangle area, and is home for megafauna such as manta rays and sunfish or Mola-mola. In 2020, Nusa Penida alone had 22 registered scuba diving businesses and around 30 more in Nusa Ceningan and Lembongan. Most of the dive operators employ foreigners to work as instructors or divemasters as it is difficult to find locals.
            <br/><br/>
            Among the locals, only few females are found to work in diving and snorkeling and most of them are coming from the island of Java or Lombok. Additionally, Nusa Penida has a growing number of conservation communities from locally initiated groups of Nuansa Pulau to globally organized Coral Triangle Center. However, the number of locals, not to mention local women, represented in conservation activities is low to non-existent. These findings, we assume, show that there is a linear correlation in locals' involvement in scuba diving and conservation effort.
            <br/><br/>
            <Image />
            <br/>
            Objective: We believe that locals play imperative roles in educating, preserving, and conserving the island they call home. Thus, they need adequate knowledge and skills to do so. However, with their current skills set, they will require further capacity building particularly in diving skills and knowledge. The training provided will also prepare them to enter the diving industry and further to conservation activities.
            </p>
        </>,
    date: new Date('01-07-2024')
    
}

export default function Project() {
    return(
        <>
        <div className="max-w-[1920px] max-h-[1080px] w-screen h-screen bg-no-repeat bg-cover" style={{backgroundImage:'url(images/projects-hero.png)'}}>
            <div className="w-full h-full text-white text-[140px] flex flex-row font-bold justify-start items-end">
                <p className="relative left-28 bottom-20">
                    <span className="text-[100px] font-normal inline-flex items-center gap-x-10">
                        Projects <div className="w-[228px] h-1 bg-white"/>
                    </span>
                    <br />
                    <div className="-mt-20">
                        Our Work.
                    </div>
                </p>
            </div>
        </div>
        <div className="max-w-[1920px] w-screen h-fit py-24 px-24">
            <WorkProject props={example}/>
        </div>
        </>
    )
}