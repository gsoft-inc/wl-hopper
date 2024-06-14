import Tabs from "@/components/tabs/Tabs.tsx";

import { getComponentCode } from "@/app/lib/getComponentCode.ts";
import ComponentExample from "@/app/ui/components/componentExample/ComponentExample.tsx";

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

    const code = await getComponentCode(src);

    return (
        <div className="hd-preview-component">

            <Tabs tabs={tabsConfig}>
                <ComponentExample type="preview" src={src} className="hd-preview-component__content" />

                <ComponentExample type="code" code={code} />

                {/*<PlaygroundWrapper key="playground" />*/}
            </Tabs>
        </div>
    );
};

export default PreviewComponent;
