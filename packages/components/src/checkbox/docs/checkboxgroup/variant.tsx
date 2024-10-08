import { Checkbox, CheckboxGroup, CheckboxList, Label } from "@hopper-ui/components";

export default function Example() {
    return (
        <CheckboxGroup variant="bordered">
            <Label>Roles</Label>
            <CheckboxList>
                <Checkbox value="developer">Developer</Checkbox>
                <Checkbox value="designer">Designer</Checkbox>
            </CheckboxList>
        </CheckboxGroup>
    );
}
