import { Link, Text } from "@hopper-ui/components";
import { NewTabIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Link href="#" isExternal>
            <Text>Learn more</Text>
            <NewTabIcon />
        </Link>
    );
}
