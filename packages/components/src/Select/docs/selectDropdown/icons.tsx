import { IconList, Select, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <Select.Option textValue="Designer">
                <Text slot="label">Designer</Text>
                <IconList>
                    <SparklesIcon /><SparklesIcon /><SparklesIcon />
                </IconList>
            </Select.Option>
            <Select.Option textValue="Developer">
                <SparklesIcon /><Text slot="label">Developer</Text>
            </Select.Option>
            <Select.Option>Manager</Select.Option>
        </Select>
    );
}
