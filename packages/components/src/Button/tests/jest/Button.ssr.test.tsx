/**
 * @jest-environment node
 */
import { Button } from "../../src/Button.tsx";
import { renderToString } from "react-dom/server";

describe("Text", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Button>Cutoff</Button>
            );

        expect(renderOnServer).not.toThrow();
    });
});