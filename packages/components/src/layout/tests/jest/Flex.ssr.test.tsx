/**
 * @jest-environment node
 */
import { Flex } from "../../src/Flex.tsx";
import { renderToString } from "react-dom/server";

describe("Flex", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Flex>
                    <div>Alpha</div>
                    <div>Bravo</div>
                    <div>Charlie</div>
                </Flex>
            );

        expect(renderOnServer).not.toThrow();
    });
});
