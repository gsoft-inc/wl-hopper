import { createContext, useContext } from "react";
import { isNil } from "./assertion.ts";

type StyleContextType = Record<string, Record<string, string>>;

const StyleContext = createContext<StyleContextType | undefined>(undefined);

export const StyleProvider = StyleContext.Provider;

function useStyleContext() {
    return useContext(StyleContext);
}

// Do not remove the TS return type otherwise it will infer to any[] and won't emit any warnings.
export function useStyleProps<TReturn>(key: string): [TReturn, boolean] {
    const context = useStyleContext();

    if (!isNil(context)) {
        const props = !isNil(key)
            ? context[key] ?? {}
            : {};

        return [props as TReturn, true];
    }

    return [{} as TReturn, false];
}
