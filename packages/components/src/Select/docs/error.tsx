import { Select, Label, ErrorMessage } from "@hopper-ui/components";

const fieldChildren = (
    <>
        <Label>Animals</Label>
        <ErrorMessage>This field is required</ErrorMessage>
    </>
);

export default function Example() {
    return (
        <Select 
            fieldChildren={fieldChildren}
            isInvalid
        >
            <Select.Option id="dog">Dog</Select.Option>
            <Select.Option id="cat">Cat</Select.Option>
            <Select.Option id="frog">Frog</Select.Option>
        </Select>
    );
}
