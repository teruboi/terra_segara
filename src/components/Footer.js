import Link from "next/link"
import Image from "next/image"
import ButtonDefault from "./Button"

export default function Footer() {
    return(
        <>
            <div className="bg-primary grid grid-cols-11 h-fit w-full text-white justify-center items-center gap-x-48 py-16 pl-20">
              <div className="w-fit h-fit col-span-5 grid gap-2 mx-auto translate-x-16">
                <span className="font-bold text-7xl h-fit w-fit mx-auto">Give Us A Shout!</span>
                <p className="font-normal w-5/6 mx-auto text-3xl text-center mb-4 leading-snug">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                </p>
                <ButtonDefault text='Join Us!' url={'/'} variant={2}/>
              </div>
              <div className="w-1 h-[448px] bg-white col-span-1"/>
              <div className="w-fit h-fit grid-flow-row grid gap-0 col-span-5 text-3xl text-center translate-x-6">
                <div className="flex justify-center">
                  <Link href={'/'} className="mr-6 hover:scale-110 transition-all"> 
                    <Image
                      src="/Instagram.png"
                      width={84}
                      height={84}
                      alt="@terra_segara"
                    />
                  </Link>
                  <Link href={'/'} className="mx-6 hover:scale-110 transition-all"> 
                    <Image
                      src="/WhatsApp.png"
                      width={84}
                      height={84}
                      alt="Terra Segara"
                    />
                  </Link>
                  <Link href={'/'} className="mx-6 hover:scale-110 transition-all"> 
                    <Image
                      src="/Facebook.png"
                      width={84}
                      height={84}
                      alt="@terra_segara"
                    />
                  </Link>
                  <Link href={'/'} className="ml-6 hover:scale-110 transition-all"> 
                    <Image
                      src="/Linkedin 1.png"
                      width={84}
                      height={84}
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