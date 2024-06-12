"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { StyledSystemProvider, type ColorSchemeOrSystem } from "@hopper-ui/styled-system";
import PreviewSkeleton from "@/app/ui/components/previewComponent/PreviewSkeleton.tsx";

interface ExampleProps {
    src: string;
    colorScheme: ColorSchemeOrSystem;
}

const Example = ({ src, colorScheme }: ExampleProps) => {
    const DynamicComponent = useMemo(() => dynamic(() => import(`../../../../../../packages/components/src/${src}.tsx`), {
        ssr: false,
        loading: () => <PreviewSkeleton overlay />
    }), [src]);

    return <StyledSystemProvider colorScheme={colorScheme}><DynamicComponent /></StyledSystemProvider>;
};

export default Example;
