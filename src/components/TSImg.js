import Image from "next/image"

export const TSImg = ({ src, width, height, alt, className, fill })=>{
    const link = src.replaceAll(' ', '+')
    const smallImg = link.slice(0,-4)+'_small'+link.slice(-4)
    if (fill != undefined){
        return(
            <Image
                src={`https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/Website+Asset/${link}.png`}
                placeholder="blur"
                blurDataURL={`https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/Website+Asset/${smallImg}`}
                alt={alt}
                className={className}
                fill={fill}
            />
        )
    } else{
        return(
            <Image
                src={`https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/Website+Asset/${link}`}
                placeholder="blur"
                blurDataURL={`https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/Website+Asset/${smallImg}`}
                width={width}
                height={height}
                alt={alt}
                className={className}
            />
        )
    }
}