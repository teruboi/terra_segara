import Link from "next/link";

export default function ButtonDefault({ text, url, variant }) {
    let color = 'bg-primary'
    if (variant !== null){
        if (variant === 1){
            color = 'bg-primary'
        } else if (variant === 2){
            color = 'bg-secondary'
        }
    }
    return(
        <Link href={`${url}`} className="mx-auto">
            <div className={`${color} h-fit w-fit px-10 py-2 text-[34px] text-white rounded-[30px]`}>
                {text !== null ? text : 'Button'}
            </div>
        </Link>
    )
}