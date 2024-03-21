"use client";

import dynamic from "next/dynamic";
import { StyledSystemProvider } from "@hopper-ui/styled-system";
import { Sandpack, SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";

const PreviewComponent = ({ name } : { name: string }) => {
    if (!name) {return null;}

    const Component = dynamic(() => import((`../../../../packages/components/src/${name}.tsx`)), {
        ssr: false,
        loading: () => <p>Loading...</p>
    });

    return (
        <StyledSystemProvider colorScheme="light">
            <Component />
            {/*<SandpackProvider*/}
            {/*    options={{*/}
            {/*        initMode: "user-visible",*/}
            {/*        initModeObserverOptions: { rootMargin: `1000px 0px` }*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <SandpackLayout>*/}
            {/*        <SandpackPreview />*/}
            {/*    </SandpackLayout>*/}
            {/*</SandpackProvider>*/}
        </StyledSystemProvider>
    );
};

export default PreviewComponent;
