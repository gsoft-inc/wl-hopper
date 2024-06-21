import { fireEvent, render, screen } from "@hopper-ui/test-utils";
import { createRef } from "react";

import { Avatar } from "../../src/Avatar.tsx";
import { AvatarContext } from "../../src/AvatarContext.ts";
import { AnonymousAvatar, DeletedAvatar } from "../../src/index.ts";

describe("Avatar", () => {
    it("should render with default class", () => {
        render(<Avatar name="John Doe" />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveClass("hop-Avatar");
    });

    it("should support custom class", () => {
        render(<Avatar name="John Doe" className="test" />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveClass("hop-Avatar");
        expect(element).toHaveClass("test");
    });

    it("should support custom style", () => {
        render(<Avatar name="John Doe" marginTop="stack-sm" style={{ marginBottom: "13px" }} />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveStyle({ marginTop: "var(--hop-space-stack-sm)", marginBottom: "13px" });
    });

    it("should support DOM props", () => {
        render(<Avatar name="John Doe" data-foo="bar" />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <AvatarContext.Provider value={{ slots: { test: { "aria-label": "test", "name": "test" } } }}>
                <Avatar name="John Doe" slot="test" />
            </AvatarContext.Provider>
        );

        const element = screen.getByRole("img", { name: "test" });
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should apply default displayName", () => {
        expect(Avatar.displayName).toBe("Avatar");
    });

    it("should have the provided aria-label if provided", async () => {
        render(
            <Avatar name="Elon Musk" aria-label="Maye Musk" />
        );
    
        expect(await screen.findByLabelText("Maye Musk")).not.toBeNull();
    });
    
    it("should have the name as the aria-label in no aria-label is provided", async () => {
        render(
            <Avatar name="Elon Musk" />
        );
    
        expect(await screen.findByLabelText("Elon Musk")).not.toBeNull();
    });
    
    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<Avatar name="John Doe" ref={ref} />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(ref.current).toBe(element);
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
        expect(ref.current?.tagName.toUpperCase()).toBe("DIV");
    });
    
    it("should load broken image when src fails amd support refs", () => {
        const ref = createRef<HTMLDivElement>();
        
        const src = "https://example.com/image.jpg";
        const name = "John Doe";
        render(<Avatar name={name} src={src} ref={ref} />);

        const imageElem = screen.getByAltText("");
        fireEvent.error(imageElem);
        
        const brokenImage = screen.getByRole("img", { name: "John Doe" });

        expect(ref.current).toBe(brokenImage);
        expect(ref.current).toHaveClass("hop-Avatar--broken-image");
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
        expect(ref.current?.tagName.toUpperCase()).toBe("DIV");
    });

    it("should render fallback image", () => {
        const src = "https://example.com/image.jpg";
        const fallbackSrc = "https://i.pravatar.cc/96?img=2";
        render(<Avatar name="John Doe" src={src} fallbackSrc={fallbackSrc} />);

        const imageElem = screen.getByAltText("");
        fireEvent.error(imageElem);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveClass("hop-Avatar--image");
        expect(imageElem).toHaveAttribute("src", fallbackSrc);
    });

    it("should render broken image if src and fallback src fail", () => {
        const src = "https://example.com/image.jpg";
        const fallbackSrc = "https://example.com/image2.jpg";
        render(<Avatar name="John Doe" src={src} fallbackSrc={fallbackSrc} />);

        const imageElem = screen.getByAltText("");

        /* Call error event twice to signify that the fallback also failed */
        fireEvent.error(imageElem);
        fireEvent.error(imageElem);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(imageElem).not.toBeInTheDocument();
        expect(element).toHaveClass("hop-Avatar--broken-image");
    });

    it("should render the correct initials when no src is set", () => {
        const initials = "JD";
        render(<Avatar name="John Doe" />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveTextContent(initials);
    });

    it("should render only one initial when the Avatar size is xs", () => {
        const initials = "J";
        render(<Avatar name="John Doe" size="xs" />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveTextContent(initials);
    });

    it("should render initials when the image fails to load an the fallback is set to null", () => {
        const initials = "JD";
        render(<Avatar name="John Doe" src="https://example.com/image.jpg" fallbackSrc={null} />);

        const imageElem = screen.getByAltText("");
        fireEvent.error(imageElem);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveTextContent(initials);
    });

    it("should add data-disabled when isDisabled is true", () => {
        render(<Avatar name="John Doe" isDisabled />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveAttribute("data-disabled");
    });

    it("should render the AnonymousAvatar", () => {
        render(<AnonymousAvatar aria-label="John Doe" />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveClass("hop-AnonymousAvatar");
    });

    it("should render the DeletedAvatar", () => {
        render(<DeletedAvatar aria-label="John Doe" />);

        const element = screen.getByRole("img", { name: "John Doe" });

        expect(element).toHaveClass("hop-DeletedAvatar");
    });
});