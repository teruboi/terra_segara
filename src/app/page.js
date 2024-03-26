import Image from "next/image";

export const metadata = {
  title: "Terra Segara || Home",
  description: "Terra Segara website"
}

export default function LandingPage() {
  return (
    <>
      <Image
        src={'/Object-graphic3 1.png'}
        width={600}
        height={600}
        objectFit="cover"
        className="absolute -top-20"
      />
      <Image
        src={'/Object-graphic6 1.png'}
        width={300}
        height={300}
        objectFit="cover"
        className="absolute bottom-20 right-0"
      />
      <div className="h-screen w-screen bg-white text-secondary text-center flex flex-col justify-center items-center text-8xl font-semibold gap-4">
        <p className="z-10">Coming Soon!</p>
        <p className="text-xl font-normal z-10">Please be patient as we develop this website for you</p>
        <Image
          src={'/primary-logo-2-tone.png'}
          width={120}
          height={120}
          alt="Terra Segara"
          className="z-10"
        />
      </div>
    </>
  );
}
