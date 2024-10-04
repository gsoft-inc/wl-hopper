import { IconList, Select, SelectOption, SelectOptions, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <SelectOptions>
                <SelectOption textValue="Designer">
                    <Text slot="label">Designer</Text>
                    <IconList slot="end-icon">
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </SelectOption>
                <SelectOption textValue="Developer">
                    <SparklesIcon slot="end-icon" /><Text slot="label">Developer</Text>
                </SelectOption>
                <SelectOption>Manager</SelectOption>
            </SelectOptions>
        </Select>
    );
}
