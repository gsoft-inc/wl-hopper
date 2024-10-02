import { ErrorMessage, Label, Select } from "@hopper-ui/components";

const fieldChildren = (
    <>
        <Label>Roles</Label>
        <ErrorMessage>This field is required</ErrorMessage>
    </>
);

export default function Example() {
    return (
        <Select
            fieldChildren={fieldChildren}
            isInvalid
        >
            <Select.Option id="designer">Designer</Select.Option>
            <Select.Option id="developer">Developer</Select.Option>
            <Select.Option id="manager">Manager</Select.Option>
        </Select>
    );
}
