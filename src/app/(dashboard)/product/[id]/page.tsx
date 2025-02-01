import Image from "next/image";
import {Rating} from "@/components/rating/rating";
import {Pill} from "@/components/pill/pill";
import {Button} from "@/components/button/button";

const ProductPage = () => {
    return (
        <div className='flex justify-center gap-10 mt-[20%] mx-1 md:mx-3 flex-col md:flex-row items-center md:items-start'>
            <div className='w-fullw md:w-[50%]'>
                <Image src='/imgs/iphone9.png' alt='product image' className='rounded-lg object-cover w-full h-[30rem]'
                       width={0} height={0} sizes={'100%'}/>
            </div>
            <div className='w-fullw md:w-[50%] flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                    <div className='text-[48px] font-semibold'>iPhone 9</div>
                    <Rating value={4.55}/>
                </div>
                <div className='text-[24px] text-black'>
                    An apple mobile which is nothing like apple
                </div>
                <div className='flex flex-col text-black/60 text-[24px] gap-2'>
                    <div>Stock: 94</div>
                    <div>Brand: Apple</div>
                    <div>Category: smartphones</div>
                </div>
                <div className='pt-2'>
                    <Pill text='-12.96%' variant={"big"}/>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <div className='text-large font-semibold'>549 $</div>
                    <Button label='Add to cart' variant={"big"}/>
                </div>
            </div>
        </div>
    );
};
export default ProductPage;