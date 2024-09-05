/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Select } from "../../src/Select.tsx";

describe("Select", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Select>
                    <Select.Option id="1">Zoomy</Select.Option>
                    <Select.Option id="2">Voodoo</Select.Option>
                </Select>
            );

        expect(renderOnServer).not.toThrow();
    });
});
