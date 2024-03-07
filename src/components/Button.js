import Link from "next/link";

export default function ButtonDefault({ text, url, variant }) {
    let button = 'h-fit w-fit px-10 py-1 text-[34px] text-white rounded-[32px] transition-all mx-auto my-5'
    if (variant !== null){
        switch (variant) {
            case 1:
                button += ' bg-primary '
                break;
            case 2:
                button += ' bg-secondary h-fit w-fit px-10 py-2 text-[34px] text-white rounded-[32px]'
                break;
            case 3:
                button += ' bg-white bg-opacity-50 border-[3px] border-white group-hover:bg-secondary group-hover:bg-opacity-50 group-hover:border-secondary'
                break;
            default:
                break;
        }
    }
    return(
        <Link href={`${url}`} className="mx-auto rounded">
            <div className={button}>
                {text !== null ? text : 'Button'}
            </div>
        </Link>
    )
}