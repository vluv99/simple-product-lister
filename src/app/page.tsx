import {Pill} from "@/components/pill/pill";
import {Button} from "@/components/button/button";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Pill text='-12.96%' />
        <Button label="See details" />
    </div>
  );
}
