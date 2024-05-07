import { useLocalizedStringFormatter, type LocalizedStringFormatter, type LocalizedStrings } from "react-aria";

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

