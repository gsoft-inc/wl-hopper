import { Button, ErrorMessage, Label, TextField } from "@hopper-ui/components";
import { render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { Form } from "../../src/Form.tsx";

describe("Form", () => {
    it("should render with default class", () => {
        render(
            <Form data-testid="form">
                <TextField>
                    <Label>Label</Label>
                </TextField>
            </Form>
        );

        const element = screen.getByTestId("form");
        expect(element).toHaveClass("hop-Form");
    });

    it("should support custom style", () => {
        render(
            <Form data-testid="form" marginTop="stack-sm" style={{ marginBottom: "13px" }}>
                <TextField>
                    <Label>Label</Label>
                </TextField>
            </Form>
        );

        const element = screen.getByTestId("form");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(
            <Form data-testid="form" data-foo="bar">
                <TextField>
                    <Label>Label</Label>
                </TextField>
            </Form>
        );

        const element = screen.getByTestId("form");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLFormElement>();
        render(
            <Form data-testid="form" ref={ref}>
                <TextField>
                    <Label>Label</Label>
                </TextField>
            </Form>
        );

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLFormElement).toBeTruthy();
    });

    it("should aupport disabled state", () => {
        render(
            <Form isDisabled>
                <TextField>
                    <Label>Label</Label>
                </TextField>
            </Form>
        );

        const input = screen.getByRole("textbox");
        expect(input).toBeDisabled();
    });

    it("should be able to validate form", () => {
        render(
            <Form data-testid="form" validationErrors={{ username: "Sorry, this username is taken." }}>
                <TextField name="username" defaultValue="john_doe">
                    <Label>Username</Label>
                    <ErrorMessage />
                </TextField>
            </Form>
        );

        const element = screen.getByTestId("form");
        expect(element).toHaveTextContent("Sorry, this username is taken.");
    });

    it("should be able to validate form with aria behavior", () => {
        render(
            <Form data-testid="form" validationBehavior="aria">
                <TextField
                    name="username"
                    defaultValue="admin"
                    isRequired
                    validate={value => value === "admin" ? "Nice try." : null}
                >
                    <Label>Username</Label>
                    <ErrorMessage />
                </TextField>
                <Button type="submit">Submit</Button>
            </Form>
        );

        const element = screen.getByTestId("form");
        const input = screen.getByRole("textbox");

        expect(input).toHaveAttribute("aria-invalid", "true");
        expect(element).toHaveTextContent("Nice try.");
    });
});
