import { ComponentCodeWrapper } from "@/app/ui/components/componentExample/ComponentCodeWrapper.tsx";
import ComponentPreview from "@/app/ui/components/componentExample/ComponentPreview.tsx";
import PreviewComponent from "@/app/ui/components/previewComponent/PreviewComponent.tsx";
import ComponentExample from "@/app/ui/components/componentExample/ComponentExample.tsx";

export interface ComponentExampleWrapperProps {
    src: string;
    type?: "preview" | "example";
}

const ComponentExampleWrapper = ({ src, type = "example" }: ComponentExampleWrapperProps) => {
    if (!src) {
        return null;
    }

    if (type === "preview") {
        return <PreviewComponent
            code={<ComponentCodeWrapper src={src} />}
            preview={<ComponentPreview src={src} />}
        />;
    }

    return <ComponentExample
        type="both"
        code={<ComponentCodeWrapper src={src} />}
        preview={<ComponentPreview src={src} />}
    />;
};

export default ComponentExampleWrapper;
