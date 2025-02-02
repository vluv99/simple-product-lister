import {ProductCard} from "@/components/product-card/product-card";
import {Header} from "@/components/header/header";
import {getProducts} from "@/lib/requests";

const INIT_COUNT = 10

const Home = async () => {
    const initialProducts = await getProducts(0, INIT_COUNT);
    return (
        <>
            <Header title='See Products'/>
            <div
                className='grid justify-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4'>
                {initialProducts.map((p, i) =>
                    <ProductCard key={`product-index-${i}${p.id}`} id={p.id} thumbnailURL={p.thumbnailURL}
                                 discountValue={p.discountValue} title={p.title} price={p.price}
                                 description={p.description}/>)}
            </div>
        </>
    );
}
export default Home;
