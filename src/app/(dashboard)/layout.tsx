import {FC, ReactNode} from "react";

type Props = {
    children: ReactNode;
};
const DashboardLayout:FC<Props> = ({children}) => {
    return (
        <>
            <h1 className='font-semibold text-[48px] text-center py-12.5'>See Products</h1>
            <main className="flex justify-center">{children}</main>
        </>
    );
};

export default DashboardLayout;
