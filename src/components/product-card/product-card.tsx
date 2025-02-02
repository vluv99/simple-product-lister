import {FC} from "react";
import {Pill} from "@/components/pill/pill";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {Button} from "@/components/button/button";
import Link from "next/link";
import {CustomImage} from "@/components/custom-image/custom-image";

type Props = {
    id: number;
    thumbnailURL: string | StaticImport;
    discountValue: number| null;
    title: string;
    price: number;
    description: string;
}
export const ProductCard:FC<Props> = ({id, thumbnailURL, discountValue = null, title, price, description}) => {
    const titleRowStyle = 'text-[20px] font-semibold';
    return (
        <div className='flex flex-col gap-2 p-3 border-1 border-[#DBDBDB] bg-white rounded-lg w-full md:max-w-100 lg:max-w-80'>
            <div className='relative'>
                <CustomImage src={thumbnailURL} alt='product image' height='150px'/>
                <div className='absolute top-2 right-2'>
                    {discountValue && <Pill text={`-${discountValue}%`} /> }
                </div>
            </div>
            <div className='grid grid-cols-4'>
                <div className={titleRowStyle + ' col-span-3 line-clamp-1'}>{title}</div>
                <div className={titleRowStyle + ' text-right'}>{price} $</div>
                <div className='col-span-3 text-[14px] line-clamp-2'>{description}</div>

            </div>
            <div className='py-2'>
                <Link href={`/product/${id}`}>
                    <Button label='See details' />
                </Link>
            </div>
        </div>
    );
};
