import { ComboBox, IconList, Label, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ComboBox fieldChildren={<Label>Roles</Label>}>
            <ComboBox.Option textValue="Designer">
                <Text slot="label">Designer</Text>
                <IconList slot="end-icon">
                    <SparklesIcon /><SparklesIcon /><SparklesIcon />
                </IconList>
            </ComboBox.Option>
            <ComboBox.Option textValue="Developer">
                <SparklesIcon slot="end-icon" /><Text slot="label">Developer</Text>
            </ComboBox.Option>
            <ComboBox.Option>Manager</ComboBox.Option>
        </ComboBox>
    );
}
