import { Suspense } from "react";
import Tabs from "@/components/tabs/Tabs.tsx";
import ComponentWrapper from "@/app/ui/components/previewComponent/ComponentWrapper.tsx";
import CodeWrapper from "@/app/ui/components/previewComponent/CodeWrapper.tsx";
import PreviewSkeleton from "@/app/ui/components/previewComponent/PreviewSkeleton.tsx";

import "./previewComponent.css";

interface PreviewComponentProps {
    name: string;
}

const tabsConfig = [
    { category: "preview", title: "Preview" },
    { category: "code", title: "Code" }
    // { category: "playground", title: "Playground" }
];

const PreviewComponent = ({ name }: PreviewComponentProps) => {
    if (!name) {
        return null;
    }

    return (
        <div className="hd-preview-component">
            <Tabs tabs={tabsConfig}>

                <ComponentWrapper className="hd-preview-component__content" name={name} />

                <Suspense fallback={<PreviewSkeleton />}>
                    <CodeWrapper name={name} />
                </Suspense>

                {/*<PlaygroundWrapper key="playground" />*/}
            </Tabs>
        </div>
    );
};

export default PreviewComponent;
