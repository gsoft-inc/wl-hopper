/**
 * @jest-environment node
 */
import { Button } from "../../src/Button.tsx";
import { renderToString } from "react-dom/server";

describe("Button", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Button>Cutoff</Button>
            );

        expect(renderOnServer).not.toThrow();
    });
});

