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
        <Image
          src={'/Object-graphic6 1.png'}
          width={300}
          height={300}
          className="absolute right-0 -bottom-32"
        />
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
      <div className="w-full h-[1020px] bg-gradient-to-b from-white via-secondary to-white grid grid-flow-col gap-20 justify-center items-center">
        <div className="group w-[432px] h-[733px] rounded-[45px] drop-shadow-md hover:drop-shadow-2xl hover:w-[489px] hover:h-[832px] transition-all -z-0" style={{backgroundImage:"url('Vision.png')", backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <div className="w-[98%] left-1 h-full top-2 -z-0 absolute rounded-[43px] group-hover:bg-gradient-to-b from-secondary/70 to-50% transition-all"/>
          <div className="text-center text-[100px] font-bold relative top-0">Vision</div>
          <div className="transition-all rounded-[45px] text-center relative top-[340px] group-hover:top-[400px] flex flex-col justify-between">
            <p className="text-base text-center mx-12 group-hover:text-xl group-hover:text-secondary group-hover:mx-8">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
            <ButtonDefault url={'/'} text={'See More'} variant={3}/>
          </div>
        </div>
        <div className="group w-[432px] h-[733px] rounded-[45px] drop-shadow-md hover:drop-shadow-2xl hover:w-[489px] hover:h-[832px] transition-all -z-0" style={{backgroundImage:"url('Mission.png')", backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <div className="w-[96%] left-2.5 h-full top-3.5 -z-0 absolute rounded-[43px] group-hover:bg-gradient-to-b from-secondary/70 to-50% transition-all"/>
          <div className="text-center text-[100px] font-bold relative top-0">Mission</div>
          <div className="transition-all rounded-[45px] text-center relative top-[340px] group-hover:top-[400px] flex flex-col justify-between">
            <p className="text-base text-center mx-12 group-hover:text-xl group-hover:text-secondary group-hover:mx-8">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
            <ButtonDefault url={'/'} text={'See More'} variant={3}/>
          </div>
        </div>
        <div className="group w-[432px] h-[733px] rounded-[45px] drop-shadow-md hover:drop-shadow-2xl hover:w-[489px] hover:h-[832px] transition-all -z-0" style={{backgroundImage:"url('Value.png')", backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <div className="w-[98%] left-1 h-full top-2 -z-0 absolute rounded-[43px] group-hover:bg-gradient-to-b from-secondary/70 to-50% transition-all"/>
          <div className="text-center text-[100px] font-bold relative top-0">Value</div>
          <div className="transition-all rounded-[45px] text-center relative top-[340px] group-hover:top-[400px] flex flex-col justify-between">
            <p className="text-base text-center mx-12 group-hover:text-xl group-hover:text-secondary group-hover:mx-8">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
            <ButtonDefault url={'/'} text={'See More'} variant={3}/>
          </div>
        </div>
      </div>
      <div className="w-full h-[1020px] bg-white">
        <Image
          src={'/Object-graphic3 1.png'}
          width={895*0.5}
          height={364*0.5}
          className="absolute -bottom-[235%] left-0"
        />

      </div>
    </>
  );
}
