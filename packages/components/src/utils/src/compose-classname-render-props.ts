import clsx, { type ClassValue } from "clsx";
import { composeRenderProps } from "react-aria-components";

export function composeClassnameRenderProps<T>(className: string | undefined | ((renderProps: T) => string), ...classes : ClassValue[]) {
    return composeRenderProps(className, prev => {
        return clsx(
            prev,
            ...classes
        );
    });
}
