/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Radio } from "../../src/Radio.tsx";
import { RadioGroup } from "../../src/RadioGroup.tsx";

describe("Radio", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <RadioGroup aria-label="options"><Radio value="text">Text</Radio></RadioGroup>
            );

        expect(renderOnServer).not.toThrow();
    });
});
