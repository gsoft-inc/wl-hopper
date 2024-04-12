/* eslint-disable testing-library/no-node-access */
/* Using closest to get the label is the best way, even react-aria does this. */
import { screen, render } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { Text } from "../../../Text/src/Text.tsx";
import { Checkbox } from "../../src/Checkbox.tsx";
import { CheckboxField } from "../../src/CheckboxField.tsx";
import { CheckboxFieldContext } from "../../src/CheckboxFieldContext.ts";


describe("Checkbox", () => {
    const testId = "checkbox-field";

    it("should render with default class", () => {
        render(<CheckboxField data-testid={testId}><Checkbox>option 1</Checkbox><Text slot="description">description</Text></CheckboxField>);

        const element = screen.getByTestId(testId);
        expect(element).toHaveClass("hop-CheckboxField");
    });

    it("should support custom class", () => {
        render(<CheckboxField data-testid={testId} className="test"><Checkbox>option 1</Checkbox><Text slot="description">description</Text></CheckboxField>);

        const element = screen.getByTestId(testId);
        expect(element).toHaveClass("hop-CheckboxField");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<CheckboxField data-testid={testId} marginTop="stack-sm" style={{ marginBottom: "13px" }}><Checkbox>option 1</Checkbox><Text slot="description">description</Text></CheckboxField>);

        const element = screen.getByTestId(testId);
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<CheckboxField data-testid={testId} data-foo="bar"><Checkbox>option 1</Checkbox><Text slot="description">description</Text></CheckboxField>);

        const element = screen.getByTestId(testId);
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <CheckboxFieldContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <CheckboxField data-testid={testId} slot="test"><Checkbox>option 1</Checkbox><Text slot="description">description</Text></CheckboxField>
            </CheckboxFieldContext.Provider>
        );

        const element = screen.getByTestId(testId);
        
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<CheckboxField ref={ref}><Checkbox>option 1</Checkbox><Text slot="description">description</Text></CheckboxField>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });

    it("should set the size class name and pass the size to the checkbox", () => {
        render(<CheckboxField data-testid={testId} size="sm"><Checkbox>option 1</Checkbox><Text slot="description">description</Text></CheckboxField>);

        const element = screen.getByTestId(testId);
        const checkbox = screen.getByRole("checkbox").closest("label");
        expect(element).toHaveClass("hop-CheckboxField--sm");
        expect(checkbox).toHaveClass("hop-Checkbox--sm");
    });

    it("should set an id on the description and aria-describedby on the checkbox", () => {
        render(<CheckboxField data-testid={testId}><Checkbox>option 1</Checkbox><Text slot="description">description</Text></CheckboxField>);

        const checkbox = screen.getByRole("checkbox");
        const descriptionElement = screen.getByText("description");

        expect(descriptionElement).toHaveAttribute("id");
        const descriptionId = descriptionElement.getAttribute("id");
        expect(checkbox).toHaveAttribute("aria-describedby", descriptionId);
    });

    it("should be disabled and pass it to the checkbox", () => {
        render(<CheckboxField data-testid={testId} isDisabled><Checkbox>option 1</Checkbox><Text slot="description">description</Text></CheckboxField>);

        const element = screen.getByTestId(testId);
        const checkbox = screen.getByRole("checkbox");
        
        expect(element).toHaveAttribute("data-disabled", "true");
        expect(checkbox).toBeDisabled();
    });
});
