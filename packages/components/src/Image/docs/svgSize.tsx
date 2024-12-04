import { SvgImage } from "@hopper-ui/components";

import { NoResults } from "../assets/index.ts";

export default function Example() {
    return (
        <SvgImage stroke="neutral" src={NoResults} aria-label="No Results" height="core_1280" width="core_1280" />
    );
}
