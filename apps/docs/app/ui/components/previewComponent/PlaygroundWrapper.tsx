"use client";

import clsx from "clsx";

import { SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";

const PlaygroundWrapper = ({ key, className }: { key: string; className?: string }) => {
    return (
        <div className={clsx(className)} key={key}>
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
