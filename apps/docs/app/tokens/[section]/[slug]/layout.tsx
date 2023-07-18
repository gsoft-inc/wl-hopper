import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function TokensLayout({
    children // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Sidebar />
            {children}
        </>
    );
}
