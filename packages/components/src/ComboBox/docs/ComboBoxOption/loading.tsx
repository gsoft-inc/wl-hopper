import { ComboBox, ComboBoxOptions, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox>
            <Label>Roles</Label>
            <ComboBoxOptions listBoxProps={{ isLoading: true }}>
                {[]}
            </ComboBoxOptions>
        </ComboBox>
    );
}
