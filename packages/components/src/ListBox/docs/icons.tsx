import { IconList, ListBox, ListBoxItem, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ListBox selectionMode="single" aria-label="list of options">
            <ListBoxItem textValue="Developer">
                <Text slot="label">Developer</Text>
                <IconList>
                    <SparklesIcon /><SparklesIcon /><SparklesIcon />
                </IconList>
            </ListBoxItem>
            <ListBoxItem textValue="Designer">
                <SparklesIcon /><Text slot="label">Designer</Text>
            </ListBoxItem>
            <ListBoxItem>Manager</ListBoxItem>
        </ListBox>
    );
}
