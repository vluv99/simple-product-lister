"use client";
import {FC, useEffect, useState} from "react";
import {Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "../ui/carousel";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {CustomImage} from "@/components/custom-image/custom-image";

type Props = {
    urls: Array<string | StaticImport>;
}

const imgNotFound = '/imgs/image-not-found.png';

export const CustomCarousel:FC<Props> = ({urls}) => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(urls.length)

    urls = urls.map((url) => (url === '' ? imgNotFound : url));

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className='flex flex-col max-w-[90%]'>
            <Carousel setApi={setApi}
              opts={{
                  //align: "start",
                  //loop: true,
              }}>
                <CarouselContent>
                    {urls.map((s, i) => (
                        <CarouselItem key={`carousel-index-${i}`}>
                            <CustomImage src={s} alt={`product image in carousel ${i}`} height='481px'/>
                        </CarouselItem>)
                    )}
                </CarouselContent>
                <CarouselPrevious variant={"carousel"} size={"carousel"} />
                <CarouselNext  variant={"carousel"} size={"carousel"} />
            </Carousel>
            <div className="flex justify-center py-8">
                <div className='flex gap-2'>
                {
                    [...Array(count).keys()].map((i) => <div key={`carousel-slide-index-${i}`}
                                                             className={`w-[10px] h-[10px] rounded-full ${i === current ? 'bg-accent' : 'bg-[#32323299]/60' }`} ></div>)
                }
                </div>
            </div>
        </div>
    );
};
