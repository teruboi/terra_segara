import Link from "next/link"
import Image from "next/image"
import ButtonDefault from "./Button"

export default function Footer() {
    return(
        <>
            <div className="bg-primary grid grid-cols-11 h-fit w-full text-white justify-center items-center gap-32 max-sm:gap-2 sm:pl-20 py-5">
              <div className="w-fit h-fit flex flex-col col-span-5 mx-auto sm:translate-x-7 justify-start max-sm:scale-50">
                <h1 className="font-bold text-5xl h-fit w-fit mx-auto">Give Us A Shout!</h1>
                <p className="font-normal w-2/3 mx-auto text-xl text-center leading-snug">
                We are dedicated to engaging a wide array of stakeholders, including institutions, organizations, and individuals who share our vision and ethos. We welcome any insights, opportunities, or recommendations you may have to offer. Kindly share your name, email address, and any valuable messages you wish to convey in the space provided below.
                </p>
                <ButtonDefault text='Join Us!' url={'/'} variant={2}/>
              </div>
              <div className="w-1 h-2/3 bg-white col-span-1 sm:-translate-x-10"/>
              <div className="w-fit h-fit grid-flow-row grid gap-0 col-span-5 text-xl text-center max-sm:scale-50">
                <div className="flex justify-center gap-3">
                  <Link href={'https://www.instagram.com/terrasegaraindonesia'} target="__blank" className="hover:scale-90 transition-all"> 
                    <Image
                      src="/Instagram.png"
                      width={60}
                      height={60}
                      alt="@terra_segara"
                    />
                  </Link>
                  <Link href={'/'} className="hover:scale-90 transition-all"> 
                    <Image
                      src="/WhatsApp.png"
                      width={60}
                      height={60}
                      alt="Terra Segara"
                    />
                  </Link>
                  <Link href={'/'} className="hover:scale-90 transition-all"> 
                    <Image
                      src="/Facebook.png"
                      width={60}
                      height={60}
                      alt="@terra_segara"
                    />
                  </Link>
                  <Link href={'/'} className="hover:scale-90 transition-all"> 
                    <Image
                      src="/Linkedin 1.png"
                      width={60}
                      height={60}
                      alt="@terra_segara"
                    />
                  </Link>
                </div>
                <p className="mt-5">Let's stay connected!</p>
                <ButtonDefault text='Subscribe' url='/' variant={2}/>
                <p>lorem@ipsum.org</p><br/>
                <p>© 2024 Terra Segara</p>
                <p>Nusa Penida, Bali, Indonesia</p>
              </div>
            </div>
        </>
    )
}