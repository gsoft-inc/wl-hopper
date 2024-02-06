import type { CSSProperties, ReactNode } from "react";
import type { DOMProps as SharedDOMProps, AriaLabelingProps } from "@react-types/shared";
import type { SlotProps } from "react-aria-components";

/**
 * Taken from https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/utils.tsx
 */


export interface StyleProps {
    /** The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. */
    className?: string;
    /** The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. */
    style?: CSSProperties;
}

export interface DOMProps extends StyleProps, SharedDOMProps {
    /** The children of the component. */
    children?: ReactNode;
}

export interface StyleRenderProps<T> {
    /** The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state. */
    className?: string | ((values: T) => string);
    /** The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state. */
    style?: CSSProperties | ((values: T) => CSSProperties);
}
export interface RenderProps<T> extends StyleRenderProps<T> {
    /** The children of the component. A function may be provided to alter the children based on component state. */
    children?: ReactNode | ((values: T) => ReactNode);
}

// TODO: i added this, not sure if it will make sense
export interface BaseComponentProps extends DOMProps, AriaLabelingProps, SlotProps{

}
