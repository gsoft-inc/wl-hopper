import { Link, Inline } from "@hopper-ui/components";

export default function Example() {
    return (
        <Inline>
            <Link isDisabled variant="primary" href="#">Primary link</Link>
            <Link isDisabled variant="secondary" href="#">Secondary link</Link>
        </Inline>
    );
}
