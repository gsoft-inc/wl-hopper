import { Button, Inline } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Inline>
            <Button size="md" aria-label="Clean" variant="secondary">
                <SparklesIcon key="1" />
            </Button>
            <Button size="sm" aria-label="Clean" variant="secondary">
                <SparklesIcon key="1" />
            </Button>
        </Inline>
    );
}
