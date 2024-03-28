import { Suspense } from "react";
import Tabs from "@/components/tabs/Tabs.tsx";
import ComponentWrapper from "@/app/ui/components/previewComponent/ComponentWrapper.tsx";
import { CodeBlock } from "@/app/ui/components/codeBlock/CodeBlock.tsx";
import PreviewSkeleton from "@/app/ui/components/previewComponent/PreviewSkeleton.tsx";

import "./previewComponent.css";

export interface PreviewComponentProps {
    filePath: string;
}

const tabsConfig = [
    { category: "preview", title: "Preview" },
    { category: "code", title: "Code" }
    // { category: "playground", title: "Playground" }
];

const PreviewComponent = async ({ filePath }: PreviewComponentProps) => {
    if (!filePath) {
        return null;
    }

    return (
        <div className="hd-preview-component">

            <Tabs tabs={tabsConfig}>
                <ComponentWrapper className="hd-preview-component__content"
                    filePath={filePath}
                />

                <Suspense fallback={<PreviewSkeleton />}>
                    <CodeBlock filePath={filePath} />
                </Suspense>

                {/*<PlaygroundWrapper key="playground" />*/}
            </Tabs>
        </div>
    );
};

export default PreviewComponent;
