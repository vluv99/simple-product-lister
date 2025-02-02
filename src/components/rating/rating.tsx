"use client";

import {FC, useMemo} from "react";
import {Colors, StarIcon} from "@/components/rating/star-icon";

type Props = {
    value: number;
}

export const Rating:FC<Props> = ({value}) => {
    const stars = useMemo(() => {
        const starColors:Colors[] = [];
        for(let i = 1; i <= 5; i++){
            if (value >= i){
                starColors.push(Colors.filled)
            } else {
                starColors.push(Colors.empty)
            }
        }
        return starColors;
    }, [value])

    return (
        <div className='flex flex-row gap-4'>
            <div className='flex flex-row gap-1'>
                {stars.map((color, i) => <StarIcon color={color} key={`star-${i}`}/>)}
            </div>
            <div className='text-[24px] font-semibold text-[#000000]'>{value.toFixed(2)}</div>
        </div>
    );
};
