import React from "react";
import { HopperProvider } from "@hopper-ui/components";

export default function FrameComponent({ theme, children }) {
    return <HopperProvider
        colorScheme={theme}
        color="neutral"
        backgroundColor="neutral"
        fontFamily="body-md"
        fontSize="body-md"
        lineHeight="body-md"
        margin={0}
        padding={0}
    >
        {children}
    </HopperProvider>;
}
