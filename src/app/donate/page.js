import Image from "next/image";

export default function Donate(){
    return(
        <>
            <div className="max-w-[1920px] max-h-[1080px] w-screen h-screen bg-white flex flex-col text-secondary text-[42px] mt-32 justify-center gap-y-2 px-28">
                <h1 className="text-[100px]">We can make <span className="font-bold text-[140px]">A Difference,</span></h1>
                <Image
                    src={''}
                    width={1700}
                    height={300}
                    objectFit="cover"
                    className="rounded-3xl"
                />
                <p className="font-bold text-[140px] text-right">Together.</p>
                <p className="mt-5">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”
                </p>
            </div>
            <div className="max-w-[1920px] max-h-[1080px] w-screen h-screen grid grid-cols-2 gap-12 p-14 text-secondary bg-gradient-to-b from-white via-secondary via-50% to-100%">
                <div className="text-[40px]">
                    If you want to support us you can also donate through our coral adoption or scholarship scheme
                    <div className="w-[887px] h-[723px] bg-white mt-9 rounded-[45px] shadow-xl px-12 py-16">
                        <form className="flex flex-col gap-6">
                            <label className="text-6xl">Make a Donation</label>
                            <div className="grid grid-cols-2">
                                <input type="text" name="name" className="border-[3px] border-secondary shadow-md rounded-2xl h-[60px] w-[346px] py-2 px-5 placeholder:text-secondary text-secondary text-3xl" placeholder="Your Name"/> 
                                <input type="email" name="email" className="border-[3px] border-secondary rounded-2xl shadow-md h-[60px] w-[346px] py-2 px-5 placeholder:text-secondary text-secondary text-3xl" placeholder="Your Email"/> 
                            </div>
                            <label className="text-[42px] mt-5 mb-3">Donation Amount</label>
                            <select name="amount" className="h-[60px] w-[346px] border-[3px] border-secondary rounded-2xl shadow-md text-3xl px-5 py-2">
                                <option value="" disabled selected>Click here</option>
                                <option value={5}>5$</option>
                                <option value={10}>10$</option>
                                <option value={15}>15$</option>
                                <option value={20}>20$</option>
                            </select>
                            <div className="flex items-center gap-3 my-5">
                                <input type="radio" id="check" name="emailUpdate" className="w-[60px] h-[60px] accent-secondary" />
                                <label className="text-secondary text-[42px]">I would like to receive updates via email</label>
                            </div>
                            <button type="submit" className="bg-secondary min-w-[220px] max-h-[60px] h-fit w-fit px-10 py-1 text-[34px] text-white text-center rounded-[32px] transition-all mt-2 shadow-md">Submit Donation</button>
                        </form>
                    </div>
                </div>
                <Image
                    src={''}
                    width={740}
                    height={866}
                    objectFit="cover"
                    className="rounded-[45px] mx-auto"
                />
            </div>
        </>
    )
}