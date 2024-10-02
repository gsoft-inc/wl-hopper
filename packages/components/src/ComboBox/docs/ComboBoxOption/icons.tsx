import { ComboBox, IconList, Label, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ComboBox fieldChildren={<Label>Roles</Label>}>
            <ComboBox.Option textValue="Developer">
                <Text slot="label">Developer</Text>
                <IconList>
                    <SparklesIcon /><SparklesIcon /><SparklesIcon />
                </IconList>
            </ComboBox.Option>
            <ComboBox.Option textValue="Designer">
                <SparklesIcon /><Text slot="label">Designer</Text>
            </ComboBox.Option>
            <ComboBox.Option>Manager</ComboBox.Option>
        </ComboBox>
    );
}
