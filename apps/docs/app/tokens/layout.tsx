import { allTokens } from "contentlayer/generated";
import Sidebar from "@/components/ui/sidebar/Sidebar";

export default function TokenLayout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <Sidebar data={allTokens} />
            {children}
        </>
    );
}
