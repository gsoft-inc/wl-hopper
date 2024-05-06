import { useLocalizedStringFormatter, type LocalizedStrings } from "react-aria";

import resourcesEnUS from "../intl/en-US.json";
import resourcesFrCa from "../intl/fr-CA.json";

const Resources = {
    "en-US": resourcesEnUS,
    "fr-CA": resourcesFrCa
} satisfies LocalizedStrings;

/**
 * This hook is used to get the localized string formatter.
 * It uses the resources from the component package.
 */
export function useLocalizedString(): LocalizedStringFormatter {
    return useLocalizedStringFormatter(Resources, "@hopper-ui/components");
}

/**
 * LocalizedStringFormatter is not exported from react-aria, so we have to define it here.
 * Without this, the build will fail with the following error:
* packages/components build:
 * src/intl/src/useLocalizedString.tsx(11,17): error TS2742:
 * The inferred type of 'useLocalizedString' cannot be named without a reference to
 * .pnpm/@internationalized+string@3.2.1/node_modules/@internationalized/string'.
 * This is likely not portable. A type annotation is necessary.
 *
 * I  proposed a PR to export LocalizedStringFormatter from react-aria.
 * https://github.com/adobe/react-spectrum/pull/6014
 */
interface LocalizedStringFormatter {
    format: (key: keyof typeof Resources[keyof typeof Resources], variables?: Record<string, string | number | boolean>) => string;
}
