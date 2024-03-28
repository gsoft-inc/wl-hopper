/**
 * @jest-environment node
 */
import { HelperMessage } from "../../src/HelperMessage.tsx";
import { renderToString } from "react-dom/server";

describe("HelperMessage", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <HelperMessage>Text</HelperMessage>
            );

        expect(renderOnServer).not.toThrow();
    });
});
