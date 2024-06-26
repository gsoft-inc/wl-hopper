import { Button, Inline, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Inline>
            <Button isFluid variant="primary">Save</Button>
            <Button isFluid variant="primary">
                <SparklesIcon />
                <Text>Save</Text>
            </Button>
            <Button isFluid>
                <Text>Save</Text>
                <SparklesIcon slot="end-icon" />
            </Button>
        </Inline>
    );
}
