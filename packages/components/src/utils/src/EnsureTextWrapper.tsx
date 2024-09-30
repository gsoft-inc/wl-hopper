import type { ReactNode } from "react";

import { Text } from "../../typography/index.ts";

import { isTextOnlyChildren } from "./isTextOnlyChildren.ts";

interface EnsureTextWrapperProps {
    children: ReactNode;
}

export const EnsureTextWrapper = ({ children }: EnsureTextWrapperProps) => {
    return children && isTextOnlyChildren(children) ? <Text>{children}</Text> : <>{children}</>;
};
