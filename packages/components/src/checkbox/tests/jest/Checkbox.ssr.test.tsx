/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Checkbox } from "../../src/Checkbox.tsx";

describe("Checkbox", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Checkbox>Text</Checkbox>
            );

        expect(renderOnServer).not.toThrow();
    });
});
