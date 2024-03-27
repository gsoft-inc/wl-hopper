import dynamic from "next/dynamic";

interface CodeWrapperProps {
    name: string;
    className?: string;
}

const CodeWrapper = async ({ name, className }: CodeWrapperProps) => {
    const CodeExample = dynamic(() => import("@/app/ui/components/previewComponent/CodeExample.tsx"), {
        ssr: false
    });

    return <CodeExample className={className} name={name} />;
};

export default CodeWrapper;
