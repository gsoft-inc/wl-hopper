import { ComboBox, ComboBoxOption, ComboBoxOptions, IconList, Label, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ComboBox>
            <Label>Roles</Label>
            <ComboBoxOptions>
                <ComboBoxOption textValue="Developer">
                    <Text slot="label">Developer</Text>
                    <IconList>
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </ComboBoxOption>
                <ComboBoxOption textValue="Designer">
                    <SparklesIcon /><Text slot="label">Designer</Text>
                </ComboBoxOption>
                <ComboBoxOption>Manager</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    );
}
