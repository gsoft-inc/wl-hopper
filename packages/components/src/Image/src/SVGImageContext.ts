import { createContext } from "react";
import type { ContextValue } from "react-aria-components";

import type { SVGImageProps } from "./SVGImage.tsx";

export const SVGImageContext = createContext<ContextValue<SVGImageProps, SVGSVGElement>>({});

SVGImageContext.displayName = "SVGImageContext";
