/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Tag } from "../../src/Tag.tsx";

describe("Tag", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Tag>Text</Tag>
            );

        expect(renderOnServer).not.toThrow();
    });
});
