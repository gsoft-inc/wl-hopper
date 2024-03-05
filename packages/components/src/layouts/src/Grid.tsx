import { Div, type DivProps, type ResponsiveProp } from "@hopper-ui/styled-system";
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
     * This also accepts an array of strings.
     */
    templateAreas?: DivProps["gridTemplateAreas"] | ResponsiveProp<string[]>;

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
}

function Grid(props: GridProps, ref: Ref<HTMLDivElement>) {
    const {
        autoRows,
        templateAreas,
        templateColumns,
        templateRows,
        autoColumns,
        autoFlow,
        inline,
        ...otherProps
    } = props;

    return (
        <Div
            ref={ref}
            display={inline ? "inline-grid" : "grid"}
            gridAutoRows={autoRows}
            gridTemplateAreas={templateAreas}
            gridTemplateColumns={templateColumns}
            gridTemplateRows={templateRows}
            gridAutoColumns={autoColumns}
            gridAutoFlow={autoFlow}
            {...otherProps}
        />
    );
}

/**
 * The Grid component is used to create a grid container and provides some shortcuts for the grid properties.
 *
 * [View Documentation](TODO)
 */
const _Grid = forwardRef<HTMLDivElement, GridProps>(Grid);
_Grid.displayName = "Inline";

export { _Grid as Grid };
