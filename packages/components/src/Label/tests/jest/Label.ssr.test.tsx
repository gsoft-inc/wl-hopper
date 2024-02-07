/**
 * @jest-environment node
 */
import { Label } from "../../src/Label.tsx";
import { renderToString } from "react-dom/server";

describe("Label", () => {
    it("can render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Label>Text</Label>
            );

        expect(renderOnServer).not.toThrow();
    });
});
