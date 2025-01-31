"use client";

import {FC, useEffect, useState} from "react";
import {Colors, StarIcon} from "@/components/rating/star-icon";

type Props = {
    value: number;
}

export const Rating:FC<Props> = ({value}) => {
    const [stars, setStars] = useState<Colors[]>([]);

    useEffect(() => {
        const starColors:Colors[] = [];
        for(let i = 1; i <= 5; i++){
            if (value >= i){
                starColors.push(Colors.filled)
            } else {
                starColors.push(Colors.empty)
            }
        }
        setStars(starColors)
    }, [value])

    return (
        <div className='flex flex-row'>
            <div className='flex flex-row min-w-full'>
                {stars.map((color, i) => <StarIcon color={color} key={`star-${i}`}/>)}
            </div>
            <div className='text-[24px] font-semibold'>{value}</div>
        </div>
    );
};
