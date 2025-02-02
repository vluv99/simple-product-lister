import { FC } from "react";
import {twMerge} from "tailwind-merge";

type ButtonProps = {
    label: string,
    variant?: 'default' | 'big',
    onClick?: () => void,
}
export const Button: FC<ButtonProps> = ({label, variant = 'default', onClick}) => {
    const buttonStyle = twMerge('bg-black text-white  text-center font-semibold rounded-full cursor-pointer',
        variant === 'default' && 'text-[16px] py-2 w-full',
        variant === 'big' && 'text-[28px] w-[50%] h-(length:--text-large) content-center min-w-fit');

    return (
        <div
            className={buttonStyle}>
            <button className='px-4 cursor-pointer' onClick={onClick}>{label}</button>
        </div>
    );
};
