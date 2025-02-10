import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { Hiddable } from "../../utils/index.ts";

import type { ImageProps } from "./Image.tsx";

export type ImageContextValue = ImageProps & Hiddable;

export const ImageContext = createContext<ContextValue<ImageContextValue, HTMLImageElement>>({});

ImageContext.displayName = "ImageContext";
