import { type CSSProperties, useMemo } from "react";
import { isNil } from "../core-external-package/assertion.tsx";
import { StylingContext } from "./styling-context.ts";
import { parseResponsiveValue } from "../useResponsiveValue.tsx";
import {
    ColorExpressionTypes,
    DefaultBorderWidthAndStyle,
    parseResponsiveSystemValue,
    BackgroundColorMapping,
    BorderMapping,
    BorderRadiusMapping,
    BoxShadowMapping,
    FontSizeMapping,
    FontWeightMapping,
    IconColorMapping,
    LineHeightMapping,
    SizingMapping,
    SpacingMapping,
    TextColorMapping
} from "./css-variable-mappings.ts";
import { type StyledSystemProps, UnsafePrefix } from "./styled-system-props.ts";
import { useBreakpointContext } from "../BreakpointProvider.tsx";

type PropHandler = (name: string, value: string | number, context: StylingContext) => void;
type SystemValues = Record<string | number, string>;

// This is a simple handler for property that only accept tokens
function createSystemValueHandler(systemValues: SystemValues): PropHandler {
    return (name, value, context) => {
        const parsedValue = parseResponsiveSystemValue(value, systemValues!, context.matchedBreakpoints);

        if (!isNil(parsedValue)) {
            context.addStyleValue(name, parsedValue);
        }
    };
}

// this is a simple handler that accept values that are directly passed to the style
function createPassthroughHandler(): PropHandler {
    return (name, value, context) => {
        const parsedValue = parseResponsiveValue(value, context.matchedBreakpoints);

        if (!isNil(parsedValue)) {
            context.addStyleValue(name, parsedValue);
        }
    };
}

// This is a simple handler for property that only accept tokens
function createAxisHandler(firstPropName: string, secondPropName: string, systemValues: SystemValues): PropHandler {
    const firstHandler = createSystemValueHandler(systemValues);
    const secondHandler = createSystemValueHandler(systemValues);

    return (_, value, context) => {
        firstHandler(firstPropName, value, context);
        secondHandler(secondPropName, value, context);
    };
}

function createPseudoHandler(pseudoClassName: string, pseudoVariable: string, systemValues?: SystemValues): PropHandler {
    const systemValueHandler: PropHandler = (name, value, context) => {
        const parsedValue = parseResponsiveSystemValue(value, systemValues!, context.matchedBreakpoints);

        if (!isNil(parsedValue)) {
            context.addClass(pseudoClassName);
            context.addStyleValue(pseudoVariable, parsedValue);
        }
    };

    const passThroughHandler: PropHandler = (name, value, context) => {
        const parsedValue = parseResponsiveValue(value, context.matchedBreakpoints);

        if (!isNil(parsedValue)) {
            context.addClass(pseudoClassName);
            context.addStyleValue(pseudoVariable, parsedValue);
        }
    };

    return !isNil(systemValues) ? systemValueHandler : passThroughHandler;
}


// Custom handler for borders to allow the following syntax:
// - border="warning-10" -> style="1px solid var(--hop-warning-10)"
// - border="hsla(223, 12%, 87%, 1)" -> style="1px solid hsla(223, 12%, 87%, 1)"
// - border="3px solid warning-10" -> style="3px solid var(--hop-warning-10)"
function createBorderHandler(systemValues: SystemValues): PropHandler {
    return (name, value, context) => {
        const parsedValue = parseResponsiveSystemValue(value, systemValues, context.matchedBreakpoints);

        if (!isNil(parsedValue)) {
            if (typeof parsedValue === "string" && ColorExpressionTypes.some(x => parsedValue.startsWith(x))) {
                context.addStyleValue(name, `${DefaultBorderWidthAndStyle} ${parsedValue}`);
            } else {
                // TODO: Add support for 3px solid warning-10
                context.addStyleValue(name, parsedValue);
            }
        }
    };
}

function createBorderPseudoHandler(pseudoClassName: string, pseudoVariable: string, systemValues: SystemValues): PropHandler {
    return (name, value, context) => {
        const parsedValue = parseResponsiveSystemValue(value, systemValues, context.matchedBreakpoints);

        if (!isNil(parsedValue)) {
            context.addClass(pseudoClassName);

            if (typeof parsedValue === "string" && ColorExpressionTypes.some(x => parsedValue.startsWith(x))) {
                context.addStyleValue(pseudoVariable, `${DefaultBorderWidthAndStyle} ${parsedValue}`);
            } else {
                context.addStyleValue(pseudoVariable, parsedValue);
            }
        }
    };
}

const gridColumnSpanHandler: PropHandler = (name, value, context) => {
    const parsedValue = parseResponsiveValue(value, context.matchedBreakpoints);

    if (!isNil(parsedValue)) {
        context.addStyleValue("gridColumn", `span ${parsedValue} / span ${parsedValue}`);
    }
};

const gridRowSpanHandler: PropHandler = (name, value, context) => {
    const parsedValue = parseResponsiveValue(value, context.matchedBreakpoints);

    if (!isNil(parsedValue)) {
        context.addStyleValue("gridRow", `span ${parsedValue} / span ${parsedValue}`);
    }
};

const PropsHandlers: Record<string, PropHandler> = {
    alignContent: createPassthroughHandler(),
    alignItems: createPassthroughHandler(),
    alignSelf: createPassthroughHandler(),
    aspectRatio: createPassthroughHandler(),
    backgroundColor: createSystemValueHandler(BackgroundColorMapping),
    backgroundColorActive: createPseudoHandler("hop-bg-active", "--hop-bg-active", BackgroundColorMapping),
    backgroundColorFocus: createPseudoHandler("hop-bg-focus", "--hop-bg-focus", BackgroundColorMapping),
    backgroundColorHover: createPseudoHandler("hop-bg-hover", "--hop-bg-hover", BackgroundColorMapping),
    backgroundImage: createPassthroughHandler(),
    backgroundPosition: createPassthroughHandler(),
    backgroundRepeat: createPassthroughHandler(),
    backgroundSize: createPassthroughHandler(),
    border: createBorderHandler(BorderMapping),
    borderBottom: createBorderHandler(BorderMapping),
    borderBottomActive: createBorderPseudoHandler("hop-bb-active", "--hop-bb-active", BorderMapping),
    borderBottomFocus: createBorderPseudoHandler("hop-bb-focus", "--hop-bb-focus", BorderMapping),
    borderBottomHover: createBorderPseudoHandler("hop-bb-hover", "--hop-bb-hover", BorderMapping),
    borderBottomLeftRadius: createSystemValueHandler(BorderRadiusMapping),
    borderBottomRightRadius: createSystemValueHandler(BorderRadiusMapping),
    borderActive: createBorderPseudoHandler("hop-b-active", "--hop-b-active", BorderMapping),
    borderFocus: createBorderPseudoHandler("hop-b-focus", "--hop-b-focus", BorderMapping),
    borderHover: createBorderPseudoHandler("hop-b-hover", "--hop-b-hover", BorderMapping),
    borderLeft: createBorderHandler(BorderMapping),
    borderLeftActive: createBorderPseudoHandler("hop-bl-active", "--hop-bl-active", BorderMapping),
    borderLeftFocus: createBorderPseudoHandler("hop-bl-focus", "--hop-bl-focus", BorderMapping),
    borderLeftHover: createBorderPseudoHandler("hop-bl-hover", "--hop-bl-hover", BorderMapping),
    borderRadius: createSystemValueHandler(BorderRadiusMapping),
    borderRight: createBorderHandler(BorderMapping),
    borderRightActive: createBorderPseudoHandler("hop-br-active", "--hop-br-active", BorderMapping),
    borderRightFocus: createBorderPseudoHandler("hop-br-focus", "--hop-br-focus", BorderMapping),
    borderRightHover: createBorderPseudoHandler("hop-br-hover", "--hop-br-hover", BorderMapping),
    borderTop: createBorderHandler(BorderMapping),
    borderTopActive: createBorderPseudoHandler("hop-bt-active", "--hop-bt-active", BorderMapping),
    borderTopFocus: createBorderPseudoHandler("hop-bt-focus", "--hop-bt-focus", BorderMapping),
    borderTopHover: createBorderPseudoHandler("hop-bt-hover", "--hop-bt-hover", BorderMapping),
    borderTopLeftRadius: createSystemValueHandler(BorderRadiusMapping),
    borderTopRightRadius: createSystemValueHandler(BorderRadiusMapping),
    bottom: createPassthroughHandler(),
    boxShadow: createSystemValueHandler(BoxShadowMapping),
    boxShadowActive: createPseudoHandler("hop-bs-active", "--hop-bs-active", BoxShadowMapping),
    boxShadowFocus: createPseudoHandler("hop-bs-focus", "--hop-bs-focus", BoxShadowMapping),
    boxShadowHover: createPseudoHandler("hop-bs-hover", "--hop-bs-hover", BoxShadowMapping),
    color: createSystemValueHandler(TextColorMapping),
    colorActive: createPseudoHandler("hop-c-active", "--hop-c-active", TextColorMapping),
    colorFocus: createPseudoHandler("hop-c-focus", "--hop-c-focus", TextColorMapping),
    colorHover: createPseudoHandler("hop-c-hover", "--hop-c-hover", TextColorMapping),
    columnGap: createSystemValueHandler(SpacingMapping),
    content: createPassthroughHandler(),
    contentVisibility: createPassthroughHandler(),
    cursor: createPassthroughHandler(),
    cursorHover: createPseudoHandler("hop-cs-hover", "--hop-cs-hover"),
    display: createPassthroughHandler(),
    fill: createSystemValueHandler(IconColorMapping),
    fillFocus: createPseudoHandler("hop-f-focus", "--hop-f-focus", IconColorMapping),
    fillHover: createPseudoHandler("hop-f-hover", "--hop-f-hover", IconColorMapping),
    filter: createPassthroughHandler(),
    flex: createPassthroughHandler(),
    flexBasis: createPassthroughHandler(),
    flexDirection: createPassthroughHandler(),
    flexFlow: createPassthroughHandler(),
    flexGrow: createPassthroughHandler(),
    flexShrink: createPassthroughHandler(),
    flexWrap: createPassthroughHandler(),
    fontSize: createSystemValueHandler(FontSizeMapping),
    fontStyle: createPassthroughHandler(),
    fontWeight: createSystemValueHandler(FontWeightMapping), // TODO: In Orbit, we used font-variations-settings for font weight, but it's not required in hopper
    gap: createSystemValueHandler(SpacingMapping),
    grid: createPassthroughHandler(),
    gridArea: createPassthroughHandler(),
    gridAutoColumns: createSystemValueHandler(SizingMapping),
    gridAutoFlow: createPassthroughHandler(),
    gridAutoRows: createSystemValueHandler(SizingMapping),
    gridColumn: createPassthroughHandler(),
    gridColumnEnd: createPassthroughHandler(),
    gridColumnSpan: gridColumnSpanHandler,
    gridColumnStart: createPassthroughHandler(),
    gridRow: createPassthroughHandler(),
    gridRowEnd: createPassthroughHandler(),
    gridRowSpan: gridRowSpanHandler,
    gridRowStart: createPassthroughHandler(),
    gridTemplate: createPassthroughHandler(),
    gridTemplateAreas: createPassthroughHandler(),
    gridTemplateColumns: createSystemValueHandler(SizingMapping),
    gridTemplateRows: createSystemValueHandler(SizingMapping),
    height: createSystemValueHandler(SizingMapping),
    justifyContent: createPassthroughHandler(),
    justifyItems: createPassthroughHandler(),
    justifySelf: createPassthroughHandler(),
    left: createPassthroughHandler(),
    letterSpacing: createPassthroughHandler(),
    lineHeight: createSystemValueHandler(LineHeightMapping),
    margin: createSystemValueHandler(SpacingMapping),
    marginBottom: createSystemValueHandler(SpacingMapping),
    marginLeft: createSystemValueHandler(SpacingMapping),
    marginRight: createSystemValueHandler(SpacingMapping),
    marginTop: createSystemValueHandler(SpacingMapping),
    marginX: createAxisHandler("marginLeft", "marginRight", SpacingMapping),
    marginY: createAxisHandler("marginBottom", "marginTop", SpacingMapping),
    maxHeight: createSystemValueHandler(SizingMapping),
    maxWidth: createSystemValueHandler(SizingMapping),
    minHeight: createSystemValueHandler(SizingMapping),
    minWidth: createSystemValueHandler(SizingMapping),
    objectFit: createPassthroughHandler(),
    objectPosition: createPassthroughHandler(),
    opacity: createPassthroughHandler(),
    opacityActive: createPseudoHandler("hop-o-active", "hop-o-active"),
    opacityFocus: createPseudoHandler("hop-o-focus", "hop-o-focus"),
    opacityHover: createPseudoHandler("hop-o-hover", "hop-o-hover"),
    order: createPassthroughHandler(),
    outline: createPassthroughHandler(),
    outlineFocus: createPseudoHandler("hop-ol-focus", "hop-ol-focus"),
    overflow: createPassthroughHandler(),
    overflowX: createPassthroughHandler(),
    overflowY: createPassthroughHandler(),
    padding: createSystemValueHandler(SpacingMapping),
    paddingBottom: createSystemValueHandler(SpacingMapping),
    paddingLeft: createSystemValueHandler(SpacingMapping),
    paddingRight: createSystemValueHandler(SpacingMapping),
    paddingTop: createSystemValueHandler(SpacingMapping),
    paddingX: createAxisHandler("paddingLeft", "paddingRight", SpacingMapping),
    paddingY: createAxisHandler("paddingBottom", "paddingTop", SpacingMapping),
    pointerEvents: createPassthroughHandler(),
    position: createPassthroughHandler(),
    resize: createPassthroughHandler(),
    right: createPassthroughHandler(),
    rowGap: createSystemValueHandler(SpacingMapping),
    stroke: createSystemValueHandler(IconColorMapping),
    textAlign: createPassthroughHandler(),
    textDecoration: createPassthroughHandler(),
    textOverflow: createPassthroughHandler(),
    textTransform: createPassthroughHandler(),
    top: createPassthroughHandler(),
    transform: createPassthroughHandler(),
    transformOrigin: createPassthroughHandler(),
    transformStyle: createPassthroughHandler(),
    verticalAlign: createPassthroughHandler(),
    visibility: createPassthroughHandler(),
    whiteSpace: createPassthroughHandler(),
    width: createSystemValueHandler(SizingMapping),
    willChange: createPassthroughHandler(),
    wordBreak: createPassthroughHandler(),
    zIndex: createPassthroughHandler()
};

export function isStyledSystemProp(name: string): name is keyof typeof PropsHandlers {
    return !isNil((PropsHandlers as Record<string, PropHandler>)[name]);
}

export function useStyledSystem<TProps extends StyledSystemProps>(props: TProps)
    : Omit<TProps, keyof StyledSystemProps> & { className?: string; style?: CSSProperties } {
    const {
        alignContent,
        alignItems,
        alignSelf,
        aspectRatio,
        backgroundColor,
        backgroundColorActive,
        backgroundColorFocus,
        backgroundColorHover,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        border,
        borderBottom,
        borderBottomActive,
        borderBottomFocus,
        borderBottomHover,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderFocus,
        borderHover,
        borderActive,
        borderLeft,
        borderLeftActive,
        borderLeftFocus,
        borderLeftHover,
        borderRadius,
        borderRight,
        borderRightActive,
        borderRightFocus,
        borderRightHover,
        borderTop,
        borderTopActive,
        borderTopFocus,
        borderTopHover,
        borderTopLeftRadius,
        borderTopRightRadius,
        bottom,
        boxShadow,
        boxShadowActive,
        boxShadowFocus,
        boxShadowHover,
        className,
        color,
        colorActive,
        colorFocus,
        colorHover,
        columnGap,
        content,
        contentVisibility,
        cursor,
        cursorHover,
        display,
        fill,
        fillFocus,
        fillHover,
        filter,
        flex,
        flexBasis,
        flexDirection,
        flexFlow,
        flexGrow,
        flexShrink,
        flexWrap,
        fontSize,
        fontStyle,
        fontWeight,
        gap,
        grid,
        gridArea,
        gridAutoColumns,
        gridAutoFlow,
        gridAutoRows,
        gridColumn,
        gridColumnEnd,
        gridColumnSpan,
        gridColumnStart,
        gridRow,
        gridRowEnd,
        gridRowSpan,
        gridRowStart,
        gridTemplate,
        gridTemplateAreas,
        gridTemplateColumns,
        gridTemplateRows,
        height,
        justifyContent,
        justifyItems,
        justifySelf,
        left,
        letterSpacing,
        lineHeight,
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginX,
        marginY,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        objectFit,
        objectPosition,
        opacity,
        opacityActive,
        opacityFocus,
        opacityHover,
        order,
        outline,
        outlineFocus,
        overflow,
        overflowX,
        overflowY,
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingX,
        paddingY,
        pointerEvents,
        position,
        resize,
        right,
        rowGap,
        stroke,
        style,
        textAlign,
        textDecoration,
        textOverflow,
        textTransform,
        top,
        transition,
        transform,
        transformOrigin,
        transformStyle,
        verticalAlign,
        visibility,
        whiteSpace,
        width,
        willChange,
        wordBreak,
        zIndex,
        UNSAFE_backgroundColor,
        UNSAFE_backgroundColorActive,
        UNSAFE_backgroundColorFocus,
        UNSAFE_backgroundColorHover,
        UNSAFE_border,
        UNSAFE_borderActive,
        UNSAFE_borderBottom,
        UNSAFE_borderBottomActive,
        UNSAFE_borderBottomFocus,
        UNSAFE_borderBottomHover,
        UNSAFE_borderBottomLeftRadius,
        UNSAFE_borderBottomRightRadius,
        UNSAFE_borderFocus,
        UNSAFE_borderHover,
        UNSAFE_borderLeft,
        UNSAFE_borderLeftActive,
        UNSAFE_borderLeftFocus,
        UNSAFE_borderLeftHover,
        UNSAFE_borderRadius,
        UNSAFE_borderRight,
        UNSAFE_borderRightActive,
        UNSAFE_borderRightFocus,
        UNSAFE_borderRightHover,
        UNSAFE_borderTop,
        UNSAFE_borderTopActive,
        UNSAFE_borderTopFocus,
        UNSAFE_borderTopHover,
        UNSAFE_borderTopLeftRadius,
        UNSAFE_borderTopRightRadius,
        UNSAFE_boxShadow,
        UNSAFE_color,
        UNSAFE_columnGap,
        UNSAFE_fill,
        UNSAFE_fontSize,
        UNSAFE_fontWeight,
        UNSAFE_gap,
        UNSAFE_gridAutoColumns,
        UNSAFE_gridAutoRows,
        UNSAFE_gridTemplateColumns,
        UNSAFE_gridTemplateRows,
        UNSAFE_height,
        UNSAFE_lineHeight,
        UNSAFE_margin,
        UNSAFE_marginBottom,
        UNSAFE_marginLeft,
        UNSAFE_marginRight,
        UNSAFE_marginTop,
        UNSAFE_marginX,
        UNSAFE_marginY,
        UNSAFE_maxHeight,
        UNSAFE_maxWidth,
        UNSAFE_minHeight,
        UNSAFE_minWidth,
        UNSAFE_padding,
        UNSAFE_paddingBottom,
        UNSAFE_paddingLeft,
        UNSAFE_paddingRight,
        UNSAFE_paddingTop,
        UNSAFE_paddingX,
        UNSAFE_paddingY,
        UNSAFE_rowGap,
        UNSAFE_stroke,
        UNSAFE_width,
        ...rest
    } = props;

    const { matchedBreakpoints } = useBreakpointContext();

    // TODO: We should measure the improvement made by this useMemo. This introduces a lot of complexity in the maintenance and it might not be worth it.

    // We don't have to add "props" as a dependency because useStyledSystem return the "rest" which is all the props that are not already a dependency
    // of this memoization. If we do add props, the memoization will refresh on every render, which is bad, so don't do it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    /* eslint-disable react-hooks/exhaustive-deps */
    const styling = useMemo(() => {
        const context = new StylingContext(className, style, matchedBreakpoints);

        Object.keys(props).forEach(key => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const value = (props as Record<string, any>)[key];

            if (!isNil(value)) {
                const handler = PropsHandlers[key] ?? PropsHandlers[key.replace(UnsafePrefix, "")];

                if (!isNil(handler)) {
                    handler(key, value, context);
                }
            }
        });

        return context.computeStyling();
    }, [
        alignContent,
        alignItems,
        alignSelf,
        aspectRatio,
        backgroundColor,
        backgroundColorActive,
        backgroundColorFocus,
        backgroundColorHover,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        border,
        borderBottom,
        borderBottomActive,
        borderBottomFocus,
        borderBottomHover,
        borderLeft,
        borderLeftActive,
        borderLeftFocus,
        borderLeftHover,
        borderRight,
        borderRightActive,
        borderRightFocus,
        borderRightHover,
        borderTop,
        borderTopActive,
        borderTopFocus,
        borderTopHover,
        borderActive,
        borderFocus,
        borderHover,
        borderRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderTopLeftRadius,
        borderTopRightRadius,
        boxShadow,
        boxShadowActive,
        boxShadowFocus,
        boxShadowHover,
        bottom,
        matchedBreakpoints,
        className,
        color,
        colorActive,
        colorFocus,
        colorHover,
        columnGap,
        content,
        contentVisibility,
        cursor,
        cursorHover,
        display,
        fill,
        fillFocus,
        fillHover,
        filter,
        flex,
        flexBasis,
        flexDirection,
        flexFlow,
        flexGrow,
        flexShrink,
        flexWrap,
        fontSize,
        fontStyle,
        fontWeight,
        gap,
        grid,
        gridArea,
        gridAutoColumns,
        gridAutoFlow,
        gridAutoRows,
        gridColumn,
        gridColumnEnd,
        gridColumnSpan,
        gridColumnStart,
        gridRow,
        gridRowEnd,
        gridRowSpan,
        gridRowStart,
        gridTemplate,
        gridTemplateAreas,
        gridTemplateColumns,
        gridTemplateRows,
        height,
        justifyContent,
        justifyItems,
        justifySelf,
        left,
        letterSpacing,
        lineHeight,
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginX,
        marginY,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        objectFit,
        objectPosition,
        opacity,
        opacityActive,
        opacityFocus,
        opacityHover,
        order,
        outline,
        outlineFocus,
        overflow,
        overflowX,
        overflowY,
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingX,
        paddingY,
        pointerEvents,
        position,
        resize,
        right,
        rowGap,
        stroke,
        style,
        textAlign,
        textDecoration,
        textOverflow,
        textTransform,
        top,
        transition,
        transform,
        transformOrigin,
        transformStyle,
        verticalAlign,
        visibility,
        whiteSpace,
        width,
        willChange,
        wordBreak,
        zIndex,
        UNSAFE_backgroundColor,
        UNSAFE_backgroundColorActive,
        UNSAFE_backgroundColorFocus,
        UNSAFE_backgroundColorHover,
        UNSAFE_border,
        UNSAFE_borderActive,
        UNSAFE_borderBottom,
        UNSAFE_borderBottomActive,
        UNSAFE_borderBottomFocus,
        UNSAFE_borderBottomHover,
        UNSAFE_borderBottomLeftRadius,
        UNSAFE_borderBottomRightRadius,
        UNSAFE_borderFocus,
        UNSAFE_borderHover,
        UNSAFE_borderLeft,
        UNSAFE_borderLeftActive,
        UNSAFE_borderLeftFocus,
        UNSAFE_borderLeftHover,
        UNSAFE_borderRadius,
        UNSAFE_borderRight,
        UNSAFE_borderRightActive,
        UNSAFE_borderRightFocus,
        UNSAFE_borderRightHover,
        UNSAFE_borderTop,
        UNSAFE_borderTopActive,
        UNSAFE_borderTopFocus,
        UNSAFE_borderTopHover,
        UNSAFE_borderTopLeftRadius,
        UNSAFE_borderTopRightRadius,
        UNSAFE_boxShadow,
        UNSAFE_color,
        UNSAFE_columnGap,
        UNSAFE_fill,
        UNSAFE_fontSize,
        UNSAFE_fontWeight,
        UNSAFE_gap,
        UNSAFE_gridAutoColumns,
        UNSAFE_gridAutoRows,
        UNSAFE_gridTemplateColumns,
        UNSAFE_gridTemplateRows,
        UNSAFE_height,
        UNSAFE_lineHeight,
        UNSAFE_margin,
        UNSAFE_marginBottom,
        UNSAFE_marginLeft,
        UNSAFE_marginRight,
        UNSAFE_marginTop,
        UNSAFE_marginX,
        UNSAFE_marginY,
        UNSAFE_maxHeight,
        UNSAFE_maxWidth,
        UNSAFE_minHeight,
        UNSAFE_minWidth,
        UNSAFE_padding,
        UNSAFE_paddingBottom,
        UNSAFE_paddingLeft,
        UNSAFE_paddingRight,
        UNSAFE_paddingTop,
        UNSAFE_paddingX,
        UNSAFE_paddingY,
        UNSAFE_rowGap,
        UNSAFE_stroke,
        UNSAFE_width
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */

    return {
        ...rest,
        className: styling.className,
        style: styling.style
    };
}
