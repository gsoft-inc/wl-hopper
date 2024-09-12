import type { AriaLabelingProps, DOMProps as SharedDOMProps } from "@react-types/shared";
import type { CSSProperties, ReactNode } from "react";
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
    className?: string | ((values: T & { defaultClassName: string | undefined }) => string);
    /** The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state. */
    style?: CSSProperties | ((values: T & { defaultStyle: CSSProperties }) => CSSProperties);
}

export interface RenderProps<T> extends StyleRenderProps<T> {
    /** The children of the component. A function may be provided to alter the children based on component state. */
    children?: ReactNode | ((values: T & { defaultChildren: ReactNode | undefined }) => ReactNode);
}

export interface RenderPropsHookOptions<T> extends RenderProps<T>, SharedDOMProps, AriaLabelingProps {
    values: T;
    defaultChildren?: ReactNode;
    defaultClassName?: string;
    defaultStyle?: CSSProperties;
}

// TODO: i added this, not sure if it will make sense
export interface BaseComponentProps extends DOMProps, AriaLabelingProps, SlotProps {

}

// TODO: For a incremental transition, we can start with this
export interface RenderComponentProps<T> extends RenderProps<T>, AriaLabelingProps, SlotProps {

}

/** Added these for when we need to force an interactive state like for radios inside list box items */
export interface InteractionProps {
    /**
     * Whether or not the component is currently pressed.
     */
    isPressed?: boolean;
    /**
     * Whether or not the component is currently focused.
     */
    isFocused?: boolean;
    /**
     * Whether or not the component is currently focus visible.
     */
    isFocusVisible?: boolean;
    /**
     * Whether or not the component is currently hovered.
     */
    isHovered?: boolean;
    /**
     * Whether or not the component is currently selected.
     */
    isSelected?: boolean;
    /**
     * Whether or not the component is currently disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether or not the component is currently read-only.
     */
    isReadOnly?: boolean;
    /**
     * Whether or not the component is currently invalid.
     */
    isInvalid?: boolean;
    /**
     * Whether or not the component is currently required.
     */
    isRequired?: boolean;
}
