import Image from "next/image";

export default function Donate(){
    return(
        <>
            <Image
                src={'/Object-graphic3 2.png'}
                width={300}
                height={150}
                className="absolute left-0 top-1/2 -translate-y-10"
            />
            <div className="max-w-full w-screen max-h-[1080px] h-screen bg-white flex flex-col text-secondary text-xl mt-16 -mb-16 justify-center gap-y-2 px-10">
                <h1 className="text-5xl">We can make <span className="font-bold text-7xl">A Difference,</span></h1>
                <Image
                    src={'/crystal bay 1.png'}
                    width={1700}
                    height={300}
                    objectFit="cover"
                    className="rounded-3xl"
                />
                <p className="font-bold text-7xl text-right">Together.</p>
                <p className="mt-5 text-justify">
                Welcome to our donation page! Your support is invaluable in helping us achieve our mission and make a meaningful impact in the lives of those we serve. With your generous contributions, we can continue to provide essential resources, support, and opportunities to those in need. Whether you choose to donate once or become a recurring donor, every contribution brings us closer to creating positive change and building a better future for all. 
                <br/><br/>
                Thank you for joining us in our journey to make a difference! Your generosity today is a beacon of hope for a brighter tomorrow.

                </p>
            </div>
            <div className="max-w-screen w-screen h-fit py-12 flex gap-1 justify-evenly text-secondary bg-gradient-to-b items-center from-white via-secondary via-50% to-100% px-32">
                <div className="text-2xl w-1/2">
                    If you want to support us you can also donate through our coral adoption or scholarship scheme
                    <div className="w-fit h-fit bg-white mt-9 rounded-3xl shadow-xl px-12 py-16">
                        <form className="flex flex-col gap-2">
                            <label className="text-xl">Make a Donation</label>
                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" name="name" className="border-[3px] border-secondary shadow-md rounded-2xl h-fit w-50 py-2 px-5 placeholder:text-secondary text-secondary text-base" placeholder="Your Name"/> 
                                <input type="email" name="email" className="border-[3px] border-secondary shadow-md rounded-2xl h-fit w-50 py-2 px-5 placeholder:text-secondary text-secondary text-base" placeholder="Your Email"/> 
                            </div>
                            <label className="text-xl">Donation Amount</label>
                            <select name="amount" className="border-[3px] border-secondary shadow-md rounded-2xl h-fit w-36 py-2 px-5 placeholder:text-secondary text-secondary text-base">
                                <option value="" disabled selected>Click here</option>
                                <option value={5}>5$</option>
                                <option value={10}>10$</option>
                                <option value={15}>15$</option>
                                <option value={20}>20$</option>
                            </select>
                            <div className="flex items-center gap-3 my-5">
                                <input type="radio" id="check" name="emailUpdate" className="w-5 h-5 accent-secondary" />
                                <label className="text-secondary text-xl">I would like to receive updates via email</label>
                            </div>
                            <button type="submit" className="bg-secondary min-w-[220px] max-h-[60px] h-fit w-fit px-10 py-1 text-lg text-white text-center rounded-[32px] transition-all mt-2 shadow-md">Submit Donation</button>
                        </form>
                    </div>
                </div>
                <Image
                    src={'/11 1.png'}
                    width={450}
                    height={450}
                    objectFit="cover"
                    className="rounded-[45px] mx-auto translate-x-6"
                />
            </div>
        </>
    )
}