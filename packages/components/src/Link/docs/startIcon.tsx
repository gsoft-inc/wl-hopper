import { Link, Text, Inline } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Inline>
            <Link variant="primary" href="#">
                <SparklesIcon slot="start-icon" />
                <Text>Primary link</Text>
            </Link>
            <Link variant="secondary" href="#">
                <SparklesIcon slot="start-icon" />
                <Text>Secondary link</Text>
            </Link>
        </Inline>
    );
}
