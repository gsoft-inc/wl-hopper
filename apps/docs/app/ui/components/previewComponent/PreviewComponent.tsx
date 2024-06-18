import { useMemo } from "react";
import Tabs from "@/components/tabs/Tabs.tsx";

import ComponentExample from "@/app/ui/components/componentExample/ComponentExample.tsx";

import "./previewComponent.css";

export interface PreviewComponentProps {
    preview?: React.ReactNode;
    code?: React.ReactNode;
}

const tabsConfig = [
    { category: "preview", title: "Preview" },
    { category: "code", title: "Code" }
    // { category: "playground", title: "Playground" }
];

const PreviewComponent = async ({ preview, code }: PreviewComponentProps) => {
    const PreviewComponentExample = useMemo(() => <ComponentExample type="preview"
        preview={preview}
        className="hd-preview-component__content"
    />, [preview]);
    const CodeComponentExample = useMemo(() => <ComponentExample type="code" code={code} />, [code]);

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
