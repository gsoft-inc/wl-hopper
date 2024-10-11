import { Inline, LinkButton, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Inline>
            <LinkButton href="https://www.google.com" size="md" aria-label="Clean" variant="secondary">
                <SparklesIcon key="1" />
                <Text key="2">Save</Text>
            </LinkButton>
            <LinkButton href="https://www.google.com" size="sm" aria-label="Clean" variant="secondary">
                <SparklesIcon key="1" />
                <Text key="2">Save</Text>
            </LinkButton>
        </Inline>
    );
}
