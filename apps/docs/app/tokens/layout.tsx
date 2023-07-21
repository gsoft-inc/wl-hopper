import Sidebar from "@/components/ui/sidebar/Sidebar";

export default function DesignLayout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <Sidebar />
            {children}
        </>
    );
}
