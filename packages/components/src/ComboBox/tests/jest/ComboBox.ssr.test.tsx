/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { ComboBox } from "../../src/ComboBox.tsx";
import { ComboBoxOption, ComboBoxOptions } from "../../src/ComboBoxOptions.tsx";

describe("ComboBox", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <ComboBox>
                    <ComboBoxOptions>
                        <ComboBoxOption id="1">Zoomy</ComboBoxOption>
                        <ComboBoxOption id="2">Voodoo</ComboBoxOption>
                    </ComboBoxOptions>
                </ComboBox>
            );

        expect(renderOnServer).not.toThrow();
    });
});
