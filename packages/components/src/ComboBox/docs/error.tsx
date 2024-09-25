import { ComboBox, ErrorMessage, Label } from "@hopper-ui/components";

export default function Example() {
    const fieldChildren = (
        <>
            <Label>Animals</Label>
            <ErrorMessage>This field is required</ErrorMessage>
        </>
    );

    return (
        <ComboBox
            fieldChildren={fieldChildren}
            isInvalid
        >
            <ComboBox.Option id="dog">Dog</ComboBox.Option>
            <ComboBox.Option id="cat">Cat</ComboBox.Option>
            <ComboBox.Option id="frog">Frog</ComboBox.Option>
        </ComboBox>
    );
}
