/**
 * @jest-environment node
 */
import { Checkbox } from "../../src/Checkbox.tsx";
import { renderToString } from "react-dom/server";

describe("Checkbox", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Checkbox>Text</Checkbox>
            );

        expect(renderOnServer).not.toThrow();
    });
});
