import { createContext } from "react";
import type { ContextValue } from "react-aria-components";
import type { IconProps } from "./Icon.tsx";

export const IconContext = createContext<ContextValue<Omit<IconProps, "src">, SVGSVGElement>>({});

IconContext.displayName = "IconContext";
