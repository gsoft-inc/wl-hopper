import { Inline, LinkButton } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline>
            <LinkButton href="https://www.google.com" variant="primary">Save</LinkButton>
            <LinkButton href="https://www.google.com" variant="secondary">Save</LinkButton>
            <LinkButton href="https://www.google.com" variant="upsell">Save</LinkButton>
            <LinkButton href="https://www.google.com" variant="danger">Save</LinkButton>
            <LinkButton href="https://www.google.com" variant="ghost-primary">Save</LinkButton>
            <LinkButton href="https://www.google.com" variant="ghost-secondary">Save</LinkButton>
            <LinkButton href="https://www.google.com" variant="ghost-danger">Save</LinkButton>
        </Inline>
    );
}
