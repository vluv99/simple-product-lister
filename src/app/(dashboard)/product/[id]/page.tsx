import {Rating} from "@/components/rating/rating";
import {Pill} from "@/components/pill/pill";
import {Button} from "@/components/button/button";
import {CustomCarousel} from "@/components/custom-carousel/custom-carousel";
// import {carouselTest} from "@/util/dummyData";
import {getSingleProduct} from "@/lib/requests";
import {FC} from "react";
import {ProductDTO} from "@/util/dtoTypes";

const ProductPage = async ({params}: {params: Promise<{ id: string }>}) => {
    const { id } = await params;
    const product = await getSingleProduct(Number(id));

    return <ProductContent product={product} />
};
export default ProductPage;

// ##################################

type ProductContentProp = {
    product: ProductDTO
}
const ProductContent: FC<ProductContentProp> = ({product}) => {
    return (
        <div
            className='flex justify-center gap-10 mt-[20%] mx-1 md:mx-3 flex-col md:flex-row items-center md:items-start'>
            <div className='w-fullw md:w-[50%]'>
                <CustomCarousel urls={product.thumbnailURLs}/>
            </div>
            <div className='w-fullw md:w-[50%] flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                    <div className='text-[48px] font-semibold'>{product.title}</div>
                    <Rating value={product.rating}/>
                </div>
                <div className='text-[24px] text-black'>
                    {product.description}
                </div>
                <div className='flex flex-col text-black/60 text-[24px] gap-2'>
                    {product.stock && <div>Stock: {product.stock}</div>}
                    <div>Brand: {product.brand}</div>
                    {product.category && <div>Category: {product.category}</div>}
                </div>
                <div className='pt-2'>
                    {product.discountValue && <Pill text={`-${product.discountValue}%`} variant={"big"}/>}
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <div className='text-large font-semibold'>{product.price} $</div>
                    <Button label='Add to cart' variant={"big"}/>
                </div>
            </div>
        </div>
    );
};

