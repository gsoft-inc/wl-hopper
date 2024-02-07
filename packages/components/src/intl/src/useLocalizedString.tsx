import { useLocalizedStringFormatter } from "react-aria";

import englishStrings from "./en-US.json";
import frenchStrings from "./fr-CA.json";

const intlMessages = {
    "en-US": englishStrings,
    "fr-CA": frenchStrings
};

export function useLocalizedString() {
    return useLocalizedStringFormatter(intlMessages, "@hopper-ui/components");
}
