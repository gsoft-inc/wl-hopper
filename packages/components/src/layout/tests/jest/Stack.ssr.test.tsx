/**
 * @jest-environment node
 */
import { Stack } from "../../src/Stack.tsx";
import { renderToString } from "react-dom/server";

describe("Stack", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Stack>
                    <div>Alpha</div>
                    <div>Bravo</div>
                    <div>Charlie</div>
                </Stack>
            );

        expect(renderOnServer).not.toThrow();
    });
});
