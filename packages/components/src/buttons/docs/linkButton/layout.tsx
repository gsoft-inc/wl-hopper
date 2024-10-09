import { Inline, LinkButton, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Inline>
            <LinkButton href="https://www.google.com" isFluid variant="primary">Save</LinkButton>
            <LinkButton href="https://www.google.com" isFluid variant="primary">
                <SparklesIcon />
                <Text>Save</Text>
            </LinkButton>
            <LinkButton href="https://www.google.com" isFluid>
                <Text>Save</Text>
                <SparklesIcon slot="end-icon" />
            </LinkButton>
        </Inline>
    );
}
