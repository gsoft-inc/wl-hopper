import Sidebar from "@/components/ui/sidebar/Sidebar";

export default function TokenLayout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <Sidebar />
            {children}
        </>
    );
}
