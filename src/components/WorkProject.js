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
        <div className="grid grid-rows-1 grid-cols-6 gap-4">
            <div className="col-span-1 text-center text-primary leading-none">
                <p className="text-[140px]">{mon}</p>
                <p className="text-[180px] font-bold">{dte}</p>
                <p className="text-[100px]">{year}</p>
            </div>
            <div className="col-span-5 text-secondary text-[42px]">
                <h1 className="text-6xl mb-10">{title}</h1>
                <div className="leading-snug">{article}</div>
            </div>
        </div>
    )
}