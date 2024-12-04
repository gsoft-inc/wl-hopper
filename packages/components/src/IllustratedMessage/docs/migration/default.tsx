import { IllustratedMessage, SvgImage, Text } from "@hopper-ui/components";

import { NoResults } from "../../assets/index.ts";

export default function Example() {
    return (
        <IllustratedMessage>
            <SvgImage stroke="neutral" src={NoResults} aria-label="No Results" />
            <Text slot="heading">Can't find "Saturn"</Text>
            <Text slot="description">Please try another search term.</Text>
        </IllustratedMessage>
    );
}
