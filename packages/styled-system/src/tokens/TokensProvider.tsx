import { Tokens } from "@hopper-ui/fake-tokens";
import { useInjectGlobalStyles } from "../utils/useInjectGlobalStyles.tsx";
import { RootSelector } from "../HopperProvider.tsx";

// TODO: explain why this is a component. It's because we want to make this conditional easily
export function TokensProvider() {
    useInjectGlobalStyles(`hop-tokens-${RootSelector}`, tokensToCssString(`.hop.${RootSelector}`, Tokens.core));
    useInjectGlobalStyles(`hop-tokens-light-${RootSelector}`, tokensToCssString(`.hop.${RootSelector}-light`, Tokens.light));
    useInjectGlobalStyles(`hop-tokens-dark-${RootSelector}`, tokensToCssString(`.hop.${RootSelector}-dark`, Tokens.dark));

    return null;
}

function tokensToCssString(selector: string, tokens: Record<string, string>) {
    const cssValues = Object.entries(tokens).reduce((acc, [key, value]) => {
        return `${acc} ${key}: ${value};`;
    }, "");

    return `${selector} {${cssValues}\n}`;
}
