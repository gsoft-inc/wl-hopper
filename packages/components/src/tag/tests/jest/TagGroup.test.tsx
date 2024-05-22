import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { Tag, TagGroupContext, TagList, TagGroup } from "../../src/index.ts";

describe("Tag", () => {
    it("should render with default class", () => {
        render(<TagGroup aria-label="options" data-testid="tag-group"><TagList><Tag id="option1">option 1</Tag></TagList></TagGroup>);

        const element = screen.getByTestId("tag-group");
        expect(element).toHaveClass("hop-TagGroup");
    });

    it("should support custom class", () => {
        render(<TagGroup aria-label="options" data-testid="tag-group" className="test"><TagList><Tag id="option1">option 1</Tag></TagList></TagGroup>);

        const element = screen.getByTestId("tag-group");
        expect(element).toHaveClass("hop-TagGroup");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<TagGroup aria-label="options" data-testid="tag-group" marginTop="stack-sm" style={{ marginBottom: "13px" }}><TagList><Tag id="option1">option 1</Tag></TagList></TagGroup>);

        const element = screen.getByTestId("tag-group");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<TagGroup aria-label="options" data-testid="tag-group" data-foo="bar"><TagList><Tag id="option1">option 1</Tag></TagList></TagGroup>);

        const element = screen.getByTestId("tag-group");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <TagGroupContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <TagGroup slot="test" data-testid="tag-group"><TagList data-testid="tag-list"><Tag id="option1">option 1</Tag></TagList></TagGroup>
            </TagGroupContext.Provider>
        );

        const element = screen.getByTestId("tag-group");
        const tagList = screen.getByTestId("tag-list");
        
        expect(element).toHaveAttribute("slot", "test");
        expect(tagList).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<TagGroup aria-label="options" data-testid="tag-group" ref={ref}><TagList><Tag id="option1">option 1</Tag></TagList></TagGroup>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });

    it("should set the size class name and pass the size to the radio and radio field.", () => {
        const testId = "radio-field";
        render(<TagGroup aria-label="options" data-testid="tag-group" size="lg">
            <TagList>
                <Tag id="option1" data-testid={testId}>option 1</Tag>
            </TagList>
        </TagGroup>);

        const element = screen.getByTestId("tag-group");
        const radio = screen.getByTestId(testId);
        expect(element).toHaveClass("hop-TagGroup--lg");
        expect(radio).toHaveClass("hop-Tag--lg");
    });
});
