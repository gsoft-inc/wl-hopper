"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { StyledSystemProvider, type ColorSchemeOrSystem } from "@hopper-ui/styled-system";

import ComponentSkeleton from "./ComponentSkeleton.tsx";

import "./componentSkeleton.css";

interface ComponentPreviewProps {
    src: string;
    colorScheme: ColorSchemeOrSystem;
}

const ComponentPreview = ({ src, colorScheme }: ComponentPreviewProps) => {
    const DynamicComponent = useMemo(() => dynamic(() => import(`../../../../../../packages/components/src/${src}.tsx`), {
        ssr: false,
        loading: () => <ComponentSkeleton overlay />
    }), [src]);

    return <StyledSystemProvider colorScheme={colorScheme}><DynamicComponent /></StyledSystemProvider>;
};

export default ComponentPreview;
