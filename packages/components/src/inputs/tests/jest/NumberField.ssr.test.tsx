/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Label } from "../../../typography/index.ts";
import { NumberField } from "../../src/NumberField.tsx";

describe("NumberField", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <NumberField>
                    <Label>Label:</Label>
                </NumberField>
            );

        expect(renderOnServer).not.toThrow();
    });
});
