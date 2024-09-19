/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { ComboBox } from "../../src/ComboBox.tsx";

describe("ComboBox", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <ComboBox>
                    <ComboBox.Option id="1">Zoomy</ComboBox.Option>
                    <ComboBox.Option id="2">Voodoo</ComboBox.Option>
                </ComboBox>
            );

        expect(renderOnServer).not.toThrow();
    });
});
