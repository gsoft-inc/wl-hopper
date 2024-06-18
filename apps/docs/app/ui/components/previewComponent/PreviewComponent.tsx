import { useMemo } from "react";
import Tabs from "@/components/tabs/Tabs.tsx";

import ComponentExample from "@/app/ui/components/componentExample/ComponentExample.tsx";

import "./previewComponent.css";

export interface PreviewComponentProps {
    src: string;
    preview?: React.ReactNode;
    code?: React.ReactNode;
}

const tabsConfig = [
    { category: "preview", title: "Preview" },
    { category: "code", title: "Code" }
    // { category: "playground", title: "Playground" }
];

const PreviewComponent = async ({ src, preview, code }: PreviewComponentProps) => {
    const PreviewComponentExample = useMemo(() => <ComponentExample type="preview"
        src={src}
        preview={preview}
        className="hd-preview-component__content"
    />, [src, preview]);
    const CodeComponentExample = useMemo(() => <ComponentExample type="code" src={src} code={code} />, [src, code]);

    if (!src) {
        return null;
    }

    return (
        <div className="hd-preview-component">

            <Tabs tabs={tabsConfig}>
                {PreviewComponentExample}
                {CodeComponentExample}

                {/*<PlaygroundWrapper key="playground" />*/}
            </Tabs>
        </div>
    );
};

export default PreviewComponent;
