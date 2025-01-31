import {Pill} from "@/components/pill/pill";
import {Button} from "@/components/button/button";
import {Rating} from "@/components/rating/rating";
import {Colors, StarIcon} from "@/components/rating/star-icon";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Pill text='-12.96%' />
        <Button label="See details" />
      <StarIcon color={Colors.filled}/>
        <Rating value={2.1}/>
    </div>
  );
}
