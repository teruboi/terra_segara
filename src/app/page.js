//Landing Page
import ButtonDefault from "@/components/Button";
import SliderHome from "@/components/SliderHome";
import TSImg from "@/components/TSImg";
import Image from "next/image";

export const metadata = {
  title: "Terra Segara",
  description: "Terra Segara website"
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
      <div className="max-w-screen max-h-fit aspect-video max-[360px]:h-auto w-screen z-0 relative">
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
        <div className="flex gap-20 max-sm:gap-2 justify-center max-sm:mx-4">
          <div className="grid justify-center">
            <TSImg
              src={'1.png'}
              width={350}
              height={350}
              className="object-contain rounded-3xl max-sm:rounded-lg mb-3 mx-auto"/>
            <ButtonDefault url={'/about-us'} text={'Who are we?'} variant={1}/>
          </div>
          <div className="grid justify-center">
            <TSImg
                src={'3.png'}
                width={350}
                height={350}
                className="object-contain rounded-3xl max-sm:rounded-lg mb-3 mx-auto"
              />
            <ButtonDefault url={'/about-us'} text={'What we do?'} variant={1}/>
          </div>
          <div className="grid justify-center">
            <TSImg
                src={'2.png'}
                width={350}
                height={350}
                className="object-contain rounded-3xl max-sm:rounded-lg mb-3 mx-auto" 
            />
            <ButtonDefault url={'/about-us'} text={'How do we work?'} variant={1}/>
          </div>
        </div>  
      </div>
      
      <div className="w-full h-fit bg-white mt-52 pb-16 max-sm:py-0 max-sm:-my-10">
        <h1 className="text-secondary text-5xl max-sm:text-xl font-bold text-center">Our Work</h1>
        <SliderHome content={ourWorks} />
      </div>
    </>
  );
}
