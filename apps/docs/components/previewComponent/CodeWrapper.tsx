import dynamic from "next/dynamic";
import clsx from "clsx";

const CodeWrapper = async ({ name, key, className }: { name: string; key: string; className?: string }) => {
    const CodeExample = dynamic(() => import("@/components/previewComponent/CodeExample.tsx"), {
        ssr: false
    });

    return <CodeExample className={clsx(className)} name={name} key={key} />;
};

export default CodeWrapper;
