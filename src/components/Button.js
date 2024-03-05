import Link from "next/link";

export default function ButtonDefault({ text, url }) {
    return(
        <Link href={`/${url}`} className="mx-auto">
            <div className="h-fit w-fit px-10 py-2 text-[34px] bg-secondary text-white rounded-[30px]">
                {text}
            </div>
        </Link>
    )
}