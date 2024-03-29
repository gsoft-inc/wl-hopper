import { Div, getSizingValue } from "@hopper-ui/styled-system";
import type { UNSAFE_SizingValue, DivProps, CssGrid } from "@hopper-ui/styled-system";
import { forwardRef, type Ref } from "react";

export interface GridProps extends
    Omit<DivProps,
    "display"
    | "gridAutoRows"
    | "gridTemplateAreas"
    | "gridTemplateColumns"
    | "gridTemplateRows"
    | "gridAutoColumns"
    | "gridAutoFlow"
    | "UNSAFE_gridAutoRows"
    | "UNSAFE_gridTemplateColumns"
    | "UNSAFE_gridTemplateRows"
    | "UNSAFE_gridAutoColumns"
    > {
    /**
     * Whether or not the element generate line breaks before or after himself.
     */
    inline?: boolean;

    /**
     * An alias for the css grid-auto-rows property.
     */
    autoRows?: DivProps["gridAutoRows"];

    /**
     * An alias for the css grid-template-areas property.
     */
    areas?: DivProps["gridTemplateAreas"];

    /**
     * An alias for the css grid-template-columns property.
     */
    templateColumns?: DivProps["gridTemplateColumns"];

    /**
     * An alias for the css grid-template-rows property.
     */
    templateRows?: DivProps["gridTemplateRows"];

    /**
     * An alias for the css grid-auto-columns property.
     */
    autoColumns?: DivProps["gridAutoColumns"];

    /**
     * An alias for the css grid-auto-flow property.
     */
    autoFlow?: DivProps["gridAutoFlow"];

    /**
     * An alias for the css grid-auto-rows property.
     */
    UNSAFE_autoRows?: DivProps["UNSAFE_gridAutoRows"];

    /**
     * An alias for the css grid-template-columns property.
     */
    UNSAFE_templateColumns?: DivProps["UNSAFE_gridTemplateColumns"];

    /**
     * An alias for the css grid-template-rows property.
     */
    UNSAFE_templateRows?: DivProps["UNSAFE_gridTemplateRows"];

    /**
     * An alias for the css grid-auto-columns property.
     */
    UNSAFE_autoColumns?: DivProps["UNSAFE_gridAutoColumns"];
}

function Grid(props: GridProps, ref: Ref<HTMLDivElement>) {
    const {
        autoRows,
        areas,
        templateColumns,
        templateRows,
        autoColumns,
        autoFlow,
        inline,
        UNSAFE_autoRows,
        UNSAFE_templateColumns,
        UNSAFE_templateRows,
        UNSAFE_autoColumns,
        ...otherProps
    } = props;

    return (
        <Div
            ref={ref}
            display={inline ? "inline-grid" : "grid"}
            gridAutoRows={autoRows}
            gridTemplateAreas={areas}
            gridTemplateColumns={templateColumns}
            gridTemplateRows={templateRows}
            gridAutoColumns={autoColumns}
            gridAutoFlow={autoFlow}
            UNSAFE_gridAutoRows={UNSAFE_autoRows}
            UNSAFE_gridTemplateColumns={UNSAFE_templateColumns}
            UNSAFE_gridTemplateRows={UNSAFE_templateRows}
            UNSAFE_gridAutoColumns={UNSAFE_autoColumns}
            {...otherProps}
        />
    );
}

/**
 * Can be used to make a repeating fragment of the columns or rows list.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat).
 * @param count - The number of times to repeat the fragment.
 * @param repeat - The fragment to repeat.
 */
export function repeat(count: number | "auto-fill" | "auto-fit", repetition: UNSAFE_SizingValue | UNSAFE_SizingValue[]) {
    return `repeat(${count}, ${Array.isArray(repetition) ? interpolateGridTemplateArray(repetition) : getSizingValue(repetition)})` as CssGrid;
}


/**
 * Defines a size range greater than or equal to min and less than or equal to max.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax).
 * @param min - The minimum size.
 * @param max - The maximum size.
 */
export function minmax(min: UNSAFE_SizingValue, max: UNSAFE_SizingValue) {
    return `minmax(${getSizingValue(min)}, ${getSizingValue(max)})` as CssGrid;
}

/**
 * Clamps a given size to an available size.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content).
 * @param dimension - The size to clamp.
 */
export function fitContent(dimension: UNSAFE_SizingValue) {
    return `fit-content(${getSizingValue(dimension)})` as CssGrid;
}

function interpolateGridTemplateArray(values: UNSAFE_SizingValue[]) {
    return values.map(x => getSizingValue(x)).join(" ");
}

/**
 * The Grid component is used to create a grid container and provides some shortcuts for the grid properties.
 *
 * [View Documentation](TODO)
 */
const _Grid = forwardRef<HTMLDivElement, GridProps>(Grid);
_Grid.displayName = "Inline";

export { _Grid as Grid };
