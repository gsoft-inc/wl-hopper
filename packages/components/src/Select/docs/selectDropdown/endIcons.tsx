import { IconList, Select, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <Select.Option textValue="Designer">
                <Text slot="label">Designer</Text>
                <IconList slot="end-icon">
                    <SparklesIcon /><SparklesIcon /><SparklesIcon />
                </IconList>
            </Select.Option>
            <Select.Option textValue="Developer">
                <SparklesIcon slot="end-icon" /><Text slot="label">Developer</Text>
            </Select.Option>
            <Select.Option>Manager</Select.Option>
        </Select>
    );
}
