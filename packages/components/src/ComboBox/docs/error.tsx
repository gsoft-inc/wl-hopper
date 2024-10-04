import { ComboBox, ComboBoxOption, ComboBoxOptions, ErrorMessage, Label } from "@hopper-ui/components";

export default function Example() {
    const fieldChildren = (
        <>
            <Label>Roles</Label>
            <ErrorMessage>This field is required</ErrorMessage>
        </>
    );

    return (
        <ComboBox isInvalid>
            {fieldChildren}
            <ComboBoxOptions>
                <ComboBoxOption id="designer">Designer</ComboBoxOption>
                <ComboBoxOption id="developer">Developer</ComboBoxOption>
                <ComboBoxOption id="manager">Manager</ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
    );
}
