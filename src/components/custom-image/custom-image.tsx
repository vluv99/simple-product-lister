import {FC} from "react";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {twMerge} from "tailwind-merge";

type Props = {
    src: string | StaticImport,
    alt: string,
    height?: string
}

//TODO: Tailwind can't generate css classes for dynamic class names. The class names must be fully in text during build time
export const CustomImage:FC<Props> = ({src, alt, height}) => {
    const styles = twMerge(
        'rounded-lg object-cover w-full'
    )
    return (
        <Image src={src} alt={alt} className={styles} style={{height: height}}
               width={0} height={0} sizes={'100%'}/>
    );
};
