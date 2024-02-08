import { useLocalizedStringFormatter } from "react-aria";

import resourcesEnUS from "./en-US.json";
import resourcesFrCa from "./fr-CA.json";

const Resources = {
    "en-US": resourcesEnUS,
    "fr-CA": resourcesFrCa
};

export function useLocalizedString() {
    return useLocalizedStringFormatter(Resources, "@hopper-ui/components");
}
