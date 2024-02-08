/**
 * @jest-environment node
 */
import { HopperProvider } from "../../index.ts";
import { renderToString } from "react-dom/server";

describe("HopperProvider", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <HopperProvider colorScheme="light">
                    Test
                </HopperProvider>
            );

        expect(renderOnServer).not.toThrow();
    });
});
