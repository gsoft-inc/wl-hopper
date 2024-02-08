import { IconList } from "../../src/IconList.tsx";
import { IconListContext } from "../../src/IconListContext.ts";
import { createRef } from "react";
import { AddIcon, PlusIcon } from "@hopper-ui/icons";
import { render, screen } from "@hopper-ui/test-utils";

describe("IconList", () => {
    it("should render with default class", () => {
        render(
            <IconList data-testid="icon-list">
                <AddIcon />
                <PlusIcon />
            </IconList>
        );

        const element = screen.getByTestId("icon-list");
        expect(element).toHaveClass("hop-IconList");
    });

    it("should support custom class", () => {
        render(
            <IconList data-testid="icon-list" className="test">
                <AddIcon />
                <PlusIcon />
            </IconList>
        );

        const element = screen.getByTestId("icon-list");
        expect(element).toHaveClass("hop-IconList");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(
            <IconList data-testid="icon-list" marginTop="stack-sm" style={{ marginBottom: "13px" }}>
                <AddIcon />
                <PlusIcon />
            </IconList>
        );

        const element = screen.getByTestId("icon-list");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(
            <IconList data-testid="icon-list" data-foo="bar">
                <AddIcon />
                <PlusIcon />
            </IconList>
        );

        const element = screen.getByTestId("icon-list");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <IconListContext.Provider value={{ slots: { test: { "aria-label": "test label" } } }}>
                <IconList data-testid="icon-list" slot="test">
                    <AddIcon />
                    <PlusIcon />
                </IconList>
            </IconListContext.Provider>
        );

        const element = screen.getByTestId("icon-list");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test label");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLSpanElement>();
        render(
            <IconList data-testid="icon-list" ref={ref}>
                <AddIcon />
                <PlusIcon />
            </IconList>
        );

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLSpanElement).toBeTruthy();
    });
});
