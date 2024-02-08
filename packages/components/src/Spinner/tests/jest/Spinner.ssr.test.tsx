/**
 * @jest-environment node
 */
import { Spinner } from "../../src/Spinner.tsx";
import { renderToString } from "react-dom/server";

describe("Spinner", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Spinner aria-label="Loading…" />
            );

        expect(renderOnServer).not.toThrow();
    });
});
