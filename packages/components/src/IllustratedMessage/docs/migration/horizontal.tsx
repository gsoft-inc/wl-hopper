import { Inline, Stack, SvgImage, Text } from "@hopper-ui/components";

import { NoResults } from "../../assets/index.ts";

export default function Example() {
    return (
        <Inline alignY="center" gap="stack-lg">
            <SvgImage stroke="neutral" src={NoResults} aria-label="No Results" />
            <Stack gap="stack-sm">
                <Text size="lg" fontWeight="body-lg-semibold">Can't find "Saturn"</Text>
                <Text color="neutral-weak">Please try another search term.</Text>
            </Stack>
        </Inline>
    );
}
