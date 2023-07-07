import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Aside } from "../../components/Aside/Aside";

export default function TokensLayout({
    children // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Sidebar />
            {children}
            <Aside />
        </>
    );
}
