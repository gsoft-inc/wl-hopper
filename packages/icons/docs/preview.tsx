import { createIcon } from "@hopper-ui/icons";

import CustomIcon16 from "./src/sparkles-16.svg";
import CustomIcon24 from "./src/sparkles-24.svg";
import CustomIcon32 from "./src/sparkles-32.svg";

const CustomIcon = createIcon(CustomIcon16, CustomIcon24, CustomIcon32, "CustomIcon");

export default function Example() {
    return (
        <CustomIcon />
    );
}
