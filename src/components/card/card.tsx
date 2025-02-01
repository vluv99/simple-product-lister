import {FC} from "react";
import Image from "next/image";
import {Pill} from "@/components/pill/pill";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {Button} from "@/components/button/button";

type Props = {
    thumbnailURL: string | StaticImport;
    discountValue?: number| undefined;
    title: string;
    price: number;
    description: string;
}
export const Card:FC<Props> = ({thumbnailURL, discountValue = undefined, title, price, description}) => {
    const titleRowStyle = 'text-[20px] font-semibold';
    return (
        <div className='flex flex-col gap-2 p-3 border-1 border-[#DBDBDB] bg-white rounded-lg w-full md:max-w-100 lg:max-w-80'>
            <div className='relative'>
                <Image src={thumbnailURL} alt='product image' className='rounded-lg object-cover w-full h-[150px]'
                       width={0} height={0} sizes={'100%'}/>
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
                <Button label='See details' />
            </div>
        </div>
    );
};

function getAltName(text: string): string {
    return 'asd'
}
