import { type ReactNode, useEffect } from "react";

interface DisableAnimationsProps {
    children: ReactNode;
    disableAnimations?: boolean;
}

export function DisableAnimations({ children, disableAnimations }: DisableAnimationsProps) {
    useEffect(() => {
        if (disableAnimations) {
            document.body.classList.add("disableAnimations");
        } else {
            document.body.classList.remove("disableAnimations");
        }
    }, [disableAnimations]);

    return children;
}

DisableAnimations.displayName = "DisableAnimations";
