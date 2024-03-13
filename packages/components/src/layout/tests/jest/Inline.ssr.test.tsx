/**
 * @jest-environment node
 */
import { Inline } from "../../src/Inline.tsx";
import { renderToString } from "react-dom/server";

describe("Inline", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Inline>
                    <div>Alpha</div>
                    <div>Bravo</div>
                    <div>Charlie</div>
                </Inline>
            );

        expect(renderOnServer).not.toThrow();
    });
});
