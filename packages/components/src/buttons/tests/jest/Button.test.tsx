import { act, screen, waitFor, render, fireEvent } from "@hopper-ui/test-utils";
import { Button } from "../../src/Button.tsx";
import { ButtonContext } from "../../src/ButtonContext.ts";
import { createRef, type PropsWithChildren } from "react";
import { userEvent } from "@testing-library/user-event";
import { HopperProvider } from "../../../HopperProvider/index.ts";
import { createMemoryRouter, RouterProvider, useNavigate } from "react-router-dom";

function WithReactRouterProvider({ children }: PropsWithChildren) {
    const navigate = useNavigate();

    return (
        <HopperProvider colorScheme="light" navigate={navigate}>
            {children}
        </HopperProvider>
    );
}

describe("Button", () => {
    it("should render with default class", () => {
        render(<Button>Cutoff</Button>);

        const element = screen.getByRole("button");
        expect(element).toHaveClass("hop-Button");
    });

    it("should support custom class", () => {
        render(<Button className="test">Cutoff</Button>);

        const element = screen.getByRole("button");
        expect(element).toHaveClass("hop-Button");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<Button marginTop="stack-sm" style={{ marginBottom: "13px" }} >Cutoff</Button>);

        const element = screen.getByRole("button");
        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<Button data-foo="bar">Cutoff</Button>);

        const element = screen.getByRole("button");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <ButtonContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Button slot="test">Cutoff</Button>
            </ButtonContext.Provider>
        );

        const element = screen.getByRole("button");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLButtonElement>();
        render(<Button ref={ref}>Cutoff</Button>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLButtonElement).toBeTruthy();
    });

    it("should support form props", () => {
        render(<form id="foo"><Button form="foo" formMethod="post">Test</Button></form>);

        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("form", "foo");
        expect(button).toHaveAttribute("formMethod", "post");
    });

    /** Tests for things usually supported by RAC that we had to do ourselves*/
    it("should support hover", async () => {
        const user = userEvent.setup();
        const hoverStartSpy = jest.fn();
        const hoverChangeSpy = jest.fn();
        const hoverEndSpy = jest.fn();
        render(<Button className={({ isHovered }) => isHovered ? "hover" : ""} onHoverStart={hoverStartSpy} onHoverChange={hoverChangeSpy} onHoverEnd={hoverEndSpy}>Test</Button>);
        const button = screen.getByRole("button");

        expect(button).not.toHaveAttribute("data-hovered");
        expect(button).not.toHaveClass("hover");

        await user.hover(button);
        expect(button).toHaveAttribute("data-hovered", "true");
        expect(button).toHaveClass("hover");
        expect(hoverStartSpy).toHaveBeenCalledTimes(1);
        expect(hoverChangeSpy).toHaveBeenCalledTimes(1);

        await user.unhover(button);
        expect(button).not.toHaveAttribute("data-hovered");
        expect(button).not.toHaveClass("hover");
        expect(hoverEndSpy).toHaveBeenCalledTimes(1);
        expect(hoverChangeSpy).toHaveBeenCalledTimes(2);
    });

    it("should support focus ring", async () => {
        const user = userEvent.setup();

        render(<Button className={({ isFocusVisible }) => isFocusVisible ? "focus" : ""}>Test</Button>);
        const button = screen.getByRole("button");

        expect(button).not.toHaveAttribute("data-focus-visible");
        expect(button).not.toHaveClass("focus");

        await user.tab();
        expect(button).toHaveFocus();
        expect(button).toHaveAttribute("data-focus-visible", "true");
        expect(button).toHaveClass("focus");

        await user.tab();
        expect(button).not.toHaveAttribute("data-focus-visible");
        expect(button).not.toHaveClass("focus");
    });

    it("should support press state", () => {
        const onPress = jest.fn();
        render(<Button className={({ isPressed }) => isPressed ? "pressed" : ""} onPress={onPress}>Test</Button>);
        const button = screen.getByRole("button");

        expect(button).not.toHaveAttribute("data-pressed");
        expect(button).not.toHaveClass("pressed");

        fireEvent.mouseDown(button);
        expect(button).toHaveAttribute("data-pressed", "true");
        expect(button).toHaveClass("pressed");

        fireEvent.mouseUp(button);
        expect(button).not.toHaveAttribute("data-pressed");
        expect(button).not.toHaveClass("pressed");

        expect(onPress).toHaveBeenCalledTimes(1);
    });

    it("should support disabled state", () => {
        render(<Button isDisabled className={({ isDisabled }) => isDisabled ? "disabled" : ""}>Test</Button>);
        const button = screen.getByRole("button");

        expect(button).toBeDisabled();
        expect(button).toHaveClass("disabled");
    });

    it("should support render props", () => {
        render(<Button>{({ isPressed }) => isPressed ? "Pressed" : "Test"}</Button>);
        const button = screen.getByRole("button");

        expect(button).toHaveTextContent("Test");

        fireEvent.mouseDown(button);
        expect(button).toHaveTextContent("Pressed");

        fireEvent.mouseUp(button);
        expect(button).toHaveTextContent("Test");
    });

    /** Loading */
    it("should show a spinner when the button is loading", async () => {
        render(<Button isLoading>Loading Button</Button>
        );

        const element = screen.getByRole("progressbar");
        expect(element).not.toBeNull();
    });

    it("should add data-loading and disabled attributes when the button is loading", async () => {
        render(<Button isLoading >Loading Button</Button>);

        const element = screen.getByRole("button");
        expect(element).toHaveAttribute("data-loading", "true");
        expect(element).toHaveAttribute("disabled");
    });

    it("should prevent onPress when the button is loading", async () => {
        const handler = jest.fn();
        const user = userEvent.setup();

        render(<Button isLoading onPress={handler} >Loading Button</Button>
        );

        const element = screen.getByRole("button");
        await user.click(element);

        expect(handler).not.toHaveBeenCalled();
    });

    /** Button as Link */
    it("should render as an anchor when the href prop is provided", () => {
        render(<Button href="https://www.google.com">Go</Button>);

        const element = screen.getByRole("button");
        expect(element).toBeInstanceOf(HTMLAnchorElement);
        expect(element).toHaveAttribute("href", "https://www.google.com");
    });

    it("should render as a button when the href prop is not provided", () => {
        render(<Button>Go</Button>);

        const element = screen.getByRole("button");
        expect(element).toBeInstanceOf(HTMLButtonElement);
    });

    it("should call the navigate function when the href prop is provided and the provider has been set", async () => {
        const handler = jest.fn();
        const user = userEvent.setup();

        render(<HopperProvider colorScheme="light" navigate={handler}><Button href="/123">Go</Button></HopperProvider>);

        const element = screen.getByRole("button");

        await user.click(element);

        expect(handler).toHaveBeenCalled();
    });

    it("should call the navigate function when the href prop is provided and the provider has been set with react-router-dom's navigate function", async () => {
        const router = createMemoryRouter([{
            path: "/123",
            element: <div>test page</div>
        }, {
            path: "*",
            element: (
                <WithReactRouterProvider >
                    <Button href="/123">Go</Button>
                </WithReactRouterProvider>
            )
        }], {
            initialEntries: ["/"]
        });

        render(
            <RouterProvider router={router} />
        );

        const element = screen.getByRole("button");
        await userEvent.click(element);

        expect(screen.getByText("test page")).toBeInTheDocument();
    });

    // ***** Api *****
    it("should be focused on render when the focus api is called", async () => {
        const ref = createRef<HTMLButtonElement>();

        render(<Button ref={ref}>Cutoff</Button>);

        act(() => {
            ref.current?.focus();
        });

        await waitFor(() => expect(ref.current).toHaveFocus());
    });
});
