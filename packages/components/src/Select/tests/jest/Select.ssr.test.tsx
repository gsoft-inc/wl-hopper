/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Select, SelectField, SelectOption } from "../../index.ts";

describe("Select", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <SelectField aria-label="Pets">
                    <Select>
                        <SelectOption id="1">Zoomy</SelectOption>
                        <SelectOption id="2">Voodoo</SelectOption>
                    </Select>
                </SelectField>
            );

        expect(renderOnServer).not.toThrow();
    });
});
