import { LinkButton, Text } from "@hopper-ui/components";
import { NewTabIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <LinkButton href="https://www.google.com" target="_blank" rel="noopener noreferrer" >
            <Text>Learn more</Text>
            <NewTabIcon />
        </LinkButton>
    );
}
