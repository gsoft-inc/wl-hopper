import { Link, Text, Inline } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Inline>
            <Link variant="primary" href="#">
                <Text>Primary link</Text>
                <SparklesIcon />
            </Link>
            <Link variant="secondary" href="#">
                <Text>Secondary link</Text>
                <SparklesIcon />
            </Link>
        </Inline>
    );
}
