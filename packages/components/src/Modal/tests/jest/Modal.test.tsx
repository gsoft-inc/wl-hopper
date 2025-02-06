/* eslint-disable testing-library/no-node-access */
/* Using closest to get the label is the best way, even react-aria does this. */
import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { Modal, ModalContext } from "../../src/index.ts";

describe("Modal", () => {
    it("should render with default class", () => {
        render(<Modal>text</Modal>);

        const element = screen.getByRole("dialog");
        expect(element).toHaveClass("hop-Modal");
    });

    it("should support custom class", () => {
        render(<Modal>text</Modal>);

        const element = screen.getByRole("dialog");
        expect(element).toHaveClass("hop-Modal");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<Modal marginTop="stack-sm" style={{ marginBottom: "13px" }}>text</Modal>);

        const element = screen.getByRole("dialog");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<Modal aria-label="options" data-foo="bar">text</Modal>);

        const element = screen.getByRole("dialog");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <ModalContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Modal slot="test">text</Modal>
            </ModalContext.Provider>
        );

        const element = screen.getByRole("dialog");

        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<Modal aria-label="options" ref={ref}>text</Modal>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });
});
