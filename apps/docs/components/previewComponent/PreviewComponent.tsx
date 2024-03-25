import { Suspense } from "react";
import Tabs from "@/components/tabs/Tabs.tsx";
import ComponentWrapper from "@/components/previewComponent/ComponentWrapper.tsx";
import PlaygroundWrapper from "@/components/previewComponent/PlaygroundWrapper.tsx";
import CodeWrapper from "@/components/previewComponent/CodeWrapper.tsx";
import PreviewSkeleton from "@/components/previewComponent/PreviewSkeleton.tsx";

import "./previewComponent.css";

const tabsConfig = [
    { category: "preview", title: "Preview" },
    { category: "code", title: "Code" },
    { category: "playground", title: "Playground" }
];

const PreviewComponent = ({ name }: { name: string }) => {
    if (!name) {
        return null;
    }


    return (
        <div className="hd-preview-component">
            <Tabs tabs={tabsConfig}>

                <ComponentWrapper className="hd-preview-component__content" key="preview" name={name} />

                <Suspense fallback={<PreviewSkeleton />}>
                    <CodeWrapper name={name} key="code" />
                </Suspense>

                <PlaygroundWrapper key="playground" />
            </Tabs>
        </div>
    );
};

export default PreviewComponent;
