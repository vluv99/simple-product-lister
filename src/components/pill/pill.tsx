import { FC } from "react";
import { twMerge } from 'tailwind-merge'

type PillProps = {
    text: string;
    variant?: 'default' | 'big';
}
export const Pill:FC<PillProps> = ({text, variant = 'default'}) => {
    const pillStyle = twMerge('bg-accent text-white font-semibold rounded-full max-w-fit',
        variant === 'default' && 'text-[14px] px-4 py-1',
        variant === 'big' && 'text-[20px] px-6 py-1.5');
    return (
        <div className={pillStyle}>
            {text}
        </div>
    );
};
