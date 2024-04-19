/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Radio } from "../../src/Radio.tsx";
import { RadioGroup } from "../../src/RadioGroup.tsx";
import { RadioField } from "../../src/RadioField.tsx";
import { Text } from "../../../Text/index.ts";

describe("Radio", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <RadioGroup aria-label="options">
                    <Radio value="text">Text</Radio>
                    <RadioField>
                        <Radio value="option1">option 1</Radio>
                        <Text slot="description">description</Text>
                    </RadioField>
                </RadioGroup>
            );

        expect(renderOnServer).not.toThrow();
    });
});
