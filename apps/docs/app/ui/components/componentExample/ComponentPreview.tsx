"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";

import ComponentSkeleton from "./ComponentSkeleton.tsx";

import "./componentSkeleton.css";

interface ComponentPreviewProps {
    src: string;
}

const ComponentPreview = ({ src }: ComponentPreviewProps) => {
    // const DynamicComponent = useMemo(() => dynamic(() => import(`../../../../../../packages/components/src/${src}.tsx`), {
    const DynamicComponent = useMemo(() => dynamic(() => import("../../../../../../packages/components/src/buttons/docs/button/preview.tsx"), {
        ssr: false,
        loading: () => <ComponentSkeleton overlay />
    }), [src]);

    return <DynamicComponent />;
};

export default ComponentPreview;
