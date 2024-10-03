/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Select, SelectOption, SelectOptions } from "../../index.ts";

describe("SelectOptions", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Select aria-label="Pets">
                    <SelectOptions>
                        <SelectOption id="1">Zoomy</SelectOption>
                        <SelectOption id="2">Voodoo</SelectOption>
                    </SelectOptions>
                </Select>
            );

        expect(renderOnServer).not.toThrow();
    });
});
