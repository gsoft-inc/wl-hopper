import { Inline, LinkButton } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline>
            <LinkButton href="https://www.google.com" size="md" variant="primary">Save</LinkButton>
            <LinkButton href="https://www.google.com" size="sm" variant="primary">Save</LinkButton>
        </Inline>
    );
}
