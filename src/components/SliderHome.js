export default function SliderHome() {
    const imageList = [
        'Untitled design (4) 1.png',
        'Untitled design (4) 1.png',
        'Untitled design (4) 1.png',
    ]

    return(
        <div className="w-[1460px] h-[821px] flex flex-row">
            {imageList.forEach((e)=>{
                return(
                    <div className="max-w-[1460px] max-h-[821px] rounded=[45px] shadow-lg mx-8 text-center align-text-bottom" style={{backgroundImage:`url('${e}')`}}>
                        This is a text
                    </div>
                )
            })}
        </div>
    )
}