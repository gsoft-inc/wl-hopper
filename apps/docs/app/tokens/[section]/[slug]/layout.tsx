import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Aside } from "@/components/Aside/Aside";

const links = [
    { title: "Link 1", url: "#link1", id: "1" },
    { title: "Link 2", url: "#link2", id: "2" },
    { title: "Link 3", url: "#link3", id: "3" }
];

export default function TokensLayout({
    children // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Sidebar />
            {children}
            <Aside title="Contents" links={links} />
        </>
    );
}
