//Landing Page
import ButtonDefault from "@/components/Button";
import SliderHome from "@/components/SliderHome";
import TSImg from "@/components/TSImg";
import Image from "next/image";

export const metadata = {
  title: "Terra Segara || Home",
  description: "Terra Segara website"
}

export const viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  userScalable: false
}

const ourWorks = [
  {
    image: 'IMG_5465.png',
    title: 'Beach Cleaning',
    date: 'January 7, 2024'
  },
  {
    image: 'IMG_5464.png',
    title: 'Beach Cleaning',
    date: 'January 7, 2024'
  },
  {
    image: 'IMG_5460.JPG',
    title: 'Beach Cleaning',
    date: 'January 7, 2024'
  }
]

export default function LandingPage() {
  return (
    <>
      <div className="max-w-screen max-h-fit min-[375px]:h-screen aspect-video max-[360px]:h-64 w-screen z-0 relative">
          <TSImg
            src={'home-hero.png'}
            fill={true}
            alt="hero home"
            placeholder="blur"
            className="transition-all object-cover w-screen"
          />
        <Image
          src={'/Object-graphic6 1.png'}
          width={180}
          height={180}
          className="absolute right-0 sm:top-2/3 sm:translate-y-10 top-1/3 translate-y-5 transition-all z-20 max-sm:scale-50 max-sm:translate-x-11 hidden"
        />
          <div className="absolute top-0 w-full h-full bg-gradient-to-t from-white to-40% flex flex-col justify-center max-sm:px-10 px-20 z-10 gap-20"> 
            <p className="text-8xl max-sm:text-2xl font-normal">Be Part Of</p>
            <p className="text-8xl max-sm:text-2xl font-bold -mt-24 max-sm:translate-y-1">A Change.</p>
          </div>
      </div>
        
      <div className="w-full h-fit bg-white text-secondary sm:pt-16 pb-32">
        <h1 className="text-center text-2xl max-sm:text-xl">About Us</h1>
        <h1 className="text-center text-5xl max-sm:text-3xl font-bold mb-8 max-sm:mb-4">Welcome to Our Page</h1>  
        <div className="flex gap-20 max-sm:gap-2 justify-center">
          <div className="grid justify-center">
            <TSImg
              src={'1.png'}
              width={350}
              height={350}
              className="object-contain rounded-3xl mb-3"/>
            <ButtonDefault url={'/about-us'} text={'Who are we?'} variant={1}/>
          </div>
          <div className="grid justify-center">
            <TSImg
                src={'3.png'}
                width={350}
                height={350}
                className="object-contain rounded-3xl mb-3"
              />
            <ButtonDefault url={'/about-us'} text={'What we do?'} variant={1}/>
          </div>
          <div className="grid justify-center">
            <TSImg
                src={'2.png'}
                width={350}
                height={350}
                className="object-contain rounded-3xl mb-3" 
            />
            <ButtonDefault url={'/about-us'} text={'How do we work?'} variant={1}/>
          </div>
        </div>  
      </div>
      <div className="w-screen h-[800px] max-sm:h-fit py-10 sm:py-0 max-sm:-translate-y-20 bg-gradient-to-b from-white via-secondary to-white grid grid-flow-col gap-5 max-sm:gap-2 justify-center items-center relative">
        <Image
          src={'/Object-graphic5 1.png'}
          width={250}
          height={500}
          className="absolute left-0 -bottom-24 hidden"
        />
        <div className="group w-80 max-sm:w-32 h-[620px] max-sm:h-[280px] rounded-[40px] max-sm:rounded-xl drop-shadow-md hover:drop-shadow-2xl hover:scale-110 transition-all -z-0 mx-1">
          <TSImg
            src={'Vision.png'}
            fill
            className="h-full w-full object-cover object-center rounded-[40px] max-sm:rounded-xl"
          />
          <div className="w-full h-full -z-0 absolute rounded-[40px] max-sm:rounded-xl group-hover:bg-gradient-to-b from-secondary/70 to-50% transition-all"/>
          <div className="text-center text-7xl max-sm:text-xl font-bold relative top-5 max-sm:top-3">Vision</div>
          <div className="transition-all rounded-[45px] max-sm:rounded-xl text-center relative top-96 w-full h-full max-sm:top-40">
            <p className="text-sm max-sm:text-[8px] px-6 max-sm:px-3 max-sm:leading-tight transition-all group-hover:text-secondary text-center">We envision a future where younger generations have abundant opportunities for improved livelihoods and a profound connection with nature.</p>
          </div>
        </div>
        <div className="group w-80 max-sm:w-32 h-[620px] max-sm:h-[280px] rounded-[40px] max-sm:rounded-xl drop-shadow-md hover:drop-shadow-2xl hover:scale-110 transition-all -z-0 mx-1">
          <TSImg
            src={'Mission.png'}
            fill
            className="h-full w-full object-cover object-center rounded-[40px] max-sm:rounded-xl"
          />
          <div className="w-full h-full -z-0 absolute rounded-[40px] max-sm:rounded-xl group-hover:bg-gradient-to-b from-secondary/70 to-50% transition-all"/>
          <div className="text-center text-7xl max-sm:text-xl font-bold relative top-5 max-sm:top-3">Mission</div>
          <div className="transition-all rounded-[45px] max-sm:rounded-xl text-center relative top-96 w-full h-full max-sm:top-40">
            <p className="text-sm max-sm:text-[8px] px-6 max-sm:px-3 max-sm:leading-tight transition-all group-hover:text-secondary text-center">Our mission is to empower and guide the younger generation to become proactive participants in addressing climate change by fostering a deeper connection with nature.</p>
          </div>
        </div>
        <div className="group w-80 max-sm:w-32 h-[620px] max-sm:h-[280px] rounded-[40px] max-sm:rounded-xl drop-shadow-md hover:drop-shadow-2xl hover:scale-110 transition-all -z-0 mx-1">
          <TSImg
            src={'Value.png'}
            fill
            className="h-full w-full object-cover object-center rounded-[40px] max-sm:rounded-xl"
          />
          <div className="w-full h-full -z-0 absolute rounded-[40px] max-sm:rounded-xl group-hover:bg-gradient-to-b from-secondary/70 to-50% transition-all"/>
          <div className="text-center text-7xl max-sm:text-xl font-bold relative top-5 max-sm:top-3">Value</div>
          <div className="transition-all rounded-[45px] max-sm:rounded-xl text-center relative top-96 w-full h-full max-sm:top-40">
            <p className="text-sm max-sm:text-[8px] px-6 max-sm:px-3 max-sm:leading-tight transition-all group-hover:text-secondary text-center">Our core values encompass continuous learning and adaptation, proactive action coupled with reflection, collaborative knowledge-building, and adept facilitation of transformative change.</p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-white pb-16 max-sm:py-0 max-sm:-my-10">
        <h1 className="text-secondary text-5xl max-sm:text-xl font-bold text-center">Our Work</h1>
        <SliderHome content={ourWorks} />
      </div>
    </>
  );
}
