import {FC, ReactNode} from "react";

type Props = {
    children: ReactNode;
};
const DashboardLayout:FC<Props> = ({children}) => {
    return (
        <>
            <main className="flex flex-col justify-center max-w-[1268px] mx-auto">{children}</main>
        </>
    );
};

export default DashboardLayout;
