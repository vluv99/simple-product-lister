import { FC } from "react";
import {twMerge} from "tailwind-merge";

type ButtonProps = {
    label: string,
    extendClasses?: string | undefined,
    variant?: 'default' | 'big';
}
export const Button: FC<ButtonProps> = ({label, extendClasses, variant = 'default'}) => {
    const buttonStyle = twMerge('bg-black text-white  text-center font-semibold rounded-full',
        extendClasses,
        variant === 'default' && 'text-[16px] py-2 w-full',
        variant === 'big' && 'text-[28px] w-[50%] h-full content-center');

    return (
        <div
            className={buttonStyle}>
            <span className='px-4'>{label}</span>
        </div>
    );
};
