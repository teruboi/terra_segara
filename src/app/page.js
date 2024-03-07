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
        
          <div className="absolute -z-10 top-1/3 left-24 max-w-[1920px]"> 
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
          <div className="grid justify-center">
            <Image src={'/images.png'} width={585} height={585} style={{objectFit: 'contain', margin: 'auto'}}/>
            <ButtonDefault url={'/about-us'} text={'Who are we?'} variant={1}/>
          </div>
          <div className="grid justify-center">
            <Image src={'/images.png'} width={585} height={585}/>
            <ButtonDefault url={'/about-us'} text={'What we do?'} variant={1}/>
          </div>
          <div className="grid justify-center">
            <Image src={'/images.png'} width={585} height={585}/>
            <ButtonDefault url={'/about-us'} text={'How do we work?'} variant={1}/>
          </div>
        </div>  
      </div>
      <div className="w-full h-[1020px] bg-gradient-to-b from-white via-secondary to-white grid justify-center">
        <div className="w-[432px] h-[733px] rounded-[45px] flex flex-col justify-between drop-shadow-md hover:drop-shadow-2xl transition-all p-10">
          <Image src={'/images.png'} width={432} height={733} />
          <div className="text-center text-[100px] font-bold">Vision</div>
          <div className="rounded-[45px] text-center">
            <p className="text-base text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
            <ButtonDefault url={'/'} text={'See More'} variant={3}/>
          </div>
        </div>
      </div>
      <div className="w-full h-[1020px] bg-white">

      </div>
    </>
  );
}
