/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Link } from "../../src/Link.tsx";

describe("Link", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Link>Text</Link>
            );

        expect(renderOnServer).not.toThrow();
    });
});
