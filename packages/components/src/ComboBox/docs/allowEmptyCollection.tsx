import { ComboBox, ComboBoxOptions, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <ComboBox
            allowsEmptyCollection
            aria-label="pets"
        >
            <Label>Roles</Label>
            <ComboBoxOptions>
                {[]}
            </ComboBoxOptions>
        </ComboBox>
    );
}
