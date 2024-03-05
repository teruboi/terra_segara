//Landing Page
import ButtonDefault from "@/components/Button";
import Image from "next/image";

export const metadata = {
  title: "Terra Segara || Home",
  description: "Terra Segara website"
}

export default function LandingPage() {
  return (
    <>
      <div className="w-fit h-fit bg-gradient-to-t from-white to-20%">
        <div>
          <Image
          src={'/home-hero.png'}
          width={1920}
          height={1020}
          className="relative -z-20 bg-secondary bg-opacity-20"
          style={{
            objectFit: "fill"
          }}
        />
        
          <div className="absolute -z-10 top-1/3 left-24"> 
            <p className="text-[140px] font-normal">Be Part Of</p>
            <p className="text-[140px] font-bold -mt-24">A Change.</p>
            <p className="text-[50px] font-normal -mt-6">Educate, Preserve,  Conserve.</p>
          </div>
        </div>
      </div>
        
      <div className="w-full h-fit bg-white text-secondary pt-16 pb-32">
        <h1 className="text-center text-[2.75rem]">About Us</h1>
        <h1 className="text-center text-[5.25rem] font-bold">Welcome to Our Page</h1>  
        <div className="grid grid-flow-col grid-cols-3">
          <div className="flex flex-col justify-center">
            <Image src={'/images.png'} width={585} height={585}/>
            <ButtonDefault url={'/about-us'} text={'Who are we?'}/>
          </div>
          <div className="flex flex-col justify-center">
            <Image src={'/images.png'} width={585} height={585}/>
            <ButtonDefault url={'/about-us'} text={'What we do?'}/>
          </div>
          <div className="flex flex-col justify-center">
            <Image src={'/images.png'} width={585} height={585}/>
            <ButtonDefault url={'/about-us'} text={'How do we work?'}/>
          </div>
        </div>  
      </div>
      <div className="w-full h-[1020px] bg-gradient-to-b from-white via-secondary to-white">
        
      </div>
      <div className="w-full h-[1020px] bg-white">

      </div>
    </>
  );
}
