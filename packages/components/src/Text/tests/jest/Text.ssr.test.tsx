/**
 * @jest-environment node
 */
import { Text } from "../../src/Text.tsx";
import { renderToString } from "react-dom/server";

describe("Text", () => {
    it("can render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Text>Text</Text>
            );

        expect(renderOnServer).not.toThrow();
    });
});
