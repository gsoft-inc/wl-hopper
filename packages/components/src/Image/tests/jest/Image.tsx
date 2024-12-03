/**
 * @jest-environment node
 */
import { renderToString } from "react-dom/server";

import { Image } from "../../src/Image.tsx";

describe("Image", () => {
    it("should render on the server", () => {
        const renderOnServer = () =>
            renderToString(
                <Image src="https://i.pravatar.cc/96?img=1" />
            );

        expect(renderOnServer).not.toThrow();
    });
});
