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
    if (!src) {
        return null;
    }

    return (
        <div className="hd-preview-component">

            <Tabs tabs={tabsConfig}>
                <ComponentExample type="preview" src={src} preview={preview} className="hd-preview-component__content" />

                <ComponentExample type="code" src={src} code={code} />

                {/*<PlaygroundWrapper key="playground" />*/}
            </Tabs>
        </div>
    );
};

export default PreviewComponent;
