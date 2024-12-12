import { Inline, LinkButton, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Inline>
            <LinkButton href="https://www.google.com" aria-label="Clean" variant="secondary">
                <SparklesIcon />
                <Text>Help</Text>
            </LinkButton>
            <LinkButton href="https://www.google.com" size="sm" aria-label="Clean" variant="secondary">
                <SparklesIcon />
                <Text>Help</Text>
            </LinkButton>
        </Inline>
    );
}
