import { FC } from "react";

type ButtonProps = {
    label: string;
}
export const Button:FC<ButtonProps> = ({label}) => {
    return (
        <div className='bg-black text-white text-[16px] text-center font-semibold py-2 w-full rounded-full'>
            <span className='px-4'>{label}</span>
        </div>
    );
};
