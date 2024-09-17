import { render, screen } from "@hopper-ui/test-utils";

import { CharacterCount } from "../../src/CharacterCount.tsx";

describe("CharacterCount", () => {
    it("should render with default class", () => {
        render(<CharacterCount charactersLeft={3} data-testid="char-count" />);

        const element = screen.getByTestId("char-count");
        expect(element).toHaveClass("hop-CharacterCount");
    });

    it("should support disabled", () => {
        render(<CharacterCount charactersLeft={3} data-testid="char-count" isDisabled />);

        const element = screen.getByTestId("char-count");
        expect(element).toHaveAttribute("data-disabled", "true");
    });

    it("should support invalid", () => {
        render(<CharacterCount charactersLeft={3} data-testid="char-count" isInvalid />);

        const element = screen.getByTestId("char-count");
        expect(element).toHaveAttribute("data-invalid", "true");
    });
});
