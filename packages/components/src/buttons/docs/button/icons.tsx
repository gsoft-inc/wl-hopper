import { Button, Inline, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Inline>
            <Button size="md" aria-label="Clean" variant="secondary">
                <SparklesIcon key="1" />
                <Text key="2">Save</Text>
            </Button>
            <Button size="sm" aria-label="Clean" variant="secondary">
                <SparklesIcon key="1" />
                <Text key="2">Save</Text>
            </Button>
        </Inline>
    );
}
