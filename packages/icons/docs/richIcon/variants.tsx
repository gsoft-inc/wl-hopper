import { Inline, Stack } from "@hopper-ui/components";
import { createRichIcon } from "@hopper-ui/icons";

import { SparklesRichIcon24, SparklesRichIcon32, SparklesRichIcon40 } from "../src/index.ts";

const CustomRichIcon = createRichIcon(SparklesRichIcon24, SparklesRichIcon32, SparklesRichIcon40, "SparklesRichIcon");

export default function Example() {
    return (
        <Inline alignY="flex-start">
            <Stack>
                <CustomRichIcon variant="option1" />
                <CustomRichIcon variant="option2" />
                <CustomRichIcon variant="option3" />
                <CustomRichIcon variant="option4" />
                <CustomRichIcon variant="option5" />
                <CustomRichIcon variant="option6" />
                <CustomRichIcon variant="option7" />
                <CustomRichIcon variant="option8" />
            </Stack>
            <Stack>
                <CustomRichIcon variant="success" />
                <CustomRichIcon variant="warning" />
                <CustomRichIcon variant="danger" />
                <CustomRichIcon variant="information" />
                <CustomRichIcon variant="upsell" />
            </Stack>
        </Inline>
    );
}
