import type { ResponsiveProp } from "@hopper-ui/styled-system";

export type Size = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "inherit";

type ExtractPossibleSizes<T> = T extends ResponsiveProp<infer U> ? NonNullable<U> : never;
type SafeExtract<T> = ExtractPossibleSizes<T> extends Size ? ExtractPossibleSizes<T> : never;

export type SizeAdapter<A, B> = Record<SafeExtract<A>, SafeExtract<B>>;
