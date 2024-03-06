import Link from "next/link";

export default function ButtonDefault({ text, url, variant }) {
    let button = ''
    if (variant !== null){
        switch (variant) {
            case 1:
                button = 'bg-primary h-fit w-fit px-10 py-2 text-[34px] text-white rounded-[32px]'
                break;
            case 2:
                button = 'bg-secondary h-fit w-fit px-10 py-2 text-[34px] text-white rounded-[32px]'
                break;
            case 3:
                button = 'bg-white bg-opacity-50 border-[3px] border-white hover:bg-secondary hover:bg-opacity-50 hover:border-secondary h-fit w-fit px-10 py-2 text-[34px] text-white rounded-[32px]'
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