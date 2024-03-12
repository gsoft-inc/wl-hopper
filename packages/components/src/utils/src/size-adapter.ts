import type { ResponsiveProp } from "@hopper-ui/styled-system";

/**
 * Represents possible sizes for components.
 */
export type Size = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "inherit";

type ExtractPossibleSizes<T> = T extends ResponsiveProp<infer U> ? NonNullable<U> : never;
type SafeExtract<T> = ExtractPossibleSizes<T> extends Size ? ExtractPossibleSizes<T> : never;

/**
 *  Represents a mapping between sizes of type A and sizes of type B.
 *  @example
 *  const SpinnerToLabelSizeAdapter: SizeAdapter<SpinnerProps["size"], LabelProps["size"]> = {
 *      sm: "xs",
 *      md: "sm",
 *      lg: "md"
 *  };
 */
export type SizeAdapter<A, B> = Record<SafeExtract<A>, SafeExtract<B>>;
