import Image from "next/image";

export default function Donate(){
    return(
        <>
            <Image
                src={'/Object-graphic3 2.png'}
                width={380}
                height={150}
                className="absolute left-0 top-1/2 translate-y-20"
            />
            <div className="max-w-full w-screen max-h-[1080px] h-screen bg-white flex flex-col text-secondary text-3xl mt-16 -mb-16 justify-center gap-y-2 px-32">
                <h1 className="text-[80px]">We can make <span className="font-bold text-9xl">A Difference,</span></h1>
                <Image
                    src={'/crystal bay 1.png'}
                    width={1700}
                    height={300}
                    objectFit="cover"
                    className="rounded-3xl"
                />
                <p className="font-bold text-9xl text-right">Together.</p>
                <p className="mt-5">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”
                </p>
            </div>
            <div className="max-w-full w-screen h-fit py-12 flex gap-1 justify-evenly text-secondary bg-gradient-to-b items-center from-white via-secondary via-50% to-100% px-32">
                <div className="text-4xl w-1/2 translate-x-10">
                    If you want to support us you can also donate through our coral adoption or scholarship scheme
                    <div className="w-fit h-fit bg-white mt-9 rounded-3xl shadow-xl px-12 py-16">
                        <form className="flex flex-col gap-2">
                            <label className="text-5xl">Make a Donation</label>
                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" name="name" className="border-[3px] border-secondary shadow-md rounded-2xl h-[60px] w-[346px] py-2 px-5 placeholder:text-secondary text-secondary text-2xl" placeholder="Your Name"/> 
                                <input type="email" name="email" className="border-[3px] border-secondary rounded-2xl shadow-md h-[60px] w-[346px] py-2 px-5 placeholder:text-secondary text-secondary text-2xl" placeholder="Your Email"/> 
                            </div>
                            <label className="text-3xl mt-5 mb-3">Donation Amount</label>
                            <select name="amount" className="h-[60px] w-[346px] border-[3px] border-secondary rounded-2xl shadow-md text-2xl px-5 py-2">
                                <option value="" disabled selected>Click here</option>
                                <option value={5}>5$</option>
                                <option value={10}>10$</option>
                                <option value={15}>15$</option>
                                <option value={20}>20$</option>
                            </select>
                            <div className="flex items-center gap-3 my-5">
                                <input type="radio" id="check" name="emailUpdate" className="w-5 h-5 accent-secondary" />
                                <label className="text-secondary text-3xl">I would like to receive updates via email</label>
                            </div>
                            <button type="submit" className="bg-secondary min-w-[220px] max-h-[60px] h-fit w-fit px-10 py-1 text-[34px] text-white text-center rounded-[32px] transition-all mt-2 shadow-md">Submit Donation</button>
                        </form>
                    </div>
                </div>
                <Image
                    src={'/11 1.png'}
                    width={600}
                    height={500}
                    objectFit="cover"
                    className="rounded-[45px] mx-auto translate-x-6"
                />
            </div>
        </>
    )
}