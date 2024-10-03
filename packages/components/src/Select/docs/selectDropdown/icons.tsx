import { IconList, Select, SelectOption, SelectOptions, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <SelectOptions>
                <SelectOption textValue="Designer">
                    <Text slot="label">Designer</Text>
                    <IconList>
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </SelectOption>
                <SelectOption textValue="Developer">
                    <SparklesIcon /><Text slot="label">Developer</Text>
                </SelectOption>
                <SelectOption>Manager</SelectOption>
            </SelectOptions>
        </Select>
    );
}
