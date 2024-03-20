import ButtonDefault from "./Button"

export default function Footer() {
    return(
        <>
            <div className="bg-primary flex h-fit w-full text-white justify-center items-center gap-x-48 py-16">
              <div className="w-fit h-fit grid-flow-row grid justify-center gap-2">
                <span className="font-bold text-[84px] h-fit w-fit">Give Us A Shout!</span>
                <p className="font-normal w-[594px] text-[34px] text-center mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                </p>
                <ButtonDefault text='Join Us!' url={'/'} variant={2}/>
              </div>
              <div className="w-1 h-[448px] bg-white"/>
              <div className="w-fit h-fit grid-flow-row grid justify-center gap-2">
                <div className="flex gap-x-12 ">
                  Buttons and links
                </div>
                <p>Let's stay connected!</p>
                <ButtonDefault text='Subscribe' url='/' variant={2}/>
                <p>lorem@ipsum.org</p>
                <p>© 2024 Terra Segara</p>
                <p>Nusa Penida, Bali, Indonesia</p>
              </div>
            </div>
        </>
    )
}