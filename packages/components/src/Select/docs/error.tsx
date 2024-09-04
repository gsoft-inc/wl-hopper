import { Select, Label, ErrorMessage } from "@hopper-ui/components";

export default function Example() {
    return (
        <Select 
            fieldChildren={
                <>
                    <Label>Animals</Label>
                    <ErrorMessage>This field is required</ErrorMessage>
                </>
            }
            isInvalid
        >
            <Select.Option id="dog">Dog</Select.Option>
            <Select.Option id="cat">Cat</Select.Option>
            <Select.Option id="frog">Frog</Select.Option>
        </Select>
    );
}
