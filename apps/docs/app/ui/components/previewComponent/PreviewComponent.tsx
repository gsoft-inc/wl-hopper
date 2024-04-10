import { Suspense } from "react";
import Tabs from "@/components/tabs/Tabs.tsx";
import ComponentWrapper from "@/app/ui/components/previewComponent/ComponentWrapper.tsx";
import CodeWrapper from "@/app/ui/components/previewComponent/CodeWrapper.tsx";
import PreviewSkeleton from "@/app/ui/components/previewComponent/PreviewSkeleton.tsx";

import "./previewComponent.css";

export interface PreviewComponentProps {
    src: string;
}

const tabsConfig = [
    { category: "preview", title: "Preview" },
    { category: "code", title: "Code" }
    // { category: "playground", title: "Playground" }
];

const PreviewComponent = async ({ src }: PreviewComponentProps) => {
    if (!src) {
        return null;
    }

    return (
        <div className="hd-preview-component">

            <Tabs tabs={tabsConfig}>
                <ComponentWrapper className="hd-preview-component__content"
                    src={src}
                />

                <Suspense fallback={<PreviewSkeleton />}>
                    <CodeWrapper src={src} />
                </Suspense>

                {/*<PlaygroundWrapper key="playground" />*/}
            </Tabs>
        </div>
    );
};

export default PreviewComponent;
