"use client";
import {FC, useEffect, useState} from "react";
import {ProductCard} from "@/components/product-card/product-card";
import {ProductListingItemDTO} from "@/util/dtoTypes";
import {INIT_MAX_COUNT} from "@/util/consts";
import {getProducts} from "@/lib/requests";
import {useInView} from "react-intersection-observer";

type ProductListProps = {
    initialProducts: ProductListingItemDTO[]
}

export const ProductsList:FC<ProductListProps> = ({initialProducts}) => {
    const [offset, setOffset] = useState(INIT_MAX_COUNT)
    const [products, setProducts] = useState<ProductListingItemDTO[]>(initialProducts)
    const { ref, inView } = useInView()
    const [end, setEnd] = useState(false)

    const loadMoreProducts = async () => {
        const reqProducts = await getProducts(offset, INIT_MAX_COUNT);
        if (reqProducts){
            setProducts(products => [...products, ...reqProducts]);
            setOffset(offset => offset + INIT_MAX_COUNT);
        } else {
            setEnd(true);
        }
    }

    useEffect(() => {
        if (inView) {
            loadMoreProducts()
        }
    }, [inView])

    return (
        <>
        <div
            className='grid justify-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4'>
            {products.map((p, i) =>
                <ProductCard key={`product-index-${i}${p.id}`} id={p.id} thumbnailURL={p.thumbnailURL}
                             discountValue={p.discountValue} title={p.title} price={p.price}
                             description={p.description}/>)}
        </div>
        <div className='text-center py-5' ref={ref}>
            {end ? 'No more products to show' : 'Loading...'}
        </div>
        </>
    );
};