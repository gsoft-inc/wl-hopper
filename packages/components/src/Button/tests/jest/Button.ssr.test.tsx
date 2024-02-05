/**
 * @jest-environment node
 */
import { Button } from "../../src/Button.tsx";
import { renderToString } from "react-dom/server";

describe("Text", () => {
    it("can render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Button autoFocus variant="secondary">Cutoff</Button>
            );

        expect(renderOnServer).not.toThrow();
    });
});
