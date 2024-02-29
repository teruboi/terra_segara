import { Link } from "next/link";

export default function ButtonDefault({ text, url }) {
    return(
        <Link href={`/${url}`}>
            <div className="h-16 px-10 py-2 w-auto bg-primary">
                {text}
            </div>
        </Link>
    )
}