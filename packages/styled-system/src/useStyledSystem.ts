import { useMemo, type CSSProperties } from "react";
import { useBreakpointContext } from "./responsive/BreakpointContext.tsx";
import type { Breakpoint } from "./responsive/Breakpoints.ts";
import { parseResponsiveValue } from "./responsive/useResponsiveValue.tsx";
import {
    BackgroundColorMapping,
    BorderMapping,
    BorderRadiusMapping,
    BoxShadowMapping,
    ColorExpressionTypes,
    ComplexMarginMapping,
    ComplexPaddingMapping,
    DefaultBorderWidthAndStyle,
    FontFamilyMapping,
    FontSizeMapping,
    FontWeightMapping,
    IconColorMapping,
    LineHeightMapping,
    SimpleMarginMapping,
    SimplePaddingMapping,
    SizingMapping,
    TextColorMapping,
    parseResponsiveSystemValue
} from "./tokens/token-mappings.ts";
import { isNil } from "./utils/assertion.ts";
// TODO: There is an issue with CSS Modules files that starts with a lowercase letter at the moment
// This should be investigated at a later time.
// eslint-disable-next-line @workleap/strict-css-modules-names
import styles from "./UseStyledSystem.module.css";
import { UnsafePrefix, type StyledSystemProps } from "./styled-system-props.ts";

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
// - border="3px solid warning-10" -> style="3px solid var(--hop-warning-10)" -> Not supported yet
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
    backgroundColorActive: createPseudoHandler(styles["hop-bg-active"], "--hop-bg-active", BackgroundColorMapping),
    backgroundColorFocus: createPseudoHandler(styles["hop-bg-focus"], "--hop-bg-focus", BackgroundColorMapping),
    backgroundColorHover: createPseudoHandler(styles["hop-bg-hover"], "--hop-bg-hover", BackgroundColorMapping),
    backgroundImage: createPassthroughHandler(),
    backgroundPosition: createPassthroughHandler(),
    backgroundRepeat: createPassthroughHandler(),
    backgroundSize: createPassthroughHandler(),
    border: createBorderHandler(BorderMapping),
    borderBottom: createBorderHandler(BorderMapping),
    borderBottomActive: createBorderPseudoHandler(styles["hop-bb-active"], "--hop-bb-active", BorderMapping),
    borderBottomFocus: createBorderPseudoHandler(styles["hop-bb-focus"], "--hop-bb-focus", BorderMapping),
    borderBottomHover: createBorderPseudoHandler(styles["hop-bb-hover"], "--hop-bb-hover", BorderMapping),
    borderBottomLeftRadius: createSystemValueHandler(BorderRadiusMapping),
    borderBottomRightRadius: createSystemValueHandler(BorderRadiusMapping),
    borderActive: createBorderPseudoHandler(styles["hop-b-active"], "--hop-b-active", BorderMapping),
    borderFocus: createBorderPseudoHandler(styles["hop-b-focus"], "--hop-b-focus", BorderMapping),
    borderHover: createBorderPseudoHandler(styles["hop-b-hover"], "--hop-b-hover", BorderMapping),
    borderLeft: createBorderHandler(BorderMapping),
    borderLeftActive: createBorderPseudoHandler(styles["hop-bl-active"], "--hop-bl-active", BorderMapping),
    borderLeftFocus: createBorderPseudoHandler(styles["hop-bl-focus"], "--hop-bl-focus", BorderMapping),
    borderLeftHover: createBorderPseudoHandler(styles["hop-bl-hover"], "--hop-bl-hover", BorderMapping),
    borderRadius: createSystemValueHandler(BorderRadiusMapping),
    borderRight: createBorderHandler(BorderMapping),
    borderRightActive: createBorderPseudoHandler(styles["hop-br-active"], "--hop-br-active", BorderMapping),
    borderRightFocus: createBorderPseudoHandler(styles["hop-br-focus"], "--hop-br-focus", BorderMapping),
    borderRightHover: createBorderPseudoHandler(styles["hop-br-hover"], "--hop-br-hover", BorderMapping),
    borderTop: createBorderHandler(BorderMapping),
    borderTopActive: createBorderPseudoHandler(styles["hop-bt-active"], "--hop-bt-active", BorderMapping),
    borderTopFocus: createBorderPseudoHandler(styles["hop-bt-focus"], "--hop-bt-focus", BorderMapping),
    borderTopHover: createBorderPseudoHandler(styles["hop-bt-hover"], "--hop-bt-hover", BorderMapping),
    borderTopLeftRadius: createSystemValueHandler(BorderRadiusMapping),
    borderTopRightRadius: createSystemValueHandler(BorderRadiusMapping),
    bottom: createPassthroughHandler(),
    boxShadow: createSystemValueHandler(BoxShadowMapping),
    boxShadowActive: createPseudoHandler(styles["hop-bs-active"], "--hop-bs-active", BoxShadowMapping),
    boxShadowFocus: createPseudoHandler(styles["hop-bs-focus"], "--hop-bs-focus", BoxShadowMapping),
    boxShadowHover: createPseudoHandler(styles["hop-bs-hover"], "--hop-bs-hover", BoxShadowMapping),
    color: createSystemValueHandler(TextColorMapping),
    colorActive: createPseudoHandler(styles["hop-c-active"], "--hop-c-active", TextColorMapping),
    colorFocus: createPseudoHandler(styles["hop-c-focus"], "--hop-c-focus", TextColorMapping),
    colorHover: createPseudoHandler(styles["hop-c-hover"], "--hop-c-hover", TextColorMapping),
    columnGap: createSystemValueHandler(SimpleMarginMapping),
    content: createPassthroughHandler(),
    contentVisibility: createPassthroughHandler(),
    cursor: createPassthroughHandler(),
    cursorHover: createPseudoHandler(styles["hop-cs-hover"], "--hop-cs-hover"),
    display: createPassthroughHandler(),
    fill: createSystemValueHandler(IconColorMapping),
    fillFocus: createPseudoHandler(styles["hop-f-focus"], "--hop-f-focus", IconColorMapping),
    fillHover: createPseudoHandler(styles["hop-f-hover"], "--hop-f-hover", IconColorMapping),
    filter: createPassthroughHandler(),
    flex: createPassthroughHandler(),
    flexBasis: createPassthroughHandler(),
    flexDirection: createPassthroughHandler(),
    flexFlow: createPassthroughHandler(),
    flexGrow: createPassthroughHandler(),
    flexShrink: createPassthroughHandler(),
    flexWrap: createPassthroughHandler(),
    fontFamily: createSystemValueHandler(FontFamilyMapping),
    fontSize: createSystemValueHandler(FontSizeMapping),
    fontStyle: createPassthroughHandler(),
    fontWeight: createSystemValueHandler(FontWeightMapping),
    gap: createSystemValueHandler(SimpleMarginMapping),
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
    margin: createSystemValueHandler(ComplexMarginMapping),
    marginBottom: createSystemValueHandler(SimpleMarginMapping),
    marginLeft: createSystemValueHandler(SimpleMarginMapping),
    marginRight: createSystemValueHandler(SimpleMarginMapping),
    marginTop: createSystemValueHandler(SimpleMarginMapping),
    marginX: createAxisHandler("marginLeft", "marginRight", SimpleMarginMapping),
    marginY: createAxisHandler("marginBottom", "marginTop", SimpleMarginMapping),
    maxHeight: createSystemValueHandler(SizingMapping),
    maxWidth: createSystemValueHandler(SizingMapping),
    minHeight: createSystemValueHandler(SizingMapping),
    minWidth: createSystemValueHandler(SizingMapping),
    objectFit: createPassthroughHandler(),
    objectPosition: createPassthroughHandler(),
    opacity: createPassthroughHandler(),
    opacityActive: createPseudoHandler(styles["hop-o-active"], "hop-o-active"),
    opacityFocus: createPseudoHandler(styles["hop-o-focus"], "hop-o-focus"),
    opacityHover: createPseudoHandler(styles["hop-o-hover"], "hop-o-hover"),
    order: createPassthroughHandler(),
    outline: createPassthroughHandler(),
    outlineFocus: createPseudoHandler(styles["hop-ol-focus"], "hop-ol-focus"),
    overflow: createPassthroughHandler(),
    overflowX: createPassthroughHandler(),
    overflowY: createPassthroughHandler(),
    padding: createSystemValueHandler(ComplexPaddingMapping),
    paddingBottom: createSystemValueHandler(SimplePaddingMapping),
    paddingLeft: createSystemValueHandler(SimplePaddingMapping),
    paddingRight: createSystemValueHandler(SimplePaddingMapping),
    paddingTop: createSystemValueHandler(SimplePaddingMapping),
    paddingX: createAxisHandler("paddingLeft", "paddingRight", SimplePaddingMapping),
    paddingY: createAxisHandler("paddingBottom", "paddingTop", SimplePaddingMapping),
    pointerEvents: createPassthroughHandler(),
    position: createPassthroughHandler(),
    resize: createPassthroughHandler(),
    right: createPassthroughHandler(),
    rowGap: createSystemValueHandler(SimpleMarginMapping),
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
    const cssProperty = name.replace(UnsafePrefix, ""); // TODO: not 100% accurate but close

    return !isNil(PropsHandlers[cssProperty]);
}

class StylingContext {
    readonly #classes: string[];
    readonly #style: CSSProperties;
    matchedBreakpoints: Breakpoint[];

    constructor(className: string | undefined, style: CSSProperties | undefined, matchedBreakpoints: Breakpoint[]) {
        this.#classes = !isNil(className) ? [className] : [];
        this.#style = { ...style } ?? {}; // TODO: different than orbit, in order to not modify the original style object https://github.com/gsoft-inc/sg-orbit/issues/1211
        this.matchedBreakpoints = matchedBreakpoints;
    }

    addClass(className: string) {
        if (!this.#classes.includes(className)) {
            this.#classes.push(className);
        }

        return this;
    }

    addStyleValue(name: string, value: unknown) {
        // TODO: different than orbit, there was a check here to check if the style was already set. It caused issue where
        // if you were doing paddingX and then paddingLeft, the paddingLeft would not be applied because the paddingX was already set.
        // https://github.com/gsoft-inc/sg-orbit/issues/1210

        // Removing this line causes 2 tests to fail, but i think the behavior is OK.
        //if ((this.#style as Record<string, unknown>)[name] === undefined) {
        (this.#style as Record<string, unknown>)[name] = value;
        //}

        return this;
    }

    computeStyling() {
        const className = this.#classes.length !== 0 ? this.#classes.join(" ") : undefined;
        const styleValue = Object.keys(this.#style).length !== 0 ? this.#style : undefined;

        return { className, style: styleValue };
    }
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
        borderActive,
        borderBottom,
        borderBottomActive,
        borderBottomFocus,
        borderBottomHover,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderFocus,
        borderHover,
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
        fontFamily,
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
        transform,
        transformOrigin,
        transformStyle,
        transition,
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
        UNSAFE_boxShadowActive,
        UNSAFE_boxShadowFocus,
        UNSAFE_boxShadowHover,
        UNSAFE_color,
        UNSAFE_colorActive,
        UNSAFE_colorFocus,
        UNSAFE_colorHover,
        UNSAFE_columnGap,
        UNSAFE_fill,
        UNSAFE_fillFocus,
        UNSAFE_fillHover,
        UNSAFE_fontFamily,
        UNSAFE_fontSize,
        UNSAFE_fontWeight,
        UNSAFE_gap,
        UNSAFE_gridAutoColumns,
        UNSAFE_gridAutoRows,
        UNSAFE_gridColumnSpan,
        UNSAFE_gridRowSpan,
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
        verticalAlign,
        visibility,
        whiteSpace,
        width,
        willChange,
        wordBreak,
        zIndex,
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
                const cssProperty = key.replace(UnsafePrefix, "");
                const handler = PropsHandlers[cssProperty];

                if (!isNil(handler)) {
                    handler(cssProperty, value, context);
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
        borderActive,
        borderBottom,
        borderBottomActive,
        borderBottomFocus,
        borderBottomHover,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderFocus,
        borderHover,
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
        fontFamily,
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
        matchedBreakpoints,
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
        transform,
        transformOrigin,
        transformStyle,
        transition,
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
        UNSAFE_boxShadowActive,
        UNSAFE_boxShadowFocus,
        UNSAFE_boxShadowHover,
        UNSAFE_color,
        UNSAFE_colorActive,
        UNSAFE_colorFocus,
        UNSAFE_colorHover,
        UNSAFE_columnGap,
        UNSAFE_fill,
        UNSAFE_fillFocus,
        UNSAFE_fillHover,
        UNSAFE_fontFamily,
        UNSAFE_fontSize,
        UNSAFE_fontWeight,
        UNSAFE_gap,
        UNSAFE_gridAutoColumns,
        UNSAFE_gridAutoRows,
        UNSAFE_gridColumnSpan,
        UNSAFE_gridRowSpan,
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
        verticalAlign,
        visibility,
        whiteSpace,
        width,
        willChange,
        wordBreak,
        zIndex
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */

    return {
        ...rest,
        className: styling.className,
        style: styling.style
    } satisfies SatisfiesPropsNotPresent<Omit<StyledSystemProps, "className" | "style">>; // this satisfies make sure that no style-system props are forgotten in the rest parameter
}

type SatisfiesPropsNotPresent<TPropsToEnsure> = {
    [key: string]: unknown;
} & { [key in keyof Required<TPropsToEnsure>]?: never };
