import { ComboBox, ComboBoxOption, ComboBoxOptions, IconList, Label, Text } from "@hopper-ui/components";
import { SparklesIcon } from "@hopper-ui/icons";

export default function Example() {
    return (
        <ComboBox>
            <Label>Roles</Label>
            <ComboBoxOptions>
                <ComboBoxOption textValue="Designer">
                    <Text slot="label">Designer</Text>
                    <IconList slot="end-icon">
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </ComboBoxOption>
                <ComboBoxOption textValue="Developer">
                    <SparklesIcon slot="end-icon" /><Text slot="label">Developer</Text>
                </ComboBoxOption>
                <ComboBoxOption>Manager</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    );
}
