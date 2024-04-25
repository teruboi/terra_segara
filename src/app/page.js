//Landing Page
import ButtonDefault from "@/components/Button";
import SliderHome from "@/components/SliderHome";
import Image from "next/image";

export const metadata = {
  title: "Terra Segara || Home",
  description: "Terra Segara website"
}

const ourWorks = [
  {
    image: '/IMG_5465.png',
    imageSmall: '/IMG_5465_small.png',
    title: 'Beach Cleaning',
    date: 'January 7, 2024'
  },
  {
    image: '/IMG_5464.png',
    imageSmall: '/IMG_5464_small.png',
    title: 'Beach Cleaning',
    date: 'January 7, 2024'
  },
  {
    image: '/IMG_5460.png',
    imageSmall: '/IMG_5460_small.png',
    title: 'Beach Cleaning',
    date: 'January 7, 2024'
  }
]

export default function LandingPage() {
  return (
    <>
      <div className="max-w-screen max-h-fit h-screen w-screen z-0 relative">
          <Image
            src={'/images/home-hero.png'}
            fill={true}
            alt="hero home"
            placeholder="blur"
            blurDataURL="/images/home-hero-small.png"
            className="transition-all object-cover w-screen"
          />
        <Image
          src={'/Object-graphic6 1.png'}
          width={300}
          height={300}
          className="absolute before:content-[''] right-0 -bottom-28 transition-all z-20"
        />
          <div className="absolute top-0 w-full h-full bg-gradient-to-t from-white to-40% flex flex-col justify-center px-20 z-10 gap-20"> 
            <p className="text-9xl font-normal">Be Part Of</p>
            <p className="text-9xl font-bold -mt-24">A Change.</p>
            <p className="text-5xl font-normal -mt-6">Educate, Preserve,  Conserve.</p>
          </div>
      </div>
        
      <div className="w-full h-fit bg-white text-secondary pt-16 pb-32">
        <h1 className="text-center text-[2.75rem]">About Us</h1>
        <h1 className="text-center text-[5.25rem] font-bold">Welcome to Our Page</h1>  
        <div className="flex gap-6 justify-center">
          <div className="grid justify-center">
            <Image
              src={'/1.png'}
              placeholder="blur"
              blurDataURL="/1 small(2).png"
              width={480}
              height={480}
              className="object-contain rounded-3xl"/>
            <ButtonDefault url={'/about-us'} text={'Who are we?'} variant={1}/>
          </div>
          <div className="grid justify-center">
            <Image
                src={'/3.png'}
                placeholder="blur"
                blurDataURL="/3 (1).png"
                width={480}
              height={480}
                className="object-contain rounded-3xl"
              />
            <ButtonDefault url={'/about-us'} text={'What we do?'} variant={1}/>
          </div>
          <div className="grid justify-center">
            <Image
                src={'/2.png'}
                placeholder="blur"
                blurDataURL="/2 (1).png"
                width={480}
              height={480}
                className="object-contain rounded-3xl"
            />
            <ButtonDefault url={'/about-us'} text={'How do we work?'} variant={1}/>
          </div>
        </div>  
      </div>
      <div className="w-screen h-[1020px] bg-gradient-to-b from-white via-secondary to-white grid grid-flow-col gap-5 justify-center items-center relative">
        <Image
          src={'/Object-graphic5 1.png'}
          width={400}
          height={900}
          className="absolute left-0 -bottom-40"
        />
        <div className="group w-[432px] h-[733px] rounded-[45px] drop-shadow-md hover:drop-shadow-2xl hover:w-[489px] hover:h-[832px] transition-all -z-0" style={{backgroundImage:"url('Vision.png')", backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <div className="w-[98%] left-1 h-full top-2 -z-0 absolute rounded-[43px] group-hover:bg-gradient-to-b from-secondary/70 to-50% transition-all"/>
          <div className="text-center text-[100px] font-bold relative top-0">Vision</div>
          <div className="transition-all rounded-[45px] text-center relative top-[340px] group-hover:top-[400px] flex flex-col justify-between">
            <p className="text-base text-center mx-12 group-hover:text-xl transition-all group-hover:text-secondary group-hover:mx-8">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
            <ButtonDefault url={'/'} text={'See More'} variant={3}/>
          </div>
        </div>
        <div className="group w-[432px] h-[733px] rounded-3xl drop-shadow-md hover:drop-shadow-2xl hover:w-[489px] hover:h-[832px] transition-all -z-0" style={{backgroundImage:"url('Mission.png')", backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <div className="w-[96%] left-2.5 h-full top-3.5 -z-0 absolute rounded-[43px] group-hover:bg-gradient-to-b from-secondary/70 to-50% transition-all"/>
          <div className="text-center text-[100px] font-bold relative top-0">Mission</div>
          <div className="transition-all rounded-[45px] text-center relative top-[340px] group-hover:top-[400px] flex flex-col justify-between">
            <p className="text-base text-center mx-12 group-hover:text-xl transition-all group-hover:text-secondary group-hover:mx-8">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
            <ButtonDefault url={'/'} text={'See More'} variant={3}/>
          </div>
        </div>
        <div className="group w-[432px] h-[733px] rounded-[45px] drop-shadow-md hover:drop-shadow-2xl hover:w-[489px] hover:h-[832px] transition-all -z-0" style={{backgroundImage:"url('Value.png')", backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <div className="w-[98%] left-1 h-full top-2 -z-0 absolute rounded-[43px] group-hover:bg-gradient-to-b from-secondary/70 to-50% transition-all"/>
          <div className="text-center text-[100px] font-bold relative top-0">Value</div>
          <div className="transition-all rounded-[45px] text-center relative top-[340px] group-hover:top-[400px] flex flex-col justify-between">
            <p className="text-base text-center mx-12 group-hover:text-xl transition-all group-hover:text-secondary group-hover:mx-8">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
            <ButtonDefault url={'/'} text={'See More'} variant={3}/>
          </div>
        </div>
      </div>
      <div className="w-full h-[1020px] bg-white">
        <h1 className="text-secondary text-[84px] font-bold text-center">Our Work</h1>
        <SliderHome content={ourWorks} />
      </div>
    </>
  );
}
