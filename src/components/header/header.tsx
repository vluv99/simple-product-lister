import {FC} from "react";

type Props = {
    title?: any | undefined;
}
export const Header:FC<Props> = ({title}) => {
    return (
        <h1 className='font-semibold text-[48px] text-center py-12.5'>{title}</h1>
    );
};
