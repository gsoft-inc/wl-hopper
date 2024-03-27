"use client";

import { SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";

interface PlaygroundWrapperProps {
    className: string;
}

const PlaygroundWrapper = ({ className }: PlaygroundWrapperProps) => {
    return (
        <div className={className}>
            <SandpackProvider
                options={{
                    initMode: "user-visible",
                    initModeObserverOptions: { rootMargin: "1000px 0px" }
                }}
            >
                <SandpackLayout>
                    <SandpackPreview />
                </SandpackLayout>
            </SandpackProvider>
        </div>
    );
};

export default PlaygroundWrapper;
