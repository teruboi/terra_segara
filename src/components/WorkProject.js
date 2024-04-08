const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const zeroify = (num)=>{
    if (num < 10){
        return `0${num}`
    } else {
        return num
    }
}

export default function WorkProject({ props }){
    const mon = monthNames[props.date.getMonth()]
    const dte = zeroify(props.date.getDate())
    const year = props.date.getFullYear()
    const title = props.title
    const article = props.article
    return(
        <div className="flex gap-20 mx-auto px-16 py-8 border-b-2 border-secondary last:border-b-0">
            <div className="col-span-1 text-center text-primary leading-none">
                <p className="text-[100px]">{mon}</p>
                <p className="text-[140px] font-bold">{dte}</p>
                <p className="text-[72px]">{year}</p>
            </div>
            <div className="col-span-5 text-secondary text-2xl">
                <h1 className="text-5xl mb-10">{title}</h1>
                <div className="leading-snug text-justify">{article}</div>
            </div>
        </div>
    )
}