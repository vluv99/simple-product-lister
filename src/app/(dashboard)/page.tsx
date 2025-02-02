import {Header} from "@/components/header/header";
import {getProducts} from "@/lib/requests";
import {ProductsList} from "@/components/products-list/products-list";
import {INIT_MAX_COUNT} from "@/util/consts";

const Home = async () => {
    const initialProducts = await getProducts(0, INIT_MAX_COUNT);
    return (
        <>
            <Header title='See Products'/>
            <ProductsList initialProducts={initialProducts ?? []} />
        </>
    );
}
export default Home;