/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { ListBox } from "../../src/ListBox.tsx";

describe("ListBox", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <ListBox>Text</ListBox>
            );

        expect(renderOnServer).not.toThrow();
    });
});
