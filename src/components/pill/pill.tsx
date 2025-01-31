import { FC } from "react";

type PillProps = {
    text: string;
}
export const Pill:FC<PillProps> = ({text}) => {
    return (
        <div className='bg-accent text-white text-[14px] font-semibold px-4 py-1 rounded-full max-w-fit'>
            {text}
        </div>
    );
};
