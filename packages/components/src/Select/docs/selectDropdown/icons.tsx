import { IconList, Select, SelectItem, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <Select aria-label="list of options">
            <SelectItem textValue="Designer">
                <Text slot="label">Designer</Text>
                <IconList>
                    <SparklesIcon /><SparklesIcon /><SparklesIcon />
                </IconList>
            </SelectItem>
            <SelectItem textValue="Developer">
                <SparklesIcon />
                <Text slot="label">Developer</Text>
            </SelectItem>
            <SelectItem>Manager</SelectItem>
        </Select>
    );
}
