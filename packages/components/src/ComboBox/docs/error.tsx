import { ComboBox, ErrorMessage, Label } from "@hopper-ui/components";

export default function Example() {
    const fieldChildren = (
        <>
            <Label>Roles</Label>
            <ErrorMessage>This field is required</ErrorMessage>
        </>
    );

    return (
        <ComboBox
            fieldChildren={fieldChildren}
            isInvalid
        >
            <ComboBox.Option id="designer">Designer</ComboBox.Option>
            <ComboBox.Option id="developer">Developer</ComboBox.Option>
            <ComboBox.Option id="manager">Manager</ComboBox.Option>
        </ComboBox>
    );
}
