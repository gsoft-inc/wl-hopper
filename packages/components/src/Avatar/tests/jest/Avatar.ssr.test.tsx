/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Avatar } from "../../src/Avatar.tsx";

describe("Avatar", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Avatar>Text</Avatar>
            );

        expect(renderOnServer).not.toThrow();
    });
});
