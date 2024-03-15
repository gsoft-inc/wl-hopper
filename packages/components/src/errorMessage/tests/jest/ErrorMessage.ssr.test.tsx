/**
 * @jest-environment node
 */
import { ErrorMessage } from "../../src/ErrorMessage.tsx";
import { renderToString } from "react-dom/server";

describe("ErrorMessage", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <ErrorMessage>Text</ErrorMessage>
            );

        expect(renderOnServer).not.toThrow();
    });
});
