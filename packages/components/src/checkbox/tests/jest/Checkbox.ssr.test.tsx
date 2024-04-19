/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Checkbox } from "../../src/Checkbox.tsx";
import { CheckboxGroup } from "../../src/CheckboxGroup.tsx";
import { CheckboxField } from "../../src/CheckboxField.tsx";
import { Text } from "../../../Text/index.ts";

describe("Checkbox", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <CheckboxGroup aria-label="options">
                    <Checkbox>option 1</Checkbox>
                    <CheckboxField>
                        <Checkbox>option 1</Checkbox>
                        <Text slot="description">description</Text>
                    </CheckboxField>
                </CheckboxGroup>
            );

        expect(renderOnServer).not.toThrow();
    });
});
