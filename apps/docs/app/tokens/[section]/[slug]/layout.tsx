import Sidebar from "@/components/ui/sidebar/Sidebar";

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
