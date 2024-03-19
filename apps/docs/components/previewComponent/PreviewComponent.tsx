"use client";

import dynamic from "next/dynamic";
import { StyledSystemProvider } from "@hopper-ui/styled-system";

const PreviewComponent = ({ name } : { name: string }) => {
    if (!name) return null;

    const Component = dynamic(() => import((`../../../../packages/components/src/${name}.tsx`)), {
        ssr: false,
        loading: () => <p>Loading...</p>,
    });
    return (
        <StyledSystemProvider colorScheme="light">
            <Component />
        </StyledSystemProvider>
    );
}

export default PreviewComponent;
