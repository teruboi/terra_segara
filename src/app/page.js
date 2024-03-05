//Landing Page
import Image from "next/image";

export const metadata = {
  title: "Terra Segara || Home",
  description: "Terra Segara website"
}

export default function LandingPage() {
  return (
    <>
      <div className="w-full h-[1020px] bg-gradient-to-t from-white to-20%">
        <div>
          <Image
          src={'/home-hero.png'}
          width={1920}
          height={1020}
          className="relative -z-20 bg-secondary bg-opacity-20"
          style={{
            objectFit: "contain"
          }}
        />
        
          <div className="absolute -z-10 top-1/3 left-24"> 
            <p className="text-[140px] font-normal">Be Part Of</p>
            <p className="text-[140px] font-bold -mt-24">A Change.</p>
            <p className="text-[50px] font-normal -mt-6">Educate, Preserve,  Conserve.</p>
          </div>
        </div>
      </div>
        
      <div className="w-full h-[1020px] bg-white text-secondary">
          <h1 className="">About Us</h1>
          <h1 className="">Welcome to Our Page</h1>  

      </div>
      <div className="w-full h-[1020px] bg-gradient-to-b from-white via-secondary to-white">
        
      </div>
      <div className="w-full h-[1020px] bg-white">

      </div>
    </>
  );
}
