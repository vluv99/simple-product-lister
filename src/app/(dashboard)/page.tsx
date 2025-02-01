import {Card} from "@/components/card/card";
import {dummyData} from "@/util/dummyData";

function Home() {
  return (
    <div className='grid justify-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4 max-w-[1268px]'>
        {[...dummyData,...dummyData,...dummyData].map((p, i) =>
            <Card key={`product-index-${i}`} thumbnailURL={p.thumbnailURL} discountValue={p.discountValue} title={p.title} price={p.price} description={p.description}/>)}
    </div>
  );
}
export default Home;
