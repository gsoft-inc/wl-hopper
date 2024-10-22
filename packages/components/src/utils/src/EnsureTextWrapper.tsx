import type { ReactNode } from "react";

import { Text } from "../../typography/index.ts";

import { isTextOnlyChildren } from "./isTextOnlyChildren.ts";

export function ensureTextWrapper(children: ReactNode): ReactNode {
    if (children && isTextOnlyChildren(children)) {
        return <Text>{children}</Text>;
    }

    return children;
}