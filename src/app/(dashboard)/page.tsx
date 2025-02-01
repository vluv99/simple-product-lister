import {Card} from "@/components/card/card";
import {dummyData} from "@/util/dummyData";
import {Header} from "@/components/header/header";

function Home() {
  return (
    <>
      <Header title='See Products'/>
      <div className='grid justify-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4'>
          {[...dummyData,...dummyData,...dummyData].map((p, i) =>
              <Card key={`product-index-${i}`} thumbnailURL={p.thumbnailURL} discountValue={p.discountValue} title={p.title} price={p.price} description={p.description}/>)}
      </div>
    </>
  );
}
export default Home;
