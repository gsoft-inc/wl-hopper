/**
 * @jest-environment node
 */
import { IconList } from "../../src/IconList.tsx";
import { renderToString } from "react-dom/server";

describe("IconList", () => {
    it("can render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <IconList>Text</IconList>
            );

        expect(renderOnServer).not.toThrow();
    });
});
