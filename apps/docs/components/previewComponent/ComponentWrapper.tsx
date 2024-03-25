"use client";

import dynamic from "next/dynamic";
import { StyledSystemProvider } from "@hopper-ui/styled-system";
import Card from "@/components/card/Card.tsx";
import PreviewSkeleton from "@/components/previewComponent/PreviewSkeleton.tsx";

const ComponentWrapper = ({ key, className, name }: {
    key: string;
    className: string;
    name: string;
}) => {
    const DynamicComponent = dynamic(() => import(`../../../../packages/components/src/${name}.tsx`), {
        ssr: false,
        loading: () => <PreviewSkeleton overlay />
    });

    return (
        <StyledSystemProvider colorScheme="light" key={key}>
            <Card className={className} key={key} size="sm">
                <DynamicComponent />
            </Card>
        </StyledSystemProvider>
    );
};

export default ComponentWrapper;
