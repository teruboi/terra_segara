import Link from "next/link";

export default function ButtonDefault({ text, url, variant }) {
    let button = 'min-w-[220px] min-h-[60px] h-fit w-fit px-10 text-3xl text-white text-center rounded-[32px] transition-all mx-auto my-5 hover:scale-110 flex justify-center'
    if (variant !== null){
        switch (variant) {
            case 1:
                button += ' bg-primary hover:bg-white hover:border-4 hover:border-secondary hover:text-secondary'
                break;
            case 2:
                button += ' bg-secondary text-white rounded-[32px]'
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
                <p className="my-auto">{text !== null ? text : 'Button'}</p>
            </div>
        </Link>
    )
}