import { StyledSystemProps } from "../../src/styled-system-props.ts";
import { ResponsiveValue } from "../../src/useResponsiveValue.tsx";

/**
 * Asserts that the type of `expression` is assignable to type `T`.
 *
 * @param expression - Expression that should be assignable to type `T`.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function expectAssignable<T>(expression: T) {
     // TODO: move this to a shared file
	// Do nothing, the TypeScript compiler handles this for us
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function expectStyledSystemPropertyAssignable<T extends keyof StyledSystemProps>(expression: StyledSystemProps[T]) {
	// Do nothing, the TypeScript compiler handles this for us
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function expectPropertyAvailable<T extends keyof StyledSystemProps>() {
    // Do nothing, the TypeScript compiler handles this for us
}

expectAssignable<ResponsiveValue<string>>({ base: "value" });
expectAssignable<ResponsiveValue<string>>({ md: "value" });
expectAssignable<ResponsiveValue<string>>({ lg: "value" });
expectAssignable<ResponsiveValue<string>>({ base: "value", xs: "value", sm: "value", md: "value", lg: "value", xl: "value" });
// @ts-expect-error: "mobile" is not a valid breakpoint
expectAssignable<ResponsiveValue<string>>({ base: "value", mobile: "value"});

expectStyledSystemPropertyAssignable<"alignContent">("center");
expectStyledSystemPropertyAssignable<"alignContent">("start");
expectStyledSystemPropertyAssignable<"alignContent">("end");
expectStyledSystemPropertyAssignable<"alignContent">("flex-start");
expectStyledSystemPropertyAssignable<"alignContent">("flex-end");
expectStyledSystemPropertyAssignable<"alignContent">("left");
expectStyledSystemPropertyAssignable<"alignContent">("right");
expectStyledSystemPropertyAssignable<"alignContent">("space-between");
expectStyledSystemPropertyAssignable<"alignContent">("space-around");
expectStyledSystemPropertyAssignable<"alignContent">("space-evenly");
expectStyledSystemPropertyAssignable<"alignContent">("baseline");
expectStyledSystemPropertyAssignable<"alignContent">("first baseline");
expectStyledSystemPropertyAssignable<"alignContent">("last baseline");
expectStyledSystemPropertyAssignable<"alignContent">("stretch");
expectStyledSystemPropertyAssignable<"alignContent">("normal");
expectStyledSystemPropertyAssignable<"alignContent">("safe center");
expectStyledSystemPropertyAssignable<"alignContent">("unsafe center");
expectStyledSystemPropertyAssignable<"alignContent">({ base: "center", xs: "center", sm: "center", md: "center", lg: "center", xl: "center" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_alignContent">

expectStyledSystemPropertyAssignable<"alignItems">("center");
expectStyledSystemPropertyAssignable<"alignItems">("start");
expectStyledSystemPropertyAssignable<"alignItems">("end");
expectStyledSystemPropertyAssignable<"alignItems">("self-start");
expectStyledSystemPropertyAssignable<"alignItems">("self-end");
expectStyledSystemPropertyAssignable<"alignItems">("flex-start");
expectStyledSystemPropertyAssignable<"alignItems">("flex-end");
expectStyledSystemPropertyAssignable<"alignItems">("left");
expectStyledSystemPropertyAssignable<"alignItems">("right");
expectStyledSystemPropertyAssignable<"alignItems">("space-between");
expectStyledSystemPropertyAssignable<"alignItems">("space-around");
expectStyledSystemPropertyAssignable<"alignItems">("space-evenly");
expectStyledSystemPropertyAssignable<"alignItems">("baseline");
expectStyledSystemPropertyAssignable<"alignItems">("first baseline");
expectStyledSystemPropertyAssignable<"alignItems">("last baseline");
expectStyledSystemPropertyAssignable<"alignItems">("stretch");
expectStyledSystemPropertyAssignable<"alignItems">("normal");
expectStyledSystemPropertyAssignable<"alignItems">("safe center");
expectStyledSystemPropertyAssignable<"alignItems">("unsafe center");
expectStyledSystemPropertyAssignable<"alignItems">({ base: "center", xs: "center", sm: "center", md: "center", lg: "center", xl: "center" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_alignItems">

expectStyledSystemPropertyAssignable<"alignSelf">("center");
expectStyledSystemPropertyAssignable<"alignSelf">("start");
expectStyledSystemPropertyAssignable<"alignSelf">("end");
expectStyledSystemPropertyAssignable<"alignSelf">("self-start");
expectStyledSystemPropertyAssignable<"alignSelf">("self-end");
expectStyledSystemPropertyAssignable<"alignSelf">("flex-start");
expectStyledSystemPropertyAssignable<"alignSelf">("flex-end");
expectStyledSystemPropertyAssignable<"alignSelf">("left");
expectStyledSystemPropertyAssignable<"alignSelf">("right");
expectStyledSystemPropertyAssignable<"alignSelf">("space-between");
expectStyledSystemPropertyAssignable<"alignSelf">("space-around");
expectStyledSystemPropertyAssignable<"alignSelf">("space-evenly");
expectStyledSystemPropertyAssignable<"alignSelf">("baseline");
expectStyledSystemPropertyAssignable<"alignSelf">("first baseline");
expectStyledSystemPropertyAssignable<"alignSelf">("last baseline");
expectStyledSystemPropertyAssignable<"alignSelf">("stretch");
expectStyledSystemPropertyAssignable<"alignSelf">("normal");
expectStyledSystemPropertyAssignable<"alignSelf">("auto");
expectStyledSystemPropertyAssignable<"alignSelf">("safe center");
expectStyledSystemPropertyAssignable<"alignSelf">("unsafe center");
expectStyledSystemPropertyAssignable<"alignSelf">({ base: "center", xs: "center", sm: "center", md: "center", lg: "center", xl: "center" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_alignSelf">

expectStyledSystemPropertyAssignable<"aspectRatio">("1");
expectStyledSystemPropertyAssignable<"aspectRatio">("1 / 1");
expectStyledSystemPropertyAssignable<"aspectRatio">("16 / 9");
expectStyledSystemPropertyAssignable<"aspectRatio">({ base: "1", xs: "1", sm: "1", md: "1", lg: "1", xl: "1" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_aspectRatio">

expectStyledSystemPropertyAssignable<"backgroundColor">("white");
expectStyledSystemPropertyAssignable<"backgroundColor">("purple-1");
expectStyledSystemPropertyAssignable<"backgroundColor">("alias-surface");
expectStyledSystemPropertyAssignable<"backgroundColor">("currentcolor");
expectStyledSystemPropertyAssignable<"backgroundColor">("transparent");
expectStyledSystemPropertyAssignable<"backgroundColor">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"backgroundColor">({ base: "hsla(50, 33%, 25%, .75)", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"backgroundColor">("rgb(255, 255, 128)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"backgroundColor">("rgba(255, 255, 128, .5)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"backgroundColor">("hsl(50, 33%, 25%)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"backgroundColor">("hsla(50, 33%, 25%, .75)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"backgroundColor">("#fff");

expectStyledSystemPropertyAssignable<"UNSAFE_backgroundColor">("white");
expectStyledSystemPropertyAssignable<"UNSAFE_backgroundColor">("purple-1");
expectStyledSystemPropertyAssignable<"UNSAFE_backgroundColor">("alias-surface");
expectStyledSystemPropertyAssignable<"UNSAFE_backgroundColor">("currentcolor");
expectStyledSystemPropertyAssignable<"UNSAFE_backgroundColor">("transparent");
expectStyledSystemPropertyAssignable<"UNSAFE_backgroundColor">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
expectStyledSystemPropertyAssignable<"UNSAFE_backgroundColor">({ base: "hsla(50, 33%, 25%, .75)", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
expectStyledSystemPropertyAssignable<"UNSAFE_backgroundColor">("rgb(255, 255, 128)");
expectStyledSystemPropertyAssignable<"UNSAFE_backgroundColor">("rgba(255, 255, 128, .5)");
expectStyledSystemPropertyAssignable<"UNSAFE_backgroundColor">("hsl(50, 33%, 25%)");
expectStyledSystemPropertyAssignable<"UNSAFE_backgroundColor">("hsla(50, 33%, 25%, .75)");
expectStyledSystemPropertyAssignable<"UNSAFE_backgroundColor">("#fff");

expectStyledSystemPropertyAssignable<"backgroundImage">("url(dog.gif)");
expectStyledSystemPropertyAssignable<"backgroundImage">({ base: "url(dog.gif)", xs: "url(dog.gif)", sm: "url(dog.gif)", md: "url(dog.gif)", lg: "url(dog.gif)", xl: "url(dog.gif)" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_backgroundImage">

expectStyledSystemPropertyAssignable<"backgroundPosition">("top");
expectStyledSystemPropertyAssignable<"backgroundPosition">("bottom");
expectStyledSystemPropertyAssignable<"backgroundPosition">("left");
expectStyledSystemPropertyAssignable<"backgroundPosition">("right");
expectStyledSystemPropertyAssignable<"backgroundPosition">("center");
expectStyledSystemPropertyAssignable<"backgroundPosition">("left-top");
expectStyledSystemPropertyAssignable<"backgroundPosition">("left-bottom");
expectStyledSystemPropertyAssignable<"backgroundPosition">("right-top");
expectStyledSystemPropertyAssignable<"backgroundPosition">("right-bottom");
expectStyledSystemPropertyAssignable<"backgroundPosition">({ base: "top", xs: "top", sm: "top", md: "top", lg: "top", xl: "top" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_backgroundPosition">

expectStyledSystemPropertyAssignable<"backgroundRepeat">("no-repeat");
expectStyledSystemPropertyAssignable<"backgroundRepeat">("repeat");
expectStyledSystemPropertyAssignable<"backgroundRepeat">("repeat-x");
expectStyledSystemPropertyAssignable<"backgroundRepeat">("repeat-y");
expectStyledSystemPropertyAssignable<"backgroundRepeat">("round");
expectStyledSystemPropertyAssignable<"backgroundRepeat">("space");
expectStyledSystemPropertyAssignable<"backgroundRepeat">({ base: "round", xs: "round", sm: "round", md: "round", lg: "round", xl: "round" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_backgroundRepeat">

expectStyledSystemPropertyAssignable<"backgroundSize">("top");
expectStyledSystemPropertyAssignable<"backgroundSize">("cover");
expectStyledSystemPropertyAssignable<"backgroundSize">("contain");
expectStyledSystemPropertyAssignable<"backgroundSize">({ base: "cover", xs: "cover", sm: "cover", md: "cover", lg: "cover", xl: "cover" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_backgroundSize">

expectStyledSystemPropertyAssignable<"border">(0);
expectStyledSystemPropertyAssignable<"border">("white");
expectStyledSystemPropertyAssignable<"border">("purple-1");
expectStyledSystemPropertyAssignable<"border">("alias-low-break");
expectStyledSystemPropertyAssignable<"border">("currentcolor");
expectStyledSystemPropertyAssignable<"border">("transparent");
expectStyledSystemPropertyAssignable<"border">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"border">("0");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"border">("#fff");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"border">("rgb(255, 255, 128)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"border">("rgba(255, 255, 128, .5)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"border">("hsl(50, 33%, 25%)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"border">("hsla(50, 33%, 25%, .75)");

expectStyledSystemPropertyAssignable<"UNSAFE_border">("0");
expectStyledSystemPropertyAssignable<"UNSAFE_border">("white");
expectStyledSystemPropertyAssignable<"UNSAFE_border">("purple-1");
expectStyledSystemPropertyAssignable<"UNSAFE_border">("alias-low-break");
expectStyledSystemPropertyAssignable<"UNSAFE_border">("currentcolor");
expectStyledSystemPropertyAssignable<"UNSAFE_border">("transparent");
expectStyledSystemPropertyAssignable<"UNSAFE_border">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
expectStyledSystemPropertyAssignable<"UNSAFE_border">("0");
expectStyledSystemPropertyAssignable<"UNSAFE_border">("#fff");
expectStyledSystemPropertyAssignable<"UNSAFE_border">("rgb(255, 255, 128)");
expectStyledSystemPropertyAssignable<"UNSAFE_border">("rgba(255, 255, 128, .5)");
expectStyledSystemPropertyAssignable<"UNSAFE_border">("hsl(50, 33%, 25%)");
expectStyledSystemPropertyAssignable<"UNSAFE_border">("hsla(50, 33%, 25%, .75)");

expectStyledSystemPropertyAssignable<"borderBottom">(0);
expectStyledSystemPropertyAssignable<"borderBottom">("white");
expectStyledSystemPropertyAssignable<"borderBottom">("purple-1");
expectStyledSystemPropertyAssignable<"borderBottom">("alias-low-break");
expectStyledSystemPropertyAssignable<"borderBottom">("currentcolor");
expectStyledSystemPropertyAssignable<"borderBottom">("transparent");
expectStyledSystemPropertyAssignable<"borderBottom">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottom">("#fff");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottom">("rgb(255, 255, 128)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottom">("rgba(255, 255, 128, .5)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottom">("hsl(50, 33%, 25%)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottom">("hsla(50, 33%, 25%, .75)");

expectStyledSystemPropertyAssignable<"UNSAFE_borderBottom">("0");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottom">("white");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottom">("purple-1");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottom">("alias-low-break");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottom">("currentcolor");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottom">("transparent");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottom">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottom">("#fff");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottom">("rgb(255, 255, 128)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottom">("rgba(255, 255, 128, .5)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottom">("hsl(50, 33%, 25%)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottom">("hsla(50, 33%, 25%, .75)");

// TODO: should 0  be allowed? or none???
expectStyledSystemPropertyAssignable<"borderLeft">(0);
expectStyledSystemPropertyAssignable<"borderLeft">("white");
expectStyledSystemPropertyAssignable<"borderLeft">("purple-1");
expectStyledSystemPropertyAssignable<"borderLeft">("alias-low-break");
expectStyledSystemPropertyAssignable<"borderLeft">("currentcolor");
expectStyledSystemPropertyAssignable<"borderLeft">("transparent");
expectStyledSystemPropertyAssignable<"borderLeft">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderLeft">("#fff");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderLeft">("rgb(255, 255, 128)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderLeft">("rgba(255, 255, 128, .5)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderLeft">("hsl(50, 33%, 25%)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderLeft">("hsla(50, 33%, 25%, .75)");

expectStyledSystemPropertyAssignable<"UNSAFE_borderLeft">("0");
expectStyledSystemPropertyAssignable<"UNSAFE_borderLeft">("white");
expectStyledSystemPropertyAssignable<"UNSAFE_borderLeft">("purple-1");
expectStyledSystemPropertyAssignable<"UNSAFE_borderLeft">("alias-low-break");
expectStyledSystemPropertyAssignable<"UNSAFE_borderLeft">("currentcolor");
expectStyledSystemPropertyAssignable<"UNSAFE_borderLeft">("transparent");
expectStyledSystemPropertyAssignable<"UNSAFE_borderLeft">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
expectStyledSystemPropertyAssignable<"UNSAFE_borderLeft">("#fff");
expectStyledSystemPropertyAssignable<"UNSAFE_borderLeft">("rgb(255, 255, 128)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderLeft">("rgba(255, 255, 128, .5)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderLeft">("hsl(50, 33%, 25%)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderLeft">("hsla(50, 33%, 25%, .75)");

// TODO: should 0  be allowed? or none???
expectStyledSystemPropertyAssignable<"borderRight">(0);
expectStyledSystemPropertyAssignable<"borderRight">("white");
expectStyledSystemPropertyAssignable<"borderRight">("purple-1");
expectStyledSystemPropertyAssignable<"borderRight">("alias-low-break");
expectStyledSystemPropertyAssignable<"borderRight">("currentcolor");
expectStyledSystemPropertyAssignable<"borderRight">("transparent");
expectStyledSystemPropertyAssignable<"borderRight">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderRight">("#fff");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderRight">("rgb(255, 255, 128)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderRight">("rgba(255, 255, 128, .5)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderRight">("hsl(50, 33%, 25%)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderRight">("hsla(50, 33%, 25%, .75)");

expectStyledSystemPropertyAssignable<"UNSAFE_borderRight">("0");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRight">("white");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRight">("purple-1");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRight">("alias-low-break");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRight">("currentcolor");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRight">("transparent");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRight">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
expectStyledSystemPropertyAssignable<"UNSAFE_borderRight">("#fff");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRight">("rgb(255, 255, 128)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRight">("rgba(255, 255, 128, .5)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRight">("hsl(50, 33%, 25%)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRight">("hsla(50, 33%, 25%, .75)");

expectStyledSystemPropertyAssignable<"borderTop">(0);
expectStyledSystemPropertyAssignable<"borderTop">("white");
expectStyledSystemPropertyAssignable<"borderTop">("purple-1");
expectStyledSystemPropertyAssignable<"borderTop">("alias-low-break");
expectStyledSystemPropertyAssignable<"borderTop">("currentcolor");
expectStyledSystemPropertyAssignable<"borderTop">("transparent");
expectStyledSystemPropertyAssignable<"borderTop">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTop">("#fff");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTop">("rgb(255, 255, 128)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTop">("rgba(255, 255, 128, .5)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTop">("hsl(50, 33%, 25%)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTop">("hsla(50, 33%, 25%, .75)");

expectStyledSystemPropertyAssignable<"UNSAFE_borderTop">("0");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTop">("white");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTop">("purple-1");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTop">("alias-low-break");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTop">("currentcolor");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTop">("transparent");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTop">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
expectStyledSystemPropertyAssignable<"UNSAFE_borderTop">("#fff");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTop">("rgb(255, 255, 128)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTop">("rgba(255, 255, 128, .5)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTop">("hsl(50, 33%, 25%)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTop">("hsla(50, 33%, 25%, .75)");

expectStyledSystemPropertyAssignable<"borderRadius">(0);
expectStyledSystemPropertyAssignable<"borderRadius">(1);
expectStyledSystemPropertyAssignable<"borderRadius">(2);
expectStyledSystemPropertyAssignable<"borderRadius">(3);
expectStyledSystemPropertyAssignable<"borderRadius">(4);
expectStyledSystemPropertyAssignable<"borderRadius">("pill");
expectStyledSystemPropertyAssignable<"borderRadius">("circular");
expectStyledSystemPropertyAssignable<"borderRadius">({ base: "pill", xs: 1, sm: 2, md: 3, lg: 4 });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderRadius">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderRadius">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderRadius">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderRadius">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderRadius">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderRadius">("1px 0 3px 4px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderRadius">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_borderRadius">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_borderRadius">(2);
expectStyledSystemPropertyAssignable<"UNSAFE_borderRadius">(3);
expectStyledSystemPropertyAssignable<"UNSAFE_borderRadius">(4);
expectStyledSystemPropertyAssignable<"UNSAFE_borderRadius">("pill");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRadius">("circular");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRadius">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRadius">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRadius">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRadius">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRadius">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRadius">("1px 0 3px 4px");
expectStyledSystemPropertyAssignable<"UNSAFE_borderRadius">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

// TODO: should 0  be allowed? or none???
expectStyledSystemPropertyAssignable<"borderBottomLeftRadius">(0);
expectStyledSystemPropertyAssignable<"borderBottomLeftRadius">(1);
expectStyledSystemPropertyAssignable<"borderBottomLeftRadius">(2);
expectStyledSystemPropertyAssignable<"borderBottomLeftRadius">(3);
expectStyledSystemPropertyAssignable<"borderBottomLeftRadius">(4);
expectStyledSystemPropertyAssignable<"borderBottomLeftRadius">("pill");
expectStyledSystemPropertyAssignable<"borderRadius">({ base: "pill", xs: 1, sm: 2, md: 3, lg: 4 });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottomLeftRadius">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottomLeftRadius">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottomLeftRadius">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottomLeftRadius">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottomLeftRadius">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottomLeftRadius">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

// TODO: should 0  be allowed? or none???
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomLeftRadius">(0);
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomLeftRadius">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomLeftRadius">(2);
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomLeftRadius">(3);
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomLeftRadius">(4);
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomLeftRadius">("pill");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomLeftRadius">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomLeftRadius">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomLeftRadius">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomLeftRadius">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomLeftRadius">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomLeftRadius">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

// TODO: should 0  be allowed? or none???
expectStyledSystemPropertyAssignable<"borderBottomRightRadius">(0);
expectStyledSystemPropertyAssignable<"borderBottomRightRadius">(1);
expectStyledSystemPropertyAssignable<"borderBottomRightRadius">(2);
expectStyledSystemPropertyAssignable<"borderBottomRightRadius">(3);
expectStyledSystemPropertyAssignable<"borderBottomRightRadius">(4);
expectStyledSystemPropertyAssignable<"borderBottomRightRadius">("pill");
expectStyledSystemPropertyAssignable<"borderBottomRightRadius">({ base: "pill", xs: 1, sm: 2, md: 3, lg: 4 });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottomRightRadius">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottomRightRadius">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottomRightRadius">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottomRightRadius">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottomRightRadius">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderBottomRightRadius">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomRightRadius">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomRightRadius">(2);
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomRightRadius">(3);
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomRightRadius">(4);
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomRightRadius">("pill");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomRightRadius">({ base: "pill", xs: 1, sm: 2, md: 3, lg: 4 });
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomRightRadius">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomRightRadius">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomRightRadius">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomRightRadius">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomRightRadius">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderBottomRightRadius">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

// TODO: should 0  be allowed? or none???
expectStyledSystemPropertyAssignable<"borderTopLeftRadius">(0);
expectStyledSystemPropertyAssignable<"borderTopLeftRadius">(1);
expectStyledSystemPropertyAssignable<"borderTopLeftRadius">(2);
expectStyledSystemPropertyAssignable<"borderTopLeftRadius">(3);
expectStyledSystemPropertyAssignable<"borderTopLeftRadius">(4);
expectStyledSystemPropertyAssignable<"borderTopLeftRadius">("pill");
expectStyledSystemPropertyAssignable<"borderTopLeftRadius">({ base: "pill", xs: 1, sm: 2, md: 3, lg: 4 });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTopLeftRadius">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTopLeftRadius">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTopLeftRadius">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTopLeftRadius">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTopLeftRadius">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTopLeftRadius">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_borderTopLeftRadius">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopLeftRadius">(2);
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopLeftRadius">(3);
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopLeftRadius">(4);
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopLeftRadius">("pill");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopLeftRadius">({ base: "pill", xs: 1, sm: 2, md: 3, lg: 4 });
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopLeftRadius">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopLeftRadius">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopLeftRadius">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopLeftRadius">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopLeftRadius">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopLeftRadius">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

// TODO: should 0  be allowed? or none???
expectStyledSystemPropertyAssignable<"borderTopRightRadius">(0);
expectStyledSystemPropertyAssignable<"borderTopRightRadius">(1);
expectStyledSystemPropertyAssignable<"borderTopRightRadius">(2);
expectStyledSystemPropertyAssignable<"borderTopRightRadius">(3);
expectStyledSystemPropertyAssignable<"borderTopRightRadius">(4);
expectStyledSystemPropertyAssignable<"borderTopRightRadius">("pill");
expectStyledSystemPropertyAssignable<"borderTopRightRadius">({ base: "pill", xs: 1, sm: 2, md: 3, lg: 4 });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTopRightRadius">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTopRightRadius">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTopRightRadius">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTopRightRadius">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTopRightRadius">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"borderTopRightRadius">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_borderTopRightRadius">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopRightRadius">(2);
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopRightRadius">(3);
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopRightRadius">(4);
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopRightRadius">("pill");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopRightRadius">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopRightRadius">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopRightRadius">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopRightRadius">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopRightRadius">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_borderTopRightRadius">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"bottom">("1px");
expectStyledSystemPropertyAssignable<"bottom">("-1px");
expectStyledSystemPropertyAssignable<"bottom">("1em");
expectStyledSystemPropertyAssignable<"bottom">("1rem");
expectStyledSystemPropertyAssignable<"bottom">("1%");
expectStyledSystemPropertyAssignable<"bottom">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"bottom">("auto");
expectStyledSystemPropertyAssignable<"bottom">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_bottom">

// TODO allow none?
expectStyledSystemPropertyAssignable<"boxShadow">("none");
expectStyledSystemPropertyAssignable<"boxShadow">(1);
expectStyledSystemPropertyAssignable<"boxShadow">(2);
expectStyledSystemPropertyAssignable<"boxShadow">("alias-lifted");
expectStyledSystemPropertyAssignable<"boxShadow">("alias-floating");
expectStyledSystemPropertyAssignable<"boxShadow">({ base: 1, xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"boxShadow">("10px 5px 5px black");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"boxShadow">({ base: 1, xs: 1, sm: 1, md: 1, lg: 1, xl: "10px" });

expectStyledSystemPropertyAssignable<"UNSAFE_boxShadow">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_boxShadow">(2);
expectStyledSystemPropertyAssignable<"UNSAFE_boxShadow">("alias-lifted");
expectStyledSystemPropertyAssignable<"UNSAFE_boxShadow">("alias-floating");
expectStyledSystemPropertyAssignable<"UNSAFE_boxShadow">("none");
expectStyledSystemPropertyAssignable<"UNSAFE_boxShadow">("10px 5px 5px black");
expectStyledSystemPropertyAssignable<"UNSAFE_boxShadow">({ base: 1, xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });

expectStyledSystemPropertyAssignable<"color">("white");
expectStyledSystemPropertyAssignable<"color">("purple-1");
expectStyledSystemPropertyAssignable<"color">("alias-primary");
expectStyledSystemPropertyAssignable<"color">("currentcolor");
expectStyledSystemPropertyAssignable<"color">("transparent");
expectStyledSystemPropertyAssignable<"color">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"color">("#fff");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"color">("rgb(255, 255, 128)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"color">("rgba(255, 255, 128, .5)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"color">("hsl(50, 33%, 25%)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"color">("hsla(50, 33%, 25%, .75)");

expectStyledSystemPropertyAssignable<"UNSAFE_color">("#fff");
expectStyledSystemPropertyAssignable<"UNSAFE_color">("white");
expectStyledSystemPropertyAssignable<"UNSAFE_color">("rgb(255, 255, 128)");
expectStyledSystemPropertyAssignable<"UNSAFE_color">("rgba(255, 255, 128, .5)");
expectStyledSystemPropertyAssignable<"UNSAFE_color">("hsl(50, 33%, 25%)");
expectStyledSystemPropertyAssignable<"UNSAFE_color">("hsla(50, 33%, 25%, .75)");
expectStyledSystemPropertyAssignable<"UNSAFE_color">("purple-1");
expectStyledSystemPropertyAssignable<"UNSAFE_color">("alias-primary");
expectStyledSystemPropertyAssignable<"UNSAFE_color">("currentcolor");
expectStyledSystemPropertyAssignable<"UNSAFE_color">("transparent");
expectStyledSystemPropertyAssignable<"UNSAFE_color">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });

expectStyledSystemPropertyAssignable<"columnGap">(0);
expectStyledSystemPropertyAssignable<"columnGap">(1);
expectStyledSystemPropertyAssignable<"columnGap">("normal");
expectStyledSystemPropertyAssignable<"columnGap">({ base: 1, xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"columnGap">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"columnGap">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"columnGap">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"columnGap">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"columnGap">("calc(1px + 1px)");

expectStyledSystemPropertyAssignable<"UNSAFE_columnGap">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_columnGap">({ base: 1, xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
expectStyledSystemPropertyAssignable<"UNSAFE_columnGap">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_columnGap">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_columnGap">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_columnGap">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_columnGap">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_columnGap">("normal");

expectStyledSystemPropertyAssignable<"content">("normal");
expectStyledSystemPropertyAssignable<"content">("none");
expectStyledSystemPropertyAssignable<"content">("linear-gradient(#e66465, #9198e5)");
expectStyledSystemPropertyAssignable<"content">({ base: "none", xs: "none", sm: "none", md: "none", lg: "none", xl: "none" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_content">

expectStyledSystemPropertyAssignable<"contentVisibility">("visible");
expectStyledSystemPropertyAssignable<"contentVisibility">("hidden");
expectStyledSystemPropertyAssignable<"contentVisibility">("auto");
expectStyledSystemPropertyAssignable<"contentVisibility">({ base: "hidden", xs: "hidden", sm: "hidden", md: "hidden", lg: "hidden", xl: "hidden" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_contentVisibility">

expectStyledSystemPropertyAssignable<"cursor">("auto");
expectStyledSystemPropertyAssignable<"cursor">("pointer");
expectStyledSystemPropertyAssignable<"cursor">("crosshair");
expectStyledSystemPropertyAssignable<"cursor">("grab");
expectStyledSystemPropertyAssignable<"cursor">("help");
expectStyledSystemPropertyAssignable<"cursor">("not-allowed");
expectStyledSystemPropertyAssignable<"cursor">("wait");
expectStyledSystemPropertyAssignable<"cursor">("zoom-in");
expectStyledSystemPropertyAssignable<"cursor">("url(cursor1.png) 4 12, auto");
expectStyledSystemPropertyAssignable<"cursor">({ base: "pointer", xs: "pointer", sm: "pointer", md: "pointer", lg: "pointer", xl: "pointer" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_cursor">

expectStyledSystemPropertyAssignable<"display">("block");
expectStyledSystemPropertyAssignable<"display">("inline-block");
expectStyledSystemPropertyAssignable<"display">("inline");
expectStyledSystemPropertyAssignable<"display">("flex");
expectStyledSystemPropertyAssignable<"display">("inline-flex");
expectStyledSystemPropertyAssignable<"display">("table");
expectStyledSystemPropertyAssignable<"display">("inline-table");
expectStyledSystemPropertyAssignable<"display">("table-caption");
expectStyledSystemPropertyAssignable<"display">("table-cell");
expectStyledSystemPropertyAssignable<"display">("table-column");
expectStyledSystemPropertyAssignable<"display">("table-column-group");
expectStyledSystemPropertyAssignable<"display">("table-footer-group");
expectStyledSystemPropertyAssignable<"display">("table-header-group");
expectStyledSystemPropertyAssignable<"display">("table-row-group");
expectStyledSystemPropertyAssignable<"display">("table-row");
expectStyledSystemPropertyAssignable<"display">("grid");
expectStyledSystemPropertyAssignable<"display">("inline-grid");
expectStyledSystemPropertyAssignable<"display">("list-item");
expectStyledSystemPropertyAssignable<"display">("none");
expectStyledSystemPropertyAssignable<"display">({ base: "block", xs: "block", sm: "block", md: "block", lg: "block", xl: "block" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_display">

expectStyledSystemPropertyAssignable<"fill">("white");
expectStyledSystemPropertyAssignable<"fill">("purple-1");
expectStyledSystemPropertyAssignable<"fill">("alias-primary");
expectStyledSystemPropertyAssignable<"fill">("currentcolor");
expectStyledSystemPropertyAssignable<"fill">("transparent");
expectStyledSystemPropertyAssignable<"fill">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"fill">("#fff");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"fill">("rgb(255, 255, 128)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"fill">("rgba(255, 255, 128, .5)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"fill">("hsl(50, 33%, 25%)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"fill">("hsla(50, 33%, 25%, .75)");

expectStyledSystemPropertyAssignable<"UNSAFE_fill">("white");
expectStyledSystemPropertyAssignable<"UNSAFE_fill">("purple-1");
expectStyledSystemPropertyAssignable<"UNSAFE_fill">("alias-primary");
expectStyledSystemPropertyAssignable<"UNSAFE_fill">("currentcolor");
expectStyledSystemPropertyAssignable<"UNSAFE_fill">("transparent");
expectStyledSystemPropertyAssignable<"UNSAFE_fill">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
expectStyledSystemPropertyAssignable<"UNSAFE_fill">("#fff");
expectStyledSystemPropertyAssignable<"UNSAFE_fill">("rgb(255, 255, 128)");
expectStyledSystemPropertyAssignable<"UNSAFE_fill">("rgba(255, 255, 128, .5)");
expectStyledSystemPropertyAssignable<"UNSAFE_fill">("hsl(50, 33%, 25%)");
expectStyledSystemPropertyAssignable<"UNSAFE_fill">("hsla(50, 33%, 25%, .75)");

expectStyledSystemPropertyAssignable<"filter">("url(\"filters.svg#filter-id\")");
expectStyledSystemPropertyAssignable<"filter">("blur(5px)");
expectStyledSystemPropertyAssignable<"filter">("none");
expectStyledSystemPropertyAssignable<"filter">({ base: "blur(5px)", xs: "blur(5px)", sm: "blur(5px)", md: "blur(5px)", lg: "blur(5px)", xl: "blur(5px)" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_filter">

expectStyledSystemPropertyAssignable<"flex">("1px");
expectStyledSystemPropertyAssignable<"flex">("1em");
expectStyledSystemPropertyAssignable<"flex">("1rem");
expectStyledSystemPropertyAssignable<"flex">("1%");
expectStyledSystemPropertyAssignable<"flex">("1vh");
expectStyledSystemPropertyAssignable<"flex">("1vw");
expectStyledSystemPropertyAssignable<"flex">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"flex">("max-content");
expectStyledSystemPropertyAssignable<"flex">("min-content");
expectStyledSystemPropertyAssignable<"flex">("fit-content(1em)");
expectStyledSystemPropertyAssignable<"flex">("auto");
expectStyledSystemPropertyAssignable<"flex">("none");
expectStyledSystemPropertyAssignable<"flex">("2 2 10%");
expectStyledSystemPropertyAssignable<"flex">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_flex">

expectStyledSystemPropertyAssignable<"flexBasis">("1px");
expectStyledSystemPropertyAssignable<"flexBasis">("1em");
expectStyledSystemPropertyAssignable<"flexBasis">("1rem");
expectStyledSystemPropertyAssignable<"flexBasis">("1%");
expectStyledSystemPropertyAssignable<"flexBasis">("1vh");
expectStyledSystemPropertyAssignable<"flexBasis">("1vw");
expectStyledSystemPropertyAssignable<"flexBasis">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"flexBasis">("max-content");
expectStyledSystemPropertyAssignable<"flexBasis">("min-content");
expectStyledSystemPropertyAssignable<"flexBasis">("fit-content(1em)");
expectStyledSystemPropertyAssignable<"flexBasis">("content");
expectStyledSystemPropertyAssignable<"flexBasis">("fill");
expectStyledSystemPropertyAssignable<"flexBasis">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_flexBasis">

expectStyledSystemPropertyAssignable<"flexDirection">("row");
expectStyledSystemPropertyAssignable<"flexDirection">("row-reverse");
expectStyledSystemPropertyAssignable<"flexDirection">("column");
expectStyledSystemPropertyAssignable<"flexDirection">("column-reverse");
expectStyledSystemPropertyAssignable<"flexDirection">({ base: "row", xs: "row", sm: "row", md: "row", lg: "row", xl: "row" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_flexDirection">

expectStyledSystemPropertyAssignable<"flexFlow">("row");
expectStyledSystemPropertyAssignable<"flexFlow">("row-reverse");
expectStyledSystemPropertyAssignable<"flexFlow">("column");
expectStyledSystemPropertyAssignable<"flexFlow">("column-reverse");
expectStyledSystemPropertyAssignable<"flexFlow">("row wrap");
expectStyledSystemPropertyAssignable<"flexFlow">("wrap");
expectStyledSystemPropertyAssignable<"flexFlow">("wrap-reverse");
expectStyledSystemPropertyAssignable<"flexFlow">("row nowrap");
expectStyledSystemPropertyAssignable<"flexFlow">("column wrap");
expectStyledSystemPropertyAssignable<"flexFlow">("column-reverse wrap-reverse");
expectStyledSystemPropertyAssignable<"flexFlow">({ base: "row", xs: "row", sm: "row", md: "row", lg: "row", xl: "row" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_flexFlow">

expectStyledSystemPropertyAssignable<"flexGrow">(0);
expectStyledSystemPropertyAssignable<"flexGrow">(1);
expectStyledSystemPropertyAssignable<"flexGrow">(2);
expectStyledSystemPropertyAssignable<"flexGrow">(3);
expectStyledSystemPropertyAssignable<"flexGrow">(3.6);
expectStyledSystemPropertyAssignable<"flexGrow">({ base: 1, xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_flexGrow">

expectStyledSystemPropertyAssignable<"flexShrink">(0);
expectStyledSystemPropertyAssignable<"flexShrink">(1);
expectStyledSystemPropertyAssignable<"flexShrink">(2);
expectStyledSystemPropertyAssignable<"flexShrink">(3);
expectStyledSystemPropertyAssignable<"flexShrink">(3.6);
expectStyledSystemPropertyAssignable<"flexShrink">({ base: 1, xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_flexShrink">

expectStyledSystemPropertyAssignable<"flexWrap">("wrap");
expectStyledSystemPropertyAssignable<"flexWrap">("nowrap");
expectStyledSystemPropertyAssignable<"flexWrap">("wrap-reverse");
expectStyledSystemPropertyAssignable<"flexWrap">({ base: "wrap", xs: "wrap", sm: "wrap", md: "wrap", lg: "wrap", xl: "wrap" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_flexWrap">

expectStyledSystemPropertyAssignable<"fontSize">(1);
expectStyledSystemPropertyAssignable<"fontSize">(2);
expectStyledSystemPropertyAssignable<"fontSize">(3);
expectStyledSystemPropertyAssignable<"fontSize">(4);
expectStyledSystemPropertyAssignable<"fontSize">(5);
expectStyledSystemPropertyAssignable<"fontSize">(6);
expectStyledSystemPropertyAssignable<"fontSize">(7);
expectStyledSystemPropertyAssignable<"fontSize">(8);
expectStyledSystemPropertyAssignable<"fontSize">(9);
expectStyledSystemPropertyAssignable<"fontSize">(10);
expectStyledSystemPropertyAssignable<"fontSize">(11);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"fontSize">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"fontSize">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"fontSize">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"fontSize">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"fontSize">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"fontSize">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">(2);
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">(3);
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">(4);
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">(5);
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">(6);
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">(7);
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">(8);
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">(9);
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">(10);
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">(11);
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_fontSize">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"fontStyle">("normal");
expectStyledSystemPropertyAssignable<"fontStyle">("italic");
expectStyledSystemPropertyAssignable<"fontStyle">("oblique");
expectStyledSystemPropertyAssignable<"fontStyle">("oblique 10deg");
expectStyledSystemPropertyAssignable<"fontStyle">({ base: "normal", xs: "normal", sm: "normal", md: "normal", lg: "normal", xl: "normal" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_fontStyle">

expectStyledSystemPropertyAssignable<"fontWeight">(1);
expectStyledSystemPropertyAssignable<"fontWeight">(2);
expectStyledSystemPropertyAssignable<"fontWeight">(3);
expectStyledSystemPropertyAssignable<"fontWeight">({ base: 1, xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"fontWeight">("bold");

expectStyledSystemPropertyAssignable<"UNSAFE_fontWeight">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_fontWeight">(2);
expectStyledSystemPropertyAssignable<"UNSAFE_fontWeight">(3);
expectStyledSystemPropertyAssignable<"UNSAFE_fontWeight">({ base: 1, xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
expectStyledSystemPropertyAssignable<"UNSAFE_fontWeight">("bold");

// TODO: should 0  be allowed? or none???
expectStyledSystemPropertyAssignable<"gap">(0);
expectStyledSystemPropertyAssignable<"gap">(1);
expectStyledSystemPropertyAssignable<"gap">({ base: 1, xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gap">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gap">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gap">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gap">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gap">("calc(1px + 1px)");

expectStyledSystemPropertyAssignable<"UNSAFE_gap">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_gap">({ base: 1, xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
expectStyledSystemPropertyAssignable<"UNSAFE_gap">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_gap">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_gap">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_gap">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_gap">("calc(1px + 1px)");

expectStyledSystemPropertyAssignable<"grid">("none");
expectStyledSystemPropertyAssignable<"grid">("\"a\" 100px \"b\" 1fr");
expectStyledSystemPropertyAssignable<"grid">("[linename1] \"a\" 100px [linename2]");
expectStyledSystemPropertyAssignable<"grid">("100px / 200px");
expectStyledSystemPropertyAssignable<"grid">("minmax(400px, min-content) / repeat(auto-fill, 50px)");
expectStyledSystemPropertyAssignable<"grid">("200px / auto-flow");
expectStyledSystemPropertyAssignable<"grid">("30% / auto-flow dense");
expectStyledSystemPropertyAssignable<"grid">("auto-flow / 200px");
expectStyledSystemPropertyAssignable<"grid">("auto-flow dense 40% / [line1] minmax(20em, max-content)");
expectStyledSystemPropertyAssignable<"grid">({ base: "none", xs: "none", sm: "none", md: "none", lg: "none", xl: "none" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_grid">

expectStyledSystemPropertyAssignable<"gridArea">("auto");
expectStyledSystemPropertyAssignable<"gridArea">("auto / auto");
expectStyledSystemPropertyAssignable<"gridArea">("auto / auto / auto");
expectStyledSystemPropertyAssignable<"gridArea">("auto / auto / auto / auto");
expectStyledSystemPropertyAssignable<"gridArea">("some-grid-area");
expectStyledSystemPropertyAssignable<"gridArea">("span 3");
expectStyledSystemPropertyAssignable<"gridArea">("4 some-grid-area / 2 another-grid-area");
expectStyledSystemPropertyAssignable<"gridArea">({ base: "auto", xs: "auto", sm: "auto", md: "auto", lg: "auto", xl: "auto" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_gridArea">

expectStyledSystemPropertyAssignable<"gridAutoColumns">(1);
expectStyledSystemPropertyAssignable<"gridAutoColumns">("max-content");
expectStyledSystemPropertyAssignable<"gridAutoColumns">("min-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("1vh");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("1vw");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("fit-content(1em)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("minmax(100px, auto)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("minmax(max-content, 2fr)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("min-content max-content auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("100px 150px 390px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("10% 33.3%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("0.5fr 3fr 1fr");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">("100px minmax(100px, auto) 10% 0.5fr fit-content(400px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoColumns">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("1vh");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("1vw");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("max-content");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("min-content");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("fit-content(1em)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("minmax(100px, auto)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("minmax(max-content, 2fr)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("min-content max-content auto");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("100px 150px 390px");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("10% 33.3%");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("0.5fr 3fr 1fr");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">("100px minmax(100px, auto) 10% 0.5fr fit-content(400px)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoColumns">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"gridAutoFlow">("row");
expectStyledSystemPropertyAssignable<"gridAutoFlow">("column");
expectStyledSystemPropertyAssignable<"gridAutoFlow">("dense");
expectStyledSystemPropertyAssignable<"gridAutoFlow">("row dense");
expectStyledSystemPropertyAssignable<"gridAutoFlow">("column dense");
expectStyledSystemPropertyAssignable<"gridAutoFlow">({ base: "row", xs: "row", sm: "row", md: "row", lg: "row", xl: "row" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_gridAutoFlow">

expectStyledSystemPropertyAssignable<"gridAutoRows">(1);
expectStyledSystemPropertyAssignable<"gridAutoRows">("max-content");
expectStyledSystemPropertyAssignable<"gridAutoRows">("min-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("1vh");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("1vw");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("fit-content(1em)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("minmax(100px, auto)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("minmax(max-content, 2fr)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("min-content max-content auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("100px 150px 390px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("10% 33.3%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("0.5fr 3fr 1fr");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">("100px minmax(100px, auto) 10% 0.5fr fit-content(400px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridAutoRows">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">(0);
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("1vh");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("1vw");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("max-content");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("min-content");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("fit-content(1em)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("minmax(100px, auto)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("minmax(max-content, 2fr)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("min-content max-content auto");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("100px 150px 390px");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("10% 33.3%");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("0.5fr 3fr 1fr");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">("100px minmax(100px, auto) 10% 0.5fr fit-content(400px)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridAutoRows">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"gridColumn">(3);
expectStyledSystemPropertyAssignable<"gridColumn">("auto");
expectStyledSystemPropertyAssignable<"gridColumn">("1");
expectStyledSystemPropertyAssignable<"gridColumn">("1 / 3");
expectStyledSystemPropertyAssignable<"gridColumn">("1 / span 2");
expectStyledSystemPropertyAssignable<"gridColumn">("main-start");
expectStyledSystemPropertyAssignable<"gridColumn">("main-start / main-end");
expectStyledSystemPropertyAssignable<"gridColumn">({ base: "1 / 3", xs: "1 / 3", sm: "1 / 3", md: "1 / 3", lg: "1 / 3", xl: "1 / 3" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_gridColumn">

expectStyledSystemPropertyAssignable<"gridColumnEnd">("auto");
expectStyledSystemPropertyAssignable<"gridColumnEnd">("somegridarea");
expectStyledSystemPropertyAssignable<"gridColumnEnd">("2");
expectStyledSystemPropertyAssignable<"gridColumnEnd">("somegridarea 4");
expectStyledSystemPropertyAssignable<"gridColumnEnd">("span 3");
expectStyledSystemPropertyAssignable<"gridColumnEnd">("5 somegridarea span");
expectStyledSystemPropertyAssignable<"gridColumnEnd">({ base: "2", xs: "2", sm: "2", md: "2", lg: "2", xl: "2" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_gridColumnEnd">

expectStyledSystemPropertyAssignable<"gridColumnSpan">(3);
expectStyledSystemPropertyAssignable<"gridColumnSpan">({ base: 3, xs: 3, sm: 3, md: 3, lg: 3, xl: 3 });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_gridColumnSpan">

expectStyledSystemPropertyAssignable<"gridColumnStart">("auto");
expectStyledSystemPropertyAssignable<"gridColumnStart">("somegridarea");
expectStyledSystemPropertyAssignable<"gridColumnStart">("2");
expectStyledSystemPropertyAssignable<"gridColumnStart">("somegridarea 4");
expectStyledSystemPropertyAssignable<"gridColumnStart">("span somegridarea 5");
expectStyledSystemPropertyAssignable<"gridColumnStart">({ base: "auto", xs: "auto", sm: "auto", md: "auto", lg: "auto", xl: "auto" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_gridColumnStart">

expectStyledSystemPropertyAssignable<"gridRow">(3);
expectStyledSystemPropertyAssignable<"gridRow">("auto");
expectStyledSystemPropertyAssignable<"gridRow">("1");
expectStyledSystemPropertyAssignable<"gridRow">("1 / 3");
expectStyledSystemPropertyAssignable<"gridRow">("1 / span 2");
expectStyledSystemPropertyAssignable<"gridRow">("main-start");
expectStyledSystemPropertyAssignable<"gridRow">("main-start / main-end");
expectStyledSystemPropertyAssignable<"gridRow">({ base: "1 / 3", xs: "1 / 3", sm: "1 / 3", md: "1 / 3", lg: "1 / 3", xl: "1 / 3" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_gridRow">

expectStyledSystemPropertyAssignable<"gridRowEnd">("auto");
expectStyledSystemPropertyAssignable<"gridRowEnd">("somegridarea");
expectStyledSystemPropertyAssignable<"gridRowEnd">("2");
expectStyledSystemPropertyAssignable<"gridRowEnd">("somegridarea 4");
expectStyledSystemPropertyAssignable<"gridRowEnd">("span somegridarea 5");
expectStyledSystemPropertyAssignable<"gridRowEnd">({ base: "auto", xs: "auto", sm: "auto", md: "auto", lg: "auto", xl: "auto" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_gridRowEnd">

expectStyledSystemPropertyAssignable<"gridRowSpan">(3);
expectStyledSystemPropertyAssignable<"gridRowSpan">({ base: 3, xs: 3, sm: 3, md: 3, lg: 3, xl: 3 });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_gridRowSpan">


expectStyledSystemPropertyAssignable<"gridRowStart">("auto");
expectStyledSystemPropertyAssignable<"gridRowStart">("somegridarea");
expectStyledSystemPropertyAssignable<"gridRowStart">("2");
expectStyledSystemPropertyAssignable<"gridRowStart">("somegridarea 4");
expectStyledSystemPropertyAssignable<"gridRowStart">("span somegridarea 5");
expectStyledSystemPropertyAssignable<"gridRowStart">({ base: "auto", xs: "auto", sm: "auto", md: "auto", lg: "auto", xl: "auto" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_gridRowStart">


expectStyledSystemPropertyAssignable<"gridTemplateAreas">("none");
expectStyledSystemPropertyAssignable<"gridTemplateAreas">("a b");
expectStyledSystemPropertyAssignable<"gridTemplateAreas">(`
    "a b b"
    "a c d"
`);
expectStyledSystemPropertyAssignable<"gridTemplateAreas">("\"head head\" \"nav  main\" \"nav  foot\"");
expectStyledSystemPropertyAssignable<"gridTemplateAreas">({ base: "none", xs: "none", sm: "none", md: "none", lg: "none", xl: "none" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_gridTemplateAreas">

expectStyledSystemPropertyAssignable<"gridTemplateColumns">("none");
expectStyledSystemPropertyAssignable<"gridTemplateColumns">(1);
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("max-content");
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("min-content");
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("subgrid");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("1vh");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("1vw");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("fit-content(1em)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("100px 1fr");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("[linename] 100px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("minmax(100px, 1fr)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("fit-content(40%)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("repeat(3, 200px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("masonry");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">("200px repeat(auto-fill, 100px) 300px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">(`
    [linename1] 100px [linename2]
    repeat(auto-fit, [linename3 linename4] 300px)
    100px
`);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateColumns">({ base: "fit-content(40%)", xs: "none", sm: "none", md: "none", lg: "none", xl: "none" });


expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("none");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("1vh");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("1vw");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("max-content");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("min-content");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("fit-content(1em)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("100px 1fr");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("[linename] 100px");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("minmax(100px, 1fr)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("fit-content(40%)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("repeat(3, 200px)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("subgrid");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("masonry");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">("200px repeat(auto-fill, 100px) 300px");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">(`
    [linename1] 100px [linename2]
    repeat(auto-fit, [linename3 linename4] 300px)
    100px
`);
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateColumns">({ base: "none", xs: "none", sm: "none", md: "none", lg: "none", xl: "none" });

expectStyledSystemPropertyAssignable<"gridTemplate">("none");
expectStyledSystemPropertyAssignable<"gridTemplate">("100px 1fr / 50px 1fr");
expectStyledSystemPropertyAssignable<"gridTemplate">("auto 1fr / auto 1fr auto");
expectStyledSystemPropertyAssignable<"gridTemplate">("[linename] 100px / [columnname1] 30% [columnname2] 70%");
expectStyledSystemPropertyAssignable<"gridTemplate">("fit-content(100px) / fit-content(40%)");
expectStyledSystemPropertyAssignable<"gridTemplate">("\"a a a\" \"b b b\"");
expectStyledSystemPropertyAssignable<"gridTemplate">(`
    [header-top] "a a a"     [header-bottom]
    [main-top] "b b b" 1fr [main-bottom]
            / auto 1fr auto
`);
expectStyledSystemPropertyAssignable<"gridTemplate">({ base: "none", xs: "none", sm: "none", md: "none", lg: "none", xl: "none" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_gridTemplate">

expectStyledSystemPropertyAssignable<"gridTemplateRows">("none");
expectStyledSystemPropertyAssignable<"gridTemplateRows">(1);
expectStyledSystemPropertyAssignable<"gridTemplateRows">("max-content");
expectStyledSystemPropertyAssignable<"gridTemplateRows">("min-content");
expectStyledSystemPropertyAssignable<"gridTemplateRows">("subgrid");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("1vh");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("1vw");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("fit-content(1em)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("100px 1fr");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("[linename] 100px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("minmax(100px, 1fr)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("fit-content(40%)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("repeat(3, 200px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("masonry");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">("200px repeat(auto-fill, 100px) 300px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">(`
    [linename1] 100px [linename2]
    repeat(auto-fit, [linename3 linename4] 300px)
    100px
`);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"gridTemplateRows">({ base: "masonry", xs: "none", sm: "none", md: "none", lg: "none", xl: "none" });

expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("none");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("1vh");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("1vw");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("max-content");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("min-content");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("fit-content(1em)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("100px 1fr");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("[linename] 100px");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("minmax(100px, 1fr)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("fit-content(40%)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("repeat(3, 200px)");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("subgrid");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("masonry");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">("200px repeat(auto-fill, 100px) 300px");
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">(`
    [linename1] 100px [linename2]
    repeat(auto-fit, [linename3 linename4] 300px)
    100px
`);
expectStyledSystemPropertyAssignable<"UNSAFE_gridTemplateRows">({ base: "none", xs: "none", sm: "none", md: "none", lg: "none", xl: "none" });


expectStyledSystemPropertyAssignable<"height">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"height">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"height">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"height">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"height">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"height">("1vh");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"height">("1vw");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"height">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"height">("max-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"height">("min-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"height">("fit-content(1em)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"height">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"height">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_height">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_height">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_height">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_height">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_height">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_height">("1vh");
expectStyledSystemPropertyAssignable<"UNSAFE_height">("1vw");
expectStyledSystemPropertyAssignable<"UNSAFE_height">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_height">("max-content");
expectStyledSystemPropertyAssignable<"UNSAFE_height">("min-content");
expectStyledSystemPropertyAssignable<"UNSAFE_height">("fit-content(1em)");
expectStyledSystemPropertyAssignable<"UNSAFE_height">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_height">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"justifyContent">("center");
expectStyledSystemPropertyAssignable<"justifyContent">("start");
expectStyledSystemPropertyAssignable<"justifyContent">("end");
expectStyledSystemPropertyAssignable<"justifyContent">("flex-start");
expectStyledSystemPropertyAssignable<"justifyContent">("flex-end");
expectStyledSystemPropertyAssignable<"justifyContent">("left");
expectStyledSystemPropertyAssignable<"justifyContent">("right");
expectStyledSystemPropertyAssignable<"justifyContent">("space-between");
expectStyledSystemPropertyAssignable<"justifyContent">("space-around");
expectStyledSystemPropertyAssignable<"justifyContent">("space-evenly");
expectStyledSystemPropertyAssignable<"justifyContent">("baseline");
expectStyledSystemPropertyAssignable<"justifyContent">("first baseline");
expectStyledSystemPropertyAssignable<"justifyContent">("last baseline");
expectStyledSystemPropertyAssignable<"justifyContent">("stretch");
expectStyledSystemPropertyAssignable<"justifyContent">("normal");
expectStyledSystemPropertyAssignable<"justifyContent">("safe center");
expectStyledSystemPropertyAssignable<"justifyContent">("unsafe center");
expectStyledSystemPropertyAssignable<"justifyContent">({ base: "center", xs: "center", sm: "center", md: "center", lg: "center", xl: "center" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_justifyContent">

expectStyledSystemPropertyAssignable<"justifyItems">("center");
expectStyledSystemPropertyAssignable<"justifyItems">("start");
expectStyledSystemPropertyAssignable<"justifyItems">("end");
expectStyledSystemPropertyAssignable<"justifyItems">("self-start");
expectStyledSystemPropertyAssignable<"justifyItems">("self-end");
expectStyledSystemPropertyAssignable<"justifyItems">("flex-start");
expectStyledSystemPropertyAssignable<"justifyItems">("flex-end");
expectStyledSystemPropertyAssignable<"justifyItems">("left");
expectStyledSystemPropertyAssignable<"justifyItems">("right");
expectStyledSystemPropertyAssignable<"justifyItems">("space-between");
expectStyledSystemPropertyAssignable<"justifyItems">("space-around");
expectStyledSystemPropertyAssignable<"justifyItems">("space-evenly");
expectStyledSystemPropertyAssignable<"justifyItems">("baseline");
expectStyledSystemPropertyAssignable<"justifyItems">("first baseline");
expectStyledSystemPropertyAssignable<"justifyItems">("last baseline");
expectStyledSystemPropertyAssignable<"justifyItems">("stretch");
expectStyledSystemPropertyAssignable<"justifyItems">("normal");
expectStyledSystemPropertyAssignable<"justifyItems">("safe center");
expectStyledSystemPropertyAssignable<"justifyItems">("unsafe center");
expectStyledSystemPropertyAssignable<"justifyItems">({ base: "center", xs: "center", sm: "center", md: "center", lg: "center", xl: "center" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_justifyItems">

expectStyledSystemPropertyAssignable<"justifySelf">("center");
expectStyledSystemPropertyAssignable<"justifySelf">("start");
expectStyledSystemPropertyAssignable<"justifySelf">("end");
expectStyledSystemPropertyAssignable<"justifySelf">("self-start");
expectStyledSystemPropertyAssignable<"justifySelf">("self-end");
expectStyledSystemPropertyAssignable<"justifySelf">("flex-start");
expectStyledSystemPropertyAssignable<"justifySelf">("flex-end");
expectStyledSystemPropertyAssignable<"justifySelf">("left");
expectStyledSystemPropertyAssignable<"justifySelf">("right");
expectStyledSystemPropertyAssignable<"justifySelf">("space-between");
expectStyledSystemPropertyAssignable<"justifySelf">("space-around");
expectStyledSystemPropertyAssignable<"justifySelf">("space-evenly");
expectStyledSystemPropertyAssignable<"justifySelf">("baseline");
expectStyledSystemPropertyAssignable<"justifySelf">("first baseline");
expectStyledSystemPropertyAssignable<"justifySelf">("last baseline");
expectStyledSystemPropertyAssignable<"justifySelf">("stretch");
expectStyledSystemPropertyAssignable<"justifySelf">("normal");
expectStyledSystemPropertyAssignable<"justifySelf">("auto");
expectStyledSystemPropertyAssignable<"justifySelf">("safe center");
expectStyledSystemPropertyAssignable<"justifySelf">("unsafe center");
expectStyledSystemPropertyAssignable<"justifySelf">({ base: "center", xs: "center", sm: "center", md: "center", lg: "center", xl: "center" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_justifySelf">

expectStyledSystemPropertyAssignable<"left">("1px");
expectStyledSystemPropertyAssignable<"left">("-1px");
expectStyledSystemPropertyAssignable<"left">("1em");
expectStyledSystemPropertyAssignable<"left">("1rem");
expectStyledSystemPropertyAssignable<"left">("1%");
expectStyledSystemPropertyAssignable<"left">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"left">("auto");
expectStyledSystemPropertyAssignable<"left">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_left">

expectStyledSystemPropertyAssignable<"letterSpacing">("1px");
expectStyledSystemPropertyAssignable<"letterSpacing">("0.3em");
expectStyledSystemPropertyAssignable<"letterSpacing">(".3px");
expectStyledSystemPropertyAssignable<"letterSpacing">("auto");
expectStyledSystemPropertyAssignable<"letterSpacing">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_letterSpacing">

expectStyledSystemPropertyAssignable<"lineHeight">(1);
expectStyledSystemPropertyAssignable<"lineHeight">(2);
expectStyledSystemPropertyAssignable<"lineHeight">(3);
expectStyledSystemPropertyAssignable<"lineHeight">(4);
expectStyledSystemPropertyAssignable<"lineHeight">(5);
expectStyledSystemPropertyAssignable<"lineHeight">(6);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"lineHeight">("normal");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"lineHeight">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"lineHeight">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"lineHeight">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"lineHeight">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"lineHeight">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"lineHeight">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_lineHeight">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_lineHeight">(2);
expectStyledSystemPropertyAssignable<"UNSAFE_lineHeight">(3);
expectStyledSystemPropertyAssignable<"UNSAFE_lineHeight">(4);
expectStyledSystemPropertyAssignable<"UNSAFE_lineHeight">(5);
expectStyledSystemPropertyAssignable<"UNSAFE_lineHeight">(6);
expectStyledSystemPropertyAssignable<"UNSAFE_lineHeight">("normal");
expectStyledSystemPropertyAssignable<"UNSAFE_lineHeight">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_lineHeight">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_lineHeight">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_lineHeight">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_lineHeight">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_lineHeight">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"margin">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"margin">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"margin">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"margin">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"margin">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"margin">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"margin">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"margin">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"margin">("2px 1em 0 auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"margin">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_margin">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_margin">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_margin">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_margin">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_margin">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_margin">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_margin">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_margin">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_margin">("2px 1em 0 auto");
expectStyledSystemPropertyAssignable<"UNSAFE_margin">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"marginBottom">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginBottom">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginBottom">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginBottom">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginBottom">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginBottom">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginBottom">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginBottom">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginBottom">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_marginBottom">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_marginBottom">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_marginBottom">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_marginBottom">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_marginBottom">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_marginBottom">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_marginBottom">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_marginBottom">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_marginBottom">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"marginLeft">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginLeft">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginLeft">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginLeft">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginLeft">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginLeft">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginLeft">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginLeft">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginLeft">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_marginLeft">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_marginLeft">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_marginLeft">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_marginLeft">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_marginLeft">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_marginLeft">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_marginLeft">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_marginLeft">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_marginLeft">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"marginRight">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginRight">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginRight">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginRight">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginRight">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginRight">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginRight">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginRight">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginRight">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_marginRight">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_marginRight">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_marginRight">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_marginRight">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_marginRight">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_marginRight">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_marginRight">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_marginRight">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_marginRight">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"marginTop">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginTop">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginTop">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginTop">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginTop">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginTop">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginTop">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginTop">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginTop">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_marginTop">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_marginTop">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_marginTop">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_marginTop">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_marginTop">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_marginTop">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_marginTop">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_marginTop">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_marginTop">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"marginX">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginX">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginX">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginX">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginX">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginX">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginX">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginX">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginX">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_marginX">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_marginX">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_marginX">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_marginX">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_marginX">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_marginX">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_marginX">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_marginX">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_marginX">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"marginY">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginY">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginY">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginY">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginY">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginY">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginY">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginY">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"marginY">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_marginY">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_marginY">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_marginY">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_marginY">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_marginY">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_marginY">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_marginY">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_marginY">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_marginY">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"maxHeight">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxHeight">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxHeight">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxHeight">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxHeight">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxHeight">("1vh");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxHeight">("1vw");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxHeight">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxHeight">("max-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxHeight">("min-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxHeight">("fit-content(1em)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxHeight">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxHeight">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_maxHeight">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_maxHeight">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_maxHeight">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_maxHeight">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_maxHeight">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_maxHeight">("1vh");
expectStyledSystemPropertyAssignable<"UNSAFE_maxHeight">("1vw");
expectStyledSystemPropertyAssignable<"UNSAFE_maxHeight">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_maxHeight">("max-content");
expectStyledSystemPropertyAssignable<"UNSAFE_maxHeight">("min-content");
expectStyledSystemPropertyAssignable<"UNSAFE_maxHeight">("fit-content(1em)");
expectStyledSystemPropertyAssignable<"UNSAFE_maxHeight">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_maxHeight">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"maxWidth">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxWidth">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxWidth">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxWidth">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxWidth">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxWidth">("1vh");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxWidth">("1vw");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxWidth">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxWidth">("max-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxWidth">("min-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxWidth">("fit-content(1em)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxWidth">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"maxWidth">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_maxWidth">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_maxWidth">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_maxWidth">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_maxWidth">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_maxWidth">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_maxWidth">("1vh");
expectStyledSystemPropertyAssignable<"UNSAFE_maxWidth">("1vw");
expectStyledSystemPropertyAssignable<"UNSAFE_maxWidth">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_maxWidth">("max-content");
expectStyledSystemPropertyAssignable<"UNSAFE_maxWidth">("min-content");
expectStyledSystemPropertyAssignable<"UNSAFE_maxWidth">("fit-content(1em)");
expectStyledSystemPropertyAssignable<"UNSAFE_maxWidth">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_maxWidth">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"minHeight">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minHeight">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minHeight">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minHeight">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minHeight">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minHeight">("1vh");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minHeight">("1vw");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minHeight">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minHeight">("max-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minHeight">("min-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minHeight">("fit-content(1em)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minHeight">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minHeight">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_minHeight">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_minHeight">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_minHeight">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_minHeight">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_minHeight">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_minHeight">("1vh");
expectStyledSystemPropertyAssignable<"UNSAFE_minHeight">("1vw");
expectStyledSystemPropertyAssignable<"UNSAFE_minHeight">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_minHeight">("max-content");
expectStyledSystemPropertyAssignable<"UNSAFE_minHeight">("min-content");
expectStyledSystemPropertyAssignable<"UNSAFE_minHeight">("fit-content(1em)");
expectStyledSystemPropertyAssignable<"UNSAFE_minHeight">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_minHeight">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"minWidth">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minWidth">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minWidth">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minWidth">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minWidth">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minWidth">("1vh");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minWidth">("1vw");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minWidth">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minWidth">("max-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minWidth">("min-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minWidth">("fit-content(1em)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minWidth">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"minWidth">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_minWidth">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_minWidth">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_minWidth">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_minWidth">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_minWidth">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_minWidth">("1vh");
expectStyledSystemPropertyAssignable<"UNSAFE_minWidth">("1vw");
expectStyledSystemPropertyAssignable<"UNSAFE_minWidth">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_minWidth">("max-content");
expectStyledSystemPropertyAssignable<"UNSAFE_minWidth">("min-content");
expectStyledSystemPropertyAssignable<"UNSAFE_minWidth">("fit-content(1em)");
expectStyledSystemPropertyAssignable<"UNSAFE_minWidth">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_minWidth">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"objectFit">("fill");
expectStyledSystemPropertyAssignable<"objectFit">("contain");
expectStyledSystemPropertyAssignable<"objectFit">("cover");
expectStyledSystemPropertyAssignable<"objectFit">("none");
expectStyledSystemPropertyAssignable<"objectFit">("scale-down");
expectStyledSystemPropertyAssignable<"objectFit">({ base: "fill", xs: "fill", sm: "fill", md: "fill", lg: "fill", xl: "fill" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_objectFit">

expectStyledSystemPropertyAssignable<"objectPosition">("50% 50%");
expectStyledSystemPropertyAssignable<"objectPosition">("right top");
expectStyledSystemPropertyAssignable<"objectPosition">("left bottom");
expectStyledSystemPropertyAssignable<"objectPosition">("250px 125px");
expectStyledSystemPropertyAssignable<"objectPosition">({ base: "right top", xs: "right top", sm: "right top", md: "right top", lg: "right top", xl: "right top" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_objectPosition">

expectStyledSystemPropertyAssignable<"opacity">(0.9);
expectStyledSystemPropertyAssignable<"opacity">("90%");
expectStyledSystemPropertyAssignable<"opacity">({ base: 0.9, xs: 0.9, sm: 0.9, md: 0.9, lg: 0.9, xl: 0.9 });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_opacity">

expectStyledSystemPropertyAssignable<"order">(1);
expectStyledSystemPropertyAssignable<"order">(-1);
expectStyledSystemPropertyAssignable<"order">({ base: 1, xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_order">

expectStyledSystemPropertyAssignable<"outline">("solid");
expectStyledSystemPropertyAssignable<"outline">("#f66 dashed");
expectStyledSystemPropertyAssignable<"outline">("inset thick");
expectStyledSystemPropertyAssignable<"outline">("green solid 3px");
expectStyledSystemPropertyAssignable<"outline">("none");
expectStyledSystemPropertyAssignable<"outline">({ base: "none", xs: "none", sm: "none", md: "none", lg: "none", xl: "none" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_outline">

expectStyledSystemPropertyAssignable<"overflow">("auto");
expectStyledSystemPropertyAssignable<"overflow">("clip");
expectStyledSystemPropertyAssignable<"overflow">("hidden");
expectStyledSystemPropertyAssignable<"overflow">("scroll");
expectStyledSystemPropertyAssignable<"overflow">("visible");
expectStyledSystemPropertyAssignable<"overflow">({ base: "visible", xs: "visible", sm: "visible", md: "visible", lg: "visible", xl: "visible" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_overflow">

expectStyledSystemPropertyAssignable<"overflowX">("auto");
expectStyledSystemPropertyAssignable<"overflowX">("clip");
expectStyledSystemPropertyAssignable<"overflowX">("hidden");
expectStyledSystemPropertyAssignable<"overflowX">("scroll");
expectStyledSystemPropertyAssignable<"overflowX">("visible");
expectStyledSystemPropertyAssignable<"overflowX">({ base: "visible", xs: "visible", sm: "visible", md: "visible", lg: "visible", xl: "visible" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_overflowX">

expectStyledSystemPropertyAssignable<"overflowY">("auto");
expectStyledSystemPropertyAssignable<"overflowY">("clip");
expectStyledSystemPropertyAssignable<"overflowY">("hidden");
expectStyledSystemPropertyAssignable<"overflowY">("scroll");
expectStyledSystemPropertyAssignable<"overflowY">("visible");
expectStyledSystemPropertyAssignable<"overflowY">({ base: "visible", xs: "visible", sm: "visible", md: "visible", lg: "visible", xl: "visible" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_overflowY">

expectStyledSystemPropertyAssignable<"padding">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"padding">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"padding">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"padding">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"padding">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"padding">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"padding">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"padding">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"padding">("2px 1em 0 auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"padding">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_padding">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_padding">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_padding">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_padding">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_padding">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_padding">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_padding">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_padding">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_padding">("2px 1em 0 auto");
expectStyledSystemPropertyAssignable<"UNSAFE_padding">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"paddingBottom">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingBottom">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingBottom">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingBottom">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingBottom">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingBottom">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingBottom">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingBottom">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingBottom">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_paddingBottom">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_paddingBottom">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingBottom">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingBottom">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingBottom">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingBottom">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingBottom">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingBottom">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingBottom">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"paddingLeft">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingLeft">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingLeft">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingLeft">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingLeft">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingLeft">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingLeft">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingLeft">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingLeft">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_paddingLeft">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_paddingLeft">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingLeft">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingLeft">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingLeft">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingLeft">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingLeft">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingLeft">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingLeft">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"paddingRight">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingRight">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingRight">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingRight">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingRight">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingRight">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingRight">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingRight">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingRight">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_paddingRight">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_paddingRight">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingRight">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingRight">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingRight">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingRight">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingRight">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingRight">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingRight">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"paddingTop">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingTop">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingTop">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingTop">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingTop">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingTop">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingTop">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingTop">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingTop">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_paddingTop">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_paddingTop">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingTop">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingTop">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingTop">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingTop">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingTop">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingTop">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingTop">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"paddingX">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingX">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingX">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingX">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingX">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingX">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingX">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingX">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingX">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_paddingX">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_paddingX">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingX">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingX">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingX">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingX">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingX">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingX">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingX">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"paddingY">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingY">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingY">("-1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingY">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingY">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingY">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingY">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingY">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"paddingY">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_paddingY">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_paddingY">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingY">("-1px");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingY">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingY">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingY">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingY">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingY">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_paddingY">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"pointerEvents">("auto");
expectStyledSystemPropertyAssignable<"pointerEvents">("none");
expectStyledSystemPropertyAssignable<"pointerEvents">("visiblePainted");
expectStyledSystemPropertyAssignable<"pointerEvents">("visibleFill");
expectStyledSystemPropertyAssignable<"pointerEvents">("visibleStroke");
expectStyledSystemPropertyAssignable<"pointerEvents">("visible");
expectStyledSystemPropertyAssignable<"pointerEvents">("painted");
expectStyledSystemPropertyAssignable<"pointerEvents">("fill");
expectStyledSystemPropertyAssignable<"pointerEvents">("stroke");
expectStyledSystemPropertyAssignable<"pointerEvents">("all");
expectStyledSystemPropertyAssignable<"pointerEvents">({ base: "fill", xs: "fill", sm: "fill", md: "fill", lg: "fill", xl: "fill" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_pointerEvents">

expectStyledSystemPropertyAssignable<"position">("static");
expectStyledSystemPropertyAssignable<"position">("fixed");
expectStyledSystemPropertyAssignable<"position">("absolute");
expectStyledSystemPropertyAssignable<"position">("relative");
expectStyledSystemPropertyAssignable<"position">("sticky");
expectStyledSystemPropertyAssignable<"position">({ base: "fixed", xs: "fixed", sm: "fixed", md: "fixed", lg: "fixed", xl: "fixed" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_position">


expectStyledSystemPropertyAssignable<"resize">("none");
expectStyledSystemPropertyAssignable<"resize">("both");
expectStyledSystemPropertyAssignable<"resize">("horizontal");
expectStyledSystemPropertyAssignable<"resize">("vertical");
expectStyledSystemPropertyAssignable<"resize">("block");
expectStyledSystemPropertyAssignable<"resize">("inline");
expectStyledSystemPropertyAssignable<"resize">({ base: "both", xs: "both", sm: "both", md: "both", lg: "both", xl: "both" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_resize">

expectStyledSystemPropertyAssignable<"right">("1px");
expectStyledSystemPropertyAssignable<"right">("-1px");
expectStyledSystemPropertyAssignable<"right">("1em");
expectStyledSystemPropertyAssignable<"right">("1rem");
expectStyledSystemPropertyAssignable<"right">("1%");
expectStyledSystemPropertyAssignable<"right">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"right">("auto");
expectStyledSystemPropertyAssignable<"right">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_right">

expectStyledSystemPropertyAssignable<"rowGap">(1);
expectStyledSystemPropertyAssignable<"rowGap">("normal");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"rowGap">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"rowGap">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"rowGap">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"rowGap">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"rowGap">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"rowGap">({ base: "1rem", xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });

expectStyledSystemPropertyAssignable<"UNSAFE_rowGap">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_rowGap">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_rowGap">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_rowGap">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_rowGap">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_rowGap">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_rowGap">("normal");
expectStyledSystemPropertyAssignable<"UNSAFE_rowGap">({ base: "normal", xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });

expectStyledSystemPropertyAssignable<"stroke">("white");
expectStyledSystemPropertyAssignable<"stroke">("purple-1");
expectStyledSystemPropertyAssignable<"stroke">("alias-primary");
expectStyledSystemPropertyAssignable<"stroke">("currentcolor");
expectStyledSystemPropertyAssignable<"stroke">("transparent");
expectStyledSystemPropertyAssignable<"stroke">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"stroke">("#fff");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"stroke">("rgb(255, 255, 128)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"stroke">("rgba(255, 255, 128, .5)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"stroke">("hsl(50, 33%, 25%)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"stroke">("hsla(50, 33%, 25%, .75)");

expectStyledSystemPropertyAssignable<"UNSAFE_stroke">("#fff");
expectStyledSystemPropertyAssignable<"UNSAFE_stroke">("white");
expectStyledSystemPropertyAssignable<"UNSAFE_stroke">("rgb(255, 255, 128)");
expectStyledSystemPropertyAssignable<"UNSAFE_stroke">("rgba(255, 255, 128, .5)");
expectStyledSystemPropertyAssignable<"UNSAFE_stroke">("hsl(50, 33%, 25%)");
expectStyledSystemPropertyAssignable<"UNSAFE_stroke">("hsla(50, 33%, 25%, .75)");
expectStyledSystemPropertyAssignable<"UNSAFE_stroke">("purple-1");
expectStyledSystemPropertyAssignable<"UNSAFE_stroke">("alias-primary");
expectStyledSystemPropertyAssignable<"UNSAFE_stroke">("currentcolor");
expectStyledSystemPropertyAssignable<"UNSAFE_stroke">("transparent");
expectStyledSystemPropertyAssignable<"UNSAFE_stroke">({ base: "purple-1", xs: "purple-1", sm: "purple-1", md: "purple-1", lg: "purple-1", xl: "purple-1" });

expectStyledSystemPropertyAssignable<"textAlign">("start");
expectStyledSystemPropertyAssignable<"textAlign">("end");
expectStyledSystemPropertyAssignable<"textAlign">("left");
expectStyledSystemPropertyAssignable<"textAlign">("right");
expectStyledSystemPropertyAssignable<"textAlign">("center");
expectStyledSystemPropertyAssignable<"textAlign">("justify");
expectStyledSystemPropertyAssignable<"textAlign">("justify-all");
expectStyledSystemPropertyAssignable<"textAlign">("match-parent");
expectStyledSystemPropertyAssignable<"textAlign">({ base: "start", xs: "start", sm: "start", md: "start", lg: "start", xl: "start" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_textAlign">


expectStyledSystemPropertyAssignable<"textDecoration">("underline");
expectStyledSystemPropertyAssignable<"textDecoration">("underline dotted");
expectStyledSystemPropertyAssignable<"textDecoration">("overline #FF3028");
expectStyledSystemPropertyAssignable<"textDecoration">({ base: "underline", xs: "underline", sm: "underline", md: "underline", lg: "underline", xl: "underline" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_textDecoration">

expectStyledSystemPropertyAssignable<"textOverflow">("clip");
expectStyledSystemPropertyAssignable<"textOverflow">("ellipsis");
expectStyledSystemPropertyAssignable<"textOverflow">("ellipsis ellipsis");
expectStyledSystemPropertyAssignable<"textOverflow">("ellipsis \" [..]\"");
expectStyledSystemPropertyAssignable<"textOverflow">({ base: "clip", xs: "clip", sm: "clip", md: "clip", lg: "clip", xl: "clip" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_textOverflow">

expectStyledSystemPropertyAssignable<"top">("1px");
expectStyledSystemPropertyAssignable<"top">("-1px");
expectStyledSystemPropertyAssignable<"top">("1em");
expectStyledSystemPropertyAssignable<"top">("1rem");
expectStyledSystemPropertyAssignable<"top">("1%");
expectStyledSystemPropertyAssignable<"top">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"top">("auto");
expectStyledSystemPropertyAssignable<"top">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_top">

expectStyledSystemPropertyAssignable<"transform">("none");
expectStyledSystemPropertyAssignable<"transform">("matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0)");
expectStyledSystemPropertyAssignable<"transform">("matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)");
expectStyledSystemPropertyAssignable<"transform">("perspective(17px)");
expectStyledSystemPropertyAssignable<"transform">("rotate(0.5turn)");
expectStyledSystemPropertyAssignable<"transform">("rotate3d(1, 2.0, 3.0, 10deg)");
expectStyledSystemPropertyAssignable<"transform">("rotateX(10deg)");
expectStyledSystemPropertyAssignable<"transform">("rotateY(10deg)");
expectStyledSystemPropertyAssignable<"transform">("rotateZ(10deg)");
expectStyledSystemPropertyAssignable<"transform">("translate(12px, 50%)");
expectStyledSystemPropertyAssignable<"transform">("translate3d(12px, 50%, 3em)");
expectStyledSystemPropertyAssignable<"transform">("translateX(2em)");
expectStyledSystemPropertyAssignable<"transform">("translateY(3in)");
expectStyledSystemPropertyAssignable<"transform">("translateZ(2px)");
expectStyledSystemPropertyAssignable<"transform">("scale(2, 0.5)");
expectStyledSystemPropertyAssignable<"transform">("scale3d(2.5, 1.2, 0.3)");
expectStyledSystemPropertyAssignable<"transform">("scaleX(2)");
expectStyledSystemPropertyAssignable<"transform">("scaleY(0.5)");
expectStyledSystemPropertyAssignable<"transform">("scaleZ(0.3)");
expectStyledSystemPropertyAssignable<"transform">("skew(30deg, 20deg)");
expectStyledSystemPropertyAssignable<"transform">("skewX(30deg)");
expectStyledSystemPropertyAssignable<"transform">("skewY(1.07rad)");
expectStyledSystemPropertyAssignable<"transform">("translateX(10px) rotate(10deg) translateY(5px)");
expectStyledSystemPropertyAssignable<"transform">("perspective(500px) translate(10px, 0, 20px) rotateY(3deg)");
expectStyledSystemPropertyAssignable<"transform">({ base: "none", xs: "none", sm: "none", md: "none", lg: "none", xl: "none" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_transform">

expectStyledSystemPropertyAssignable<"transformOrigin">("2px");
expectStyledSystemPropertyAssignable<"transformOrigin">("bottom");
expectStyledSystemPropertyAssignable<"transformOrigin">("3cm 2px");
expectStyledSystemPropertyAssignable<"transformOrigin">("left 2px");
expectStyledSystemPropertyAssignable<"transformOrigin">("right top");
expectStyledSystemPropertyAssignable<"transformOrigin">("top right");
expectStyledSystemPropertyAssignable<"transformOrigin">("2px 30% 10px");
expectStyledSystemPropertyAssignable<"transformOrigin">("left 5px -3px");
expectStyledSystemPropertyAssignable<"transformOrigin">("right bottom 2cm");
expectStyledSystemPropertyAssignable<"transformOrigin">("bottom right 2cm");
expectStyledSystemPropertyAssignable<"transformOrigin">({ base: "2px", xs: "2px", sm: "2px", md: "2px", lg: "2px", xl: "2px" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_transformOrigin">

expectStyledSystemPropertyAssignable<"transformStyle">("flat");
expectStyledSystemPropertyAssignable<"transformStyle">("preserve-3d");
expectStyledSystemPropertyAssignable<"transformStyle">({ base: "flat", xs: "flat", sm: "flat", md: "flat", lg: "flat", xl: "flat" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_transformStyle">

expectStyledSystemPropertyAssignable<"verticalAlign">("baseline");
expectStyledSystemPropertyAssignable<"verticalAlign">("sub");
expectStyledSystemPropertyAssignable<"verticalAlign">("super");
expectStyledSystemPropertyAssignable<"verticalAlign">("text-top");
expectStyledSystemPropertyAssignable<"verticalAlign">("text-bottom");
expectStyledSystemPropertyAssignable<"verticalAlign">("middle");
expectStyledSystemPropertyAssignable<"verticalAlign">("top");
expectStyledSystemPropertyAssignable<"verticalAlign">("bottom");
expectStyledSystemPropertyAssignable<"verticalAlign">("1px");
expectStyledSystemPropertyAssignable<"verticalAlign">("1em");
expectStyledSystemPropertyAssignable<"verticalAlign">("1rem");
expectStyledSystemPropertyAssignable<"verticalAlign">("1%");
expectStyledSystemPropertyAssignable<"verticalAlign">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"verticalAlign">({ base: "middle", xs: "middle", sm: "middle", md: "middle", lg: "middle", xl: "middle" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_verticalAlign">

expectStyledSystemPropertyAssignable<"visibility">("visible");
expectStyledSystemPropertyAssignable<"visibility">("hidden");
expectStyledSystemPropertyAssignable<"visibility">("collapse");
expectStyledSystemPropertyAssignable<"visibility">({ base: "visible", xs: "visible", sm: "visible", md: "visible", lg: "visible", xl: "visible" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_visibility">

expectStyledSystemPropertyAssignable<"whiteSpace">("normal");
expectStyledSystemPropertyAssignable<"whiteSpace">("nowrap");
expectStyledSystemPropertyAssignable<"whiteSpace">("pre");
expectStyledSystemPropertyAssignable<"whiteSpace">("pre-wrap");
expectStyledSystemPropertyAssignable<"whiteSpace">("pre-line");
expectStyledSystemPropertyAssignable<"whiteSpace">("break-spaces");
expectStyledSystemPropertyAssignable<"whiteSpace">({ base: "nowrap", xs: "nowrap", sm: "nowrap", md: "nowrap", lg: "nowrap", xl: "nowrap" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_whiteSpace">


expectStyledSystemPropertyAssignable<"willChange">("auto");
expectStyledSystemPropertyAssignable<"willChange">("scroll-position");
expectStyledSystemPropertyAssignable<"willChange">("contents");
expectStyledSystemPropertyAssignable<"willChange">("transform");
expectStyledSystemPropertyAssignable<"willChange">("opacity");
expectStyledSystemPropertyAssignable<"willChange">("left, top");
expectStyledSystemPropertyAssignable<"willChange">({ base: "contents", xs: "contents", sm: "contents", md: "contents", lg: "contents", xl: "contents" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_willChange">

expectStyledSystemPropertyAssignable<"width">(1);
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"width">("1px");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"width">("1em");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"width">("1rem");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"width">("1%");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"width">("1vh");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"width">("1vw");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"width">("calc(1px + 1px)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"width">("max-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"width">("min-content");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"width">("fit-content(1em)");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"width">("auto");
// @ts-expect-error: only tokens are allowed
expectStyledSystemPropertyAssignable<"width">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"UNSAFE_width">(1);
expectStyledSystemPropertyAssignable<"UNSAFE_width">("1px");
expectStyledSystemPropertyAssignable<"UNSAFE_width">("1em");
expectStyledSystemPropertyAssignable<"UNSAFE_width">("1rem");
expectStyledSystemPropertyAssignable<"UNSAFE_width">("1%");
expectStyledSystemPropertyAssignable<"UNSAFE_width">("1vh");
expectStyledSystemPropertyAssignable<"UNSAFE_width">("1vw");
expectStyledSystemPropertyAssignable<"UNSAFE_width">("calc(1px + 1px)");
expectStyledSystemPropertyAssignable<"UNSAFE_width">("max-content");
expectStyledSystemPropertyAssignable<"UNSAFE_width">("min-content");
expectStyledSystemPropertyAssignable<"UNSAFE_width">("fit-content(1em)");
expectStyledSystemPropertyAssignable<"UNSAFE_width">("auto");
expectStyledSystemPropertyAssignable<"UNSAFE_width">({ base: "1px", xs: "1px", sm: "1px", md: "1px", lg: "1px", xl: "1px" });

expectStyledSystemPropertyAssignable<"wordBreak">("normal");
expectStyledSystemPropertyAssignable<"wordBreak">("break-all");
expectStyledSystemPropertyAssignable<"wordBreak">("keep-all");
expectStyledSystemPropertyAssignable<"wordBreak">("break-word");
expectStyledSystemPropertyAssignable<"wordBreak">({ base: "break-word", xs: "break-word", sm: "break-word", md: "break-word", lg: "break-word", xl: "break-word" });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_wordBreak">


expectStyledSystemPropertyAssignable<"zIndex">("auto");
expectStyledSystemPropertyAssignable<"zIndex">(1);
expectStyledSystemPropertyAssignable<"zIndex">(-1);
expectStyledSystemPropertyAssignable<"zIndex">({ base: 1, xs: 1, sm: 1, md: 1, lg: 1, xl: 1 });
// @ts-expect-error: unsafe property is not available since this field isn't using tokens
expectPropertyAvailable<"UNSAFE_zIndex">

expectAssignable<StyledSystemProps>({
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    aspectRatio: "1",
    backgroundColor: "purple-1",
    backgroundColorFocus: "purple-1",
    backgroundColorHover: "purple-1",
    backgroundImage: "url(cat.png)",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    border: "purple-10",
    borderFocus: "purple-10",
    borderHover: "purple-10",
    borderBottom: "purple-10",
    borderBottomFocus: "purple-10",
    borderBottomHover: "purple-10",
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 2,
    borderLeft: "purple-10",
    borderLeftFocus: "purple-10",
    borderLeftHover: "purple-10",
    borderRadius: 1,
    borderRight: "purple-10",
    borderRightFocus: "purple-10",
    borderRightHover: "purple-10",
    borderTop: "purple-10",
    borderTopFocus: "purple-10",
    borderTopHover: "purple-10",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 2,
    bottom: "1px",
    boxShadow: 1,
    boxShadowFocus: 1,
    boxShadowHover: 1,
    color: "purple-1",
    colorFocus: "purple-1",
    colorHover: "purple-1",
    columnGap: 1,
    content: "open-quote",
    contentVisibility: "hidden",
    cursor: "crosshair",
    cursorHover: "crosshair",
    display: "block",
    fill: "purple-1",
    fillFocus: "purple-1",
    fillHover: "purple-1",
    filter: "blur(5px)",
    flex: "2 2 10%",
    flexBasis: "1px",
    flexDirection: "row",
    flexFlow: "row wrap",
    flexGrow: 1,
    flexShrink: 1,
    flexWrap: "wrap",
    fontSize: 1,
    fontStyle: "italic",
    fontWeight: 1,
    gap: 1,
    grid: "auto-flow / 1px 1px 1px",
    gridAutoColumns: 1,
    gridAutoRows: 2,
    gridAutoFlow: "column",
    gridArea: "auto / auto / auto",
    gridColumn: "1 / 3",
    gridRow: "1 / 3",
    gridTemplate: `
        "a a a" 40px
        "b c c" 40px
        "b c c" 40px / 1fr 1fr 1fr
    `,
    gridTemplateAreas: `
        "b b a"
        "b b c"
        "b b c"
    `,
    gridTemplateColumns: 1,
    gridTemplateRows: 2,
    gridColumnSpan: 3,
    gridColumnStart: "auto",
    gridColumnEnd: "auto",
    gridRowSpan: 3,
    gridRowStart: "auto",
    gridRowEnd: "auto",
    height: 1,
    justifyContent: "center",
    justifyItems: "center",
    justifySelf: "center",
    left: "1px",
    letterSpacing: "-1px",
    lineHeight: 1,
    margin: 1,
    marginBottom: 1,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 1,
    marginX: 1,
    marginY: 1,
    maxHeight: 1,
    maxWidth: 2,
    minHeight: 3,
    minWidth: 4,
    objectFit: "cover",
    objectPosition: "center",
    opacity: "visible",
    opacityHover: "visible",
    order: 1,
    outline: "none",
    outlineFocus: "none",
    overflow: "clip",
    overflowX: "clip",
    overflowY: "clip",
    padding: 1,
    paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
    paddingX: 1,
    paddingY: 1,
    pointerEvents: "none",
    position: "absolute",
    resize: "both",
    right: "1px",
    rowGap: 1,
    stroke: "purple-1",
    textAlign: "center",
    textDecoration: "underline",
    textOverflow: "clip",
    top: "1px",
    transform: "rotate(3deg) scale(1.3)",
    transformOrigin: "top left",
    transformStyle: "preserve-3d",
    verticalAlign: "middle",
    visibility: "hidden",
    whiteSpace: "nowrap",
    width: 1,
    willChange: "contents",
    wordBreak: "break-all",
    zIndex: 1,
});
