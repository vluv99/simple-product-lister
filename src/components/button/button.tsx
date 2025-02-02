import { FC } from "react";
import {twMerge} from "tailwind-merge";

type ButtonProps = {
    label: string,
    variant?: 'default' | 'big';
}
export const Button: FC<ButtonProps> = ({label, variant = 'default'}) => {
    const buttonStyle = twMerge('bg-black text-white  text-center font-semibold rounded-full',
        variant === 'default' && 'text-[16px] py-2 w-full',
        variant === 'big' && 'text-[28px] w-[50%] h-(length:--text-large) content-center min-w-fit');

    return (
        <div
            className={buttonStyle}>
            <span className='px-4'>{label}</span>
        </div>
    );
};
